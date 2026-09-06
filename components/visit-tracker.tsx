"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Ghi nhận lượt xem trang của portfolio và gửi về API trên Raspberry Pi.
 *
 * Vì portfolio là static export (không có server), đây là cách duy nhất để biết
 * ai đã ghé thăm: beacon từ phía client. Cách này cũng tự động bỏ qua phần lớn
 * crawler vì chúng không chạy JavaScript.
 *
 * Nguyên tắc: mọi lỗi đều bị nuốt. Tracking hỏng thì trang vẫn phải chạy bình thường.
 */

// Production: portfolio và API cùng domain (Caddy proxy /api -> backend) nên dùng đường dẫn tương đối.
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "/api";

// Đặt NEXT_PUBLIC_TRACK_LOCALHOST=true khi muốn thử nghiệm tracking lúc chạy `next dev`.
const TRACK_LOCALHOST = process.env.NEXT_PUBLIC_TRACK_LOCALHOST === "true";

const VISITOR_KEY = "pf_visitor_id";
const SESSION_KEY = "pf_session_id";

function newId(): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
  } catch {
    // bỏ qua, dùng phương án dự phòng bên dưới
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * VisitorId nằm ở localStorage nên sống qua nhiều phiên -> đây chính là thứ trả lời
 * câu hỏi "khách này đã quay lại bao nhiêu lần", kể cả khi IP của họ đổi.
 * SessionId nằm ở sessionStorage nên reset khi đóng tab.
 */
function readOrCreate(storage: Storage | undefined, key: string): string | undefined {
  if (!storage) return undefined;

  try {
    const existing = storage.getItem(key);

    if (existing) return existing;

    const created = newId();

    storage.setItem(key, created);

    return created;
  } catch {
    // Trình duyệt chặn storage (chế độ ẩn danh / cấm cookie): vẫn track được,
    // server sẽ lùi về dùng IP làm định danh.
    return undefined;
  }
}

export function VisitTracker() {
  const pathname = usePathname();

  // Id của lượt xem hiện tại, dùng để gửi kèm thời gian ở lại lúc rời trang.
  const lastEventId = useRef<number | null>(null);
  const enteredAt = useRef<number>(Date.now());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isLocalhost =
      window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    if (isLocalhost && !TRACK_LOCALHOST) return;

    // Gửi thời gian ở lại của trang TRƯỚC ĐÓ (nếu có) khi điều hướng nội bộ.
    sendLeave();

    lastEventId.current = null;
    enteredAt.current = Date.now();

    const visitorId = readOrCreate(window.localStorage, VISITOR_KEY);
    const sessionId = readOrCreate(window.sessionStorage, SESSION_KEY);

    // Gửi kèm query string để server đọc được utm_source/utm_medium/utm_campaign.
    const path = `${window.location.pathname}${window.location.search}`;

    let cancelled = false;
    let sent = false;
    let titleTimer: ReturnType<typeof setTimeout> | undefined;

    const sendRecord = () => {
      if (sent) return;
      sent = true;

      if (titleTimer) clearTimeout(titleTimer);

      const payload = {
        path,
        title: document.title || null,
        referrer: document.referrer || null,
        locale: document.documentElement.lang || null,
        visitorId,
        sessionId,
        language: navigator.language,
        screenWidth: window.screen?.width,
        screenHeight: window.screen?.height,
        area: "Portfolio",
      };

      // keepalive: request vẫn được gửi đi kể cả khi người dùng rời trang ngay lập tức.
      fetch(`${API_BASE}/Visit/Record`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!cancelled && data && typeof data.id === "number" && data.id > 0) {
            lastEventId.current = data.id;
          }
        })
        .catch(() => {
          // Không log ra console: khách không cần thấy lỗi tracking của mình.
        });
    };

    /**
     * Next chèn <title> sau khi hydrate, nên ngay lúc effect chạy thì document.title
     * thường vẫn rỗng. Đợi tối đa 800ms cho tới khi có title rồi mới gửi.
     * Nếu khách rời trang trước đó thì cleanup/pagehide sẽ gửi ngay lập tức -
     * thà mất cái tiêu đề còn hơn mất luôn lượt truy cập.
     */
    const startedAt = Date.now();
    const waitForTitle = () => {
      if (sent) return;

      if (document.title || Date.now() - startedAt > 800) {
        sendRecord();
        return;
      }

      titleTimer = setTimeout(waitForTitle, 100);
    };

    waitForTitle();

    // pagehide đáng tin cậy hơn beforeunload/unload trên mobile Safari.
    const onPageHide = () => {
      sendRecord(); // đảm bảo lượt xem được ghi kể cả khi khách thoát ngay
      sendLeave();
    };

    window.addEventListener("pagehide", onPageHide);

    return () => {
      sendRecord(); // đổi route trước khi kịp lấy title -> vẫn phải ghi lượt xem
      cancelled = true;
      if (titleTimer) clearTimeout(titleTimer);
      window.removeEventListener("pagehide", onPageHide);
    };

    function sendLeave() {
      const id = lastEventId.current;

      if (!id) return;

      const durationMs = Date.now() - enteredAt.current;

      if (durationMs <= 0) return;

      try {
        const body = JSON.stringify({ id, durationMs });

        // sendBeacon sống sót qua việc đóng tab; fetch thường thì không.
        if (navigator.sendBeacon) {
          navigator.sendBeacon(
            `${API_BASE}/Visit/Leave`,
            new Blob([body], { type: "application/json" }),
          );
        } else {
          fetch(`${API_BASE}/Visit/Leave`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body,
            keepalive: true,
          }).catch(() => {});
        }
      } catch {
        // im lặng
      }

      lastEventId.current = null;
    }
    // Chạy lại mỗi khi đổi route: navbar dùng next/link nên chuyển trang KHÔNG reload document.
    // Nếu chỉ chạy lúc mount thì sẽ bỏ sót gần hết lượt điều hướng.
  }, [pathname]);

  return null;
}

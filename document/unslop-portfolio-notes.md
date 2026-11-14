# Unslop portfolio: đã làm và còn lại

Làm bằng skill `unslop`, chế độ đầy đủ, ngày 13/11/2026, chia hai lượt:
- **Lượt 1:** Trang chủ và trang Dự án.
- **Lượt 2:** Trang Giới thiệu, trang Liên hệ, dọn code, và sửa các lỗi toàn site phát hiện khi duyệt lại.

## Hướng thiết kế

- **Sản phẩm:** portfolio của một lập trình viên full-stack ở TP.HCM. Người xem cần thấy anh ấy làm ra gì và liên hệ được.
- **Tính cách:** thẳng thắn, tỉ mỉ, tự làm đến cùng.
- **Thế giới:** góc làm việc của người tự vận hành server (Raspberry Pi, terminal). Nền xám than (graphite). Màu nhấn duy nhất là xanh primary của HeroUI.
- **Điểm nhấn:**
  - Ảnh LifeHub thật trong hero và ảnh sản phẩm trên trang Dự án.
  - Ảnh chân dung và huy hiệu chứng chỉ Microsoft thật trên trang Giới thiệu.
- **Chi tiết riêng:** thông tin phụ (ngày tháng, mã chứng chỉ, chức danh) dùng chữ mono (JetBrains Mono). Footer có dòng "Tự host trên một chiếc Raspberry Pi".

## Quy ước màu chữ (quan trọng khi sửa tiếp)

| Vai trò | Lớp | Light | Dark |
|---|---|---|---|
| Chữ chính | `text-foreground` | 17,2:1 | 15,7:1 |
| Chữ phụ (đoạn văn) | `text-foreground-600` | 7,5:1 | 7,3:1 |
| Chữ mờ (nhãn, meta) | `text-foreground-500` | 5,1:1 | 5,3:1 |
| Chữ nhỏ màu nhấn (link, mục menu đang mở) | `text-primary-600` | 6,1:1 | 7,6:1 |

- Thang `foreground` 50–900 được khai báo đầy đủ trong `tailwind.config.js` cho cả hai theme.
- **Đừng thay thang này bằng một màu đơn.** Nếu làm vậy, mọi `text-foreground-500/600` sẽ lặng lẽ hiện bằng màu chữ chính. Lượt 1 đã mắc đúng lỗi này, sang lượt 2 mới sửa.
- Không dùng `text-primary` cho chữ nhỏ. Màu này chỉ đạt 4,5:1 ở light và 3,8:1 ở dark. Nút bấm thì vẫn dùng `color="primary"` bình thường.

## Đã làm

### Toàn site
- **Nền và font:**
  - Bỏ nền sao.
  - Font Be Vietnam Pro. Trước đây `font-sans` chưa được nối với biến của next/font, nên site thực ra đang hiện font của hệ điều hành.
  - Nền graphite qua theme HeroUI.
- **Màu chữ:** khôi phục thang màu `foreground` để có đủ 3 vai trò chữ (xem bảng trên).
- **Menu:**
  - Bỏ chữ gradient và icon xanh.
  - Sửa lỗi có từ trước: không mục nào được đánh dấu là trang hiện tại. Lý do: với `trailingSlash: true`, đường dẫn là `/vi/about/` còn link là `/vi/about`.
- **Footer:** bỏ "made with ♥", sửa lỗi `<a>` bọc `<button>`.
- **Bố cục trang:**
  - `main` chuyển sang flex column. `PageWrapper` dùng `flex-1` thay cho `min-h-screen`.
  - Trang ngắn (Liên hệ) không còn dải trống khoảng 400px trước footer.
- **Chuyển trang:** chỉ còn mờ dần trong 200ms.

### Trang chủ
- Bỏ hố đen neon, quầng sáng quanh ảnh đại diện, chữ gradient, chữ in hoa giãn và hiệu ứng bay vào.
- Hero chia đôi: chữ bên trái, ảnh LifeHub trong khung cửa sổ bên phải.

### Trang Dự án
- Tiêu đề cố định. Trước đây tiêu đề tự đổi, có lúc chỉ hiện "tôi đã".
- Thẻ dự án dùng viền mảnh thay cho bóng, bỏ icon tròn.
- Bỏ lớp mờ dần ở chân ảnh. Khi ảnh và thẻ khác độ sáng, lớp này tạo thành dải xám đục: ảnh LifeHub nền sáng trên theme dark, hoặc ảnh portfolio nền tối trên theme light. Giờ ảnh kết thúc bằng một đường viền mảnh.

### Trang Giới thiệu
- **Tiêu đề:** bỏ tiêu đề tự đổi chữ (lúc chuyển chữ còn làm mất dấu tiếng Việt). Tên là `h1`. Trước đây trang không có `h1`.
- **Phần mở đầu:** ảnh chân dung bên trái, tên và dòng mono "Lập trình viên full-stack · TP. Hồ Chí Minh, Việt Nam" bên phải.
- **Văn bản:**
  - Bỏ hiệu ứng hiện chữ từng từ. Hiệu ứng này làm trang tràn ngang 20px trên điện thoại và để chữ mờ dở dang khi chụp.
  - Bỏ hiệu ứng tô sáng tên.
- **Bố cục mục:** tên mục nằm ở cột trái 200px, giống CV. Giữa các mục có đường kẻ mảnh. Bỏ chữ xanh đậm 700 và icon tròn.
- **Mốc thời gian:**
  - Đường nối mảnh màu xám, chỉ nối giữa các logo.
  - Ngày tháng dùng chữ mono.
  - Sửa thẻ `h4` thành `h3` cho đúng cấp tiêu đề.
- **Chứng chỉ:** chuyển từ lưới 2×2 sang danh sách một cột, gồm huy hiệu, mã đề thi dạng mono, tên, ngày cấp và link xác minh. Bỏ các chip xanh.
- **Kỹ năng:** bỏ vòng quỹ đạo icon (khoảng 300px mỗi nhóm) và accordion luôn mở sẵn. Còn lại danh sách 4 nhóm cách nhau bằng đường kẻ.
- **Code:** thay `text-muted-foreground` (lớp không tồn tại trong HeroUI) bằng các lớp màu ở bảng trên.

### Trang Liên hệ
- **Tiêu đề:** tiêu đề cố định "Liên hệ với tôi" / "Get in touch". Trước đây `h1` lại chính là đoạn mô tả dài, cỡ 16px.
- **Bố cục:** chia đôi như hero. Bên trái là tiêu đề, mô tả và nút email. Bên phải là một thẻ liệt kê các kênh liên hệ, ngăn bằng đường kẻ mảnh.
- **Chi tiết:**
  - Icon dùng màu chữ mờ, bỏ nền tròn xanh. Nút không còn phát sáng.
  - Thẻ ở dark mode trước đây tối hơn cả nền trang, nay đã sửa.
- **Lỗi hiển thị:** email bị ngắt giữa chữ trên điện thoại (`break-all`), đổi sang `break-words`.
- **Sai dữ liệu:** tên GitHub hiển thị là `phong-pham-thanh`, nhưng link lại mở `github.com/ptp-phamphong`. Đã sửa thành `ptp-phamphong` trong `data/site.ts`.

### Từ điển vi/en
- `contact.heading` giờ là tiêu đề ngắn. Đoạn mô tả chuyển sang key mới `contact.description`.
- Bỏ `morphingTexts`.
- Viết hoa theo kiểu câu: "Lập trình viên full-stack", "Full-stack developer", "Research assistant", "AI tools"…
- Sửa câu sai ngữ pháp tiếng Anh "Some courses I learn" thành "Courses included".
- Thống nhất "chuẩn hóa".
- Bỏ dấu chấm cuối ở các câu mô tả ngắn một câu.

### Dọn code
- **Đã xóa:**
  - `components/backgrounds/`, `components/textAnimations/`.
  - `motion-effect.tsx`, `orbiting-circles.tsx`, `page-header.tsx`.
  - `about/profile-card.tsx`, `about/section-header.tsx`, `about/timelines/`, `about/variants.ts`, `about/types.ts`.
  - `contact/contact-card.tsx`, `lib/utils.ts`.
- **CSS và Tailwind:**
  - `globals.css` chỉ còn 3 dòng `@tailwind`. Biến `--brand-*` và `.text-brand-gradient` đã xóa.
  - `tailwind.config.js` đã xóa keyframes `orbit` và `gradient`, cùng breakpoint `mdplus`.

## Còn lại

### Phụ thuộc
- [ ] **`@shadergradient/react` không còn chỗ nào import, nhưng tôi chưa gỡ.**
  - Lý do: chạy `npm uninstall` bằng npm 11.19 làm `package-lock.json` thay đổi gần 1.700 dòng không liên quan. npm đã tính lại toàn bộ cây phụ thuộc và thêm binary cho nhiều nền tảng.
  - Tôi đã trả `package.json` và `package-lock.json` về đúng như cũ.
  - Lệnh đó đã xóa gói này khỏi `node_modules`. Build không ảnh hưởng vì không file nào import nó. Lần `npm install` tới sẽ cài lại.
  - Nếu muốn gỡ, nên làm thành một commit riêng và chấp nhận lockfile mới.
- [ ] `@vercel/analytics` và `@vercel/speed-insights` cũng không có chỗ nào import. Site chạy trên Pi, không chạy trên Vercel. Có thể gỡ cùng lúc.

### Dữ liệu
- [ ] Trường `icon` trong các mục học vấn và kinh nghiệm (`mdi:school`…) không còn được dùng ở đâu. Có thể xóa khỏi `TimelineEntry` và hai từ điển.

### Nội dung
- [ ] Chụp lại `public/projects/lifehub.png` sau khi deploy bản sửa trang Phân tích của LifeHub. Ảnh hiện tại là giao diện cũ, còn nhãn in hoa. Ảnh này hiện ở cả hero trang chủ lẫn trang Dự án.
- [ ] Nếu sau này đổi hero, nhớ chụp lại `public/projects/portfolio.jpg`.

### Deploy
- [ ] Chưa deploy. Chạy `.\deploy.ps1 portfolio` từ `D:\Rasberry_PI` khi đã duyệt.

## Đã kiểm tra

- `next build` qua. ESLint không có lỗi; còn 1 cảnh báo có sẵn ở `visit-tracker.tsx`.
- Đã chụp ảnh từ bản build tĩnh: 4 trang × vi/en × dark/light ở 1440px, cộng 8 ảnh 390px.
- Kết quả trên mọi ảnh:
  - Không tràn ngang, không lỗi console.
  - Không còn chữ in hoa giãn, chữ gradient, canvas, bóng đổ trong nội dung, hay chữ mờ dở dang.
  - Weight chữ chỉ còn 400/500. Nhãn ngôn ngữ "VI/EN" trước đây đậm 600, nay đã hạ xuống 500.
- Độ tương phản đo trực tiếp trong trình duyệt, số liệu ở bảng phía trên.
- Ảnh: `temp_running_process/unslop-pages2/` (`before/`, `final/`).

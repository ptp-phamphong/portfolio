import { Dictionary } from "@/data/types";

export const vi: Dictionary = {
  languageName: "Tiếng Việt",
  languageShort: "VI",

  nav: {
    home: "Trang chủ",
    about: "Giới thiệu",
    projects: "Dự án",
    contact: "Liên hệ",
  },

  home: {
    hero: {
      greeting: "Xin chào, tôi là",
      title: "Lập trình viên Full-stack",
      headline: "Tôi xây dựng ứng dụng web từ ý tưởng đến thực tế.",
      subtitle:
        "Tôi có nền tảng ở cả Khoa học Máy tính lẫn Hệ thống Thông tin Quản lý. Với mỗi tính năng, tôi theo từ buổi họp yêu cầu đầu tiên đến khi đưa vào sử dụng thật.",
      primaryAction: "Liên hệ với tôi",
      secondaryAction: "Về tôi",
    },
    focus: {
      sectionTitle: "Tôi làm gì",
      sectionDescription: "Cách tôi làm việc trong một dự án phần mềm.",
      items: [
        {
          title: "Phát triển full-stack",
          icon: "lucide:layers",
          description:
            "Angular và React ở tầng giao diện, C# và .NET ở tầng xử lý, SQL Server ở tầng dữ liệu. Tôi làm mỗi tính năng qua đủ các tầng này, từ thiết kế đến phát hành.",
        },
        {
          title: "Phân tích yêu cầu và tư duy sản phẩm",
          icon: "lucide:clipboard-list",
          description:
            "Nền tảng Hệ thống Thông tin Quản lý giúp tôi làm việc với các bên liên quan để chốt yêu cầu. Tôi muốn hiểu vì sao cần hệ thống trước khi quyết định xây nó thế nào.",
        },
        {
          title: "Lập trình cùng AI",
          icon: "lucide:sparkles",
          description:
            "Tôi dùng Claude, Codex và GitHub Copilot mỗi ngày. Ở công ty, tôi xây dựng skill và agent riêng cho Copilot để tự động hóa các việc lặp lại. Tôi cũng có chứng chỉ Microsoft về thiết kế AI agent.",
        },
        {
          title: "Chủ động giải quyết vấn đề",
          icon: "lucide:compass",
          description:
            "Tôi nắm bắt công cụ mới nhanh và tự tìm hiểu vấn đề đến khi có cách xử lý mà tôi tin được. LifeHub là một ví dụ: tôi tự dựng và vận hành toàn bộ hệ thống trên một chiếc Raspberry Pi, gồm HTTPS, sao lưu dữ liệu và một bản demo chạy trong môi trường cách ly.",
        },
      ],
    },
    cta: {
      title: "Cùng hợp tác",
      description:
        "Nếu bạn đang có một dự án hoặc một vấn đề kỹ thuật, tôi rất sẵn lòng cùng trao đổi.",
      buttonLabel: "Gửi email cho tôi",
    },
  },

  about: {
    profileTitle: "Lập trình viên Full-stack",
    description: [
      "Tôi đang là lập trình viên full-stack ở Precio Fishbone, làm việc trên một nền tảng quản lý NGO phục vụ các tổ chức quốc tế ở nhiều nước châu Âu. Bộ công nghệ chính của tôi gồm Angular và React ở tầng giao diện, C# và .NET ở tầng xử lý, cùng SQL Server và các cơ sở dữ liệu quan hệ khác ở tầng dữ liệu.",
      "Nền tảng của tôi gồm cả Khoa học Máy tính lẫn Hệ thống Thông tin Quản lý. Vì vậy, ngoài chuyện hệ thống được xây thế nào, tôi còn quan tâm nó cần làm gì và vì sao. Tôi làm việc cùng các bên liên quan ngay từ lúc còn đang xác định yêu cầu, và nêu những điểm chưa rõ từ sớm, khi thay đổi vẫn còn ít tốn công.",
      "Tôi thích tự mày mò những bài toán mới. Gần đây, phần lớn thời gian đó tôi dành cho AI. Tôi dùng Claude, Codex và GitHub Copilot trong công việc hằng ngày, và để ý xem chúng giúp tiết kiệm thời gian ở đâu và như thế nào. Năm 2026, tôi cũng đạt các chứng chỉ Microsoft về thiết kế AI agent.",
    ],
    sections: {
      education: "Học vấn",
      certifications: "Chứng chỉ",
      experience: "Kinh nghiệm",
      skills: "Kỹ năng",
    },
    certifications: {
      description:
        "Các chứng chỉ Microsoft về thiết kế giải pháp Power Platform, phân tích yêu cầu nghiệp vụ, xây dựng AI agent trên Copilot Studio và kiến trúc giải pháp agentic AI.",
      issuer: "Microsoft",
      earned: "Ngày cấp",
      verify: "Xác minh chứng chỉ",
    },
    education: [
      {
        title: "Trường Đại học Bách khoa TP.HCM (HCMUT)",
        date: "2020 – 2024",
        icon: "mdi:school",
        logo: "/logos/hcmut.png",
        description:
          "Ngành Khoa học Máy tính. Những môn tôi được tiếp cận: cấu trúc dữ liệu, giải thuật, công nghệ phần mềm và cơ sở dữ liệu.",
      },
      {
        title: "Trường Đại học Kinh tế TP.HCM (UEH)",
        date: "Từ 2026",
        icon: "mdi:school-outline",
        logo: "/logos/ueh.png",
        description:
          "Chương trình thạc sĩ Hệ thống Thông tin Quản lý, ngành học về cách biến yêu cầu nghiệp vụ thành phần mềm chạy được.",
      },
    ],
    experience: [
      {
        title: "Lập trình viên Full-stack · Precio Fishbone",
        date: "06/2023 – Nay",
        icon: "mdi:briefcase",
        logo: "/logos/precio-fishbone.svg",
        description:
          "Làm việc trên nền tảng quản lý NGO phục vụ các tổ chức quốc tế ở nhiều nước châu Âu. Phát triển các module lõi bằng Angular, .NET và SharePoint, và thường xuyên nâng cấp lên phiên bản Angular và .NET mới nhất. Tùy biến sản phẩm theo yêu cầu riêng của từng khách hàng, xử lý sự cố trên môi trường của khách hàng, và vận hành CI/CD cùng các đợt phát hành trên Azure DevOps. Ngoài ra, xây dựng skill và agent riêng cho GitHub Copilot để tự động hóa các việc lặp lại trong quá trình phát triển.",
      },
      {
        title: "Trợ lý nghiên cứu · IAS Lab, ĐH Bách khoa TP.HCM",
        date: "01/2022 – 09/2022",
        icon: "mdi:brain",
        logo: "/logos/iaslab.png",
        description:
          "Nghiên cứu mô hình mạng nơ-ron tích chập (CNN) cho bài toán nhận diện cảm xúc khuôn mặt tại Trường Đại học Bách khoa – ĐHQG-HCM. Tiền xử lý và chuẩn hoá tập dữ liệu FER2013, thử nghiệm các framework và kỹ thuật học sâu để cải thiện độ chính xác của mô hình. Đồng tác giả một bài báo có bình duyệt, do Springer xuất bản năm 2023.",
        linkLabel: "Bài báo đã xuất bản (Springer, 2023)",
      },
      {
        title: "Chuyên viên tư vấn · 1Office",
        date: "03/2021 – 01/2022",
        icon: "mdi:handshake-outline",
        logo: "/logos/1office.png",
        description:
          "Tư vấn phần mềm quản trị doanh nghiệp của 1Office. Nghe khách hàng kể về những vướng mắc vận hành hằng ngày giúp tôi hiểu yêu cầu phần mềm đến từ đâu.",
      },
    ],
    technologies: [
      {
        key: "frontend",
        label: "Front-end",
        description:
          "Giao diện dựng từ các component dùng lại được, có kiểu dữ liệu rõ ràng, hiển thị tốt trên cả điện thoại lẫn máy tính.",
      },
      {
        key: "backend",
        label: "Back-end",
        description: "API, service và phần xử lý nghiệp vụ phía sau giao diện.",
      },
      {
        key: "databases",
        label: "Cơ sở dữ liệu",
        description:
          "Thiết kế và truy vấn cơ sở dữ liệu quan hệ cho các ứng dụng này.",
      },
      {
        key: "ai",
        label: "Công cụ AI",
        description:
          "Công cụ tôi dùng hằng ngày trong công việc, và là lĩnh vực tôi vẫn tự học thêm ngoài giờ.",
      },
    ],
  },

  projects: {
    heading: "Những sản phẩm tôi đã làm",
    description:
      "Một vài dự án tôi tự làm từ lúc còn là repo trống đến khi thành trang web chạy thật. Bạn cứ mở ra xem thử.",
    labels: {
      demoAccount: "Tài khoản demo",
      username: "Tên đăng nhập",
      password: "Mật khẩu",
      visitDemo: "Mở bản demo",
      visitSite: "Xem trang web",
      viewCode: "Xem mã nguồn",
    },
    items: [
      {
        key: "lifehub",
        title: "LifeHub",
        description:
          "Ứng dụng cá nhân để theo dõi chi tiêu, thu nhập và lịch học. Tôi tự làm web app bằng Angular, app di động bằng Expo và API bằng ASP.NET Core với MariaDB, rồi chạy tất cả trên một chiếc Raspberry Pi với tên miền riêng. Bản demo bên dưới chạy trong môi trường thử nghiệm tự khôi phục dữ liệu, nên bạn cứ đăng nhập và bấm thử.",
      },
      {
        key: "portfolio",
        title: "Portfolio",
        description:
          "Chính là trang bạn đang xem. Portfolio bằng tiếng Anh và tiếng Việt, làm bằng Next.js, xuất thành file tĩnh và chạy trên cùng chiếc Raspberry Pi với LifeHub. Trang có giao diện sáng và tối. Mỗi ngôn ngữ nằm trong một file riêng có khai báo kiểu, nên TypeScript sẽ báo lỗi nếu còn đoạn nào chưa dịch.",
      },
    ],
  },

  contact: {
    heading:
      "Tôi sẵn lòng trao đổi về dự án, cơ hội hợp tác hoặc các câu hỏi kỹ thuật. Bạn có thể liên hệ qua kênh nào thuận tiện nhất.",
    labels: {
      email: "Email",
      phone: "Điện thoại",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Địa điểm",
    },
    location: "TP. Hồ Chí Minh, Việt Nam",
    buttonLabel: "Gửi email cho tôi",
  },

  footer: {
    connectTitle: "Liên hệ với tôi",
    contactTitle: "Thông tin liên hệ",
    description:
      "Lập trình viên full-stack tại TP. Hồ Chí Minh. Tôi xây dựng ứng dụng web từ khâu yêu cầu đến khi phát hành.",
  },

  morphingTexts: {
    about: ["Tò mò", "Full-stack", "Lập trình"],
    projects: ["Sản phẩm", "tôi đã", "làm ra"],
    contact: ["Kết nối", "Trao đổi", "Hợp tác"],
  },
};

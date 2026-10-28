import { AEO_TRACKING_CODE, GA_ID, UMAMI_WEBSITE_ID } from "@/lib/analytics";
import { hotImage, site } from "../site";

export type LegalSection = { title: string; body: string };
export type LegalDocument = {
  path: "/terms" | "/privacy";
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  image: { src: string; alt: string };
  sections: readonly LegalSection[];
};

export const terms: LegalDocument = {
  path: "/terms",
  eyebrow: "THE HOT · THÔNG TIN ĐẶT BÀN",
  title: "Thông tin đặt bàn",
  updated: "12 tháng 10, 2026",
  intro: "Hẹn bàn và trao đổi yêu cầu trực tiếp với The Hot để nhà hàng xác nhận cuộc hẹn của bạn.",
  image: { src: hotImage("welcome.jpg"), alt: "Quầy phục vụ The Hot Beer Garden" },
  sections: [
    { title: "Địa chỉ và giờ mở cửa", body: `${site.address.display}. Giờ mở cửa: ${site.hours.display}.` },
    { title: "Cách đặt bàn", body: `Gọi ${site.phone} hoặc nhắn Facebook The Hot Beer Garden Đà Lạt. Cung cấp ngày, giờ, số khách và tên liên hệ để nhà hàng kiểm tra và xác nhận bàn.` },
    { title: "Thông tin trên website", body: "Biểu mẫu giúp bạn chuẩn bị và kiểm tra thông tin cuộc hẹn. Thông tin chưa tự động gửi đến nhà hàng; việc hoàn thành biểu mẫu chưa phải xác nhận đặt bàn." },
    { title: "Thay đổi cuộc hẹn", body: `Nếu muốn đổi giờ, số khách hoặc hủy cuộc hẹn, vui lòng gọi ${site.phone} hoặc nhắn lại Facebook để The Hot hỗ trợ.` },
    { title: "Nhóm đông và yêu cầu riêng", body: "Liên hệ trực tiếp nếu đi theo nhóm đông, tổ chức dịp đặc biệt hoặc có yêu cầu về món ăn và chỗ ngồi. Báo trước các dị ứng thực phẩm để trao đổi với nhà hàng." },
    { title: "Giá và ưu đãi", body: `Giá trong bộ ảnh menu tính bằng VNĐ và đã bao gồm VAT. ${site.beerOffer} Liên hệ The Hot để kiểm tra thực đơn và ưu đãi tại thời điểm ghé quán.` },
  ],
};

// Shown only in builds that load the Umami tracker (src/components/analytics/UmamiScript.tsx), so the page never
// describes a tool that is not running.
const umamiSection: LegalSection = {
  title: "Thống kê lượt truy cập",
  body: "Website dùng Umami để đếm lượt truy cập ẩn danh: trang được xem, nguồn truy cập (ví dụ Google, Facebook), loại thiết bị và trình duyệt, quốc gia và thành phố ước tính, cùng các lượt bấm nút liên hệ, đặt bàn hoặc xem sự kiện. Khi bạn hoàn tất biểu mẫu đặt bàn, chỉ số khách dự kiến được ghi lại, không kèm tên, số điện thoại hay ghi chú. Umami không dùng cookie. Địa chỉ IP chỉ được dùng tạm thời để ước tính vị trí và nhận ra các lượt xem từ cùng một thiết bị bằng một mã ẩn danh đổi mỗi tháng; IP không được lưu lại. Umami được cài trên máy chủ riêng của website, dữ liệu chỉ dùng để thống kê nội bộ và không dùng để nhận diện bạn.",
};

const aiTrafficSection: LegalSection = {
  title: "Lượt truy cập từ trợ lý AI",
  body: "Website dùng Ansvisor để đếm những lượt truy cập đến từ trợ lý AI như ChatGPT, Gemini hoặc Copilot. Chỉ những lượt bạn bấm vào từ câu trả lời của trợ lý AI mới được ghi lại: trang được xem, trợ lý AI đã dẫn bạn tới, loại trình duyệt, ngôn ngữ, kích thước màn hình và quốc gia ước tính. Lượt truy cập từ nguồn khác không được gửi đi. Ansvisor không dùng cookie và không lưu gì trong trình duyệt của bạn. Địa chỉ IP chỉ được dùng tạm thời để tạo một mã ẩn danh đổi mỗi ngày; IP không được lưu lại. Dữ liệu lưu trên dịch vụ cơ sở dữ liệu Supabase đặt tại Singapore và chỉ dùng để thống kê nội bộ.",
};

const googleAnalyticsSection: LegalSection = {
  title: "Google Analytics",
  body: "Website dùng Google Analytics để thống kê trang được xem, nguồn truy cập, loại thiết bị và các lượt bấm liên hệ hoặc đặt bàn. Công cụ này đặt các cookie bắt đầu bằng _ga trên trình duyệt để nhận ra các lượt truy cập từ cùng một thiết bị. Website tắt tính năng quảng cáo và theo dõi qua tài khoản Google (Google Signals), không gửi tên, số điện thoại hay nội dung bạn nhập trong biểu mẫu. Dữ liệu do Google xử lý theo chính sách quyền riêng tư của Google và được lưu giữ 14 tháng. Nếu không muốn bị thống kê, bạn có thể chặn cookie trong cài đặt trình duyệt hoặc cài tiện ích mở rộng Google Analytics Opt-out do Google cung cấp.",
};

export const privacy: LegalDocument = {
  path: "/privacy",
  eyebrow: "THE HOT · THÔNG TIN RIÊNG TƯ",
  title: "Bảo mật thông tin",
  updated: "28 tháng 10, 2026",
  intro: "Trang này giải thích cách thông tin bạn nhập và số liệu truy cập được sử dụng trong phiên bản website hiện tại.",
  image: { src: hotImage("night.jpg"), alt: "Không khí buổi tối ở The Hot" },
  sections: [
    { title: "Biểu mẫu chuẩn bị đặt bàn", body: "Thông tin nhập trong biểu mẫu được dùng để hiển thị bản kiểm tra cuộc hẹn ngay trên trang. Website hiện chưa gửi thông tin này đến nhà hàng, chưa lưu đặt bàn vào hệ thống và chưa gửi email xác nhận. Tải lại trang sẽ xóa nội dung biểu mẫu." },
    { title: "Liên hệ qua điện thoại và Facebook", body: "Bạn chủ động chia sẻ thông tin với The Hot khi gọi hotline hoặc nhắn Facebook. Khi truy cập Facebook, thông tin được xử lý theo chính sách của Facebook." },
    { title: "Thông tin thanh toán", body: "Biểu mẫu trên website không yêu cầu số thẻ hoặc thông tin thanh toán." },
    { title: "Cookie và lưu trữ trên trình duyệt", body: GA_ID ? "Ngoài các cookie do Google Analytics tạo để phục vụ thống kê (xem mục Google Analytics), website không lưu thông tin nào trong trình duyệt của bạn. Phần giới thiệu logo chạy lại mỗi lần tải trang, nội dung biểu mẫu chỉ nằm trên trang đang mở." : "Website không đặt cookie và không lưu thông tin nào trong trình duyệt của bạn. Phần giới thiệu logo chạy lại mỗi lần tải trang, nội dung biểu mẫu chỉ nằm trên trang đang mở." },
    ...(UMAMI_WEBSITE_ID ? [umamiSection] : []),
    ...(AEO_TRACKING_CODE ? [aiTrafficSection] : []),
    ...(GA_ID ? [googleAnalyticsSection] : []),
    { title: "Thống kê của Cloudflare", body: "Website được phân phối qua Cloudflare. Công cụ Cloudflare Web Analytics, do Cloudflare tự thêm vào trang, đếm lượt truy cập và đo tốc độ tải trang mà không dùng cookie. Dữ liệu này được Cloudflare xử lý theo chính sách quyền riêng tư của Cloudflare." },
    { title: "Hỗ trợ", body: `Nếu cần trao đổi về thông tin bạn đã cung cấp trực tiếp cho nhà hàng, liên hệ ${site.phone} hoặc Facebook The Hot Beer Garden Đà Lạt.` },
  ],
};

export type Review = {
  quote: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  source: "Google Maps" | "Facebook" | "TripAdvisor";
  month: string;
  href?: string;
};

export const homeReviews: readonly Review[] = [];

export const sampleReviews: readonly Review[] = [
  { quote: "Chữ mẫu: Ngồi ngoài trời mát, bia lạnh, ba chỉ nướng ngon. Nhân viên dọn bàn nhanh dù quán đông tối thứ Bảy.", author: "Minh T.", rating: 5, source: "Google Maps", month: "10/2026" },
  { quote: "Chữ mẫu: Hội 10 người đặt trước qua hotline, tới là có bàn dài. Combo 6 người đủ no, giá rõ ràng.", author: "Hà N.", rating: 5, source: "Facebook", month: "09/2026" },
  { quote: "Chữ mẫu: Tối thứ Sáu có nhạc, không khí vui mà vẫn nói chuyện được. Sẽ quay lại.", author: "Quân L.", rating: 4, source: "TripAdvisor", month: "10/2026" },
];

export const shownReviews: readonly Review[] =
  homeReviews.length > 0 ? homeReviews : process.env.NEXT_PUBLIC_SHOW_SAMPLE_REVIEWS === "1" ? sampleReviews : [];

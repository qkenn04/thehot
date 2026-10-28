# ADR 0011: GA4 không banner đồng ý trên thehot.vn

> Trạng thái: Đang áp dụng · Cập nhật: 2026-10-28 · Liên quan: [ADR 0007](0007-use-umami-and-consent-gated-ga4.md), [004 Analytics](../specs/004-analytics/)

## Trạng thái

Chấp nhận. ADR này thay quyết định 2 và 3 của ADR 0007.

## Ngày

- Quyết định: 2026-10-28
- Ghi lại: 2026-10-28
- Người quyết định: chủ repo (`qkenn04`), 2026-10-28; chủ quán chưa xác nhận

## Bối cảnh

Site cần số liệu GA4 đủ rộng để xem nguồn truy cập, lượt xem trang và các lượt bấm liên hệ. Banner đồng ý làm số liệu thưa và thêm một bước cho khách của một site nhỏ. GA4 có thể tắt quảng cáo và Google Signals; Umami vẫn cung cấp số liệu không cookie cho mọi khách.

## Các phương án đã cân nhắc

| # | Phương án | Ưu | Nhược | Kết luận |
|---|---|---|---|---|
| 1 | Không GA4 | Không đặt cookie Google | Thiếu báo cáo GA4 và liên kết hệ sinh thái Google | Loại |
| 2 | GA4 sau khi khách đồng ý bằng banner | Giảm rủi ro riêng tư | Số liệu thiếu khách từ chối; thêm banner và luồng quản lý đồng ý | Loại |
| 3 | GA4 cho mọi khách, không banner | Số liệu đầy đủ, triển khai nhỏ; quảng cáo và Signals tắt | Đặt cookie trước khi hỏi; còn rủi ro theo Luật Bảo vệ dữ liệu cá nhân, không phải tư vấn pháp lý | Chọn |

## Quyết định

Website tải GA4 với Measurement ID `G-KS04WRVLZW` sau khi trang tải xong bằng `next/script` `lazyOnload`. Script chỉ khởi tạo khi hostname là `thehot.vn` hoặc `www.thehot.vn`. `allow_google_signals` và `allow_ad_personalization_signals` đều là `false`. `track()` gửi sự kiện đã lọc thuộc tính sang GA4 cùng với Umami. Không gửi lệnh `gtag('consent', …)` và không bật banner đồng ý.

## Hệ quả

### Tốt

- GA4 có số liệu rộng hơn để xem nguồn truy cập và hành vi liên hệ.
- Máy dev, smoke test và localhost không gửi dữ liệu Google.
- Danh sách thuộc tính của `track()` tiếp tục giới hạn dữ liệu gửi đi.

### Xấu (cái giá chấp nhận trả)

- Cookie `_ga` được đặt trước khi khách có cơ hội từ chối.
- Có rủi ro pháp lý và riêng tư theo quy định áp dụng; quyết định này không phải tư vấn pháp lý.
- GA4 và Umami có thể cho hai bộ số khác nhau.

### Cần theo dõi

- GA4 Realtime, DebugView, cookie `_ga` và hiệu năng sau deploy.
- Nếu quy định hoặc mục đích dùng dữ liệu thay đổi, xem lại quyết định này.

## Điều kiện xem lại

- Quy định dữ liệu cá nhân thay đổi.
- Bắt đầu dùng quảng cáo, Google Signals hoặc tính năng cần dữ liệu quảng cáo.
- Dữ liệu GA4 không còn cần thiết hoặc gây ảnh hưởng đáng kể tới hiệu năng.

## Liên quan

- ADR: [0007](0007-use-umami-and-consent-gated-ga4.md)
- Spec: [004 Analytics](../specs/004-analytics/)

## Nguồn/bằng chứng

- File: `src/components/analytics/GoogleAnalytics.tsx`
- File: `src/lib/analytics.ts`
- Quyết định của chủ repo và chủ quán ngày 2026-10-28

## Lịch sử thay đổi

| Ngày | Thay đổi |
|---|---|
| 2026-10-28 | Tạo ADR, trạng thái Đang áp dụng |

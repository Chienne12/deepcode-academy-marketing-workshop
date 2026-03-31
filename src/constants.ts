import { FAQItem, CurriculumItem, AudienceItem, OutcomeItem, DifferenceItem, GroupedOutcome } from './types';

export const AUDIENCE_DATA: AudienceItem[] = [
  {
    title: "Người mới bắt đầu",
    description: "Xây dựng nền tảng Marketing vững chắc từ số 0. Không còn mông lung, chỉ có lộ trình thực thi rõ ràng.",
    icon: "UserPlus",
  },
  {
    title: "Chủ doanh nghiệp & Shop",
    description: "Làm chủ hệ thống Marketing tự vận hành. Tối ưu chi phí, tăng trưởng doanh thu không phụ thuộc Agency.",
    icon: "Store",
  },
  {
    title: "Freelancer",
    description: "Nâng cấp vị thế và giá trị dịch vụ. Chuyển từ người thực thi sang chuyên gia tư vấn chiến lược thực chiến.",
    icon: "Briefcase",
  },
  {
    title: "Content Creator",
    description: "Thương mại hóa sức ảnh hưởng. Biến nội dung triệu view thành dòng tiền bền vững qua hệ thống chuyển đổi.",
    icon: "Video",
  },
  {
    title: "Marketer muốn tối ưu",
    description: "Chuẩn hóa quy trình, tối ưu chỉ số. Loại bỏ bước thừa thãi để tập trung vào những gì thực sự ra đơn.",
    icon: "TrendingUp",
  },
  {
    title: "Người tiên phong dùng AI",
    description: "X10 hiệu suất với ChatGPT & Canva AI. Làm chủ công nghệ để dẫn đầu thị trường trong kỷ nguyên số.",
    icon: "Brain",
  },
];

export const OUTCOMES_DATA: OutcomeItem[] = [
  { id: "01", title: "Hiểu hệ thống", description: "Nắm vững kiến trúc Marketing tổng thể." },
  { id: "02", title: "Phân biệt Marketing/Sales", description: "Biết khi nào cần thu hút, khi nào cần chốt." },
  { id: "03", title: "Chọn nền tảng", description: "Phát hiện \"vùng xanh\" cho sản phẩm của bạn." },
  { id: "04", title: "Tạo kênh thật", description: "Setup tối ưu chuẩn SEO và chuyển đổi." },
  { id: "05", title: "Insight khách hàng", description: "Vẽ chân dung khách hàng mục tiêu chính xác." },
  { id: "06", title: "Ý tưởng Content", description: "Xây dựng ma trận nội dung không giới hạn." },
  { id: "07", title: "Kịch bản Hook-Value-CTA", description: "Công thức viết bài triệu view/đơn." },
  { id: "08", title: "Đăng bài thật", description: "Thực hành post bài và tối ưu tương tác." },
  { id: "09", title: "Đọc chỉ số", description: "Hiểu các con số để biết mình đang ở đâu." },
  { id: "10", title: "Tối ưu hóa", description: "Biết cách sửa sai và nhân bản thành công." },
  { id: "11", title: "Thiết kế Offer", description: "Tạo lời chào hàng không thể từ chối." },
  { id: "12", title: "SOP 30 ngày", description: "Quy trình tự vận hành sau khóa học." },
];

export const GROUPED_OUTCOMES: GroupedOutcome[] = [
  {
    groupTitle: "Nền tảng cốt lõi",
    items: [
      { id: "01", title: "Hiểu hệ thống", description: "Nắm vững kiến trúc Marketing tổng thể." },
      { id: "02", title: "Phân biệt Marketing/Sales", description: "Biết khi nào cần thu hút, khi nào cần chốt." },
      { id: "03", title: "Chọn nền tảng", description: "Phát hiện \"vùng xanh\" cho sản phẩm của bạn." },
      { id: "04", title: "Tạo kênh thật", description: "Setup tối ưu chuẩn SEO và chuyển đổi." },
    ]
  },
  {
    groupTitle: "Content & Khách hàng",
    items: [
      { id: "05", title: "Insight khách hàng", description: "Vẽ chân dung khách hàng mục tiêu chính xác." },
      { id: "06", title: "Ý tưởng Content", description: "Xây dựng ma trận nội dung không giới hạn." },
      { id: "07", title: "Kịch bản Hook-Value-CTA", description: "Công thức viết bài triệu view/đơn." },
      { id: "08", title: "Đăng bài thật", description: "Thực hành post bài và tối ưu tương tác." },
    ]
  },
  {
    groupTitle: "Tối ưu & Ra tiền",
    items: [
      { id: "09", title: "Đọc chỉ số", description: "Hiểu các con số để biết mình đang ở đâu." },
      { id: "10", title: "Tối ưu hóa", description: "Biết cách sửa sai và nhân bản thành công." },
      { id: "11", title: "Thiết kế Offer", description: "Tạo lời chào hàng không thể từ chối." },
      { id: "12", title: "SOP 30 ngày", description: "Quy trình tự vận hành sau khóa học." },
    ]
  },
];

export const DIFFERENCES_DATA: DifferenceItem[] = [
  { id: "01", title: "Case thật", description: "Học trên chính case, dữ liệu hoặc sản phẩm bạn đang triển khai." },
  { id: "02", title: "Ra sản phẩm ngay", description: "Kết thúc buổi học, bạn có kênh, có bài, có kế hoạch rõ ràng." },
  { id: "03", title: "Vòng lặp khép kín", description: "Hiểu và vận hành được hành trình content → niềm tin → offer → chuyển đổi." },
  { id: "04", title: "Ứng dụng AI", description: "Dùng AI để tăng tốc làm việc đúng cách, không phụ thuộc máy móc." },
  { id: "05", title: "Đầu ra rõ ràng", description: "Mỗi phần học đều có kết quả cụ thể để mang về và áp dụng ngay." },
];

export const DELIVERABLES_DATA = [
  "Portfolio dự án thực chiến",
  "Business Snapshot chi tiết",
  "Link kênh đã tối ưu",
  "Chân dung khách hàng mẫu",
  "5 ý tưởng Content độc quyền",
  "1 kịch bản video/bài viết chuẩn",
  "1 bài đăng thực tế đã lên sàn",
  "1 Offer bán hàng đặc biệt",
  "Bộ mẫu CTA chuyển đổi cao",
  "SOP vận hành đội ngũ",
  "Lịch Content 30 ngày",
  "Checklist 7 ngày đầu tiên",
];

export const CURRICULUM_AM: CurriculumItem[] = [
  {
    time: "08:00 - 09:30",
    title: "Tư duy hệ thống & Chọn thị trường",
    description: "Phân tích Insight khách hàng và xác định Unique Selling Point (USP).",
  },
  {
    time: "09:30 - 11:00",
    title: "Thực hành Setup Kênh",
    description: "Tối ưu hồ sơ, SEO kênh trên các nền tảng (TikTok, FB, Reels).",
  },
  {
    time: "11:00 - 12:00",
    title: "Ma trận Content 30 ngày",
    description: "Dùng AI lên ý tưởng và kịch bản hàng loạt.",
  },
];

export const CURRICULUM_PM: CurriculumItem[] = [
  {
    time: "13:30 - 15:00",
    title: "Thực hành Sản xuất & Đăng bài",
    description: "Quay dựng cơ bản, viết caption thu hút và bấm nút \"Publish\".",
  },
  {
    time: "15:00 - 16:30",
    title: "Thiết kế Offer & Phễu bán hàng",
    description: "Biến người xem thành khách hàng bằng lời chào hàng thông minh.",
  },
  {
    time: "16:30 - 17:00",
    title: "Đọc số liệu & Quy trình SOP",
    description: "Cách tối ưu dựa trên chỉ số thực tế và nhận bộ SOP vận hành.",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Tôi mới bắt đầu, chưa biết gì về Marketing có học được không?",
    answer: "Hoàn toàn được! Khóa học được thiết kế theo lộ trình từ con số 0, tập trung vào thực hành để bạn hiểu bản chất ngay tại lớp.",
  },
  {
    question: "Tôi chưa có kênh mạng xã hội nào cả?",
    answer: "Càng tốt! Bạn sẽ được hướng dẫn lập kênh mới chuẩn từ đầu, tránh các lỗi phổ biến mà người tự học thường mắc phải.",
  },
  {
    question: "Tôi đã có sản phẩm, muốn tăng doanh số ngay?",
    answer: "Khóa học tập trung vào việc tạo Offer và phễu chuyển đổi. Chúng tôi sẽ giúp bạn tối ưu lại cách chào hàng để ra đơn nhanh hơn.",
  },
  {
    question: "Tôi không giỏi công nghệ, có theo kịp không?",
    answer: "Chúng tôi ứng dụng AI để đơn giản hóa mọi công đoạn kỹ thuật. Chỉ cần bạn biết sử dụng máy tính cơ bản là có thể làm được.",
  },
  {
    question: "Sau khóa học tôi có được hỗ trợ không?",
    answer: "Bạn sẽ nhận được bộ SOP 30 ngày và tham gia nhóm cộng đồng hỗ trợ trọn đời để giải đáp thắc mắc khi vận hành thực tế.",
  },
];

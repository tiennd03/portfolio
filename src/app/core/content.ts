import { ProjectLink } from './site-config';

export type Lang = 'en' | 'vi';
export const LANGS: readonly Lang[] = ['en', 'vi'];

/**
 * Every piece of text on the page, in both languages.
 * The `Content` interface makes TypeScript refuse to build if one language is missing a field.
 */
export interface Content {
  meta: { title: string; description: string };
  nav: { about: string; projects: string; services: string; faq: string; contact: string; menu: string };
  hero: { greeting: string; role: string; pitch: string; ctaPrimary: string; ctaSecondary: string; available: string };
  about: { title: string; paragraphs: string[]; skillsTitle: string; skillGroups: { core: string; ui: string; data: string; tools: string } };
  projects: {
    title: string;
    subtitle: string;
    demo: string;
    code: string;
    items: Record<ProjectLink['id'], { name: string; summary: string; highlights: string[] }>;
  };
  services: { title: string; items: Array<{ icon: string; name: string; text: string }>; processTitle: string; process: Array<{ name: string; text: string }> };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    budget: string;
    budgetOptions: string[];
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successText: string;
    sendAnother: string;
    mailtoNote: string;
    errorText: string;
    errors: { required: string; email: string; minlength: string };
  };
  footer: { rights: string; builtWith: string };
}

const en: Content = {
  meta: {
    title: 'Tiến — Angular Frontend Developer',
    description:
      'Angular frontend developer building fast, maintainable web apps: admin dashboards, API integrations, complex forms and responsive UIs.',
  },
  nav: { about: 'About', projects: 'Projects', services: 'Services', faq: 'FAQ', contact: 'Contact', menu: 'Menu' },
  hero: {
    greeting: "Hi, I'm",
    role: 'Angular Frontend Developer',
    pitch:
      'I build fast, maintainable web apps with Angular and TypeScript — from admin dashboards to complex forms and API-driven interfaces.',
    ctaPrimary: 'See my work',
    ctaSecondary: 'Get in touch',
    available: 'Available for freelance projects',
  },
  about: {
    title: 'About me',
    paragraphs: [
      "I'm a frontend engineer with over two years of professional experience building production Angular applications.",
      'I care about clean, typed code, interfaces that work on every screen size, and clear communication — you always know what I am working on and when it will be ready.',
      'I work with modern Angular: standalone components, signals, reactive forms and RxJS, and I write tests for the logic that matters.',
    ],
    skillsTitle: 'Skills',
    skillGroups: { core: 'Core', ui: 'UI', data: 'Data & state', tools: 'Tools' },
  },
  projects: {
    title: 'Selected projects',
    subtitle: 'Each one is open source — feel free to read the code.',
    demo: 'Live demo',
    code: 'Source code',
    items: {
      'shop-admin': {
        name: 'Shop Admin',
        summary: 'Admin dashboard for an online store with realtime data.',
        highlights: ['Firebase Auth & Firestore', 'Product CRUD with validation', 'Sales charts and KPIs'],
      },
      'world-explorer': {
        name: 'World Explorer',
        summary: 'Browse every country with live weather in its capital.',
        highlights: ['REST APIs with interceptors', 'Debounced search synced to the URL', 'Caching and retry logic'],
      },
      taskflow: {
        name: 'TaskFlow',
        summary: 'Kanban board with drag and drop and local persistence.',
        highlights: ['Angular CDK drag & drop', 'NgRx SignalStore', 'Unit tested business logic'],
      },
      'trip-booking': {
        name: 'Trip Booking',
        summary: 'Four-step booking flow with live pricing.',
        highlights: ['Custom & async validators', 'Dynamic FormArray', 'Autosaved drafts'],
      },
    },
  },
  services: {
    title: 'How I can help',
    items: [
      { icon: '🧩', name: 'Angular web apps', text: 'New features or complete apps with a clean, maintainable structure.' },
      { icon: '📊', name: 'Dashboards & admin panels', text: 'Tables, filters, charts and forms that make data easy to manage.' },
      { icon: '⬆️', name: 'Upgrades & refactoring', text: 'Move older Angular code to standalone components and signals.' },
      { icon: '🐞', name: 'Bug fixing', text: 'Track down UI bugs, performance issues and broken layouts.' },
    ],
    processTitle: 'How we work together',
    process: [
      { name: 'Discuss', text: 'You share the goal; I ask questions until the scope is clear.' },
      { name: 'Plan', text: 'A short written plan with milestones and an estimate.' },
      { name: 'Build', text: 'Regular updates and a preview link you can click through.' },
      { name: 'Deliver', text: 'Clean code in your repository, with notes on how it works.' },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'When are you available?', a: 'Part-time on weekday evenings and weekends, Vietnam time (GMT+7). I reply to messages within a day.' },
      { q: 'Can you work on an existing codebase?', a: 'Yes. I start by reading the code and running it locally, then propose changes that fit its existing style.' },
      { q: 'Which Angular versions do you work with?', a: 'Mainly Angular 15 and newer. I can also help upgrade older projects step by step.' },
      { q: 'How do we communicate?', a: 'Whatever suits you — email, Slack, Upwork messages or a short video call.' },
    ],
  },
  contact: {
    title: "Let's work together",
    subtitle: 'Tell me a little about your project and I will get back to you within one day.',
    name: 'Your name',
    email: 'Email',
    budget: 'Project type',
    budgetOptions: ['New feature', 'New app', 'Bug fixing', 'Upgrade / refactor', 'Something else'],
    message: 'Message',
    messagePlaceholder: 'What are you building, and what do you need help with?',
    send: 'Send message',
    sending: 'Sending…',
    successTitle: 'Thanks — message sent!',
    successText: 'I will reply to your email soon.',
    sendAnother: 'Send another message',
    mailtoNote: 'Your email app has opened with the message filled in — just press send.',
    errorText: "The message couldn't be sent. Please email me directly.",
    errors: { required: 'This field is required', email: 'Enter a valid email', minlength: 'Please write at least 20 characters' },
  },
  footer: { rights: 'All rights reserved.', builtWith: 'Built with Angular and Tailwind CSS.' },
};

const vi: Content = {
  meta: {
    title: 'Tiến — Lập trình viên Frontend Angular',
    description:
      'Lập trình viên frontend Angular, xây dựng ứng dụng web nhanh và dễ bảo trì: trang quản trị, tích hợp API, form phức tạp và giao diện responsive.',
  },
  nav: { about: 'Giới thiệu', projects: 'Dự án', services: 'Dịch vụ', faq: 'Hỏi đáp', contact: 'Liên hệ', menu: 'Menu' },
  hero: {
    greeting: 'Xin chào, tôi là',
    role: 'Lập trình viên Frontend Angular',
    pitch:
      'Tôi xây dựng ứng dụng web nhanh, dễ bảo trì bằng Angular và TypeScript — từ trang quản trị đến form phức tạp và giao diện kết nối API.',
    ctaPrimary: 'Xem dự án',
    ctaSecondary: 'Liên hệ',
    available: 'Đang nhận dự án Freelance',
  },
  about: {
    title: 'Về tôi',
    paragraphs: [
      'Tôi là kỹ sư frontend với hơn hai năm kinh nghiệm làm các ứng dụng Angular chạy thực tế.',
      'Tôi chú trọng code sạch, có kiểu rõ ràng, giao diện chạy tốt trên mọi kích thước màn hình và trao đổi minh bạch — bạn luôn biết tôi đang làm gì và khi nào xong.',
      'Tôi dùng Angular hiện đại: standalone component, signals, reactive forms, RxJS, và viết test cho phần logic quan trọng.',
    ],
    skillsTitle: 'Kỹ năng',
    skillGroups: { core: 'Cốt lõi', ui: 'Giao diện', data: 'Dữ liệu & state', tools: 'Công cụ' },
  },
  projects: {
    title: 'Dự án tiêu biểu',
    subtitle: 'Tất cả đều mở mã nguồn — bạn có thể xem code.',
    demo: 'Xem demo',
    code: 'Mã nguồn',
    items: {
      'shop-admin': {
        name: 'Shop Admin',
        summary: 'Trang quản trị cửa hàng online, dữ liệu cập nhật thời gian thực.',
        highlights: ['Firebase Auth & Firestore', 'Quản lý sản phẩm có kiểm tra dữ liệu', 'Biểu đồ doanh thu và chỉ số'],
      },
      'world-explorer': {
        name: 'World Explorer',
        summary: 'Tra cứu mọi quốc gia kèm thời tiết thủ đô.',
        highlights: ['REST API với interceptor', 'Tìm kiếm debounce đồng bộ URL', 'Cache và tự thử lại khi lỗi'],
      },
      taskflow: {
        name: 'TaskFlow',
        summary: 'Bảng Kanban kéo thả, lưu dữ liệu trên trình duyệt.',
        highlights: ['Kéo thả bằng Angular CDK', 'NgRx SignalStore', 'Logic có unit test'],
      },
      'trip-booking': {
        name: 'Trip Booking',
        summary: 'Quy trình đặt tour 4 bước, tính giá trực tiếp.',
        highlights: ['Validator tự viết & bất đồng bộ', 'FormArray động', 'Tự lưu bản nháp'],
      },
    },
  },
  services: {
    title: 'Tôi có thể giúp gì',
    items: [
      { icon: '🧩', name: 'Ứng dụng web Angular', text: 'Thêm tính năng hoặc làm trọn ứng dụng với cấu trúc rõ ràng, dễ bảo trì.' },
      { icon: '📊', name: 'Dashboard & trang quản trị', text: 'Bảng, bộ lọc, biểu đồ và form giúp quản lý dữ liệu dễ dàng.' },
      { icon: '⬆️', name: 'Nâng cấp & tái cấu trúc', text: 'Chuyển code Angular cũ sang standalone component và signals.' },
      { icon: '🐞', name: 'Sửa lỗi', text: 'Tìm và sửa lỗi giao diện, hiệu năng và bố cục bị vỡ.' },
    ],
    processTitle: 'Cách chúng ta làm việc',
    process: [
      { name: 'Trao đổi', text: 'Bạn chia sẻ mục tiêu; tôi hỏi đến khi phạm vi rõ ràng.' },
      { name: 'Lên kế hoạch', text: 'Kế hoạch ngắn gọn, có mốc công việc và ước lượng thời gian.' },
      { name: 'Thực hiện', text: 'Cập nhật thường xuyên kèm link xem trước để bạn bấm thử.' },
      { name: 'Bàn giao', text: 'Code sạch trong repository của bạn, kèm ghi chú cách hoạt động.' },
    ],
  },
  faq: {
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'Khi nào bạn có thời gian làm?', a: 'Bán thời gian vào buổi tối các ngày trong tuần và cuối tuần, giờ Việt Nam (GMT+7). Tôi trả lời tin nhắn trong vòng một ngày.' },
      { q: 'Bạn có làm trên dự án có sẵn không?', a: 'Có. Tôi bắt đầu bằng việc đọc code và chạy thử trên máy, sau đó đề xuất thay đổi phù hợp với phong cách code hiện có.' },
      { q: 'Bạn làm với phiên bản Angular nào?', a: 'Chủ yếu Angular 15 trở lên. Tôi cũng có thể giúp nâng cấp dự án cũ từng bước.' },
      { q: 'Chúng ta trao đổi qua đâu?', a: 'Tùy bạn — email, Slack, tin nhắn Upwork hoặc gọi video ngắn.' },
    ],
  },
  contact: {
    title: 'Cùng hợp tác nhé',
    subtitle: 'Kể ngắn gọn về dự án của bạn, tôi sẽ phản hồi trong vòng một ngày.',
    name: 'Tên của bạn',
    email: 'Email',
    budget: 'Loại công việc',
    budgetOptions: ['Tính năng mới', 'Ứng dụng mới', 'Sửa lỗi', 'Nâng cấp / tái cấu trúc', 'Khác'],
    message: 'Nội dung',
    messagePlaceholder: 'Bạn đang làm gì và cần giúp phần nào?',
    send: 'Gửi tin nhắn',
    sending: 'Đang gửi…',
    successTitle: 'Cảm ơn — đã gửi!',
    successText: 'Tôi sẽ trả lời qua email của bạn sớm.',
    sendAnother: 'Gửi tin nhắn khác',
    mailtoNote: 'Ứng dụng email của bạn đã mở sẵn nội dung — chỉ cần bấm gửi.',
    errorText: 'Chưa gửi được tin nhắn. Vui lòng gửi email trực tiếp cho tôi.',
    errors: { required: 'Vui lòng nhập thông tin này', email: 'Email không hợp lệ', minlength: 'Vui lòng viết ít nhất 20 ký tự' },
  },
  footer: { rights: 'Bảo lưu mọi quyền.', builtWith: 'Xây dựng bằng Angular và Tailwind CSS.' },
};

export const CONTENT: Record<Lang, Content> = { en, vi };

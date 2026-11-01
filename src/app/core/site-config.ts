/**
 * Everything personal lives in this file and in content.ts — edit these two to make the site yours.
 * Values marked TODO are placeholders.
 */
export const SITE = {
  name: 'Tiến', // TODO: your full name
  email: 'tiennd03@gmail.com',
  github: 'https://github.com/tiennd03',
  linkedin: '', // TODO: your LinkedIn URL (leave empty to hide)
  upwork: '', // TODO: your Upwork profile URL (leave empty to hide)
  cvUrl: '', // TODO: link to a PDF CV (leave empty to hide the button)
  siteUrl: 'https://tiennd-portfolio.web.app', // TODO: the deployed URL, used for SEO tags
  /**
   * Optional: a free Formspree form id (https://formspree.io) so the contact form sends email directly.
   * Leave empty and the form opens the visitor's email app instead.
   */
  formspreeId: '',
};

export interface ProjectLink {
  id: 'shop-admin' | 'world-explorer' | 'taskflow' | 'trip-booking';
  repo: string;
  demo: string; // empty = hide the demo button
  tags: string[];
}

export const PROJECT_LINKS: ProjectLink[] = [
  {
    id: 'shop-admin',
    repo: 'https://github.com/tiennd03/shop-admin',
    demo: 'https://my-repo-0511.web.app',
    tags: ['Angular', 'Firebase', 'Angular Material', 'Chart.js'],
  },
  {
    id: 'world-explorer',
    repo: 'https://github.com/tiennd03/world-explorer',
    demo: '', // TODO
    tags: ['Angular', 'REST API', 'RxJS', 'Tailwind'],
  },
  {
    id: 'taskflow',
    repo: 'https://github.com/tiennd03/taskflow',
    demo: '', // TODO
    tags: ['Angular CDK', 'NgRx SignalStore', 'Unit tests', 'Tailwind'],
  },
  {
    id: 'trip-booking',
    repo: 'https://github.com/tiennd03/trip-booking',
    demo: '', // TODO
    tags: ['Reactive Forms', 'Custom validators', 'ControlValueAccessor'],
  },
];

export const SKILLS = {
  core: ['Angular 17–20', 'TypeScript', 'RxJS', 'Signals', 'HTML5', 'CSS3 / SCSS'],
  ui: ['Tailwind CSS', 'Angular Material', 'Angular CDK', 'Responsive design', 'Accessibility'],
  data: ['REST APIs', 'Firebase', 'NgRx SignalStore', 'Reactive forms'],
  tools: ['Git & GitHub', 'GitHub Actions', 'Jasmine / Karma', 'Chrome DevTools', 'Figma handoff'],
};

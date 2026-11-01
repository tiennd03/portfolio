import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { SITE } from '../core/site-config';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().hero;
    <section
      id="top"
      class="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <!-- Soft gradient blobs behind the text -->
      <div
        class="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div
          class="absolute -top-24 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/20"
        ></div>
        <div
          class="absolute right-0 top-40 size-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10"
        ></div>
      </div>

      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <p
          class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
        >
          <span class="relative flex size-2">
            <span
              class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex size-2 rounded-full bg-emerald-500"
            ></span>
          </span>
          {{ t.available }}
        </p>

        <h1
          class="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl sm:leading-tight"
        >
          <span class="block text-slate-500 dark:text-slate-400"
            >{{ t.greeting }} {{ name }}</span
          >
          <span
            class="mt-1 block bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text pb-2 text-transparent"
            >{{ t.role }}</span
          >
        </h1>

        <p class="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          {{ t.pitch }}
        </p>

        <div class="mt-10 flex flex-wrap gap-3">
          <a href="#projects" class="btn-primary">{{ t.ctaPrimary }}</a>
          <a href="#contact" class="btn-secondary">{{ t.ctaSecondary }}</a>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly name = SITE.name;
}

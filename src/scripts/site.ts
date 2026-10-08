/**
 * Site-wide behaviour: scroll reveals, count-ups and the theme toggle.
 * Motion only ever explains (order, emphasis, state). With reduced motion,
 * everything is shown immediately.
 */
declare global {
  interface Window {
    __rcReady?: boolean;
    __rcResolveTheme?: () => void;
  }
}

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Count-up for real figures (data-count="80") ---------- */
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length) return;
  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    if (reduceMotion.matches) {
      el.textContent = String(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) {
    els.forEach(run);
    return;
  }
  // The real figure is in the HTML (no-JS and crawlers see it); start from zero only when animating.
  if (!reduceMotion.matches) els.forEach((el) => (el.textContent = '0'));
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          run(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.6 },
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Theme toggle ---------- */
function initTheme() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
  const sync = () => {
    const dark = root.getAttribute('data-theme-resolved') === 'dark';
    buttons.forEach((b) => {
      const label = dark ? b.dataset.labelLight : b.dataset.labelDark;
      if (label) b.setAttribute('aria-label', label);
      b.setAttribute('aria-pressed', String(dark));
    });
  };
  sync();
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const next = root.getAttribute('data-theme-resolved') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('rc-theme', next);
      } catch {
        /* storage unavailable: the choice lasts for this page only */
      }
      window.__rcResolveTheme?.();
      sync();
    }),
  );
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', sync);
}

initReveal();
initCounters();
initTheme();
window.__rcReady = true;

export {};

const root = document.documentElement;
const btn = document.querySelector('#theme-btn');
const icon = document.querySelector('#theme-icon');

function applyTheme(theme) {
  const isDark = theme === 'dark';
  root.dataset.theme = theme;
  btn.setAttribute('aria-pressed', String(isDark));
  icon.textContent = isDark ? '☀️' : '🌙';
}

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

applyTheme(getInitialTheme());

btn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});
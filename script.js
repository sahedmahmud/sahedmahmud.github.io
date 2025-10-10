const menuBtn = document.querySelector('.menu-btn');
const navContainer = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  navContainer.classList.toggle('open');
});

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function setTheme(mode) {
  if (mode === 'light') root.classList.add('light');
  else root.classList.remove('light');
  localStorage.setItem('theme', mode);
}
const saved = localStorage.getItem('theme');
if (saved) setTheme(saved);
themeToggle?.addEventListener('click', () => {
  const now = root.classList.contains('light') ? 'dark' : 'light';
  setTheme(now);
  themeToggle.textContent = now === 'light' ? '🌞' : '🌙';
});

document.getElementById('year')?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id.length <= 1) return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    }
  });
});

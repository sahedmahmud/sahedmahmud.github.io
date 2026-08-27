// Mobile navigation
const menuBtn = document.querySelector('.menu-btn');
const navContainer = document.querySelector('.nav');
const navLinks = document.querySelectorAll('#site-nav a');

menuBtn?.addEventListener('click', () => {
  const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';

  menuBtn.setAttribute('aria-expanded', String(!isOpen));
  navContainer.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navContainer.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});
// Reveal on scroll
const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add('visible'),observer.unobserve(e.target))})},{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
// Year
document.getElementById('year')?.replaceChildren(document.createTextNode(String((new Date).getFullYear())))
// Copy email address
document.querySelectorAll('.copy-email-btn').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.email;
    const label = button.querySelector('span');

    try {
      await navigator.clipboard.writeText(email);

      if (label) {
        const originalText = label.textContent;
        label.textContent = 'Email Copied ✓';

        setTimeout(() => {
          label.textContent = originalText;
        }, 2000);
      }
    } catch (error) {
      window.prompt('Copy email address:', email);
    }
  });
});

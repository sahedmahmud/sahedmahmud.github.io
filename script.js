// Mobile nav
const menuBtn=document.querySelector('.menu-btn');const navContainer=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const e='true'===menuBtn.getAttribute('aria-expanded');menuBtn.setAttribute('aria-expanded',String(!e));navContainer.classList.toggle('open')});
// Reveal on scroll
const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add('visible'),observer.unobserve(e.target))})},{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
// Year
document.getElementById('year')?.replaceChildren(document.createTextNode(String((new Date).getFullYear())))
// Copy email address
document.querySelectorAll('.copy-email-btn').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.email;

    try {
      await navigator.clipboard.writeText(email);

      const originalText = button.textContent;
      button.textContent = 'Email Copied ✓';

      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    } catch (error) {
      window.prompt('Copy email address:', email);
    }
  });
});

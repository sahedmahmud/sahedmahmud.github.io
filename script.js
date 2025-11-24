// Mobile nav
const menuBtn=document.querySelector('.menu-btn');const navContainer=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const e='true'===menuBtn.getAttribute('aria-expanded');menuBtn.setAttribute('aria-expanded',String(!e));navContainer.classList.toggle('open')});
// Reveal on scroll
const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add('visible'),observer.unobserve(e.target))})},{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
// Year
document.getElementById('year')?.replaceChildren(document.createTextNode(String((new Date).getFullYear())))

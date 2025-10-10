// Mobile nav
const menuBtn=document.querySelector('.menu-btn');const navContainer=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const e='true'===menuBtn.getAttribute('aria-expanded');menuBtn.setAttribute('aria-expanded',String(!e));navContainer.classList.toggle('open')});
// Theme toggle
const root=document.documentElement,themeToggle=document.getElementById('themeToggle');function setTheme(e){'light'===e?(root.classList.add('light'),themeToggle.textContent='☀️'):(root.classList.remove('light'),themeToggle.textContent='🌙'),localStorage.setItem('theme',e)}const saved=localStorage.getItem('theme');saved?setTheme(saved):setTheme('dark');themeToggle?.addEventListener('click',()=>{const e=root.classList.contains('light')?'dark':'light';setTheme(e)});
// Reveal on scroll
const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add('visible'),observer.unobserve(e.target))})},{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
// Year
document.getElementById('year')?.replaceChildren(document.createTextNode(String((new Date).getFullYear())))
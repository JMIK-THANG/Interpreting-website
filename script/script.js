document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('primary-menu');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });

  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('nav--open'))
  );
});

document.addEventListener('DOMContentLoaded', () => {
  const nav    = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu   = document.getElementById('primary-menu');

  function setOpen(open) {
    nav.classList.toggle('nav--open', open);
    document.body.classList.toggle('no-scroll', open); // optional: lock scroll
  }

  // open/close with hamburger
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('nav--open')));

  // 1) close when any nav link is clicked (works even if links change)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav__link')) setOpen(false);
  });

  // 2) close when overlay is clicked (the dim background)
  nav.addEventListener('click', (e) => {
    // if click lands on the nav element itself (its ::before overlay),
    // not inside the sliding panel, close it
    if (e.target === nav && nav.classList.contains('nav--open')) {
      setOpen(false);
    }
  });
});

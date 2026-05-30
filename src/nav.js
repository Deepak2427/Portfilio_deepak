export function initNav() {
  const sections = document.querySelectorAll('section[id], .hero[id]');
  const navLinks = document.querySelectorAll('.nav a[data-nav]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let current = '';
    sections.forEach((s) => {
      if (scrollY >= s.offsetTop) current = s.getAttribute('id');
    });
    navLinks.forEach((a) => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  }

  window.addEventListener('scroll', () => {
    updateActiveNav();

    const nav = document.getElementById('mainNav');
    if (nav) {
      nav.style.background =
        window.scrollY > 60 ? 'rgba(8,8,16,0.95)' : 'rgba(8,8,16,0.75)';
    }

    const btt = document.getElementById('backToTop');
    if (btt) btt.classList.toggle('show', window.scrollY > 500);
  });
}

export function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.toggleMobile = () => {
    hamburger?.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
  };

  window.closeMobile = () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  };
}

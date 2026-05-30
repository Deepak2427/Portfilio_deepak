import { PORTFOLIO } from './data.js';
import { initStarfield } from './starfield.js';
import { initTypewriter } from './typewriter.js';
import { initTilt } from './tilt.js';
import { initReveal } from './reveal.js';
import { renderProjects, initFilterBar, initProjectModal, initModalCloses } from './projects.js';
import { initContactForm, initContactTabs } from './contact.js';
import { initNav, initMobileMenu } from './nav.js';

/* ── Hero tags ── */
document.getElementById('heroTags').innerHTML = PORTFOLIO.hero.tags
  .map((t) => `<span class="tag">${t}</span>`)
  .join('');

/* ── Stats ── */
document.getElementById('statsRow').innerHTML = PORTFOLIO.stats
  .map(
    (s, i) =>
      `<div class="stat-box" data-aos="zoom-in" data-aos-delay="${i * 100}">
        <div class="stat-num">${s.value}</div>
        <div class="stat-lbl">${s.label}</div>
       </div>`,
  )
  .join('');

/* ── Skills ── */
document.getElementById('skillsGrid').innerHTML = PORTFOLIO.skills
  .map(
    (s, i) =>
      `<div class="skill-card" data-aos="flip-left" data-aos-delay="${(i % 4) * 100}">
        <div class="skill-name">${s.icon} ${s.name}</div>
        <div class="skill-bar"><div class="skill-fill" style="--w:${s.level}"></div></div>
       </div>`,
  )
  .join('');

/* ── Init everything ── */
initStarfield();
initTypewriter();
initReveal();
initFilterBar();
renderProjects('all');
initProjectModal();
initModalCloses();
initContactForm();
initContactTabs();
initNav();
initMobileMenu();

/* ── Refresh AOS for dynamic content ── */
import AOS from 'aos';
AOS.refreshHard();

/* ── Skill bar animation trigger ── */
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach((b) => {
        const w = b.style.getPropertyValue('--w');
        b.style.transform = `scaleX(${w})`;
        b.classList.add('on');
      });
    }
  });
}, { threshold: 0.13 });
document.querySelectorAll('.skill-card').forEach((el) => skillObs.observe(el));

/* ── Scroll to section ── */
window.scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

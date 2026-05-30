export function initTilt() {
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 16}deg) rotateX(${-y * 10}deg) scale3d(1.04,1.04,1.04)`;
      card.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
      card.style.setProperty('--my', `${(y + 0.5) * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    });
  });
}

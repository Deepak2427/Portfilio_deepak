export function initStarfield() {
  const c = document.getElementById('bg');
  if (!c) return;
  const ctx = c.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = c.width = window.innerWidth;
    H = c.height = window.innerHeight;
  }

  function init() {
    stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 0.8 + 0.2,
      a: Math.random() * 0.7 + 0.05,
      da: (Math.random() - 0.5) * 0.003,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach((s) => {
      s.a = Math.max(0.04, Math.min(0.8, s.a + s.da));
      if (s.a <= 0.05 || s.a >= 0.78) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,200,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  window.addEventListener('resize', () => {
    resize();
    init();
  });
}

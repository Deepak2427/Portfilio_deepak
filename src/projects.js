import { PORTFOLIO } from './data.js';
import { initTilt } from './tilt.js';

function getPreviewHTML(type) {
  const previews = {
    gym: `
      <div class="mock-img">
        <div class="gym-tag">★ Mumbai ★ Est. 2019 ★</div>
        <div class="gym-title">ROCK</div>
        <div class="gym-sub">THE GYM</div>
      </div>`,
    stock: `
      <div class="stock-mock">
        <div class="stock-top">
          <div class="stock-name">StockSense</div>
          <span class="stock-badge">NSE: RELIANCE</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:.4rem">
          <div class="stock-score">
            <span class="stock-num">6.5</span>
            <span class="stock-lbl">/ 10 Score</span>
          </div>
          <div style="text-align:right">
            <div style="font-size:.65rem;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.06em">Verdict</div>
            <div style="font-family:'Syne',sans-serif;font-size:.95rem;font-weight:900;color:#FFC107">ACCUMULATE</div>
          </div>
        </div>
        <div class="mini-chart">
          <div class="mini-bar" style="height:40%"></div>
          <div class="mini-bar" style="height:55%"></div>
          <div class="mini-bar" style="height:48%"></div>
          <div class="mini-bar" style="height:70%"></div>
          <div class="mini-bar hi" style="height:60%"></div>
          <div class="mini-bar" style="height:75%"></div>
          <div class="mini-bar hi" style="height:88%"></div>
          <div class="mini-bar hi" style="height:95%"></div>
        </div>
      </div>`,
    anim: `
      <div class="anim-mock">
        <div class="anim-logo">dream frame</div>
        <div style="font-size:.65rem;color:rgba(255,255,255,.3);letter-spacing:.06em;margin-bottom:.2rem">ANIMATION STUDIOS</div>
        <div class="anim-title">Bringing Stories<br>to Life</div>
        <div class="anim-pills">
          <span class="anim-pill">Animated Films</span>
          <span class="anim-pill">Game Animation</span>
          <span class="anim-pill">TV Series</span>
          <span class="anim-pill">Commercials</span>
        </div>
      </div>`,
    data: `
      <div class="data-mock">
        <div class="data-nav">
          <div class="data-logo">DATAPLUS</div>
          <div class="data-nav-links">
            <span>Infrastructure</span>
            <span>Security</span>
            <span>Solutions</span>
          </div>
        </div>
        <div class="data-badge">INTELLIGENCE PROTOCOL V2.4.0 ACTIVE</div>
        <div class="data-title">Architectural<br><span class="data-highlight">Intelligence.</span></div>
        <div class="data-btns">
          <span class="data-btn-primary">Deploy Environment</span>
          <span class="data-btn-secondary">View Documentation</span>
        </div>
      </div>`,
  };
  return previews[type] || '';
}

const filters = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'fullstack', label: 'Full Stack' },
];

export function renderProjects(filter = 'all') {
  const grid = document.getElementById('projGrid');
  const filtered =
    filter === 'all'
      ? PORTFOLIO.projects
      : PORTFOLIO.projects.filter((p) => p.filter === filter);

  grid.innerHTML = filtered
    .map(
      (p, i) => `
    <div class="proj-card" data-aos="flip-right" data-aos-delay="${i * 100}" data-tilt data-id="${p.id}">
      <span class="proj-arrow">↗</span>
      <div class="proj-preview prev-${p.preview}">
        ${getPreviewHTML(p.preview)}
      </div>
      <div class="proj-body">
        <span class="proj-cat" style="background:${p.catColor};color:${p.catText}">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="proj-stack">
          ${p.stack.map((s) => `<span class="stack-pill">${s}</span>`).join('')}
        </div>
      </div>
    </div>`,
    )
    .join('');

  initTilt();
}

export function initFilterBar() {
  const bar = document.getElementById('filterBar');
  bar.innerHTML = filters
    .map(
      (f, i) =>
        `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`,
    )
    .join('');

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
}

export function initProjectModal() {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.proj-card');
    if (!card) return;
    const id = card.dataset.id;
    const proj = PORTFOLIO.projects.find((p) => p.id === id);
    if (!proj) return;

    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modalOverlay');

    modal.innerHTML = `
      <button class="modal-close" id="modalClose">✕</button>
      <span class="proj-cat" style="background:${proj.catColor};color:${proj.catText}">${proj.category}</span>
      <h2>${proj.title}</h2>
      <p>${proj.description}</p>
      <ul class="modal-features">
        ${proj.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
      <div class="proj-stack">
        ${proj.stack.map((s) => `<span class="stack-pill">${s}</span>`).join('')}
      </div>
      <a class="modal-link" href="${proj.liveUrl}" target="_blank">View Live Site ↗</a>
    `;
    overlay.classList.add('open');

    document.getElementById('modalClose')?.addEventListener('click', () => {
      overlay.classList.remove('open');
    });
  });
}

export function initModalCloses() {
  const overlay = document.getElementById('modalOverlay');
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay?.classList.remove('open');
  });
}

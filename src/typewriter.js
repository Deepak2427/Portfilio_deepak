import Typed from 'typed.js';
import { PORTFOLIO } from './data.js';

export function initTypewriter() {
  const el = document.getElementById('heroType');
  if (!el) return;
  const typed = new Typed(el, {
    strings: PORTFOLIO.hero.typewriter,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
  return () => typed.destroy();
}

import AOS from 'aos';
import 'aos/dist/aos.css';

export function initReveal() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
  });
}

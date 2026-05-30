export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('input,textarea').forEach((field) => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
      if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        field.classList.add('error');
        valid = false;
      }
    });

    if (!valid) return;

    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    setTimeout(() => {
      form.style.display = 'none';
      document.getElementById('formSuccess').classList.add('show');
    }, 1500);
  });

  document.addEventListener('input', (e) => {
    if (e.target.classList.contains('error')) e.target.classList.remove('error');
  });
}

export function initContactTabs() {
  document.querySelectorAll('.form-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.form-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('contactFormWrap').style.display =
        tab.dataset.tab === 'form' ? 'block' : 'none';
      document.getElementById('contactLinksWrap').style.display =
        tab.dataset.tab === 'links' ? 'block' : 'none';
    });
  });
}

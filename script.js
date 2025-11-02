document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('showMoreBtn');
  if (btn) {
    btn.addEventListener('click', function() {
      const more = document.getElementById('moreInfo');
      if (more) {
        more.style.display = more.style.display === 'none' ? 'block' : 'none';
        btn.textContent = more.style.display === 'none' ? 'Mehr anzeigen' : 'Weniger anzeigen';
      }
    });
  }
  // Smooth fade-in animation for cards
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = `${0.2 + i * 0.2}s`;
  });

  // Simple form animation
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      form.style.boxShadow = '0 0 0 4px #c9e7ff';
      setTimeout(() => {
        form.style.boxShadow = '';
      }, 800);
      alert('Danke für deine Nachricht!');
    });
  }
  // Kontaktformular: E-Mail-Versand
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const mailto = `mailto:contact@joosibaeri.xyz?subject=Kontakt von ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ANachricht: ${encodeURIComponent(message)}`;
      window.location.href = mailto;
    });
  }
});

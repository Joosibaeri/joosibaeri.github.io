document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = `${0.2 + i * 0.2}s`;
  });

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      form.style.boxShadow = '0 0 0 4px #ffd900';
      setTimeout(() => {
        form.style.boxShadow = '';
      }, 800);
      alert('Danke für deine Nachricht!');
    });
  }
});

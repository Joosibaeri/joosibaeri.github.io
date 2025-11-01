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
});

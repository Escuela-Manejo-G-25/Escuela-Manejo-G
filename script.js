document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const quickNav = document.getElementById('quick-nav');

  if (menuToggle && quickNav) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('open');
      quickNav.classList.toggle('open');
    });
  }

  // (Tu código existente para el mensaje de WhatsApp)
  setTimeout(() => {
    const msg = document.getElementById('whatsapp-msg');
    if (msg) {
      msg.style.display = 'inline-block';
      setTimeout(() => {
        msg.style.display = 'none';
      }, 60000);
    }
  }, 120000);
});

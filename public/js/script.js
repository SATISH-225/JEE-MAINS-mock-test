document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      window.location.href = href;
    });
  });

  const navButtons = document.querySelectorAll('nav button');
  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  });

  const currentPath = window.location.pathname.toLowerCase();
  if (
    currentPath.endsWith('index.html') ||
    currentPath === '/' ||
    currentPath.endsWith('\\')
  ) {
    setTimeout(() => {
      window.location.href = 'signup.html';
    }, 1500);
  }
});

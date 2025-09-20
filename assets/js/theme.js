// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const logoImg = document.getElementById('logo-img');

  // Site-wide cursor following animation for non-mobile devices
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mousemove', function(e) {
      document.body.style.setProperty('--cursor-x', e.clientX + 'px');
      document.body.style.setProperty('--cursor-y', e.clientY + 'px');
    });

    document.addEventListener('mouseenter', function() {
      document.body.classList.add('cursor-active');
    });

    document.addEventListener('mouseleave', function() {
      document.body.classList.remove('cursor-active');
    });
  }
  
  // Function to update logo based on theme
  function updateLogo(theme) {
    if (logoImg) {
      if (theme === 'light') {
        logoImg.src = '/assets/logo-dark.png';
      } else {
        logoImg.src = '/assets/logo.png';
      }
    }
  }
  
  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Update button appearance and logo based on current theme
  if (themeToggle && themeIcon) {
    if (currentTheme === 'light') {
      themeToggle.classList.add('light');
      themeIcon.textContent = '◑';
    } else {
      themeToggle.classList.remove('light');
      themeIcon.textContent = '◐';
    }
  }
  
  // Update logo on page load
  updateLogo(currentTheme);
  
  // Theme toggle click handler
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update theme
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update button appearance
      if (themeIcon) {
        if (newTheme === 'light') {
          themeToggle.classList.add('light');
          themeIcon.textContent = '◑';
        } else {
          themeToggle.classList.remove('light');
          themeIcon.textContent = '◐';
        }
      }
      
      // Update logo
      updateLogo(newTheme);
    });
  }
});
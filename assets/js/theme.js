// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  
  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Update button appearance based on current theme
  if (themeToggle && themeIcon) {
    if (currentTheme === 'light') {
      themeToggle.classList.add('light');
      themeIcon.textContent = '☀️';
    } else {
      themeToggle.classList.remove('light');
      themeIcon.textContent = '🌙';
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update theme
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update button appearance
      if (newTheme === 'light') {
        themeToggle.classList.add('light');
        themeIcon.textContent = '☀️';
      } else {
        themeToggle.classList.remove('light');
        themeIcon.textContent = '🌙';
      }
    });
  }
});
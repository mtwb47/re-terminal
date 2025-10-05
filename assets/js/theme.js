// Enhanced theme system functionality
document.addEventListener('DOMContentLoaded', function() {
  // Legacy theme toggle elements
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const logoImg = document.getElementById('logo-img');

  // New theme switcher elements
  const themeSwitcher = document.getElementById('theme-switcher');
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const currentThemeName = document.getElementById('current-theme-name');
  const themeOptions = document.querySelectorAll('.theme-option');

  // Theme configuration
  const themes = {
    'gruvbox': { name: 'Gruvbox', displayName: 'Gruvbox' },
    'everforest': { name: 'Everforest', displayName: 'Everforest' },
    'catppuccin': { name: 'Catppuccin', displayName: 'Catppuccin' },
    'high-contrast': { name: 'High Contrast', displayName: 'High Contrast' },
    'oxocarbon': { name: 'Oxocarbon', displayName: 'Oxocarbon' },
    'dracula': { name: 'Dracula', displayName: 'Dracula' },
    'nord': { name: 'Nord', displayName: 'Nord' },
    'rosepine': { name: 'Rose Pine', displayName: 'Rose Pine' }
  };

  // Get current theme settings from localStorage or defaults
  const currentThemeFamily = localStorage.getItem('themeFamily') || 'gruvbox';
  const currentThemeVariant = localStorage.getItem('themeVariant') || 'dark';

  // Function to update logo based on theme variant
  function updateLogo(variant) {
    if (logoImg) {
      if (variant === 'light') {
        logoImg.src = '/assets/logo-dark.png';
      } else {
        logoImg.src = '/assets/logo.png';
      }
    }
  }

  // Function to apply theme
  function applyTheme(family, variant) {
    const html = document.documentElement;
    html.setAttribute('data-theme-family', family);
    html.setAttribute('data-theme-variant', variant);

    // Update localStorage
    localStorage.setItem('themeFamily', family);
    localStorage.setItem('themeVariant', variant);

    // Update current theme name display
    if (currentThemeName && themes[family]) {
      currentThemeName.textContent = family;
    }

    // Update active theme option
    themeOptions.forEach(option => {
      option.classList.remove('active');
      if (option.dataset.theme === family) {
        option.classList.add('active');
      }
    });

    // Update legacy theme toggle appearance
    if (themeToggle && themeIcon) {
      if (variant === 'light') {
        themeToggle.classList.add('light');
        themeIcon.textContent = '◑';
      } else {
        themeToggle.classList.remove('light');
        themeIcon.textContent = '◐';
      }
    }

    // Update logo
    updateLogo(variant);
  }

  // Initialize theme on page load
  applyTheme(currentThemeFamily, currentThemeVariant);

  // Theme toggle button functionality
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', function() {
      themeSwitcher.classList.toggle('open');
    });
  }

  // Close theme switcher when clicking outside
  document.addEventListener('click', function(e) {
    if (themeSwitcher && !themeSwitcher.contains(e.target)) {
      themeSwitcher.classList.remove('open');
    }
  });

  // Theme option selection
  themeOptions.forEach(option => {
    option.addEventListener('click', function() {
      const selectedFamily = this.dataset.theme;
      const currentVariant = localStorage.getItem('themeVariant') || 'dark';
      applyTheme(selectedFamily, currentVariant);
      themeSwitcher.classList.remove('open');
    });
  });

  // Legacy light/dark toggle (now works within current theme family)
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentFamily = localStorage.getItem('themeFamily') || 'gruvbox';
      const currentVariant = localStorage.getItem('themeVariant') || 'dark';
      const newVariant = currentVariant === 'dark' ? 'light' : 'dark';
      applyTheme(currentFamily, newVariant);
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const logoImg = document.getElementById('logo-img');

  const themeSwitcher = document.getElementById('theme-switcher');
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const currentThemeName = document.getElementById('current-theme-name');
  const themeOptions = document.querySelectorAll('.theme-option');

  const themes = {
    'gruvbox': { name: 'Gruvbox', displayName: 'Gruvbox' },
    'everforest': { name: 'Everforest', displayName: 'Everforest' },
    'catppuccin': { name: 'Catppuccin', displayName: 'Catppuccin' },
    'high-contrast': { name: 'High Contrast', displayName: 'High Contrast' },
    'oxocarbon': { name: 'Oxocarbon', displayName: 'Oxocarbon' },
    'dracula': { name: 'Dracula', displayName: 'Dracula' },
    'nord': { name: 'Nord', displayName: 'Nord' },
    'rosepine': { name: 'Rose Pine', displayName: 'Rose Pine' },
    'tokyonight': { name: 'Tokyo Night', displayName: 'Tokyo Night' },
    'solarized': { name: 'Solarized', displayName: 'Solarized' },
    'monokai': { name: 'Monokai', displayName: 'Monokai' },
    'ayu': { name: 'Ayu', displayName: 'Ayu' }
  };

  const currentThemeFamily = localStorage.getItem('themeFamily') || 'gruvbox';
  const currentThemeVariant = localStorage.getItem('themeVariant') || 'dark';

  function updateLogo(variant) {
    if (logoImg) {
      if (variant === 'light') {
        logoImg.src = '/assets/logo-dark.png';
      } else {
        logoImg.src = '/assets/logo.png';
      }
    }
  }

  function applyTheme(family, variant) {
    const html = document.documentElement;
    html.setAttribute('data-theme-family', family);
    html.setAttribute('data-theme-variant', variant);

    localStorage.setItem('themeFamily', family);
    localStorage.setItem('themeVariant', variant);

    if (currentThemeName && themes[family]) {
      currentThemeName.textContent = family;
    }

    themeOptions.forEach(option => {
      option.classList.remove('active');
      if (option.dataset.theme === family) {
        option.classList.add('active');
      }
    });

    if (themeToggle && themeIcon) {
      if (variant === 'light') {
        themeToggle.classList.add('light');
        themeIcon.textContent = '◑';
      } else {
        themeToggle.classList.remove('light');
        themeIcon.textContent = '◐';
      }
    }

    updateLogo(variant);

    // Update Hyvor comments theme
    const comments = document.querySelector('hyvor-talk-comments');
    if (comments) {
      comments.setAttribute('colors', variant);
    }
  }

  applyTheme(currentThemeFamily, currentThemeVariant);

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', function() {
      themeSwitcher.classList.toggle('open');
    });
  }

  document.addEventListener('click', function(e) {
    if (themeSwitcher && !themeSwitcher.contains(e.target)) {
      themeSwitcher.classList.remove('open');
    }
  });

  themeOptions.forEach(option => {
    option.addEventListener('click', function() {
      const selectedFamily = this.dataset.theme;
      const currentVariant = localStorage.getItem('themeVariant') || 'dark';
      applyTheme(selectedFamily, currentVariant);
      themeSwitcher.classList.remove('open');
    });
  });

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentFamily = localStorage.getItem('themeFamily') || 'gruvbox';
      const currentVariant = localStorage.getItem('themeVariant') || 'dark';
      const newVariant = currentVariant === 'dark' ? 'light' : 'dark';
      applyTheme(currentFamily, newVariant);
    });
  }
});
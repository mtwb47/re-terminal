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

  // Function to get random theme
  function getRandomTheme(currentTheme) {
    const themeKeys = Object.keys(themes);
    const availableThemes = themeKeys.filter(key => key !== currentTheme);
    const randomIndex = Math.floor(Math.random() * availableThemes.length);
    return availableThemes[randomIndex];
  }

  // Check if random mode is enabled
  const isRandomMode = localStorage.getItem('randomTheme') === 'true';
  let currentThemeFamily = localStorage.getItem('themeFamily') || 'gruvbox';
  const currentThemeVariant = localStorage.getItem('themeVariant') || 'dark';

  // If random mode is enabled, select a random theme on page load
  if (isRandomMode) {
    currentThemeFamily = getRandomTheme(currentThemeFamily);
    localStorage.setItem('themeFamily', currentThemeFamily);
  }

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

    if (currentThemeName) {
      const isRandom = localStorage.getItem('randomTheme') === 'true';
      if (isRandom) {
        currentThemeName.textContent = 'random';
      } else if (themes[family]) {
        currentThemeName.textContent = family;
      }
    }

    themeOptions.forEach(option => {
      option.classList.remove('active');
      const isRandom = localStorage.getItem('randomTheme') === 'true';
      if (isRandom && option.dataset.theme === 'random') {
        option.classList.add('active');
      } else if (option.dataset.theme === family && !isRandom) {
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
      updateHyvorStyles(comments);
    }
  }

  function updateHyvorStyles(comments) {
    // Get computed styles from current theme
    const styles = getComputedStyle(document.documentElement);

    const cssVars = `
      :host {
        --ht-color-text: ${styles.getPropertyValue('--text-primary').trim()};
        --ht-color-accent: ${styles.getPropertyValue('--accent').trim()};
        --ht-color-accent-text: ${styles.getPropertyValue('--bg-primary').trim()};
        --ht-color-box: ${styles.getPropertyValue('--bg-secondary').trim()};
        --ht-color-box-text: ${styles.getPropertyValue('--text-primary').trim()};
        --ht-color-box-text-light: ${styles.getPropertyValue('--text-secondary').trim()};
        --ht-color-input: ${styles.getPropertyValue('--bg-tertiary').trim()};
        --ht-box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        --ht-box-radius: 4px;
        --ht-box-border: 1px solid ${styles.getPropertyValue('--border').trim()};
        --ht-button-radius: 4px;
      }
    `;

    comments.setAttribute('custom-css', cssVars);
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

      // Handle random theme selection
      if (selectedFamily === 'random') {
        localStorage.setItem('randomTheme', 'true');
        const randomFamily = getRandomTheme(localStorage.getItem('themeFamily'));
        applyTheme(randomFamily, currentVariant);
        if (currentThemeName) {
          currentThemeName.textContent = 'random';
        }
      } else {
        localStorage.setItem('randomTheme', 'false');
        applyTheme(selectedFamily, currentVariant);
      }

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
const container = document.querySelector(".container");
const allMenus = document.querySelectorAll(".menu");

// Hide menus on body click
document.body.addEventListener("click", () => {
  allMenus.forEach(menu => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    }
  });
});

// Reset menus on resize
window.addEventListener("resize", () => {
  allMenus.forEach(menu => {
    menu.classList.remove("open");
  });
});

// Handle desktop menu
allMenus.forEach(menu => {
  const trigger = menu.querySelector(".menu__trigger");
  const dropdown = menu.querySelector(".menu__dropdown");

  trigger.addEventListener("click", e => {
    e.stopPropagation();

    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      // Close all menus...
      allMenus.forEach(m => m.classList.remove("open"));
      // ...before opening the current one
      menu.classList.add("open");
    }

    if (dropdown.getBoundingClientRect().right > container.getBoundingClientRect().right) {
      dropdown.style.left = "auto";
      dropdown.style.right = 0;
    }
  });

  dropdown.addEventListener("click", e => e.stopPropagation());
});

// Handle mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

if (menuToggle && menuItems) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menuItems.classList.toggle('active');
    
    // Animate hamburger to X
    const hamburgers = menuToggle.querySelectorAll('.hamburger');
    hamburgers.forEach((line, index) => {
      if (menuItems.classList.contains('active')) {
        if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
        if (index === 1) line.style.opacity = '0';
        if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        line.style.transform = '';
        line.style.opacity = '';
      }
    });
  });

  // Close mobile menu when clicking elsewhere
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !menuItems.contains(e.target)) {
      menuItems.classList.remove('active');
      const hamburgers = menuToggle.querySelectorAll('.hamburger');
      hamburgers.forEach((line) => {
        line.style.transform = '';
        line.style.opacity = '';
      });
    }
  });

  // Close mobile menu on window resize
  window.addEventListener('resize', () => {
    menuItems.classList.remove('active');
    const hamburgers = menuToggle.querySelectorAll('.hamburger');
    hamburgers.forEach((line) => {
      line.style.transform = '';
      line.style.opacity = '';
    });
  });
}

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
      
      // Close any open dropdowns when mobile menu closes
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
      
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
    
    // Close any open dropdowns when resizing
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
    
    const hamburgers = menuToggle.querySelectorAll('.hamburger');
    hamburgers.forEach((line) => {
      line.style.transform = '';
      line.style.opacity = '';
    });
  });
}

// Handle dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.getElementById('dropdown-toggle');
  const dropdown = document.getElementById('myDropdown');
  
  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', function(event) {
      event.stopPropagation();
      
      const dropdownParent = dropdown.closest('.dropdown');
      
      // Check if we're on mobile
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // On mobile, toggle the parent dropdown's show class
        if (dropdownParent) {
          dropdownParent.classList.toggle("show");
        }
      } else {
        // On desktop, toggle the dropdown content
        dropdown.classList.toggle("show");
      }
    });
  }
});

// Close the dropdown menu if the user clicks outside of it
document.addEventListener('click', function(event) {
  // Check if the click was on the dropdown button or inside the dropdown
  const isDropdownButton = event.target.matches('.dropbtn');
  const isInsideDropdown = event.target.closest('.dropdown');
  
  if (!isDropdownButton && !isInsideDropdown) {
    // Close all dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
    });
    
    const mobileDropdowns = document.querySelectorAll('.dropdown');
    mobileDropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  }
});

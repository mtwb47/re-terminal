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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  const dropdown = document.getElementById("myDropdown");
  const dropdownParent = dropdown.closest('.dropdown');
  
  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // On mobile, toggle the parent dropdown's show class
    dropdownParent.classList.toggle("show");
  } else {
    // On desktop, use the original behavior
    dropdown.classList.toggle("show");
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    // Close desktop dropdowns
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    
    // Close mobile dropdowns
    var mobileDropdowns = document.getElementsByClassName("dropdown");
    for (i = 0; i < mobileDropdowns.length; i++) {
      var openMobileDropdown = mobileDropdowns[i];
      if (openMobileDropdown.classList.contains('show')) {
        openMobileDropdown.classList.remove('show');
      }
    }
  }
}

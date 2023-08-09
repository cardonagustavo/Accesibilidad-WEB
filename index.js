
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu-link");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hideNav();
  });
});

navMenu.addEventListener("focusout", (event) => {
  const isOutsideMenu = !navMenu.contains(event.relatedTarget);

  if (isOutsideMenu) {
    hideNav();
  }
});

function hideNav() {
  navMenu.classList.remove("nav-menu_visible");
}


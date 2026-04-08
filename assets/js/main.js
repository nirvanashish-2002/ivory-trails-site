// NAV SCROLL EFFECT
const nav = document.getElementById("site-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
});

// MOBILE MENU
const hamburger = document.getElementById("nav-hamburger");
const mobileMenu = document.getElementById("nav-mobile-menu");

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", isOpen);
});

// FAQ TOGGLE
document.querySelectorAll(".faq-item__trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
  });
});

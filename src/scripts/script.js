const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("visible");
  nav.classList.toggle("hidden");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      nav.classList.remove("visible");
      nav.classList.add("hidden");
    }
  });
});
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#111";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  } else {
    navbar.style.background = "rgba(0, 0, 50, 0.8)";
    navbar.style.boxShadow = "none";
  }
});
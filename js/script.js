
/* =============================
      Declaring variables
================================ */

// section scroll
let section = document.querySelectorAll("section"),
    navLinks = document.querySelectorAll("header nav a");
// shopping cart
const shopCart = document.getElementById("cartIcon"),
      cartMenu = document.getElementById("cartMenu");
// toggle menu
const toggleIcon = document.getElementById("barIcon"),
      nav = document.querySelector("nav");
// search
const searchIcon = document.getElementById("searchIcon"),
      searchBox = document.getElementById("searchBox");


window.addEventListener("scroll", () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 120;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector("header nav a[href*="+id+"]").classList.add("active");
      });
    };
  });
  cartMenu.classList.remove("active");
  searchBox.classList.remove("active");
  nav.classList.remove("active");
});
shopCart.addEventListener("click", () => {
  cartMenu.classList.toggle("active");
  searchBox.classList.remove("active");
  nav.classList.remove("active");
});
searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  cartMenu.classList.remove("active");
  nav.classList.remove("active");
});
toggleIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  cartMenu.classList.remove("active");
  searchBox.classList.remove("active");
});
const container = document.querySelector(".container");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuLink = document.querySelectorAll(".menu-link");

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 3000);
});

hamburgerMenu.addEventListener("click", () => {
  container.classList.toggle("change");
  menuLink.forEach((link) =>
    link.addEventListener("click", () => container.classList.remove("change"))
  );
});

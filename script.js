const container = document.querySelector(".container");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll(".menu-link");

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 3000);
});

hamburgerMenu.addEventListener("click", () => {
  container.classList.toggle("change");
});

menu.addEventListener("click", function (e) {
  const clicked = e.target.closest(".menu-link");
  if (!clicked) return;
  menuLink.forEach((link) =>
    link.addEventListener("click", () => container.classList.remove("change"))
  );
});

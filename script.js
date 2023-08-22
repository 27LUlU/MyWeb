const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu_item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close_icon");
const menuIcon = document.querySelector(".menu_icon");
const container = document.querySelector(".container");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    container.style.transform = "translateY(0)";
    container.style.borderRadius = "0";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    container.style.transform = "translateY(10vh)";
    container.style.borderRadius = "20px";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

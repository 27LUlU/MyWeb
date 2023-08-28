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
    container.style.top = "0";
    container.style.borderRadius = "0";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    container.style.top = "50px";
    container.style.borderRadius = "10px";
    container.style.transition = "top 0.3s";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

menu.addEventListener("click", function (e) {
  e.preventDefault(); // 阻止element的默认事件，在这里就是href=#section--1/#section--2/#section--3

  // Matching strategy
  if (e.target.classList.contains("menu_item")) {
    const id = e.target.getAttribute("href"); // 此处是e.target而不是this,是因为this指的是currentTarget，即引起元素触发事件的父元素
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
  // console.log(e.target, e.currentTarget);
});

// ------------Menu-------------
import { menu } from "./Data/data.js";
console.log(menu);
let menuSection = document.querySelector(".main_menu");

for (let i = menu.length - 1; i >= 0; i--) {
  console.log(menu[i].picture);
  console.log(menu[i].name);
  let menuItem = document.createElement("div");
  menuItem.setAttribute("class", "menuItem");
  let menuItemImg = document.createElement("img");
  menuItemImg.src = menu[i].picture;
  let menuItemName = document.createElement("span");
  menuItemName.textContent = menu[i].name;
  menuItem.append(menuItemImg, menuItemName);
  menuSection.prepend(menuItem);
}

var owl = document.querySelector(".owl-carousel");
var options = {
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};
var carousel = new OwlCarousel(owl, options);

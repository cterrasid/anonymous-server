"use strict";

const btnMenu = document.querySelector(".nav-trigger");
const btnClose = document.querySelector(".nav-close");
const menu = document.querySelector(".nav");

btnMenu.innerHTML = "";
btnClose.innerHTML = "";

menu.classList.add("hide-menu");
menu.classList.add("show-menu");

btnMenu.addEventListener("click", handleBtnClick);
btnClose.addEventListener("click", handleBtnClick);

function handleBtnClick() {
  menu.classList.toggle("hide-menu");
}

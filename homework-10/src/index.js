import './styles.css'
import "./theme"


import menuList from "./menu.json"
import menuItemTemplate from "./template.hbs"

const menu = document.querySelector(".js-menu");

function buildMenuList(list) {
  const markup = list.map(item => menuItemTemplate(item)).join("");

  menu.insertAdjacentHTML('beforeend', markup);
};

buildMenuList(menuList)

import "./styles.css";
import home from "./pages/home/home.js";
import menu from "./pages/menu/menu.js";
import contact from "./pages/contact/contact.js";

// Load homepage by default
home();

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", () => {
  clearContent();
  home();
});

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => {
  clearContent();
  menu();
});

const contactButton = document.getElementById("contact");
contactButton.addEventListener("click", () => {
  clearContent();
  contact();
});

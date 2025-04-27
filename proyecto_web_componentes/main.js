import './style.css'
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";

document.querySelector("#app").innerHTML = `
  ${Header()}
  ${Main()}
  ${Footer()}
  `;
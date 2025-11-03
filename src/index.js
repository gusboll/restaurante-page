import "./styles.css";
import { createPage } from "./greeting.js";
import { oGauchoPage } from "./ogaucho.js";
import { sobrePage } from "./sobre.js";
import { ONEPage } from "./ondeNosEncontrar.js";

console.log("Hi there!");

createPage();

const homeButton = document.getElementById("homeButton");
const oGauchoButton = document.getElementById("oGauchoButton");
const sobreButton = document.getElementById("sobreButton");
const ONEButton = document.getElementById("ONEButton");

oGauchoButton.addEventListener("click", () =>{
    oGauchoPage ();
})

sobreButton.addEventListener("click", () => {
    sobrePage();
})

ONEButton.addEventListener("click", () => {
    ONEPage();
})

homeButton.addEventListener("click", () => {
    createPage();
})
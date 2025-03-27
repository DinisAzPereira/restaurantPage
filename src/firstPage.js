import logo1000 from "./img/logo1000.png";


export function firstPage() {

const divContent = document.querySelector(".content");
const title = document.createElement("div");
const description = document.createElement("div");
const imageHeaderLogo = document.querySelector(".imageHeaderLogo")
const image = document.createElement("img");
image.src = logo1000;

title.textContent = "1000 Fronteiras"
description.textContent = "Bem vindos ao 1000 fronteiras, nós somos um restaurante que visa ter uma qualidade boa com produtos extramamente frescos."

imageHeaderLogo.appendChild(image);

divContent.appendChild(title);
divContent.appendChild(description);



}
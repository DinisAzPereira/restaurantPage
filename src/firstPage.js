import logo1000 from "./img/logo1000.png";

export function firstPage() {


// imports
const divContent = document.querySelector(".content");
const title = document.createElement("div");
const menuContainer = document.createElement("div");
const description = document.createElement("div");
const imageHeaderLogo = document.querySelector(".imageHeaderLogo")
const image = document.createElement("img");
const horarioContainer = document.createElement("div");
const horarioTitle = document.createElement("div");
const horarioDetails = document.createElement("div");
const leftDetails = document.createElement("div");
const rightDetails = document.createElement("div");
const firstText = document.createElement("p");
const secondText = document.createElement("p");
const thirdText = document.createElement("p");
const fourthText = document.createElement("p");
const fiveText = document.createElement("p");
const sixText = document.createElement("p");







menuContainer.classList.add("menuContainer")
title.classList.add("title");
description.classList.add("description");
horarioContainer.classList.add("horarioContainer");
horarioTitle.classList.add("horarioTitle");
horarioDetails.classList.add("horarioDetails");
leftDetails.classList.add("leftDetails");
rightDetails.classList.add("rightDetails");




// styling
image.src = logo1000;
title.textContent = "1000 Fronteiras"
description.textContent = "Bem vindos ao 1000 fronteiras, nós somos um restaurante que visa ter uma qualidade boa com produtos extramamente frescos."
horarioTitle.textContent = "Horario"
firstText.textContent = "Segunda Feira: 9:00 - 18:00"
secondText.textContent = "Terça Feira: 9:00 - 18:00"
thirdText.textContent = "Quarta Feira: 9:00 - 18:00"
fourthText.textContent = "Quinta Feira: 9:00 - 18:00"
fiveText.textContent = "Sexta Feira: 9:00 - 18:00"
sixText.textContent = "Sabado : 9:00 - 18:00"

// append childs
imageHeaderLogo.appendChild(image);

divContent.appendChild(menuContainer);
menuContainer.appendChild(title);
menuContainer.appendChild(description);
menuContainer.appendChild(horarioContainer);
horarioContainer.appendChild(horarioTitle);
menuContainer.appendChild(horarioDetails);
horarioDetails.appendChild(leftDetails);
horarioDetails.appendChild(rightDetails);
leftDetails.appendChild(firstText);
leftDetails.appendChild(secondText);
leftDetails.appendChild(thirdText);
rightDetails.appendChild(fourthText);
rightDetails.appendChild(fiveText);
rightDetails.appendChild(sixText);







}
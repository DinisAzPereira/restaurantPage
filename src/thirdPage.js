


export function thirdPage() {

    const divContent = document.querySelector(".content");
    const aboutContainer = document.createElement("div");
    const title = document.createElement("div");
    const description = document.createElement("div");


// separação

title.classList.add("title");
aboutContainer.classList.add("aboutContainer");

description.classList.add("description");
aboutContainer.classList.add("aboutContainer");

title.textContent = "About"
description.textContent = "No 1000 Fronteiras, a gastronomia não tem limites! Unimos sabores e tradições de diferentes países para criar uma experiência única. Cada prato é uma viagem pelo mundo, combinando ingredientes autênticos e técnicas inovadoras. Venha descobrir novos horizontes no sabor! 🌍🍽️"



// separação

    divContent.appendChild(aboutContainer);
    aboutContainer.appendChild(title);
    aboutContainer.appendChild(description);

   

}
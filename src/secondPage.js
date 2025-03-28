import ribeye from "./img/ribeye.png";



export function secondPage() {

    const divContent = document.querySelector(".content");
    const cartaContainer = document.createElement("div");
    const foodCard = document.createElement("div");
    const foodImage = document.createElement("img");
    const foodTitle = document.createElement("h2");
    const foodshortDescription = document.createElement("h3");
    const foodPrice = document.createElement("h4");
    const foodButton = document.createElement("button");


            // separação

    cartaContainer.classList.add("cartaContainer");
    foodCard.classList.add("foodCard");
    foodImage.src = ribeye;
    foodTitle.textContent = "Rib Eye Maturado"
    foodshortDescription.textContent = "Rib Eye Feito por um chefe a maneira"
    foodPrice.textContent = "Preço: 35 euros"
    foodButton.textContent = "Pedir"




        // separação
    divContent.appendChild(cartaContainer);
    cartaContainer.appendChild(foodCard);
    foodCard.appendChild(foodImage);
    foodCard.appendChild(foodTitle);
    foodCard.appendChild(foodshortDescription);
    foodCard.appendChild(foodPrice);
    foodCard.appendChild(foodButton);

   

            // separação


    

}
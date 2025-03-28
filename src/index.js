import "./styles.css";
import { firstPage } from "./firstPage.js";
import { secondPage } from "./secondPage";
import { thirdPage } from "./thirdPage.js";

// o código dentro da função só será executado quando o HTML estiver pronto
const content = document.querySelector(".content");


function clearContent() {
    content.innerHTML = ""; // Remove todos os filhos do elemento ".content"
  }
document.addEventListener("DOMContentLoaded", () => {
    // Carrega a primeira página ao carregar o DOM
    firstPage();
  
    // Seleciona o botão "menu" após o DOM estar pronto
    const menu = document.querySelector(".menu");
    const about = document.querySelector(".about");
  
    // Adiciona um evento de clique ao botão "menu"
    menu.addEventListener("click", () => {
      clearContent(); // Remove todo o conteúdo atual
      secondPage();   // Carrega o conteúdo da segunda página
    });

    about.addEventListener("click", () => {
        clearContent(); // Remove todo o conteúdo atual
        thirdPage();   // Carrega o conteúdo da segunda página
      });
  });
  
  // Função para limpar o conteúdo do elemento ".content"

import "./styles.css";
import { firstPage } from "./firstPage.js";

// O código dentro da função só será executado quando o HTML estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  // Chama a função para preencher o conteúdo inicial
  firstPage();

  // Seleciona o botão "menu" após o DOM estar carregado
  const menu = document.querySelector(".Menu");

  // Adiciona um evento de clique ao botão "menu"
  menu.addEventListener("click", async () => {
    const { secondPage } = await import("./secondPage.js"); // Importação dinâmica
    secondPage(); // Chama a função para preencher o <div id="content">
  });
});
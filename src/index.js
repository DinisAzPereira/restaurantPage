import "./styles.css";
import { firstPage } from "./firstPage.js";
// o código dentro da função só será executado quando o HTML estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    firstPage(); // Chama a função para preencher o <div id="content">
});
const botao = document.getElementById("mostrarOcultar");
const texto = document.getElementById("texto");

botao.addEventListener("click", () => {
    if (texto.style.display === "none") {
        texto.style.display = "block";
        botao.textContent = "Ocultar";
    } else {
        texto.style.display = "none";
        botao.textContent = "Mostrar";
    }
});
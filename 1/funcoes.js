document.getElementById("mudarCorFundo").addEventListener("click", () => {
  const body = document.body;

  function gerarCorAleatoria() {
    const letras = "0123456789abcdef";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
  }

  body.style.backgroundColor = gerarCorAleatoria();
});

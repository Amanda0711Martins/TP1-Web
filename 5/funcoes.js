function aumentar() {
  let contador = document.getElementById('cont');
  let incrementar = parseInt(contador.textContent);
  incrementar++;
  contador.textContent = incrementar;
}
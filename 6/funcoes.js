const btnLamp = document.getElementById('btn-lamp');
const lampada = document.querySelector('.lampada');

function clicarLamp() {
  lampada.classList.toggle('ligada');

  if (lampada.classList.contains('ligada')) {
    btnLamp.textContent = 'Desligar';
  } else {
    btnLamp.textContent = 'Ligar';
  }
}

btnLamp.addEventListener('click', clicarLamp);
// Obtenemos elementos del DOM
const coin = document.getElementById('coin');
const front = document.getElementById('front');
const back = document.getElementById('back');
const caraScore = document.getElementById('caraScore');
const cruzScore = document.getElementById('cruzScore');
const flipButton = document.getElementById('flipButton');
const resetButton = document.getElementById('resetButton');

let caraCount = 0;
let cruzCount = 0;
let animationRunning = false;

// Función para girar la moneda
function flipCoin() {
  if (animationRunning) {
    return;
  }

  // Generamos un número aleatorio entre 0 y 1
  const result = Math.random();

  // Actualizamos la animación de la moneda
  coin.style.animationPlayState = 'running';
  animationRunning = true;

  // Deshabilitamos el botón de girar durante la animación
  flipButton.disabled = true;

  // Cambiamos la cara mostrada después de un tiempo
  setTimeout(function() {
    if (result < 0.5) {
      front.style.transform = 'rotateY(180deg)';
      back.style.transform = 'rotateY(0deg)';
      caraCount++;
      caraScore.textContent = caraCount;
    } else {
      front.style.transform = 'rotateY(0deg)';
      back.style.transform = 'rotateY(180deg)';
      cruzCount++;
      cruzScore.textContent = cruzCount;
    }

    // Detenemos la animación de la moneda
    coin.style.animationPlayState = 'paused';
    animationRunning = false;

    // Habilitamos nuevamente el botón de girar
    flipButton.disabled = false;
  }, 1000);
}

// Función para reiniciar el juego
function resetGame() {
  caraCount = 0;
  cruzCount = 0;
  caraScore.textContent = caraCount;
  cruzScore.textContent = cruzCount;

  // Reiniciamos la animación de la moneda
  coin.style.animationPlayState = 'paused';
  coin.style.animation = '';
  void coin.offsetWidth; // Reiniciamos la animación
  coin.style.animation = 'rotate 1s infinite linear';
}

// Agregamos event listeners a los botones
flipButton.addEventListener('click', flipCoin);
resetButton.addEventListener('click', resetGame);

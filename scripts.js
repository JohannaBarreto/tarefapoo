// script.js
let secretNumber = Math.floor(Math.random() * 100) + 1;
let maxAttempts = 10;
let attempts = 0;

document.getElementById("button-guess").addEventListener("click", guessNumber);

function guessNumber() {
  let guess = parseInt(document.getElementById("input-guess").value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("message").innerText = "Insira um número válido entre 1 e 100!";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    document.getElementById("message").innerText = `Você acertou! O número secreto era ${secretNumber}.`;
    document.getElementById("button-guess").disabled = true;
  } else if (guess < secretNumber) {
    document.getElementById("message").innerText = "O número secreto é maior!";
  } else {
    document.getElementById("message").innerText = "O número secreto é menor!";
  }

  document.getElementById("attempts-remaining").innerText = `Tentativas restantes: ${maxAttempts - attempts}`;

  if (attempts >= maxAttempts) {
    document.getElementById("message").innerText = `Você perdeu! O número secreto era ${secretNumber}.`;
    document.getElementById("button-guess").disabled = true;
  }
}


let randomNumber = Math.floor(Math.random() * 50) + 1;

function checkGuess() {
  let myGuess = parseInt(document.getElementById('myGuess').value);

  const info = document.getElementById('info');

  if (isNaN(myGuess)) {
    info.textContent = 'Nu ai introdus un numar valid.';
    return;
  }

  if (myGuess < randomNumber) {
    info.textContent = 'Numarul este prea mic';
  } else if (myGuess > randomNumber) {
    info.textContent = 'Numarul este prea mare';
  } else {
    info.textContent = 'Ai ghicit! Numarul este ' + randomNumber;
  }
}

// aici nu s-a inverzit pixeltab, nu stiu de ce.

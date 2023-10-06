const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');

function clickHandler() {
  alert('Ai apasat butonul.');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

console.warn(`Adauga un buton nou in document cu id-ul query
si folosind addEventListener() ataseaza un eveniment care sa foloseasca metoda prompt()
pentru a afla varsta utilizatorului. (fara validari, sau optional)`);

const ageButton = document.getElementById('query');
const messageParagraph = document.getElementById('message');

ageButton.addEventListener('click', function () {
  const userAge = prompt('Care este varsta ta?');
  let message = '';

  if (userAge === null) {
    message = 'Utilizatorul a anulat.';
  } else if (isNaN(userAge) || userAge === '') {
    message = 'Va rugam sa introduceti un numar valid.';
  } else {
    message = `Ai ${userAge} ani.`;
  }

  messageParagraph.innerText = message;
});

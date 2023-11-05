const image = document.querySelector('.image');

const loadingMessage = document.createElement('p');
loadingMessage.innerText = 'Imaginea se incarca...';
document.body.insertBefore(loadingMessage, image);

function showMessage(message) {
  loadingMessage.innerText = message;
}

image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat');

  image.addEventListener('click', function () {
    alert(`Imagea cu URLul: ${this.src} s-a incarcat`);
  });
});

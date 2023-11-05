const controls = document.querySelector('.controls');
const boxes = document.querySelectorAll('.box');
const colorInput = controls.querySelector('.color-input');
const resetButton = controls.querySelector('.reset-button');

function changeBoxColor(box, color) {
  const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  if (hexColorRegex.test(color) || color === '') {
    box.style.backgroundColor = color;
  }
}

controls.addEventListener('click', function (event) {
  const target = event.target;

  if (target.nodeName === 'BUTTON' && target.dataset.color !== undefined) {
    const selectedBoxRadio = document.querySelector(
      '.box input[type="radio"]:checked',
    );
    if (selectedBoxRadio) {
      const selectedBox = selectedBoxRadio.closest('.box');
      changeBoxColor(selectedBox, target.dataset.color);

      target.style.backgroundColor = target.dataset.color;
    }
  }
});

colorInput.addEventListener('input', function (event) {
  const color = event.currentTarget.value;
  const userDefinedButton = controls.querySelector('button[data-color=""]');
  userDefinedButton.dataset.color = color;
});

resetButton.addEventListener('click', function () {
  boxes.forEach((box) => {
    box.removeAttribute('style');
  });

  document.querySelectorAll('.box input[type="radio"]').forEach((radio) => {
    radio.checked = false;
  });

  controls.querySelectorAll('button').forEach((button) => {
    button.style.backgroundColor = '';
    button.dataset.color = button.textContent.toLowerCase();
  });

  colorInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  controls.querySelectorAll('button').forEach((button) => {
    if (button.textContent.toLowerCase() !== 'user defined') {
      button.dataset.color = button.textContent.toLowerCase();
    }
  });
});

var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputHeight = document.getElementById('height');
var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();

    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var height = inputHeight.value || 0;
    var radius = inputRadius.value || 0;
    var result = 0;

    result = (4 / 3) * Math.PI * Math.pow(radius, 3);

    elementResult.innerText = result;
  },
  false,
);

function calculateRectangleArea(width, length) {
  const area = width * length;

  return area;
}

console.warn(
  `Folosind functia calculateRectangleArea(),
  afiseaza suprafata unui dreptunghi de 4 pe 3`,
);

console.log(calculateRectangleArea(3, 4));

console.warn(
  `Afiseaza suprafata totala a unor
  dreptunghiuri de 5 pe 3, respectiv 3 pe 2.
  Foloseste variabile.`,
);

const rectangle1Surface = calculateRectangleArea(5, 3);
const rectangle2Surface = calculateRectangleArea(3, 2);

console.log(rectangle1Surface);
console.log(rectangle2Surface);
console.log(rectangle1Surface + rectangle2Surface);

const squareSurface = calculateRectangleArea(3, 3);

console.log(squareSurface);

console.warn(`Folosind functia calculateRectangleArea(),
afiseaza suprafata unui dreptunghi de 12 pe 9`);

function calculateRectangleArea(length, width) {
  return length * width;
}

const rectangleArea = calculateRectangleArea(12, 9);
console.log(rectangleArea);

console.log(`Afiseaza suprafata totala a trei dreptunghiuri
de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.`);

function calculateRectangleArea(length, width) {
  return length * width;
}

const rectangleArea1 = calculateRectangleArea(15, 31);
const rectangleArea2 = calculateRectangleArea(8, 9);
const rectangleArea3 = calculateRectangleArea(10, 5);

console.log(rectangleArea1 + rectangleArea2 + rectangleArea3);

console.warn(
  `Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.`,
);

function calculateSquareArea(length, width) {
  return length * width;
}

const anotherSquare = calculateSquareArea(8, 8);

console.log(anotherSquare);

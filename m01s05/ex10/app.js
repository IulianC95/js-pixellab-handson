function calculateSurface(width, length) {
  if (arguments.length === 2) {
    return width * length;
  } else {
    return width ** 2;
  }
}

console.log('Suprafata unui patrat de 2 pe 2', calculateSurface(2));
console.log('suprafata unui dreptungi de 6 pe 7', calculateSurface(6, 7));

console.warn(`Creeaza un wrapper numit calculateSquareSurface() pentru calculateSurface(),
care sa primeasca un singur parametru si sa calculeze suprafata unui patrat. `);
console.warn(`Cu metoda noua calculeaza suprafata unui patrat de 4 pe 4. `);

function calculateSquareSurface(side) {
  return calculateSurface(side);
}
console.log(calculateSquareSurface(4, 4));

console.warn(`Creeaza un wrapper numit calculateRectangleSurface() pentru calculateSurface()
care sa primeasca doi parametrii si sa calculeze suprafata unui dreptunghi.
Cu metoda noua calculeaza suprafata unui dreptunghi de 8 pe 9.
`);
function calculateRectangleSurface(width, length) {
  return calculateSurface(width, length);
}

console.log(calculateRectangleSurface(8, 9));

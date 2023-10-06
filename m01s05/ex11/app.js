console.warn(`Creeaza o functie overloaded pentru calcularea suprafetelor
 numita calculateSurface. Daca primeste un parametru, sa calculeze
 suprafata unui patrat. Daca primeste doi, a unui dreptunghi.
 Daca primeste trei, sa calculeze suprafata totala a paralelipipedului.
 Foloseste structura switch.
`);

function calculateSurface(...args) {
  let surface;
  switch (args.length) {
    case 1:
      surface = args[0] * args[0];
      break;
    case 2:
      surface = args[0] * args[1];
      break;
    case 3:
      surface = 2 * (args[0] * args[1] + args[1] * args[2] + args[0] * args[2]);
      break;
    default:
      return 'Numar invalid de argumente';
  }
  return surface;
}

console.log(calculateSurface(2));
console.log(calculateSurface(6, 7));
console.log(calculateSurface(5, 15, 20));

console.warn(`Creeaza o functie numita calculateCircleArea() si
 afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. `);

function calculateCircleArea(radius) {
  const pi = Math.PI;
  return pi * Math.pow(radius, 2);
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta
animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);

const pet = {
  getName: function () {
    return 'Rex';
  },
  getSpecies: function () {
    return 'caine';
  },
  getAge: function () {
    return 5;
  },
};

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);

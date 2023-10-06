var person = {
  firstName: 'Iulian',
  lastName: 'Cuculici',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal.`,
);

person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);

var sumAge = 0;

for (var i = 0; i < person.pets.length; i++) {
  sumAge += person.pets[i].age;
}

console.log(sumAge);

console.warn(`Folosind forEach(), afiseaza cate una pe linie propozitiile:
 “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`);

person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`Folosind o bucla for, afiseaza cate una pe linie propozitiile:
“Intre Dragos si Twix este o diferenta de xx ani.
Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);

var personAge = new Date().getFullYear() - person.birthYear;

for (var i = 0; i < person.pets.length; i++) {
  var ageDiff = Math.abs(personAge - person.pets[i].age);
  console.log(
    `Intre ${person.firstName} si ${person.pets[i].name} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(`Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array
 sub forma de propozitii: “Animalul meu se numeste xxxx.”. `);

for (var i = person.pets.length - 1; i >= 0; i--) {
  console.log(`Animalul meu se numeste ${person.pets[i].name}.`);
}

console.warn(`Folosind o bucla for, afla care este cel mai in varsta animal
si afiseaza propozitia: “xxx este cel mai batran animal pe care il am,
dar intre noi este o diferenta de xx ani.” Salveaza primul pet intr-o
variabila numita oldestPet si porneste bucla, daca varsta animalului
curent din bucla este mai mare decat oldestPet.age, atunci oldestPet
devine animalul curent.`);

var oldestPet = person.pets[0];
var personAge = new Date().getFullYear() - person.birthYear;

for (var i = 1; i < person.pets.length; i++) {
  if (person.pets[i].age > oldestPet.age) {
    oldestPet = person.pets[i];
  }
}

var ageDiff = Math.abs(personAge - oldestPet.age);
console.log(
  `${oldestPet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(`Folosind o bucla forEach, afiseaza propozitia:
 “Am papagal, caine, hamster si pisica.”.`);

var speciesList = [];
person.pets.forEach(function (pet) {
  speciesList.push(pet.species);
});

var speciesString =
  speciesList.slice(0, -1).join(', ') + ' si ' + speciesList.slice(-1);

console.log(`Am ${speciesString}.`);

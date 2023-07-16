var person = {
  firstName: 'Patrick',
  lastName: 'Jane',
  email: 'patrickjane@cbi.com',
  birthYear: 1975,
  pets: [
    { name: 'Spike', species: 'Caine', age: 5 },
    { name: 'Tom', species: 'Pisica', age: 3 },
    { name: 'Jerry', species: 'Soarece', age: 50 },
  ],
  zipCode: '12345',
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

var animalCount = person.pets.length;
var cat = person.pets[1].species;
var catAge = person.pets[1].age;

console.log(
  `Unul din cele ${animalCount} animale ale mele este ${cat} si are ${catAge} ani.`,
);

var currentYear = new Date().getFullYear();
var mouse = 2;
var pet = person.pets[mouse];
mouseAge = person.pets[2].age;
var mouseBirthYear = currentYear - mouseAge;

console.log(mouseBirthYear.toString());

var dogAge = person.pets[0].age;
var personAge = new Date().getFullYear() - person.birthYear;
difference = personAge - dogAge;

console.log(difference.toString());

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ` este o diferenta de ${difference} ani.`,
);

document.getElementById(
  'prop01',
).innerHTML = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa`;

document.getElementById('prop02').innerHTML = (
  person.pets[0].age - person.pets[2].age
).toString();

document.getElementById('prop03').innerHTML =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode;

var dogBirthYear = currentYear - person.pets[0].age;
var catBirthYear = currentYear - person.pets[1].age;

document.getElementById(
  'prop04',
).innerHTML = `Animalele mele s-au nascut in ${dogBirthYear}, ${catBirthYear}, respectiv ${mouseBirthYear}.`;

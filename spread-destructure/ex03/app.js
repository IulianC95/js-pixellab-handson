let person1 = {
  name: 'Steven',
  surname: 'Stevenson',
};

let person2 = {
  name: 'Rolf',
  surname: 'Rolfson',
};

let person3 = {
  name: 'Andra',
  surname: 'Andrason',
};

let age1 = {
  age: 20,
};

let age2 = {
  age: 25,
};

const fullPerson1 = {
  ...person1,
  ...age1,
};
console.log(fullPerson1);

const fullPerson2 = {
  ...person2,
  age: 40,
};

console.log(fullPerson2);

const fullPerson3 = {
  ...person3,
  ...age2,
};
console.log(fullPerson3);

const fullPerson4 = {
  ...fullPerson3,
  surname: 'Anita',
  age: 36,
};
console.log(fullPerson4);

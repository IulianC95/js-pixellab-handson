let person1 = {
  name: 'Larry',
  surname: 'Larryson',
};

let person2 = {
  name: 'Ben',
  surname: 'Benson',
};

let age1 = {
  age: 20,
};

const fullPerson1 = {
  age: 29,
  name: person2,
  surname: person2,
};

const fullPerson2 = {
  age: age1,
  name: person1,
  surname: person1,
};

const fullPerson3 = {
  age: 24,
  name: 'Carl',
  surname: fullPerson2,
};

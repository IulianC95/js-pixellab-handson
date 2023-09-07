var person = {
  name: 'Iulian',
  surname: 'Cuculici',
  age: 28,
  petOwner: false,
  skills: ['html', 'javascript', 'css', 'HTML', 'CSS'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Afiseaza propozitia: Ma numesc xxx yyy si stiu html si css. Foloseste notatia cu paranteze patrate`,
);

console.log(person.friends);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.warn(
  `Afiseaza propozitia "Sunt xxx si acum invat JavaScript. Nu folosi valoare din arrayul de skills.`,
);
console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

// console.log(
//   'Am ' +
//     person.friends.length +
//     ' prieteni: ' +
//     person.friends
//       .map(function (friend) {
//         return friend.name;
//       })
//       .join(', ') +
//     '.',
// );

console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);

// console.log(
//   'Am ' +
//     person.friends.length +
//     ' prieteni: ' +
//     person.friends
//       .map(function (friend, index) {
//         if (index === person.friends.length - 2) {
//           return friend.name + ' si';
//         } else if (index === person.friends.length - 1) {
//           return friend.name;
//         } else {
//           return friend.name + ',';
//         }
//       })
//       .join(' ') +
//     '.',
// );

console.log(
  'Ma numesc ' +
    person['name'] +
    ' ' +
    person['surname'] +
    ' si vreau sa invat ' +
    person['skills'][1] +
    '.',
);

console.log(
  'Sunt ' +
    person['name'] +
    ' si stiu ' +
    person['skills'][3] +
    ' si ' +
    person['skills'][4] +
    '.',
);

console.log(
  'Am 3 prieteni: ' +
    person.friends
      .map(function (friend, index) {
        if (index === person.friends.length - 2) {
          return friend.surname + ' si';
        } else if (index === person.friends.length - 1) {
          return friend.surname;
        } else {
          return friend.surname + ',';
        }
      })
      .join(' ') +
    '.',
);

console.log(
  'Numele meu este ' +
    person['name'] +
    ' ' +
    person['surname'] +
    ', am ' +
    person['age'] +
    ' ani si ' +
    person['friends'].length +
    ' prieteni.',
);

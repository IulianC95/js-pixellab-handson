var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'JavaScript', 'css'],
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

console.log(person.friends);

console.log(
  'Ma numesc ' +
    person['name'] +
    ' ' +
    person['surname'] +
    ' si stiu ' +
    person['skills'][0] +
    ' si ' +
    person['skills'][2] +
    '.',
);

console.log(
  'Sunt ' + person['name'] + ' si acum invat ' + person['skills'][1] + '.',
);

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
    person.friends
      .map(function (friend, index) {
        if (index === person.friends.length - 2) {
          return friend.name + ' si';
        } else if (index === person.friends.length - 1) {
          return friend.name;
        } else {
          return friend.name + ',';
        }
      })
      .join(' ') +
    '.',
);

// am ramas la ex de la pagina 33

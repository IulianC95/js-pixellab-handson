var person = {
  name: 'Iulian',
  surname: 'Cuculici',
  friends: {
    // larry: {
    //   name: 'Larry',
    //   surname: 'Larryson',
    // },
    // carol: {
    //   name: 'Carol',
    //   surname: 'Carolson',
    // },
    // steven: {
    //   name: 'Steven',
    //   surname: 'Stevenson',
    // },
    // andra: {
    //   name: 'Andra',
    //   surname: 'Andrason',
    // },
    // person: {
    //   name: 'Person',
    //   surname: 'Personson',
    // },
  },
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {
    // steven: {
    //   name: 'Steven',
    //   surname: 'Stevenson',
    // },
    // person: {
    //   name: 'Person',
    //   surname: 'Personson',
    // },
  },
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {
    // andra: {
    //   name: 'Andra',
    //   surname: 'Andrason',
    // },
    // person: {
    //   name: 'Person',
    //   surname: 'Personson',
    // },
  },
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {
    // larry: {
    //   name: 'Larry',
    //   surname: 'Larryson',
    // },
    // andra: {
    //   name: 'Andra',
    //   surname: 'Andrason',
    // },
  },
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {
    // steven: {
    //   name: 'Steven',
    //   surname: 'Stevenson',
    // },
    // carol: {
    //   name: 'Carol',
    //   surname: 'Carolson',
    // },
    // person: {
    //   name: 'Person',
    //   surname: 'Personson',
    // },
  },
};

// var person = {
//   name: 'Person',
//   surname: 'Personson',
//   friends: {
//     // larry: {
//     //   name: 'Larry',
//     //   surname: 'Larryson',
//     // },
//   },
// };

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
andra.friends.person = person;

andra.friends.carol = carol;
carol.friends.andra = andra;

console.warn(
  `Folosing keywordul delete, sterge prietenia dintre Person si Larry (si inevrs).`,
);

delete person.friends.larry;
delete larry.friends.person;

console.warn(`Afiseaza numele complet al lui Person folosind obiectul Larry.`);
console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.warn(`Afiseaza numele complet a lui Larry folosind obiectul person.`);

console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.warn(
  `Folosind obiectul Carol, afiseaza numele complet inversat al lui Person.`,
);
console.log(
  carol.friends.andra.friends.surname + ` ` + carol.friends.andra.friends.name,
);

console.warn(
  `Folosind obiectul Andra, afiseaza numarul total de caractere al numelui complet al lui Person.`,
);

console.log(
  (andra.friends.person.name + andra.friends.person.surname).length.toString(),
);

// console.log(person.name + ' ' + person.surname);
// console.log(person.friends.larry.name + ' ' + person.friends.larry.surname);
// console.log((person.name.length + person.surname.length).toString());

// // console.log(person.friends.larry.name + ' ' + person.friends.larry.surname);
// // console.log(larry.friends.person.name + ' ' + larry.friends.person.surname);

// console.log(carol.friends.person.surname + ' ' + carol.friends.person.name);
// console.log(
//   (
//     andra.friends.person.name.length + andra.friends.person.surname.length
//   ).toString(),
// );

var person = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
    },
    andra: {
      name: 'Andra',
      surname: 'Andrason',
    },
    person: {
      name: 'Person',
      surname: 'Personson',
    },
  },
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
    },
    person: {
      name: 'Person',
      surname: 'Personson',
    },
  },
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {
    andra: {
      name: 'Andra',
      surname: 'Andrason',
    },
    person: {
      name: 'Person',
      surname: 'Personson',
    },
  },
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
    },
    andra: {
      name: 'Andra',
      surname: 'Andrason',
    },
  },
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
    },
    person: {
      name: 'Person',
      surname: 'Personson',
    },
  },
};

var person = {
  name: 'Person',
  surname: 'Personson',
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
    },
  },
};

console.log(person.name + ' ' + person.surname);
console.log(person.friends.larry.name + ' ' + person.friends.larry.surname);
console.log((person.name.length + person.surname.length).toString());

// delete person.friends.larry;
// delete larry.friends.person;

// console.log(person.friends.larry.name + ' ' + person.friends.larry.surname);
// console.log(larry.friends.person.name + ' ' + larry.friends.person.surname);

console.log(carol.friends.person.surname + ' ' + carol.friends.person.name);
console.log(
  (
    andra.friends.person.name.length + andra.friends.person.surname.length
  ).toString(),
);

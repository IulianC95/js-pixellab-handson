let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
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

console.warn(`Folosind destructurarea, salveaza al
 doilea skill din array-ul skill (skill2) si
afiseaza propozitia: “Vreau sa invat javascript.”.`);

const {
  skills: [, skill2],
} = person;

console.log(`Vreau sa invat ${skill2}.`);

console.warn(
  `Intr-un mod similar, destructureaza arrayul friends
  pentru a obtine obiectul de pe indexul 2 apoi destructureaza
   obiectul obtinut in variabilele friend3Name, friend3Surname
   si friend3Age astfel incat sa le poti folosi in propozitia:
   Ma numesc Carol Carolson  si am 29 de ani. `,
);

const {
  friends: [, , friend2],
} = person;

const friend3Name = friend2.name;
const friend3Surname = friend2.surname;
const friend3Age = friend2.age;

console.log(
  `Ma numesc ${friend3Name} ${friend3Surname} si am ${friend3Age} de ani.`,
);

console.warn(`Destructureaza obiectul person pentru a obtine variabile
numite myName si mySurname, astfel incat sa poti afisa propozitia:
“Ma numesc Iordache Dragos.”.`);

const { name: myName, surname: mySurname } = person;

console.log(`Ma numesc ${myName} ${mySurname}.`);

console.warn(`Destructureaza arrayul friends si
obiectul de pe indexul 1 (friend2) pentru a putea afisa propozitia:
“Ma numesc Steven Stevenson si am 31 de ani.”.`);

const {
  friends: [, secondFriend],
} = person;

const {
  name: secondFriendName,
  surname: secondFriendSurname,
  age: secondFriendAge,
} = secondFriend;

console.log(
  `Ma numesc ${secondFriendName} ${secondFriendSurname} si am ${secondFriendAge} de ani.`,
);

const person = {
  name: 'Iulian',
  surname: 'Cuculici',
  age: 36,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
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

console.warn(`Folosind fisierele de la exercitiul 06 si doua bucle
for imbricate (nested), afiseaza diferenta de varsta dintre fiecare
membru al arrayului friends si ceilalti membri.
Poti folosi metoda pentru a converti numerele negative in pozitive. `);

for (let i = 0; i < person.friends.length; i++) {
  for (let j = 0; j < person.friends.length; j++) {
    if (i !== j) {
      const friend1 = person.friends[i];
      const friend2 = person.friends[j];
      const ageDiff = Math.abs(friend1.age - friend2.age);

      console.log(
        `Intre ${friend1.name} si ${friend2.name} este o diferenta de ${ageDiff} ani.`,
      );
    }
  }
}

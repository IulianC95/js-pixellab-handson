var services = [
  {
    name: 'Mailchimp',
    adoption: 2010,
  },
  {
    name: 'Google Analytics',
    adoption: 2009,
  },
  {
    name: 'Stripe',
    adoption: 2020,
  },
  {
    name: 'Hotjar',
    adoption: 2021,
  },
  {
    name: 'Sendgrid',
    adoption: 2022,
  },
];

console.warn(`Afiseaza in consola propozitia “Siteul
foloseste urmatoarele servicii: a, b, c, d si e.”`);

var serviceNames = [];

for (var i = 0; i < services.length; i++) {
  serviceNames.push(services[i].name);
}

var lastService = serviceNames.pop();
var message =
  `Siteul foloseste urmatoarele servicii: ${serviceNames.join(', ')}` +
  ` si ${lastService}.`;

console.log(message);

console.warn(`Afiseaza doar numele serviciilor integrate dupa
2020 intr-o propozitie de forma
 “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”`);

var recentServices = [];

for (var i = 0; i < services.length; i++) {
  if (services[i].adoption >= 2020) {
    recentServices.push(services[i].name);
  }
}

var sentence = `Serviciile ${recentServices.join(
  ', ',
)} au fost adoptate dupa 2020 inclusiv.`;

console.log(sentence);

console.warn(`Afiseaza doar pentru serviciile de pe pozitii pare,
cate una pe linie, propozitii de
forma “Serviciul se numeste xxx si a fost integrat in yyyy.”`);

for (var i = 0; i < services.length; i++) {
  if (i % 2 === 0) {
    console.log(
      `Serviciul se numeste ${services[i].name} si a fost integrat in ${services[i].adoption}.`,
    );
  }
}

console.warn(`Folosind anul curent afiseaza propozitii de
forma “Siteul foloseste serviciul xxx de yyy ani.”`);

var currentYear = new Date().getFullYear();

for (var i = 0; i < services.length; i++) {
  var years = currentYear - services[i].adoption;
  console.log(
    `Siteul foloseste serviciul ${services[i].name} de ${years} ani.`,
  );
}

console.warn(`Gaseste cel mai vechi serviciu si afiseaza o
propozitie de forma “Folosim xxx de yyy ani.”`);

var oldestService = services[0];
var currentYear = new Date().getFullYear();

for (var i = 1; i < services.length; i++) {
  if (services[i].adoption < oldestService.adoption) {
    oldestService = services[i];
  }
}

var years = currentYear - oldestService.adoption;
console.log(`Folosim ${oldestService.name} de ${years} ani.`);

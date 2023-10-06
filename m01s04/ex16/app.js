var cart = {
  name: 'Iulian',
  surname: 'Cuculici',
  email: 'iuliancuculici@gmail.com',
  products: [
    {
      category: 'PC and Laptop',
      name: 'Mouse',
      price: 200,
      quantity: 2,
      weight: 100,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard Mat',
      price: 119,
      quantity: 1,
      weight: 90,
    },
    {
      category: 'Mobile',
      name: 'USB Multicharger',
      price: 150,
      quantity: 3,
      weight: 15,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard',
      price: 480,
      quantity: 1,
      weight: 200,
    },
    {
      category: 'Mobile',
      name: 'Phone dock',
      price: 200,
      quantity: 2,
      weight: 350,
    },
    {
      category: 'Home',
      name: 'Picture Frame',
      price: 800,
      quantity: 1,
      weight: 150,
    },
  ],
};

console.warn(`Afiseaza in consola propozitia: “name surname are
 x tipuri de produse in cart.”`);

var uniqueProducts = 0;

cart.products.forEach(function () {
  uniqueProducts++;
});

console.log(
  `${cart.name} ${cart.surname} are ${uniqueProducts} tipuri de produse in cart.`,
);

console.warn(`Afiseaza propozitia: “name are urmatoarele produse in
cart: a, b, c, d, e si f.”
`);

var productNames = [];
cart.products.forEach(function (product) {
  productNames.push(product.name);
});

var lastProduct = productNames.pop();
var message =
  `${cart.name} are urmatoarele produse in cart: ${productNames.join(', ')}` +
  ` si ${lastProduct}.`;

console.log(message);

console.warn(
  `Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.”`,
);

var totalValue = 0;

cart.products.forEach(function (product) {
  totalValue += product.price * product.quantity;
});

console.log(`Valoarea totala a cartului lui ${cart.name} este ${totalValue}.`);

console.warn(
  `Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”`,
);

var totalWeight = 0;

cart.products.forEach(function (product) {
  totalWeight += product.weight * product.quantity;
});

console.log(
  `Greutatea totala a cartului lui ${cart.name} este ${totalWeight}.`,
);

console.warn(`Afiseaza propozitia “Name isi cumpara un total de xxx produse.”`);

var totalProducts = 0;

cart.products.forEach(function (product) {
  totalProducts += product.quantity;
});

console.log(`${cart.name} isi cumpara un total de ${totalProducts} produse.`);

console.warn(`Afiseaza propozitia “Cartul contine produse din
categoria Mobile in valoare totala de xxx.”`);

var totalValueMobile = 0;

cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    totalValueMobile += product.price * product.quantity;
  }
});

console.log(
  `Cartul contine produse din categoria Mobile in valoare totala de ${totalValueMobile}.`,
);

console.warn(`Afiseaza propozitia “Greutatea totala a produselor
din categoria Mobile este xxx.”`);

totalWeightMobile = 0;

cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    totalWeightMobile += product.weight * product.quantity;
  }
});

console.log(
  `Greutatea totala a produselor din categoria Mobile este ${totalWeightMobile}.`,
);

console.warn(
  `Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”`,
);

totalSinglePrice = 0;

cart.products.forEach(function (product) {
  totalSinglePrice += product.price;
});

console.log(`Totalul pretului per produs din cart este ${totalSinglePrice}.`);

console.warn(`Defineste o variabila numita maximumBudget de tip number
cu o valoare arbitrara pozitiva.
`);

var maximumBudget = 3000;
var maximumWeight = 1000;

console.warn(
  `Afiseaza propozitia: “Nume prenume isi permite | nu isi permite cartul.” `,
);

totalPrice = 0;

cart.products.forEach(function (product) {
  totalPrice += product.price * product.quantity;
});
if (totalPrice > maximumBudget) {
  console.log(`${cart.name} ${cart.surname} nu isi permite cartul.`);
} else {
  console.log(`${cart.name} ${cart.surname} isi permite cartul.`);
}

console.warn(`Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.”
In functie de greutatea totala a produselor din cart.`);

totalWeight = 0;

cart.products.forEach(function (product) {
  totalWeight += product.quantity * product.weight;
});

if (totalWeight > maximumWeight) {
  console.log(`Firma de curierat nu poate livra comanda.`);
} else {
  console.log(`Firma de curierat poate livra comanda.`);
}

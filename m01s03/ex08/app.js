var cart = {
  id: 'cart-id-12345',
  ownerId: 'user-id-54321',
  firstName: 'Dragos',
  lastName: 'Iordache',
  email: 'dragos.iordache@pixellab.ro',
  products: [
    {
      id: 'product-id-0',
      name: 'Mouse',
      price: 200,
      quantity: 2,
    },
    {
      id: 'product-id-1',
      name: 'Keyboard',
      price: 480,
      quantity: 1,
    },
    {
      id: 'product-id-1',
      name: 'Keyboard Mat',
      price: 119,
      quantity: 1,
    },
  ],
};

document.getElementById('prop01').innerHTML =
  'Numele meu este ' +
  cart.firstName +
  ' ' +
  cart.lastName +
  ' iar emailul meu este: ' +
  cart.email +
  '.';

console.log(
  'Numele meu este ' +
    cart.firstName +
    ' ' +
    cart.lastName +
    ' iar emailul meu este: ' +
    cart.email +
    '.',
);

document.getElementById('prop02').innerHTML =
  'Utilizatorul cu idul ' +
  cart.ownerId +
  ' are ' +
  cart.products.length +
  ' tipuri de produse in cartul cu idul ' +
  cart.id +
  '.';

console.log(
  'Utilizatorul cu idul ' +
    cart.ownerId +
    ' are ' +
    cart.products.length +
    ' tipuri de produse in cartul cu idul ' +
    cart.id +
    '.',
);

document.getElementById('prop03').innerHTML =
  'Al treilea produs pe care il cumpara ' +
  cart.firstName +
  ' este ' +
  cart.products[2].name +
  '.';

console.log(
  'Al treilea produs pe care il cumpara ' +
    cart.firstName +
    ' este ' +
    cart.products[2].name +
    '.',
);

document.getElementById('prop04').innerHTML =
  cart.firstName +
  ' ' +
  cart.lastName +
  ' cumpara ' +
  (cart.products.length + 1) +
  ' produse in total.';

console.log(
  cart.firstName +
    ' ' +
    cart.lastName +
    ' cumpara ' +
    (cart.products.length + 1) +
    ' produse in total.',
);

document.getElementById('prop05').innerHTML =
  'Sunt ' +
  cart.firstName +
  ' si cumpar produsele ' +
  cart.products[0].name +
  ', ' +
  cart.products[1].name +
  ' si ' +
  cart.products[2].name +
  '.';

console.log(
  'Sunt ' +
    cart.firstName +
    ' si cumpar produsele ' +
    cart.products[0].name +
    ', ' +
    cart.products[1].name +
    ' si ' +
    cart.products[2].name +
    '.',
);

document.getElementById('prop06').innerHTML =
  'Valoarea totala a cartului cu idul ' +
  cart.id +
  ' este ' +
  (cart.products[0].price +
    cart.products[1].price +
    cart.products[2].price +
    200) +
  '.';

console.log(
  'Valoarea totala a cartului cu idul ' +
    cart.id +
    ' este ' +
    (cart.products[0].price +
      cart.products[1].price +
      cart.products[2].price +
      200) +
    '.',
);

document.getElementById('prop07').innerHTML =
  cart.firstName +
  ' ' +
  cart.lastName +
  ' a cumparat produsul ' +
  cart.products[0].name +
  ' in cantitatea ' +
  cart.products[0].quantity +
  ' in valoare totala de ' +
  cart.products[0].price * 2 +
  '.';

console.log(
  cart.firstName +
    ' ' +
    cart.lastName +
    ' a cumparat produsul ' +
    cart.products[0].name +
    ' in cantitatea ' +
    cart.products[0].quantity +
    ' in valoare totala de ' +
    cart.products[0].price * 2 +
    '.',
);

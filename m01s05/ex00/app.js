const metricSpeeds = [10, 60, 100, 180, 850, 1000];

const centigradeTemperatures = [0, 100, -30, 16, -273, 1000];

const metricDistances = [1, 10, 100, 1000, 1500];

console.warn(
  `Afiseaza cate una pe linie propozitii de forma
  “10km/h inseamna xxxm/s sau yyymph.”.
  Stiind ca formula pentru a calcula metri
  pe secunda este:  kmh * 5 / 18 si mile pe ora este: kmh * 1.609344`,
);

function kmhtomps(kmh) {
  return (kmh * 5) / 18;
}

function kmhtomph(kmh) {
  return kmh * 1.609344;
}

for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  console.log(
    `${speed}km/h inseamna ${kmhtomps(speed)}m/s sau ${kmhtomph(speed)}mph.`,
  );
}

console.warn(``);

let totalSpeeds = 0;
for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  totalSpeeds += speed;
}

console.log(`${totalSpeeds}km/h inseamna ${kmhtomph(totalSpeeds)}mph.`);

console.warn(`In mod similar afiseaza propozitii de forma “0 grade celsius
inseamna xxx grade kelvin sau yyy grade Fahrenheit.”
Stiind ca formula pentru a calcula gradele Fahrenheit
este (x° * 9 / 5) + 32 iar pentru kelvin: x° + 273.15
`);

centigradeTemperatures.forEach(function (celsius) {
  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;

  console.log(
    `${celsius} grade celsius inseamna ${kelvin} grade kelvin sau ${fahrenheit} grade Fahrenheit.`,
  );
});

console.warn(`Folosind valorile din arrayuri si orice bucla doresti:
Aduna toate valorile din array si afiseaza o propozitie de forma:
“xxx grade celsius inseamna yyy grade kelvin.”.
`);

let totalCelsius = 0;

centigradeTemperatures.forEach(function (celsius) {
  totalCelsius += celsius;
});

const totalKelvin = totalCelsius + 273.15;

console.log(
  `${totalCelsius} grade celsius inseamna ${totalKelvin} grade kelvin.`,
);

console.warn(`Pentru distante afiseaza propozitii de forma
“1m inseamna xxx inch sau yyy picioare.”.
 Stiind ca un metru este 39.3701 inch si 3.281 picioare.`);

metricDistances.forEach(function (meter) {
  const inch = (meter * 39.3701).toString().replace(/\.?0+$/, '');
  const feet = (meter * 3.281).toString().replace(/\.?0+$/, '');

  if (meter === 1) {
    console.log('1m inseamna 39.3701 inch sau 3.281 picioare.');
  } else {
    console.log(`${meter}m inseamna ${inch} inch sau ${feet} picioare.`);
  }
});

console.warn(`Aduna toate valorile din array si afiseaza o propozitie de forma
“xxxm inseamna yyy mile.”. Stiind ca formula este: m / 1609`);

let sumMeters = 0;
metricDistances.forEach(function (meter) {
  sumMeters += meter;
});

const miles = (sumMeters / 1609).toString().replace(/\.?0+$/, '');
console.log(`${sumMeters}m inseamna ${miles} mile.`);

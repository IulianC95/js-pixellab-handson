console.log(process.argv);

let [, , radius] = process.argv;
radius = Number(radius);

if (isNaN(radius) || radius < 0) {
  console.log('Introdu un nr. valid pentru raza cercului');
  process.exit(1);
}

const area = Math.PI * radius * radius;

console.log(`Suprafata cercului cu raza ${radius} este ${area}`);

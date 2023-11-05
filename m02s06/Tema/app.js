const fs = require('fs');

function calculateArea(shape, dimensions) {
  switch (shape) {
    case 'cerc':
      if (dimensions.length !== 1)
        throw new Error(
          'Pentru cerc, specifica un singur argument pentru raza.',
        );
      const radius = Number(dimensions[0]);
      if (isNaN(radius) || radius <= 0)
        throw new Error('Raza trebuie sa fie un numar pozitiv.');
      return Math.PI * radius * radius;
    case 'patrat':
      if (dimensions.length !== 1)
        throw new Error(
          'Pentru patrat, specifica un singur argument pentru latura.',
        );
      const side = Number(dimensions[0]);
      if (isNaN(side) || side <= 0)
        throw new Error('Latura trebuie sa fie un numar pozitiv.');
      return side * side;
    case 'dreptunghi':
      if (dimensions.length !== 2)
        throw new Error(
          'Pentru dreptunghi, specifica doua argumente pentru lungime si latime.',
        );
      const length = Number(dimensions[0]);
      const width = Number(dimensions[1]);
      if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
        throw new Error('Lungimea si latimea trebuie sa fie numere pozitive.');
      }
      return length * width;
    default:
      throw new Error(
        'Forma specificata nu este recunoscuta. Formele valide sunt: cerc, patrat, dreptunghi.',
      );
  }
}

function logResult(shape, dimensions, area) {
  const logEntry = `Forma: ${shape}, Dimensiuni: ${dimensions.join(
    ' ',
  )}, Suprafata: ${area}\n`;
  fs.appendFileSync('suprafete.log', logEntry);
}

function clearLog() {
  fs.writeFileSync('suprafete.log', '');
}

function showHelp() {
  console.log('Utilizare: node suprafete [forma] [dimensiuni]');
  console.log('Exemple:');
  console.log('  node suprafete cerc 30');
  console.log('  node suprafete patrat 20');
  console.log('  node suprafete dreptunghi 20 30');
}

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '-h') {
  showHelp();
} else if (args[0] === '-clear') {
  clearLog();
} else {
  try {
    const shape = args[0];
    const dimensions = args.slice(1);
    const area = calculateArea(shape, dimensions);
    console.log(`Suprafata pentru ${shape} este: ${area}`);
    logResult(shape, dimensions, area);
  } catch (error) {
    console.error(`Eroare: ${error.message}`);
  }
}

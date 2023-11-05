const fs = require('fs').promises;

async function createSentenceFromFiles() {
  try {
    const part1 = await fs.readFile('another.txt', 'utf8');
    const part2 = await fs.readFile('my-file.txt', 'utf8');
    const part3 = await fs.readFile('dir/this-other-file.txt', 'utf8');

    const sentence = `${part1} ${part2} ${part3}!`;

    console.log(sentence);
  } catch (error) {
    console.error(`Eroare la citirea fisierelor:`, error);
  }
}

createSentenceFromFiles();

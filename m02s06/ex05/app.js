const fs = require('fs').promises;

async function updateFileWithDate() {
  try {
    const originalText = await fs.readFile('my-file.txt', 'utf8');

    const currentDate = new Date();
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, '0')}.${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${currentDate.getFullYear()}`;

    const newText = `${originalText}, azi, ${formattedDate}!`;

    await fs.writeFile('updated-file.txt', newText);

    console.log('Fisierul a fost actualizat cu success.');
  } catch (error) {
    console.error(`A aparut o eroare:`, error);
  }
}

updateFileWithDate();

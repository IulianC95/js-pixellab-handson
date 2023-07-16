const company = 'The JavaScript SRL';
const companyRegistration = 'J40/11111/2017';
const companyCode = '12345678';
const companyAddress =
  'Strada Scripturilor, Numarul 94, Etaj 1, Sector 1, Bucuresti';
const brandName = 'Pixellab';

console.log(`
  Acest website ("site-ul") este administrat de către ${company},
  cu sediul social în ${companyAddress},
  înregistrată la Registrul Comerțului sub nr. ${companyRegistration},
  cod unic de înregistrare ${companyCode} ("${brandName}").
  Operatorul datelor cu caracter personal este
  ${company}, prin brand-ul "${brandName}", cu
  punctul de lucru la adresa: ${companyAddress};
  În continuare, ${company} va fi numit "${brandName}".
`);

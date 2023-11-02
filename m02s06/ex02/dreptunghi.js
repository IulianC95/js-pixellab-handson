console.log(process.argv);
// destructurare
// let length = [process.argv[2]]
// let width = [process.argv[3]]
let [, , length, width] = process.argv;
length = Number(length);
width = Number(width);

const area = length * width;

console.log(area);

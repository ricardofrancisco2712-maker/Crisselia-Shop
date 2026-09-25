const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const imgs = [
  '01 - copia.png',
  '02 - copia.png',
  '03 - copia.png',
  '04 - copia.png',
  '07 c.png',
  '10 cv.png',
  '10.1.png',
  '20.png',
  '07.png',
  '10.png',
  '21.png',
  '31.png'
];

imgs.forEach(img => {
  const enc = encodeURIComponent(img);
  const count = (html.split(img).length - 1) + (html.split(enc).length - 1);
  console.log(`${img}: ${count} occurrences`);
});

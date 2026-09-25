const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'Imagenes Crisselia');
const filesInFolder = fs.readdirSync(dir);
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const regex = /Imagenes Crisselia\/([^\)"'\s>]+)/g;
const used = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  used.add(decodeURIComponent(match[1]));
}

console.log('Total files in folder:', filesInFolder.length);
console.log('Total files used in HTML:', used.size);

const unused = filesInFolder.filter(f => !used.has(f) && !used.has(encodeURIComponent(f)));
console.log('NOT USED in HTML:', unused);

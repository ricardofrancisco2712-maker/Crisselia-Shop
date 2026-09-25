const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find all occurrences of product-item and see which images they use
const matches = [...html.matchAll(/data-title="([^"]+)"[\s\S]*?src="([^"]+)"/g)];
console.log(`Found ${matches.length} products`);
matches.forEach((m, i) => {
  console.log(`${i+1}. ${m[1]} -> ${m[2]}`);
});

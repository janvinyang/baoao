const fs = require('fs');
const path = require('path');

const articlesDir = 'e:\\onedrive\\vaccumflask\\website\\public\\news\\articles';
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(
    /<header>\s*<div class="container">/,
    '<header>\n  <div class="header-container">'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${file}`);
});

console.log('All articles fixed!');
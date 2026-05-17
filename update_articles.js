const fs = require('fs');
const path = require('path');

const articlesDir = 'e:\\onedrive\\vaccumflask\\website\\public\\news\\articles';
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(
    '.container { max-width: 800px; margin: 0 auto; padding: 0 24px; }',
    `.container { max-width: 800px; margin: 0 auto; padding: 0 24px; }
    .header-container { max-width: 1080px; margin: 0 auto; padding: 0 24px; }`
  );
  
  content = content.replace(
    'header .container { display: flex; align-items: center; justify-content: space-between; height: 52px; }',
    'header .header-container { display: flex; align-items: center; justify-content: space-between; height: 52px; }'
  );
  
  content = content.replace(
    '<header>\n      <div class="container">',
    '<header>\n      <div class="header-container">'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${file}`);
});

console.log('All articles updated!');
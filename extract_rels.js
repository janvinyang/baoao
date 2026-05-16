const fs = require('fs');
const path = require('path');
const relsDir = 'e:\\onedrive\\vaccumflask\\website\\pptx_extract\\ppt\\slides\\_rels';

for (let i = 1; i <= 15; i++) {
  const f = path.join(relsDir, `slide${i}.xml.rels`);
  const xml = fs.readFileSync(f, 'utf8');
  const targets = [];
  xml.replace(/Target="([^"]+)"/g, (m, p1) => {
    if (p1.includes('image') || p1.includes('media')) targets.push(p1);
  });
  console.log(`=== Slide ${i} images ===`);
  console.log(targets.join('\n'));
  console.log();
}

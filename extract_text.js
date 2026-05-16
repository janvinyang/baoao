const fs = require('fs');
const path = require('path');
const slidesDir = 'e:\\onedrive\\vaccumflask\\website\\pptx_extract\\ppt\\slides';

for (let i = 1; i <= 15; i++) {
  const f = path.join(slidesDir, `slide${i}.xml`);
  const xml = fs.readFileSync(f, 'utf8');
  const texts = [];
  xml.replace(/<a:t>([^<]+)<\/a:t>/g, (m, p1) => texts.push(p1));
  console.log(`=== Slide ${i} ===`);
  console.log(texts.join(' | '));
  console.log();
}

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const mediaDir = 'e:\\onedrive\\vaccumflask\\website\\pptx_extract\\ppt\\media';
const factoryDir = 'e:\\onedrive\\vaccumflask\\website\\assets\\factory';

const tifFiles = [
  { src: 'image1.tif', dest: 'cover.jpg' },
  { src: 'image3.jpeg', dest: 'factory1.jpg' },
  { src: 'image8.tif', dest: 'factory2.jpg' },
  { src: 'image2.tif', dest: 'factory3.jpg' },
  { src: 'image4.tif', dest: 'factory4.jpg' },
  { src: 'image5.tif', dest: 'factory5.jpg' },
  { src: 'image6.tif', dest: 'factory6.jpg' },
  { src: 'image7.tif', dest: 'factory7.jpg' },
  { src: 'image9.tif', dest: 'factory8.jpg' },
  { src: 'image10.tif', dest: 'factory9.jpg' },
  { src: 'image50.png', dest: 'production1.jpg' },
  { src: 'image51.tif', dest: 'production2.jpg' },
  { src: 'image52.tif', dest: 'production3.jpg' },
  { src: 'image53.tif', dest: 'production4.jpg' },
  { src: 'image54.tif', dest: 'production5.jpg' },
  { src: 'image55.tif', dest: 'production6.jpg' },
  { src: 'image56.tif', dest: 'production7.jpg' },
  { src: 'image57.tif', dest: 'material1.jpg' },
  { src: 'image58.tif', dest: 'material2.jpg' },
  { src: 'image59.tif', dest: 'material3.jpg' },
  { src: 'image60.tif', dest: 'material4.jpg' },
  { src: 'image61.png', dest: 'material5.jpg' },
  { src: 'image62.png', dest: 'temp1.jpg' },
  { src: 'image63.tif', dest: 'temp2.jpg' },
  { src: 'image64.tif', dest: 'temp3.jpg' },
  { src: 'image65.tif', dest: 'pack1.jpg' },
  { src: 'image66.tif', dest: 'pack2.jpg' },
  { src: 'image67.tif', dest: 'pack3.jpg' },
  { src: 'image68.png', dest: 'pack4.jpg' },
  { src: 'image69.tif', dest: 'pack5.jpg' },
];

async function convert() {
  for (const f of tifFiles) {
    const srcPath = path.join(mediaDir, f.src);
    const destPath = path.join(factoryDir, f.dest);
    if (!fs.existsSync(srcPath)) {
      console.log(`SKIP: ${f.src} not found`);
      continue;
    }
    try {
      await sharp(srcPath)
        .jpeg({ quality: 85 })
        .toFile(destPath);
      console.log(`OK: ${f.src} -> ${f.dest}`);
    } catch (e) {
      console.log(`ERROR: ${f.src} -> ${e.message}`);
    }
  }
}

convert();

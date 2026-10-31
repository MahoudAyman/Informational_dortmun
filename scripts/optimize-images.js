const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(process.cwd(), 'public', 'images');
const files = fs.readdirSync(dir);

async function optimizeHighEfficiency() {
  console.log('Running high-efficiency WebP compression in', dir);
  for (const file of files) {
    if (!file.endsWith('.jpg') && !file.endsWith('.jpeg')) continue;
    const inputPath = path.join(dir, file);
    const baseName = file.replace(/\.(jpg|jpeg)$/, '');
    const webpPath = path.join(dir, `${baseName}.webp`);

    try {
      const meta = await sharp(inputPath).metadata();
      // Hero background can be 1600px max, card images 1000px max
      const isHero = baseName === 'hero-bg';
      const maxW = isHero ? 1600 : 1000;
      const targetWidth = meta.width && meta.width > maxW ? maxW : meta.width;

      await sharp(inputPath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: isHero ? 72 : 70, effort: 5 })
        .toFile(webpPath);

      const oldStat = fs.statSync(inputPath);
      const newStat = fs.statSync(webpPath);
      console.log(`High-efficiency ${file}: ${(oldStat.size / 1024).toFixed(1)}KB -> ${(newStat.size / 1024).toFixed(1)}KB`);
    } catch (e) {
      console.error(`Error optimizing ${file}:`, e);
    }
  }
}

optimizeHighEfficiency();

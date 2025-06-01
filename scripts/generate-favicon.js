const sharp = require('sharp');
const path = require('path');

async function generateFavicons() {
  const inputImage = path.join(process.cwd(), 'public/assets/profile.jpg');
  
  // Generate favicon.ico (32x32)
  await sharp(inputImage)
    .resize(32, 32)
    .toFile(path.join(process.cwd(), 'app/favicon.ico'));

  // Generate favicon-32x32.png
  await sharp(inputImage)
    .resize(32, 32)
    .toFile(path.join(process.cwd(), 'public/favicon-32x32.png'));

  // Generate favicon-16x16.png
  await sharp(inputImage)
    .resize(16, 16)
    .toFile(path.join(process.cwd(), 'public/favicon-16x16.png'));

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error); 
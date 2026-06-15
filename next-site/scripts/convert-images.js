const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// Converts images from the top-level assets folder to next-site/public/optimized as WebP and watermarks them.
const rootAssets = path.resolve(__dirname, '..', '..', 'assets');
const outDir = path.resolve(__dirname, '..', 'public', 'optimized');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = ['hero.jpg','about.jpg','gallery-pose.jpg','kids1.jpeg','kids2.jpeg','kids3.jpeg','studio.jpeg','award.jpeg'];

async function process(){
  for(const f of files){
    const inFile = path.join(rootAssets, f);
    if(!fs.existsSync(inFile)){
      console.warn('Missing', inFile);
      continue;
    }
    const name = path.parse(f).name;
    const outFile = path.join(outDir, `${name}.webp`);

    // Resize for web, convert to webp and composite watermark text
    const image = sharp(inFile).resize({ width: 1400 }).webp({ quality: 80 });

    // create watermark overlay as SVG
    const svg = `
      <svg width="1400" height="200">
        <rect width="100%" height="100%" fill="transparent" />
        <text x="50%" y="80" font-size="36" font-family="Poppins,Arial" fill="rgba(255,255,255,0.3)" text-anchor="middle">Arudra Yoga</text>
      </svg>`;

    const buffer = await image.composite([{ input: Buffer.from(svg), gravity: 'south' }]).toBuffer();
    await sharp(buffer).toFile(outFile);
    console.log('Wrote', outFile);
  }
  // also generate small about.webp and hero.webp
}

process().catch(err=>{console.error(err);process.exit(1)});

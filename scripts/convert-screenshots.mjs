import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join } from 'path';

const jobs = [
  {
    src: 'C:/Users/DominicAlvarez/Documents/Dominic/FastRest/FastOrder/ScreenShots',
    dest: 'public/images/fastorder',
    width: 720,
    files: [
      { from: 'Login Screen.jpg', to: 'login.webp' },
      { from: 'Order Tab Light.jpg', to: 'order-tab.webp' },
      { from: 'Selección de Mesa.jpg', to: 'table-selection.webp' },
      { from: 'Split Bill.jpg', to: 'split-bill.webp' },
    ],
  },
  {
    src: 'C:/Users/DominicAlvarez/Documents/Dominic/Servientrega/Screenshots',
    dest: 'public/images/payment-controller',
    width: 1280,
    files: [
      { from: 'Screenshot - Login.png', to: 'login.webp' },
      { from: 'Screenshot - Dashboard 1.png', to: 'dashboard.webp' },
      { from: 'Screenshot - Desktop Application.png', to: 'desktop.webp' },
      { from: 'Screenshot - Transaction Detail.png', to: 'transaction.webp' },
    ],
  },
];

for (const job of jobs) {
  mkdirSync(job.dest, { recursive: true });
  for (const f of job.files) {
    const srcPath = join(job.src, f.from);
    const destPath = join(job.dest, f.to);
    await sharp(srcPath)
      .resize({ width: job.width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(destPath);
    console.log('✔', destPath);
  }
}
console.log('Done converting screenshots.');

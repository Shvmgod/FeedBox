const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, 'public', 'images', filename);
  const file = fs.createWriteStream(filepath);
  
  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', err => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
};

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download images from placeholder service
const images = {
  'hero-dashboard.png': 'https://picsum.photos/800/600',
  'mission-icon.png': 'https://picsum.photos/60/60',
  'vision-icon.png': 'https://picsum.photos/60/60',
  'values-icon.png': 'https://picsum.photos/60/60',
  'rss-icon.png': 'https://picsum.photos/50/50',
  'email-icon.png': 'https://picsum.photos/50/50',
  'notification-icon.png': 'https://picsum.photos/50/50',
  'organize-icon.png': 'https://picsum.photos/50/50',
  'sync-icon.png': 'https://picsum.photos/50/50',
  'share-icon.png': 'https://picsum.photos/50/50',
  'mobile-app.png': 'https://picsum.photos/600/400',
  'ai-features.png': 'https://picsum.photos/600/400',
  'integration.png': 'https://picsum.photos/600/400',
  'basic-plan.png': 'https://picsum.photos/60/60',
  'pro-plan.png': 'https://picsum.photos/60/60',
  'enterprise-plan.png': 'https://picsum.photos/60/60',
  'logo.png': 'https://picsum.photos/150/50',
  'twitter.png': 'https://picsum.photos/24/24',
  'linkedin.png': 'https://picsum.photos/24/24',
  'github.png': 'https://picsum.photos/24/24'
};

// Download all images
Object.entries(images).forEach(([filename, url]) => {
  downloadImage(url, filename);
}); 
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create necessary directories
const dirs = [
  'app',
  'app/cart',
  'app/category',
  'app/product',
  'app/search',
  'components',
  'components/ui',
  'components/layout',
  'lib',
  'public/images',
  'public/images/products',
  'public/images/categories',
  'store',
  'types',
  'data'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Set up placeholder images
console.log('Setting up placeholder images...');
execSync('npm run setup-images', { stdio: 'inherit' });

// Generate mock data
console.log('Generating mock data...');
execSync('npm run generate-mock-data', { stdio: 'inherit' });

// Create .env.local file if it doesn't exist
const envPath = path.join(__dirname, '..', '.env.local');
if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, '# Add your environment variables here\n');
}

console.log('\nProject initialization complete! 🎉');
console.log('\nNext steps:');
console.log('1. Start the development server: npm run dev');
console.log('2. Open http://localhost:3000 in your browser');
console.log('3. Begin customizing the project to your needs'); 
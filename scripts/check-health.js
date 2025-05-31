const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check Node.js version
const nodeVersion = process.version;
const requiredNodeVersion = '18.17.0';
if (nodeVersion < requiredNodeVersion) {
  console.error(`❌ Node.js version ${requiredNodeVersion} or higher is required. Current version: ${nodeVersion}`);
  process.exit(1);
}

// Check required directories
const requiredDirs = [
  'app',
  'components',
  'data',
  'lib',
  'public/images',
  'store',
  'types'
];

console.log('Checking project structure...');
requiredDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Missing required directory: ${dir}`);
    process.exit(1);
  }
});

// Check required files
const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'tailwind.config.js',
  'postcss.config.js',
  'data/categories.ts',
  'data/products.ts'
];

console.log('Checking required files...');
requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    process.exit(1);
  }
});

// Check dependencies
console.log('Checking dependencies...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredDeps = [
    '@headlessui/react',
    '@heroicons/react',
    'framer-motion',
    'next',
    'react',
    'react-dom',
    'zustand'
  ];

  const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
  if (missingDeps.length > 0) {
    console.error(`❌ Missing required dependencies: ${missingDeps.join(', ')}`);
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error reading package.json:', error.message);
  process.exit(1);
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.error('❌ node_modules directory not found. Please run npm install');
  process.exit(1);
}

// Check if .env.local exists
if (!fs.existsSync('.env.local')) {
  console.warn('⚠️ .env.local file not found. Creating one...');
  fs.writeFileSync('.env.local', '# Add your environment variables here\n');
}

console.log('\n✅ Project health check passed! 🎉');
console.log('\nNext steps:');
console.log('1. Start the development server: npm run dev');
console.log('2. Open http://localhost:3000 in your browser');
console.log('3. Begin customizing the project to your needs'); 
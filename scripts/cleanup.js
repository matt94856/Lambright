const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories to clean
const dirsToClean = [
  'node_modules',
  '.next',
  'out',
  'build',
  'coverage'
];

// Files to clean
const filesToClean = [
  '.env.local',
  '*.log',
  '*.tsbuildinfo',
  'next-env.d.ts'
];

console.log('Cleaning up project...');

// Remove directories
dirsToClean.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Removing directory: ${dir}`);
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

// Remove files
filesToClean.forEach(pattern => {
  const files = fs.readdirSync('.')
    .filter(file => file.match(new RegExp(pattern.replace('*', '.*'))));
  
  files.forEach(file => {
    console.log(`Removing file: ${file}`);
    fs.unlinkSync(file);
  });
});

// Clean npm cache
console.log('Cleaning npm cache...');
try {
  execSync('npm cache clean --force', { stdio: 'inherit' });
} catch (error) {
  console.warn('Warning: Failed to clean npm cache');
}

console.log('\n✅ Project cleanup complete! 🎉');
console.log('\nNext steps:');
console.log('1. Run npm install to reinstall dependencies');
console.log('2. Run npm run init to reinitialize the project');
console.log('3. Run npm run check-health to verify the setup'); 
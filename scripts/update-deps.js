const fs = require('fs');
const { execSync } = require('child_process');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Get current dependencies
const dependencies = packageJson.dependencies || {};
const devDependencies = packageJson.devDependencies || {};

console.log('Checking for updates...');

// Update dependencies
console.log('\nUpdating dependencies...');
Object.keys(dependencies).forEach(dep => {
  try {
    console.log(`\nChecking ${dep}...`);
    const latestVersion = execSync(`npm view ${dep} version`).toString().trim();
    const currentVersion = dependencies[dep].replace(/[\^~]/, '');
    
    if (latestVersion !== currentVersion) {
      console.log(`Updating ${dep} from ${currentVersion} to ${latestVersion}`);
      dependencies[dep] = `^${latestVersion}`;
    } else {
      console.log(`${dep} is up to date (${currentVersion})`);
    }
  } catch (error) {
    console.warn(`Warning: Could not check ${dep} - ${error.message}`);
  }
});

// Update devDependencies
console.log('\nUpdating devDependencies...');
Object.keys(devDependencies).forEach(dep => {
  try {
    console.log(`\nChecking ${dep}...`);
    const latestVersion = execSync(`npm view ${dep} version`).toString().trim();
    const currentVersion = devDependencies[dep].replace(/[\^~]/, '');
    
    if (latestVersion !== currentVersion) {
      console.log(`Updating ${dep} from ${currentVersion} to ${latestVersion}`);
      devDependencies[dep] = `^${latestVersion}`;
    } else {
      console.log(`${dep} is up to date (${currentVersion})`);
    }
  } catch (error) {
    console.warn(`Warning: Could not check ${dep} - ${error.message}`);
  }
});

// Update package.json
packageJson.dependencies = dependencies;
packageJson.devDependencies = devDependencies;
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('\n✅ Dependencies updated in package.json! 🎉');
console.log('\nNext steps:');
console.log('1. Run npm install to install the updated dependencies');
console.log('2. Run npm run check-health to verify the setup');
console.log('3. Test your application to ensure everything works correctly'); 
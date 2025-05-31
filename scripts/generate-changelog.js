const fs = require('fs');
const { execSync } = require('child_process');

// Get git log
const getGitLog = () => {
  try {
    return execSync('git log --pretty=format:"%h|%s|%an|%ad" --date=short', { encoding: 'utf8' })
      .split('\n')
      .map(line => {
        const [hash, message, author, date] = line.split('|');
        return { hash, message, author, date };
      });
  } catch (error) {
    console.error('Error getting git log:', error.message);
    return [];
  }
};

// Get package.json version
const getPackageVersion = () => {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.version;
  } catch (error) {
    console.error('Error reading package.json:', error.message);
    return '0.0.0';
  }
};

// Generate changelog
const generateChangelog = () => {
  const version = getPackageVersion();
  const commits = getGitLog();
  
  // Group commits by date
  const commitsByDate = commits.reduce((acc, commit) => {
    if (!acc[commit.date]) {
      acc[commit.date] = [];
    }
    acc[commit.date].push(commit);
    return acc;
  }, {});

  // Generate changelog content
  let changelog = `# Changelog\n\n`;
  changelog += `## [${version}] - ${new Date().toISOString().split('T')[0]}\n\n`;

  Object.entries(commitsByDate)
    .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
    .forEach(([date, commits]) => {
      changelog += `### ${date}\n\n`;
      commits.forEach(commit => {
        changelog += `- ${commit.message} (${commit.hash})\n`;
      });
      changelog += '\n';
    });

  // Write changelog to file
  fs.writeFileSync('CHANGELOG.md', changelog);
  console.log('✅ Changelog generated successfully! 🎉');
};

// Run the script
generateChangelog(); 
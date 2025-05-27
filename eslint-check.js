// Simple script to check for common ESLint issues
console.log('Checking for ESLint issues in Insights components...');

const fs = require('fs');
const path = require('path');

const insightsDir = path.join(__dirname, 'src', 'components', 'insights');
const files = fs.readdirSync(insightsDir);

files.forEach(file => {
  const filePath = path.join(insightsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`\nChecking ${file}...`);
  
  // Check for unused imports
  const importRegex = /import\s+{([^}]+)}\s+from/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const imports = match[1].split(',').map(i => i.trim());
    imports.forEach(importName => {
      if (content.indexOf(importName, match.index + match[0].length) === -1) {
        console.log(`- Possible unused import: ${importName}`);
      }
    });
  }
  
  // Check for unused variables
  const constRegex = /const\s+([a-zA-Z0-9_]+)\s*=/g;
  while ((match = constRegex.exec(content)) !== null) {
    const varName = match[1];
    if (content.indexOf(varName, match.index + match[0].length) === -1) {
      console.log(`- Possible unused variable: ${varName}`);
    }
  }
});

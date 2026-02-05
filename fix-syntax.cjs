const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all JSX files
const files = glob.sync('src/**/*.jsx', { cwd: __dirname });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix malformed div tags
  content = content.replace(/<div} : {}}/g, '<div');
  content = content.replace(/<div}}}/g, '<div');

  // Fix malformed h1 tags
  content = content.replace(/<h1}}}/g, '<h1');
  content = content.replace(/<motion\.h1} : {}}/g, '<h1');

  // Fix malformed h2 tags
  content = content.replace(/<h2}}}/g, '<h2');
  content = content.replace(/<motion\.h2} : {}}/g, '<h2');

  // Fix malformed p tags
  content = content.replace(/<p}}}/g, '<p');
  content = content.replace(/<motion\.p} : {}}/g, '<p');

  // Fix malformed section tags
  content = content.replace(/<section}}}/g, '<section');

  //Remove any remaining motion. references
  content = content.replace(/motion\./g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\n🎉 Fixed ${fixedCount} files!`);

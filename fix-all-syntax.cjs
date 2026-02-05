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

  // Fix key={index}} : {}} pattern
  content = content.replace(/key=\{([^}]+)\}\}\s*:\s*\{\}\}\}/g, 'key={$1}');

  // Fix key={...}}} pattern (three closing braces)
  content = content.replace(/key=\{([^}]+)\}\}\}/g, 'key={$1}');

  // Fix className="..."}}} pattern
  content = content.replace(/className="([^"]+)"\}\}\}/g, 'className="$1"');

  // Fix <div}}} pattern
  content = content.replace(/<div\}\}\}/g, '<div');

  // Fix <div}} pattern
  content = content.replace(/<div\}\}/g, '<div');

  // Fix <div} pattern
  content = content.replace(/<div\}/g, '<div');

  // Fix <h1}}} pattern
  content = content.replace(/<h1\}\}\}/g, '<h1');
  content = content.replace(/<h2\}\}\}/g, '<h2');
  content = content.replace(/<h3\}\}\}/g, '<h3');

  // Fix <p}}} pattern
  content = content.replace(/<p\}\}\}/g, '<p');

  // Fix <section}}} pattern
  content = content.replace(/<section\}\}\}/g, '<section');

  // Fix <header}}} pattern
  content = content.replace(/<header\}\}\}/g, '<header');

  // Fix style={{...}}} pattern (three closing braces)
  content = content.replace(/style=\{\{([^}]+)\}\}\}/g, 'style={{$1}}');

  // Remove any remaining motion. references
  content = content.replace(/motion\./g, '');

  // Fix orphaned } : {} patterns
  content = content.replace(/\}\s*:\s*\{\}/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\n🎉 Fixed ${fixedCount} files!`);
console.log('Now run: npm run build');

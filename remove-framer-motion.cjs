/**
 * Remove framer-motion and replace with regular HTML elements
 */

const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Header.jsx',
  'src/components/Hero.jsx',
  'src/components/CTA.jsx',
  'src/components/Pricing.jsx',
  'src/components/Features.jsx',
  'src/components/FAQ.jsx',
  'src/components/Stats.jsx',
  'src/components/ValueProposition.jsx',
  'src/components/CallToAction.jsx',
  'src/components/Technology.jsx',
  'src/components/PrivacyPolicy.jsx',
  'src/components/features/FeatureCTA.jsx',
  'src/components/features/FeatureDetailLayout.jsx',
  'src/components/features/FeatureOverview.jsx',
  'src/components/features/FeatureScreenshots.jsx',
  'src/components/features/FeatureTechnicalSpecs.jsx',
  'src/components/features/FeatureUseCases.jsx',
  'src/components/features/FeatureCapabilities.jsx',
  'src/components/features/FeatureBenefits.jsx',
  'src/components/features/FeatureHero.jsx',
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove framer-motion imports
  content = content.replace(/import\s+{\s*motion\s*}\s+from\s+['"]framer-motion['"];?\s*/g, '');
  content = content.replace(/import\s+{\s*motion,\s*([^}]+)\s*}\s+from\s+['"]framer-motion['"];?\s*/g, 'import { $1 } from "framer-motion";\n');
  content = content.replace(/,\s*motion\s*}/g, ' }');

  // Replace motion.div with div
  content = content.replace(/<motion\.div/g, '<div');
  content = content.replace(/<\/motion\.div>/g, '</div>');

  // Replace motion.header with header
  content = content.replace(/<motion\.header/g, '<header');
  content = content.replace(/<\/motion\.header>/g, '</header>');

  // Replace motion.img with img
  content = content.replace(/<motion\.img/g, '<img');

  // Replace motion.h1 with h1
  content = content.replace(/<motion\.h1/g, '<h1');
  content = content.replace(/<\/motion\.h1>/g, '</h1>');

  // Replace motion.p with p
  content = content.replace(/<motion\.p/g, '<p');
  content = content.replace(/<\/motion\.p>/g, '</p>');

  // Replace motion.section with section
  content = content.replace(/<motion\.section/g, '<section');
  content = content.replace(/<\/motion\.section>/g, '</section>');

  // Remove framer-motion props (initial, animate, transition, whileHover, etc.)
  content = content.replace(/\s+initial=\{[^}]*\}/g, '');
  content = content.replace(/\s+animate=\{[^}]*\}/g, '');
  content = content.replace(/\s+transition=\{[^}]*\}/g, '');
  content = content.replace(/\s+whileHover=\{[^}]*\}/g, '');
  content = content.replace(/\s+whileTap=\{[^}]*\}/g, '');
  content = content.replace(/\s+variants=\{[^}]*\}/g, '');
  content = content.replace(/\s+initial=\{[^}]*\}/g, '');

  // Remove useInView imports that are not used
  const hasInView = content.includes('useInView');
  if (!hasInView) {
    content = content.replace(/import\s+{\s*useInView\s*}\s+from\s+['"]react-intersection-observer['"];?\s*/g, '');
  }

  // Clean up empty lines
  content = content.replace(/\n\n\n+/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Fixed: ${file}`);
});

console.log('\n🎉 All files updated!');
console.log('🔄 Restart dev server: npm run dev');

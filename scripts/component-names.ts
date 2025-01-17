import fs from 'fs';
import path from 'path';

// Function to convert PascalCase to kebab-case
function pascalToKebabCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
}

// Function to extract component name from filename
function getComponentName(filename: string): string {
  return filename.replace(/\.(tsx|jsx|ts|js)$/, '');
}

// Path to components directory
const componentsDir = path.join(process.cwd(), 'app', 'components');

// Read all files in the components directory
const files = fs.readdirSync(componentsDir);

// Process each file
const componentMappings = files
  .filter(file => /\.(tsx|jsx|ts|js)$/.test(file))
  .map(file => {
    const componentName = getComponentName(file);
    const kebabName = pascalToKebabCase(componentName);
    return {
      original: componentName,
      kebabCase: kebabName
    };
  });

// Print results
console.log('Component Name Mappings:');
console.log('------------------------');
componentMappings.forEach(({original, kebabCase}) => {
  console.log(`${original} → ${kebabCase}`);
}); 
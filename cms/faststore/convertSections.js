const fs = require('fs');
const path = require('path');
const sectionsFile = require('./sections.js');

const sectionsArray = Object.entries(sectionsFile).map(([name, section]) => {
  const { requiredScopes, ...schemaWithoutScopes } = section;

  return {
    name,
    ...(requiredScopes && { requiredScopes }),
    schema: schemaWithoutScopes,
  };
});

const outputPath = path.join(__dirname, 'sections.json');
fs.writeFileSync(outputPath, JSON.stringify(sectionsArray));
console.log('🚀 sections.json has been generated');

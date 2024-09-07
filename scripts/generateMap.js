const fs = require('fs');
const path = require('path');
const { getMapJSON } = require('dotted-map');

// Read configuration from a JSON file
const configPath = path.join(__dirname, '..', 'src', 'mapConfig.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Generate the map JSON
const mapJsonString = getMapJSON(config);

// Create the content for myMap.js
const fileContent = `
// This file is auto-generated. Do not edit manually.
const MyMapString = '${mapJsonString}';
export default MyMapString;
`;

// Write the generated map to myMap.js
const outputPath = path.join(__dirname, '..', 'src', 'myMap.js');
fs.writeFileSync(outputPath, fileContent);

console.log('Map precomputed and saved to src/myMap.js');
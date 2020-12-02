const initialConfig = require('../../registry/initial-config.json');
const { writeFileSync } = require('fs');

function saveValueOnRegistry(key, value) {
    initialConfig[key] = value;
    writeFileSync(`${__dirname}../../registry/initial-config.json`, JSON.stringify(initialConfig));
}

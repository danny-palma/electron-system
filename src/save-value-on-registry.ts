const initialConfig = require('../sources/registry/initial-config.json')
import { writeFileSync } from 'fs';

export default function saveValueOnRegistry(key: string, value: any) {
    initialConfig[key] = value;
    writeFileSync(`${__dirname}/../sources/registry/initial-config.json`, JSON.stringify(initialConfig));
}

const isCI = require('is-ci');
const release = require('../../tools/semantic-release/release.config.js');
const name = require('./package.json').name.split('/')[1];

!isCI && require('dotenv').config({ path: './.env' });

release.tagFormat = `${name}@\${version}`;
module.exports = { ...release };

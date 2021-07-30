const path = require('path');
const rimraf = require('rimraf');
const argv = require('yargs').argv;


const paths = argv._;

function cleanPath(cleanPath) {
    if (!cleanPath) {
        console.error('No path specified.');
        process.exit(1);
    }
    const removePath = path.resolve(process.cwd(), cleanPath);
    rimraf(removePath, () => {
        console.log(removePath, 'cleaned');
    });
}

if (Array.isArray(paths)) {
    paths.forEach(cleanPath);
}

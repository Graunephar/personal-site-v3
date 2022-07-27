// @ts-ignore
const replace = require('replace-in-file');
const options = {
    files: './out/_next/static/css/*.css',
    from: [/_next\/static\/media\//g], //regular expression with /g parameter in the end ie to rteplace foo use /foo/g
    to: ['../media/'],
    countMatches: true,
};

(async function () {
    try {
        const results = await replace(options);
        console.log('Replacement results:', results);
    } catch (error) {
        console.error('Error occurred:', error);
    }
})();


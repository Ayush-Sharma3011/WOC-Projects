const cssnano = require('cssnano');
const csspreset = require('postcss-preset-env');
const cssmodules= require('postcss-modules');
module.exports = {
    plugins: [
        cssnano({
            preset: "default",
        }),
        csspreset({
            stage: 1
        }),
        cssmodules({
            preset: "default",
        })
    ],
};

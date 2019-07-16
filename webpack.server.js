const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExt = require('webpack-node-externals');

const config = {
    //Inform webpack that we are building a bundle for
    //NodeJs, rather than for the browser
    target: 'node',

    //Tell webpack the root file of our server application
    entry: './src/index.js',

    //Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    externals : [webpackNodeExt()]
};

module.exports = merge(baseConfig, config);
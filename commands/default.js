let pack = require('../package.json'),
path = require('path');

exports.command = '*';
exports.describe = 'default command';
exports.handler = function (argv) {
    console.log('> jskey-walk: default command:');
    console.log('> version: ' + pack.version);
};

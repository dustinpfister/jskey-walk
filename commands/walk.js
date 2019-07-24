exports.command = 'walk';
exports.aliases = ['w'];
exports.describe = 'walk command';

exports.builder = {
    // target folder to walk
    // default to current working dir
    t: {
      default: process.cwd()
    }
};
exports.handler = function (argv) {
    console.log('jskey-walk: walking target: ' );
    console.log(argv.t);
    
    require('../lib/walk-basic/index.js')({dir: argv.t});
};

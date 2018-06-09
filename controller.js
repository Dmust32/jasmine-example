var Jasmine = require('jasmine');
var jasmine = new Jasmine();
module.exports = {
  runTest: (req, res) => {
    const { dynamicFile } req.body;
    jasmine.loadConfig({
        spec_dir: 'spec',
        spec_files: [
            dynamicFile
        ],
        helpers: [
            'helpers/**/*.js'
        ]
    });

    jasmine.execute();
  }
}
this is me testing some shit

var stealTools = require('steal-tools');
var path = require('path');

stealTools.export({
    system: {
        config: path.join(__dirname, 'package.json!npm')
    },
    outputs: {
        '+amd': {
            ignore: false,
            modules: ['can-navigate/config/pages/workorders']
        },
        '+cjs': {
            ignore: false
        },
        '+global-js': {
            ignore: false
        },
        '+global-css': {}
    }
}).catch(function (e) {

    setTimeout(function () {
        throw e;
    }, 1);
});

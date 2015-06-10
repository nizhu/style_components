var concatenate = require('broccoli-concat');
var compileLess = require('broccoli-less-single');
var mergeTrees  = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler')

var appLess;
var appStyles;


var vendorJSFiles = [

    "jquery/dist/jquery.js",
    "handlebars/handlebars.js",
    "ember/ember.js",
    "intro.js/intro.js",
    "momentjs/min/moment.min.js",
    "jquery.customSelect/jquery.customSelect.js",
    "jquery.onoff/dist/jquery.onoff.js",
    "iCheck/icheck.min.js",
    "jscrollpane/script/mwheelIntent.js",
    "jscrollpane/script/jquery.mousewheel.js",
    "jscrollpane/script/jquery.jscrollpane.min.js",
    "iscroll/build/iscroll.js",
    "fancyselect/fancySelect.js",
    "spin.js/spin.js"
];


/** JS */
/**
 * concatenate and compress all of our JavaScript files in 
 * the project /app folder into a single app.js file in 
 * the build production folder
 */
vendorJs = concatenate('bower_components', {
    inputFiles : vendorJSFiles,
    outputFile : '/js/vendor.js',
    header     : '/** Copyright Robin Buckley. 2014 **/'
});

appJs = concatenate('src/js', {
    inputFiles : ['**/*.js'],
    outputFile : '/js/main.js',
    header     : '/** Copyright Robin Buckley. 2014 **/'
});



appLess = compileLess('src/styles', 'main.less', '/css/main.css');


var cssLibs = [
	"iCheck/skins/square/grey.css",
    "iCheck/skins/all.css",
    "intro.js/introjs.css",
    "jquery.onoff/dist/jquery.onoff.css",
    "fancyselect/fancySelect.css"

];


vendorStyles = concatenate('bower_components', {
    inputFiles : cssLibs,
    outputFile : '/css/vendor.css',
    header     : '/** Copyright Robin Buckley. 2014 ** /'
});

/*
appCSS = concatenate(appStyles, appLess, {
	inputFiles: '* *   /   *',
	outputFile: '/css/all.css'
})
*/

appHTML = concatenate('src', {
	inputFiles : ['index.html'],
    outputFile : '/index.html'
});

module.exports = mergeTrees([vendorStyles, appLess, vendorJs, appJs, appHTML]);
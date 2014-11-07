var concatenate = require('broccoli-concat');
var compileLess = require('broccoli-less-single');
var mergeTrees  = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler')

var appLess;
var appStyles;


var vendorJSFiles = [

    "jquery/dist/jquery.js",
    /*"bower_components/jquery-ui/jquery-ui.js",*/
    /*"bower_components/gridster/dist/jquery.gridster.css",*/
    /*"bower_components/FileSaver/FileSaver.min.js",*/
    /*"bower_components/jszip/jszip.min.js",*/
    /*"bower_components/jquery-mockjax/jquery.mockjax.js",*/
    "handlebars/handlebars.js",
    "ember/ember.js",
    /*"bower_components/ember-cloaking/ember-cloaking.js",
    "bower_components/ace-builds/src/ace.js",
    "bower_components/mousetrap/mousetrap.js"*/

    //"bower_components/customSelect/jquery.customSelect.js",
    "iCheck/icheck.min.js",
    "jscrollpane/script/mwheelintent.js",
    "jscrollpane/script/jquery.mousewheel.js",
    "jscrollpane/script/jquery.jscrollpane.min.js",
    "iscroll/build/iscroll.js"
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
    outputFile : '/index.html',
});

module.exports = mergeTrees([vendorStyles, appLess, vendorJs, appJs, appHTML]);
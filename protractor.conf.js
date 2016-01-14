'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

/*
 npm install chai
 npm install chai-as-promised
 */

// An example configuration file.
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json
    //  framework: 'jasmine', // jasmine2 mocha cucumber

    chromeDriver: '/Users/three/tools/selenium/chromedriver',
    seleniumServerJar: '/Users/three/tools/selenium/selenium-server-standalone-2.44.0.jar',

    //firefoxPath:'/Applications/Firefox.app/Contents/MacOS/firefox-bin',


    // Capabilities to be passed to the webdriver instance.
    //capabilities: {
    //  'browserName': 'chrome'
    //},
    multiCapabilities: [{
        name: 'chrome_mac',
        browserName: 'chrome',
        platformName: 'MAC',
        deviceName: 'ChromeDriver'
    }, {
        name: 'chrome_android',
        browserName: 'chrome',
        platformName: 'ANDROID',
        deviceName: 'ChromeDriver',
        'chromeOptions': {
            'androidPackage': 'com.android.chrome'
        }
    }, {
        name: 'chrome_firefox',
        browserName: 'firefox',
        platformName: 'MAC',
        deviceName: 'FirefoxDriver'
    }/*,{
     'browserName': 'phantomjs',

     /!*
     * Can be used to specify the phantomjs binary path.
     * This can generally be ommitted if you installed phantomjs globally.
     *!/
     'phantomjs.binary.path': require('phantomjs').path,

     /!*
     * Command line args to pass to ghostdriver, phantomjs's browser driver.
     * See https://github.com/detro/ghostdriver#faq
     *!/
     'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
     }*/],

    //directConnect:true,
    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: [paths.e2e + '/**/*.js'],

    mochaOpts: {
        ui: 'bdd',
        reporter: 'list'
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};

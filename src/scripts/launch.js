(function() {
    'use strict';
    /* global requirejs */
    console.log('launch.js is running');

    requirejs.config({
        paths: {
            app: 'app',
            views: 'app/views',
            models: 'app/models',
            jquery: 'libs/jquery.min',
            underscore: 'libs/underscore-min',
            backbone: 'libs/backbone-min'
        },
    });

    requirejs(['app/app.min']);

    /**
     * ALL TEST RELATED SCRIPTS ARE BELOW:
     */

    requirejs.config({
        paths: {
            // All test-related paths
            tests: 'tests',
            jasmine: 'libs/test/jasmine',
            jasminehtml: 'libs/test/jasmine-html',
            jasmineboot: 'libs/test/boot'
        },
        // shim: makes external libraries compatible with requirejs (AMD)
        shim: {
            jasminehtml: {
                deps: ['jasmine']
            },
            jasmineboot: {
                deps: ['jasmine', 'jasminehtml']
            }
        }
    });

    // Run tests
    require(['jasmineboot'], function() {
        require(['tests/testrouter'], function() {
            //trigger Jasmine
            console.log('go go go');
            window.onload();
        });
    });
})();
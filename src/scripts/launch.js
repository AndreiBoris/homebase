(function() {
    'use strict';
    /* global requirejs */

    requirejs.config({
        paths: {
            app: 'app',
            views: 'app/views',
            models: 'app/models',
            jquery: 'libs/jquery.min',
            underscore: 'libs/underscore-min',
            backbone: 'libs/backbone-min'
        }
    });

    requirejs(['app/app.min']);
})();
require(['jquery', 'underscore', 'backbone', 'views/home', 'app/router'],
    function($, _, Backbone, Home, Router) {
        'use strict';
        console.log('app.js is running');
        var home = new Home();

        var router = new Router();

        router.on('route:home', function() {
            home.render();
        });

        router.on('route:projects', function() {
            console.log('Router tells us that is is the projects route');
        });

        Backbone.history.start();
    });
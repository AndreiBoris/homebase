require(['jquery', 'underscore', 'backbone', 'views/home', 'views/blog',
    'views/portfolio', 'app/router'],
    function($, _, Backbone, Home, Blog, Portfolio, Router) {
        'use strict';
        console.log('app.js is running');
        var home = new Home();

        var blog = new Blog();

        var portfolio = new Portfolio();

        var router = new Router();

        router.on('route:home', function() {
            home.render();
        });

        router.on('route:blog', function() {
            blog.render();
        });

        router.on('route:portfolio', function() {
            portfolio.render();
        });

        Backbone.history.start();
    });
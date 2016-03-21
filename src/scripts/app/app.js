require(['views/home', 'app/router'],
    function(Home, Router) {
        'use strict';
        console.log('app.js is running');
        var home = new Home();

        var router = new Router();

        router.on('route:home', function() {
            home.render();
        });
    });
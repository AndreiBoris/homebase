/* global define */

define(['backbone'], function(Backbone) {
    'use strict';
    // Create a router that manages which view to load depending on the URL
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'portfolio': 'portfolio',
            'blog': 'blog',
            'blog/:id': 'blogPost'
        }
    });

    return Router;
});
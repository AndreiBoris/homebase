/* global define */

define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';
    // Create a router that manages which view to load depending on the URL
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'projects': 'projects',
            'blog/:id': 'blog'
        }
    });

    return Router;
});
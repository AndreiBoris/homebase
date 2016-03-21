/* global define */

define(['jquery', 'underscore', 'backbone'],
    function($, _, Backbone) {
        'use strict';

        var BlogView = Backbone.View.extend({
            // All actions for rendering the view should happen in this element
            // View should never outreach this element. May want to split up children
            // of this View into other Views.
            el: '.main',
            render: function() {
                this.$el.html('This is the blog view, we are looking at it.');
                // var users = new UserCollection();
                // var self = this;
                // users.fetch({
                //     success: function(users) {
                //         var template = _.template($('#user-list-template').html());
                //         var compiled = template({
                //             users: users.models,
                //             htmlEncode: helper.htmlEncode
                //         });
                //         self.$el.html(compiled);
                //     }
                // });

            }
        });

        return BlogView;
    });
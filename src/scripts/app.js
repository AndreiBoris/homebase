$(function() {
    /* global Backbone */
    /* global _ */

    'use strict';
    var NavItemModel = Backbone.Model.extend({
        defaults: {
            title: 'More'
        }
    });

    var NavItems = Backbone.Collection.extend({
        model: NavItemModel
    });

    var navItems = new NavItems([
        new NavItemModel({ title: 'Projects' }),
        new NavItemModel({ title: 'Contact' }),
        new NavItemModel({ title: 'About Me' }),
        new NavItemModel({ title: 'Blog' })
        ]);

    var NavItemView = Backbone.View.extend({
        tagName: 'li',
        className: 'navbar__item',

        events: {
            'click': 'navigate'
        },


        initialize: function(){
            _.bindAll(this, 'render', 'navigate');
            this.template = _.template($('#template__navbar__item').html());
            this.render();
        },

        render: function() {
            // Create the HTML
            this.$el.html(this.template(this.model.attributes));
            // this.$el.addClass('navbar__item');
            return this;
        },

        navigate: function() {
            console.log('Navigating with' + this.$el.text());
        }
    });

    var NavView = Backbone.View.extend({
        el: '#navigation',

        initialize: function() {
            navItems.each(function(navItem){
                var view = new NavItemView({model: navItem});
                this.$el.append(view.render().el);
            }, this);
        },

    });

    var navBar = new NavView();
});
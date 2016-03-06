$(function(){
    'use strict';

    /**
     * Storage of jQuery objects and derived constant.
     */
    var $navProjects = $('#navbar__projects'),
        $navProjectsDrop = $('#navbar__projects__dropdown'),
        $navProjectsDropLinks = $('.navbar__projects__dropdown__link'),
        $body = $('body'),
        $navBar = $('#navigation'),
        $backToTop = $('#back-to-top'),
        NAV_HEIGHT = $navBar.height();

    /**
     * Open and close the dropdown menu when the Projects button is clicked
     */
    $navProjects.on('click', function(){
        $navProjectsDrop.toggleClass('--show');
    });

    /**
     * Close dropdown menu when a link to a page element is clicked.
     */
    $navProjectsDropLinks.on('click', function(){
        $navProjectsDrop.removeClass('--show');
    });

    /**
     * We track whether the user has scrolled the page, and depend on such an
     * event to authorize a position read (see setInterval below)
     */
    var performPositionRead = false;
    $(document).on('scroll', function(){
        performPositionRead = true;
    });
    /**
     * Run this every 500ms to minimize computational weight as response time
     * doesn't matter as much here. If performPositionRead is true, we show or
     * hide the back-to-top button depending on whether or not the viewport is
     * currently near the top or not
     */
    setInterval(function(){
        if (performPositionRead){ // user has scrolled since we last ran this
            performPositionRead = false; // No need to run this if after this
            // This checks whether the current position of the top of the
            // viewport is below the bottom of the navBar (its top position
            // plus its height)
            if ($navBar.position().top + NAV_HEIGHT < $body.scrollTop()) {
                $backToTop.addClass('--show');
            } else { // We are above the break point, hide the button
                $backToTop.removeClass('--show');
            }
        }
    }, 500); // Run every 500ms so avoid computational load.



});
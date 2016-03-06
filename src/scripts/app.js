$(function(){
    'use strict';
    var $navProjects = $('#navbar__projects');
    var $navProjectsDrop = $('#navbar__projects__dropdown');
    /**
     * Open and close the dropdown menu when the Projects button is clicked
     */
    $navProjects.on('click', function(){
        $navProjectsDrop.toggleClass('--show');
    });
    var $navProjectsDropLinks = $('.navbar__projects__dropdown__link');
    /**
     * Close dropdown menu when a link to a page element is clicked.
     */
    $navProjectsDropLinks.on('click', function(){
        $navProjectsDrop.removeClass('--show');
    });

    var $body = $('body');
    var performPositionRead = false;
    $(document).on('scroll', function(){
        performPositionRead = true;
    });

    var $navBar = $('#navigation');
    var NAV_HEIGHT = $navBar.height();
    var $backToTop = $('#back-to-top');

    setInterval(function(){
        if (performPositionRead){
            performPositionRead = false;
            if ($navBar.position().top + NAV_HEIGHT < $body.scrollTop()) {
                $backToTop.addClass('--show');
            } else {
                $backToTop.removeClass('--show');
            }
        }
    }, 250);



});
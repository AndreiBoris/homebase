$(function () {
    'use strict';

    var $navProjects = $('#navbar__projects');
    var $navProjectsDrop = $('#navbar__projects__dropdown');
    /**
     * Open and close the dropdown menu when the Projects button is clicked
     */
    $navProjects.on('click', function () {
        $navProjectsDrop.toggleClass('--show');
    });
    var $navProjectsDropLinks = $('.navbar__projects__dropdown__link');
    /**
     * Close dropdown menu when a link to a page element is clicked.
     */
    $navProjectsDropLinks.on('click', function () {
        $navProjectsDrop.removeClass('--show');
    });
});
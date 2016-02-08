$(document).ready(function () {
    'use strict';
    //--------------------------------------------------------------------------
    // #NAVIGATION-TOGGLE
    //--------------------------------------------------------------------------
    var navigationToggle = $('#mobile-menu-switch');

    navigationToggle.click(function (event) {
        var navigation, menu;
        event.preventDefault();

        navigation = $('.main--nav');
        menu = $('.mobile-main-nav');

        navigation.toggleClass('open');
        menu.toggleClass('open');
    });
});

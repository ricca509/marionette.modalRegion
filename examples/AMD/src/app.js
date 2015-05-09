define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    require('marionette.modal');

    var App = new Marionette.Application();

    App.addRegions({
        menu: '[data-region="menu"]',
        content: '[data-region="content"]',
        modal: Marionette.Region.Modal.extend({ el: '[data-region="modal"]' })
    });

    return  App;
});

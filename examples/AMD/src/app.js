define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var ModalRegion = require('marionette.modal');

    var App = new Marionette.Application();

    App.addRegions({
        menu: '[data-region="menu"]',
        content: '[data-region="content"]',
        modal: ModalRegion.extend({ el: '[data-region="modal"]' })
    });

    return  App;
});

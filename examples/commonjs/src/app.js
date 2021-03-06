var Marionette = require('backbone.marionette');
// Enrich Marionette with the Modal Region
require('../../../marionette.modal');

module.exports = (function () {
    'use strict';

    var App = new Marionette.Application();

    App.addRegions({
        menu: '[data-region="menu"]',
        content: '[data-region="content"]',
        modal: Marionette.Region.Modal.extend({ el: '[data-region="modal"]' })
    });

    return  App;
}());
require.config({
    paths: {
        'backbone': '../../../bower_components/backbone/backbone',
        'underscore': '../../../bower_components/underscore/underscore',
        'jquery': '../../../bower_components/jquery/dist/jquery',
        'jquery.modal': '../../../jquery.modal',
        'marionette': '../../../bower_components/marionette/lib/backbone.marionette',
        'marionette.modal': '../../../lmn.marionette.modal'
    },
    shim: {
        'jquery.modal': {
            deps: ['jquery']
        }
    }
});

require(['app', 'marionette'], function (App, Marionette) {
    'use strict';

    App.start();

    var renderAsModal = function () {
        render(App.modal, new ItemDetails());
    };

    var renderAsContent = function () {
        render(App.content, new ItemDetails());
    };

    var emptyContent = function () {
        App.content.empty();
    };

    var render = function (region, view) {
        region.show(view);
    };

    var Menu = Marionette.ItemView.extend({
        template: '#menu-tmpl',
        triggers: {
            'click a[data-role="open-modal"]': 'item:modal:click',
            'click a[data-role="open-inline"]': 'item:inline:click',
            'click a[data-role="close-inline"]': 'item:inline:close:click'
        }
    });

    var ItemDetails = Marionette.ItemView.extend({
        template: '#item-details-tmpl',
        events: {
            'click button[type="submit"]': 'submit'
        },
        submit: function (ev) {
            ev.preventDefault();
            console.log('submit');
        }
    });

    var menu = new Menu();
    menu.on('item:modal:click', renderAsModal);
    menu.on('item:inline:click', renderAsContent);
    menu.on('item:inline:close:click', emptyContent);

    App.menu.show(menu);
});

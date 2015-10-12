(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['backbone.marionette', 'underscore', 'picoModal', 'jquery'], factory);
    } else if (typeof exports === 'object') {
        var Marionette = require('backbone.marionette');
        var _ = require('underscore');
        var $ = require('jquery');
        var picoModal = require('picoModal');

        module.exports = factory(Marionette, _, picoModal, $);
    } else {
        // Browser globals (root is window)
        factory(root.Marionette, root._, root.picoModal);
    }
}(this, function (Marionette, _, picoModal) {
    'use strict';

    Marionette.Region.Modal = Marionette.Region.extend({
        onShow: function (view) {

            view.$el.css('display','none');

            this.bindInputEvents(view);
            var options = this.getDefaultOptions(_.result(view, 'modal'));

            picoModal(_.extend({
              content: view.$el.html()
            }, options))
            .afterClose(_.bind(this.onCloseDialog, this))
            .show();
        },

        /**
         * Returns the configuration object for the modal
         */
        getDefaultOptions: function (options) {
            options = options || {};

            var defaults = {
                modalClass: 'marionette-modal'
            };

            return _.defaults(options, {
                modalClass: options.className
            }, defaults);
        },

        /**
         * Cleanup after dialog is closed
         */
        onCloseDialog: function () {
            this.empty();
        },

        /**
         * Forces the dialog to close and cleanup to happen
         */
        forceClose: function () {
            $.modal.close();
        },

        /**
         * Binds to input events that can force the dialog to behave in a permitted way
         */
        bindInputEvents: function (view) {
            this.listenTo(view, 'dialog:close', _.bind(this.forceClose, this));
        }
    });
}));

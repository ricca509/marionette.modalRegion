'use strict';

Marionette.Region.Modal = Marionette.Region.extend({
	onShow: function (view) {
		this.bindInputEvents(view);
		var options = this.getDefaultOptions(_.result(view, 'modal'));

		view.$el.modal(options);

		view.$el.on($.modal.CLOSE, _.bind(function () {
			this.onCloseDialog();
		}, this));
	},

	/**
	 * Returns the configuration object for the modal
	 */
	getDefaultOptions: function (options) {
		options = options || {};

		var defaults = {
			modalClass: 'lmn-modal'
		};

		return _.defaults(options, {
			modalClass: options.className
		}, defaults);
	},

	/**
	 * Cleanup after dialog is closed
	 */
	onCloseDialog: function () {
		this.currentView.$el.off($.modal.CLOSE);
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

(function () {
	'use strict';

	var App = new Marionette.Application();

	App.addRegions({
		menu: '[data-region="menu"]',
		content: '[data-region="content"]',
		modal: Marionette.Region.Modal.extend({ el: '[data-region="modal"]' })
	});

	window.App = App;
}());

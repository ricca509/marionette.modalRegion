(function() {
	"use strict";

	App.start();

	var openModal = function () {
		render(App.modal);
	};

	var openInline = function () {
		render(App.content);
	};

	var render = function (region) {
		var details = new ItemDetails();
		region.show(details);
	};

	var Menu = Marionette.ItemView.extend({
		template: '#menu-tmpl',
		triggers: {
			'click a[data-role="open-modal"]': 'item:modal:click',
			'click a[data-role="open-inline"]': 'item:inline:click'
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
	menu.on('item:modal:click', openModal);
	menu.on('item:inline:click', openInline);

	App.menu.show(menu);
}());

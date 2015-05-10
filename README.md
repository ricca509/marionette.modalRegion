# marionette.modalRegion
A Marionette region that gives your views a modal behavior.

Wouldn'it be nice if you could just render your view as a modal without the view itself knowing that it is actually rendered as a modal?

## Demo
Want to see it working?

- [Demo with no script loader](http://showcase.ricca509.me/marionette-modal/examples/global)
- [Demo with AMD](http://showcase.ricca509.me/marionette-modal/examples/AMD)

## Use it

- Add a modal region in your layout:
```
<div data-region="content"></div>
<div data-region="modal"></div>
```
- Register the modal region in your app by extending `Marionette.Region.Modal`:
```
var Marionette = require('marionette');
// Enrich Marionette with the Modal Region
require('marionette.modal');

App.addRegions({
    content: '[data-region="content"]',
    modal: Marionette.Region.Modal.extend({ el: '[data-region="modal"]' })
});
```
- Get an instance of your view (whatever Backbone/Marionette view will do):
```
var view = new Backbone.View();
```
- Render your view in the modal region:
```
App.getRegion('modal').show(view);
```

Want to show the **same** view elsewhere?
```
App.getRegion('content').show(view);
```

That's it!

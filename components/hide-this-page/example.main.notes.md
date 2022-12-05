---
layout: example
parent: component.hide-this-page
sitemap: false
noindex: true
---

This 'hide this page' button code should be placed inside your main layout container (<code>.ds_layout</code>) for correct placement of the button in the layout.

In browsers with support for CSS grid, it will be anchored to the upper right of the layout, and uses <code>position: sticky</code> to keep it in view.

In older browsers, <code>position: fixed</code> is used as a fallback, and the button is placed in the upper right of the viewport instead.

For correct display on mobile devices, you should add the class <code>ds_has-hide-page</code> to the <code>body</code> element.

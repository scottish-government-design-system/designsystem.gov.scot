---
layout: component
title:  "Category header"
category: components
parent: components
thispage: component.category-header
summary: "A header block used on category pages featuring the title, a summary and an illustration."
deprecated: Use the <a href="/components/feature-header/">'feature header' component</a> instead.
examples:
  - site: mygov.scot
    url: https://www.mygov.scot/benefits
    name: "Benefits and grants"
---

## About this component

The category header has:

* a title
* content that describes what’s on the page
* an optional image

If an image is used within a category header, the image will stack below the text content of a category header on a mobile device. The image will also take up the full screen width.

The image will appear on the right-hand side of a category header on a desktop.

## Other versions of this component

Category headers may use a coloured background instead of white. If you choose to do this you must ensure that all text on the category header still meets colour contrast requirements.

The coloured background should be applied to an element that wraps the category header. If using a dark colour, such as in this example, you should add a class of <code>ds_reversed</code> to the wrapping element. This will make the text content display in white.

{% include example-frame.html title="Category header example with a coloured background" name="colour" %}

Note also that in the example above the breadcrumbs are also included in the coloured area and that the <code>ds_reversed</code> class has also altered the colour of its links.

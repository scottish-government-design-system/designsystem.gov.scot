---
layout: example
parent: component.category-item
type: developers
title: devnotes

index: 999
---

### Configuration options

The left border colour is a desaturated modification of the default link colour. This can be overridden if necessary with the following two variables:

`$category-item__border-color`

`$category-item__border-color--hover`

Your values for these should be included before you include the SCSS file.

    $category-item__border-color: red;
    $category-item__border-color--hover: darkred;
    @import '/path/to/components/component.category-item';

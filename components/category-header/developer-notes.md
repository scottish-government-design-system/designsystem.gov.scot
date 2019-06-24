---
layout: example
parent: component.category-header
type: developers
title: devnotes

index: 999
---
### Configuration options

The colour scheme can be modified to match your site's theme if you're not using the SG colour palette.

* `$category-header__border-color` - color used for the bold left border
* `$category-header__ancestor-background-color` - colour used for backgrounds of stacked headers behind the current page 
* `$category-header__ancestor-background-color--active` - highlight colour of a stacked header when in an **active** state

Your values for these should be included before you include the SCSS file.

    $category-header__border-color: red;
    @import './scss/components/component.category-header';

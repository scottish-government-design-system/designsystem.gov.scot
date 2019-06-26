---
layout: example
parent: component.page-nav
type: developers
title: devnotes

index: 999
---
### Configuration options

The colour scheme can be modified to match your site's theme if you're not using the SG colour palette.

* `$page-nav__icon-color` - colour of the icon
* `$page-nav__icon-hover` - colour of the icon's hover state
* `$page-nav__prefix-color` - colour of the "previous" and "next" text labels

Your values for these should be included before you include the SCSS file.

    $page-nav__icon-color: #00a4b4;
    @import './scss/components/component.page-nav';

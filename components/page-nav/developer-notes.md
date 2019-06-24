---
layout: example
parent: component.page-nav
type: developers
title: devnotes

index: 999
---
### Configuration options

`.page-nav` has a handful of fairly self-explanatory configuration options.

* `$page-nav__icon-size` - size of the round arrow icon
* `$page-nav__direction-link__icon-path` - path to your icons
* `$page-nav__prefix-color` - colour used for prefix text

Your values for these should be included before you include the SCSS file.

    $page-nav__icon-size: 40px;
    @import './scss/components/component.page-nav';

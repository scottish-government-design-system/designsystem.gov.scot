---
layout: example
parent: component.search-box
type: developers
title: devnotes

index: 999
---
### Configuration options

Search box has the following configuration options, which are fairly self-explanatory.

* `$search-box__font-size`
* `$search-box__font-size--tablet`
* `$search-box__font-size--desktop`
* `$search-box__size`
* `$search-box__size--tablet`
* `$search-box__border-radius`
* `$search-box__background-color`
* `$search-box__background-color--focus`

Your values for these should be included before you include the SCSS file.

    $search-box__font-size: 1.2em;
    @import './scss/components/component.search-box';

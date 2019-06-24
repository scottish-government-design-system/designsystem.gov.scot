---
layout: example
parent: component.expand
type: developers
title: devnotes

index: 999
---

"Expand" requires the addition of some JavaScript to toggle an `expand--open` class on the element.

An `.expand` component should be associated with an element to expand through use of a `data-target-selector` attribute.

### Configuration options

The default styling for the expand button is for it to take on colouring from the primary link styling. This can be overridden.

* `$expand__border-color`
* `$expand__background-color--focus`

Your values for these should be included before you include the SCSS file.

    $expand__border-color: grey;
    @import './scss/components/component.expand';

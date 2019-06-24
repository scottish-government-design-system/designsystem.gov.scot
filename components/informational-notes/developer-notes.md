---
layout: example
parent: component.informational-notes
type: developers
title: devnotes

index: 999
---
### Configuration options

Informational notes have the following configuration options:

* `$info-note__border-color`
* `$info-note__note-border-color` - override for "note" border colour
* `$info-note__caution-border-color` - override for "caution" border colour
* `$info-note__attribution-background-color` - override "attribution" background colour
* `$info-note__attribution-border-color` - override for "attribution" border colour
* `$info-note__blockquote-border-color` - override for "blockquote" border colour
* `$info-note__image-note` - image to use for "note" (default: "i" in a circle)
* `$info-note__image-caution` - image to use for "caution" (default: large "!" in a circle)
* `$tablet-note-size`

Your values for these should be included before you include the SCSS file.

    $info-note__border-color: #f00;
    @import './scss/components/component.informational-notes';

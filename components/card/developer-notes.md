---
layout: example
parent: component.card
type: developers
title: devnotes

index: 999
---
### Configuration options

* `$card__hover-bottom-color` - color used for the hover indication
* `$card__focus-color` - color used for the focus state
* `$card__background-color` - color used for the card's background

Your values for these should be included before you include the SCSS file.

    $card__hover-bottom-color: red;
    @import './scss/components/component.card';

### Class `.card--hover`

This modifier class replaces the default hover behaviour (typically underlining) with a solid border at the bottom of the card. Use this when a whole card is intended to be a clickable link.

### Class `.card--small`

This modifier class causes the height of a card to be fixed. Without this class a card will scale to fit its contents.

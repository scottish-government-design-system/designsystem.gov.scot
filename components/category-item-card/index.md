---
layout: component-enhanced
title:  "Category item (card)"
category: components
parent: components
thispage: component.category-item--card
summary: "A category item component displayed with a more prominent style"
---

This is a variant of [category item](/components/category-item/) that places the category item's contents onto a card to give it greater visual prominence. It is used in [card navigation](/patterns/card-navigation/) and, just like a category item, it is never used on its own.

## Design rationale

Cards provide a way to give greater visual prominence to a category item.

## Accessibility

The link element should have a title attribute containing the title text of the category item.

## Alternative display

The bottom border visible when hovering over or focussing on the card can be replaced with a gradient.

{% include example-frame.html name="gradient" caption="Card item with a bottom gradient on hover and focus" %}

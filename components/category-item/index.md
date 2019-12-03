---
layout: component
title:  "Category item"
category: components
parent: components
thispage: component.category-item
summary: "A simple component used in navigation patterns"
type: minor
phase: 1
---

Category item is a simple component that is used to populate collections of items in a navigation pattern, such as [grid navigation](/patterns/grid-navigation) or [list navigation](/patterns/list-navigation). It is never used on its own.

## Design rationale

Providing the title and a summary of a piece of content helps users make the correct choice when faced with a number of content items in a navigation group.

Reuse of the category item component across a number of wider patterns helps to create consistency.

## Accessibility

The link element should have a title attribute containing the title text of the category item.

## Alternative displays

### Highlight
Category items can be highlighted.
{% include example-frame.html name="highlight" caption="Example of a highlighted category item" %}

### Card
Category items can be placed on [cards](/components/card).
{% include example-frame.html name="card" caption="Example of a category item on a card" %}

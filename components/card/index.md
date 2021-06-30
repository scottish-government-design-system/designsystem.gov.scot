---
layout: component
title:  "Card"
category: componentsx
parent: components
thispage: component.card
summary: "Components or other content can be placed on cards."

examples:
  - site: tradingnation.mygov.scot
    url: https://tradingnation.mygov.scot/
    name: "A Trading Nation"
---

## About this component
The ‘card’ navigation pattern is a three column grid that separates uniform boxes. These boxes should contain links to the next level of navigation or to content.

The card navigation pattern is:
* the first level of navigation on the site
* flexible – it can be used with any number of content items and the cards in the grid can be sorted in any order, although it’s sensible to base how you order the boxes on user needs

## Components related to this
* Grid navigation – pattern used to structure category items on a page
* Category item – a component that makes up second level navigation pages, along with category header
* List navigation – third level navigation page  

## Why we use this component
The large size of the cards in the card navigation pattern allows enough space for content that previews the next level of navigation or content.
It also creates a consistent navigational pattern for content.

## Other versions of this component
Some versions of this pattern may include a gradient effect along the bottom border of individual cards.  

## Mobile version
On mobile the cards in the grid appear in a single column, stacked on top of each other. On tablet (portrait) the cards in the grid appear in two columns.  

## Supporting evidence for using this component
There are no reported performance issues with this component from mygov or gov.scot.  

## Accessibility Features
Find out more about accessibility requirements that should be applied to all online services in the dedicated section of this site: INSERT LINK HERE

## Usage examples

### Arbitrary content

{% include example-frame.html title="Card example with arbitrary content" name="content" %}

### Card with category item and image

{% include example-frame.html title="Card example with media content" name="media" %}


### A Design System component

This example demonstrates using a [metadata](/components/metadata) block on a card.

{% include example-frame.html title="Card example with an embedded component" name="component" %}

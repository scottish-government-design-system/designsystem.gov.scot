---
layout: component
title: "Navigational pages"
category: patterns
parent: patterns
thispage: pattern.navigational-pages
summary: "Navigational pages display headings and small pieces of content to help users navigate a website."
examples:
  - site: tradingnation.mygov.scot
    url: https://tradingnation.mygov.scot/browse/sectors
    name: "Sector profiles"
  - site: tradingnation.mygov.scot
    url: https://tradingnation.mygov.scot/browse/country-profiles
    name: "Country profiles"
---

## About this pattern

We have four types of navigational pages:

* Card navigation - displays hyperlinked headings and summary content in rows of large boxes on desktops and tablets, a single column on mobile
* Image card navigation - same as card navigation and each card has an image illustrating it
* Grid navigation - orders hyperlinked headings and summary content into rows without boxes on desktops and tablets, a single column on mobile
* List navigation - orders hyperlinked headings and summary content into a list

## Card navigation

{% include example-frame.html title="Navigational page example with items on cards" name="card" %}

All cards should contain links.

## Image card navigation

{% include example-frame.html title="Navigational page example with items on image cards" name="image-card" %}

These cards are designed for images with a 16:9 aspect ratio.

<div class="ds_inset-text">
  <div class="ds_inset-text__text">
    <p>The 'image card' version of navigation pages is currently untested. We plan to include it in future user testing.</p>
  </div>
</div>

### Accessibility

The images used in image card navigation are considered to be decorative, and as such they have a blank `alt` attribute and screen readers are told to ignore them.

## Grid navigation

{% include example-frame.html title="Navigational page example with items in a grid" name="grid" %}

Although there are no boxes, there is a single, left-hand side line running the total length of each text area (heading plus summary content).

## List navigation

{% include example-frame.html title="Navigational page example with items in a list" name="list" %}

## Other versions of these patterns

Some versions of card navigation may include a gradient effect along the bottom border of individual boxes.

## Why we use these patterns

Features of these patterns, such as the large size of the boxes in the card navigation pattern, help space out content to make it easier for users to find the content they need.

These patterns can also be reused across websites, creating a consistent experience for users and cutting development time.

## Website analytics

To understand user behaviour, clicks on navigation items can be tracked through the original page path, the click URL, the click text, and a data attribute showing the item number.

The data attributes are added automatically by the [Design System's 'tracking' script](/get-started/tracking).

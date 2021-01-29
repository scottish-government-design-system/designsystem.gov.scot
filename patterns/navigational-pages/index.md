---
layout: component
title: "Navigational pages"
category: patterns
parent: patterns
thispage: pattern.navigational-pages
summary: "Navigational pages display headings and small pieces of content to help users navigate a website."
type: major
phase: 1
examples:
  - site: tradingnation.mygov.scot
    url: https://tradingnation.mygov.scot/sectors
    name: "A Trading Nation"
  - site: tradingnation.mygov.scot
    url: https://tradingnation.mygov.scot/sectors
    name: "Sector profiles"
  - site: tradingnation.mygov.scot
    url: https://tradingnation.mygov.scot/country-profiles
    name: "Country profiles"
---

## About this pattern

We use three main types of navigational pages:

* Box navigation - displays hyperlinked headings and summary content in rows of large boxes on desktops and tablets, a single column on mobile
* Grid navigation - orders hyperlinked headings and summary content into rows without boxes on desktops and tablets, a single column on mobile
* List navigation - orders hyperlinked headings and summary content into a list

### Card navigation

{% include example-frame.html name="card" %}

All cards should contain links.

Single cards can be ‘highlighted’ to make them stand out from others on the page.

### Grid navigation

{% include example-frame.html name="grid" %}

Although there are no boxes, there is a single, left-hand side line running the total length of each text area (heading plus summary content).

### List navigation

{% include example-frame.html name="list" %}

Links in a navigational list can be highlighted. Links that are highlighted always appear at the top of the list. Other items in the list may be sorted in any order.

## Other versions of these patterns
Some versions of box navigation may include a gradient effect along the bottom border of individual boxes.

## Why we use these patterns
Features of these patterns, such as the large size of the boxes in the card navigation pattern, help space out content to make it easier for users to find the content they need.

These patterns can also be reused across websites, creating a consistent experience for users and cutting development time.

## Website analytics
To understand user behaviour, clicks on navigation items can be tracked through the original page path, the click URL, the click text, and a data attribute showing the item number.

The data attributes are added automatically by the [Design System's "tracking" script](/get-started/tracking/#category-list).

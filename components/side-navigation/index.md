---
layout: component
title: "Side navigation"
category: components
parent: components
thispage: component.side-navigation
summary: ""
phase: 2
---


## About this component

The side navigation is a list of links to other parts of the same web page or to other pages. It sits alongside the page content.

A side navigation can be made up of a flat or nested list of links.

The side navigation will highlight the page in the list that the user is on and each link should take the user to distinct content.  

If the side navigation has a structure with nested sections, it should:

* display all the pages in a section when a user selects the section
* stay under 10 sections
* have no more than 3 levels in total

The side navigation should also:

* not repeat or be combined with grid navigation pages
* not include icons
* include a limited character count for links to avoid spanning over too many lines

The mobile version of side navigation is minimised into an expandable list at the top of the page.

## Why we use this component
The side navigation gives users a snapshot of content within the user’s current website, as well as it sits in terms of the whole website.

Since it’s on the left hand side of the page, it also supports left to right reading.

## Website analytics
To understand user behaviour, clicks on side navigation items can be tracked through the original page path, the click URL, the click text and a data attribute showing the item. Clicks on the mobile version's open/close toggle can also be tracked using a data attribute.

The data attributes are added automatically by the [Design System's "tracking" script](/get-started/tracking/#side-navigation).

## Accessibility
Aria attributes describe whether the side navigation is open or closed.

Find out more about accessibility requirements that should be applied to all online services in the dedicated [accessibility section of this site](/accessibility/).

---
layout: component
title:  "Site header"
category: patterns
parent: patterns
thispage: pattern.site-header
summary: "The site header contains key branding and the title of a website. It appears on every page."
examples:
 - site: tradingnation.mygov.scot
   url: https://tradingnation.mygov.scot/
   name: "A Trading Nation"
---

## About this pattern
The site header introduces wider site branding, such as the main colours in a site’s colour palette. It appears at the top of every page and can include an optional search field and primary site navigation.

On a mobile, site navigation is hidden from view until the user clicks or taps on a ‘menu’ button.

## Other versions of this pattern
1.	Plain header
2.	Plain header with logo and site title
3.	Header with search
4.	Header with site navigation
5.	Header with search and site navigation
6.	Header with phase banner

## Why we use this pattern
The site header helps a user quickly recognise a website, for example if they don’t come to a website via a homepage, or they have multiple tabs open and are switching back and forth between tabs.

We’ve avoided using second level interactive navigation because of usability concerns.

## Evidence
Analytics evidence from mygov.scot and gov.scot shows that users are familiar with the logo as a route to the homepage.

Users were also more likely to navigate to site sections of gov.scot using the site header’s primary navigation than using the same links on panels lower down the homepage.

## Website analytics
The site header tracking is available for each of its components: [Site search](/components/site-search), [site navigation](/components/site-navigation) and [phase banner](/components/phase-banner). In addition, the logo, title, skip navigation and expandable menu are trackable as follows:

* Clicks to the title can be tracked through the original page path, the click URL, and a data attribute attached to the title text.

* Clicks to the logo can be tracked through tracked through the original page path, the click URL, and a data attribute attached to the image.

The data attributes are added automatically by the [Design System's "tracking" script](/get-started/tracking/#site-header).

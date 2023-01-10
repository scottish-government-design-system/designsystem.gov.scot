---
layout: component
title: "Site footer"
category: patterns
parent: patterns
thispage: pattern.site-footer
summary: "A site footer should appear at the bottom of every page and highlights links to content about the website."

examples:
  - site: tradingnation.mygov.scot
    url: https://tradingnation.mygov.scot/
    name: "A Trading Nation"

updatehistory:
  - date: 2020-08-19
    content: Add "site footer" pattern
    url: /patterns/site-footer
---

## About this pattern
A site footer should include:

* a list of links to items such as the privacy statement, cookie information and accessibility statement
* a copyright statement – for example, mygov.scot uses: “All content is available under the Open Government Licence v3.0, except for graphic assets and where otherwise stated. © Crown Copyright” 
* an additional logo, if a parent or partner organisation’s logo is needed

## Spacing and layout
The site footer is intended to be used in the "page bottom" container of the basic [Design System page template](/styles/page-template/). The page template includes spacing between the main content of the page, placed inside "page middle", and the footer.

If the content immediately preceding the footer has a non-white background, you should add a modifier class of `ds_pre-footer-background` to the element that has the background colour to make the background colour continue all the way to the footer. That element can be the `ds_page--middle` container or a descendant of it.

## Why we use this pattern
Site footers are a best practice web pattern used to add information about a website at the bottom of web pages.

## Evidence
Analytics evidence from mygov.scot and gov.scot shows that users are familiar with the logo as a route to the homepage. Users also interact with all the footer links.

## Website analytics

The footer links, copyright notice, and footer logo are trackable as follows:

* Footer link clicks can be tracked through the original page path, the click URL, the click text, and a data attribute attached to all links.

* Footer copyright clicks can be tracked through the original page path, the click URL, and a data attribute attached to all copyright links.

* Footer logo clicks can be tracked through the original page path, the click URL, and a data attribute attached to the image.

The data attributes are added automatically by the [Design System's 'tracking' script](/guidance/tracking/).

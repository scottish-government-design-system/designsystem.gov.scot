---
layout: component
title: "Site footer"
category: patterns
parent: patterns
thispage: pattern.site-footer
summary: "A site footer should appear at the bottom of every page and highlights links to content about the website."
phase: 1

examples:
  - site: tradingnation.mygov.scot
    url: https://tradingnation.mygov.scot/
    name: "A Trading Nation"
---

## About this pattern
A site footer should include:

* an additional logo, if a parent or partner organisation’s logo is needed

* a list of links to items such as the privacy statement, cookie information and accessibility statement

* a copyright statement – for example, mygov.scot uses: “© Crown copyright. All content is available under the Open Government Licence v3.0, except for all graphic assets and otherwise stated.”  

## Why we use this pattern
Site footers are a best practice web pattern used to add information about a website at the bottom of web pages.

## Evidence
Analytics evidence from mygov.scot and gov.scot shows that users are familiar with the logo as a route to the homepage. Users also interact with all the footer links.

## Website analytics

The footer links, copyright notice, and footer logo are trackable as follows:

### Links
Footer link clicks can be tracked through the original page path, the click URL, the click text, and a data attribute attached to all links,<code>data-footer="link"</code>.

### Copyright
Footer copyright clicks can be tracked through the original page path, the click URL, and a data attribute attached to all copyright links, <code>data-footer="copyright"</code>.

### Logo
To understand user behaviour, footer logo clicks can be tracked through the original page path, the click URL,  and a data attribute attached to the image, <code>data-footer="logo"</code>. Where multiple logos exist, each should have a different logo-NAME data attribute.

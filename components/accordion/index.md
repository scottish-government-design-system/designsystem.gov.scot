---
layout: component
title:  "Accordion"
category: components
parent: components
label: component
thispage: component.accordion
summary: "An accordion is a list of collapsed content items. A user can expand any item in the list to view its contents."
phase: 2

---

## About this component

An accordion is made up of in-page links. When one of the links is clicked, the link will expand an associated panel to reveal its contents. If the same link is clicked again, the panel's contents will collapse and be hidden once again. Multiple panels can be open at the same time.

There is an option to have an "Open all" and "Close all" function.

An accordion cannot be nested inside another accordion.

## Why we use this component

Sometimes, content is displayed best when it's broken into small chunks, with users able to pick the particular chunk they need from a longer list of accordion options. When thinking about using an accordion it should be tested with users, alongside other options, to find the best way to display an individual item of content.

## Website analytics

Opening and closing individual accordion panels by clicking on their headings can be tracked through the original page path, click text, and a data attribute showing the action and item number, for example <code>data-accordion="accordion-open-1"</code>.

Opening and closing all accordion panels by clicking on the "Open all"/"Close all" link can be tracked through the original page path, click text and a data attribute attached on the element, for example <code>data-accordion="accordion-open-all"</code>.

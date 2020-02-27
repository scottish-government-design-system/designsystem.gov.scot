---
layout: component
title:  "Breadcrumbs"
category: components
label: pattern
parent: components
thispage: component.breadcrumbs
summary: "A breadcrumb shows a user where they are in a website’s structure. It also presents links to pages higher in the site’s structure, such as a home page."
type: major
phase: 1
---

## About this component

A breadcrumb should:

*	be used if a website has 2 or more levels in its structure
*	include the user's current page
*	display the ‘current page’ link in a clearly different style to the other links in the breadcrumb

You might not need a breadcrumb if the website has a top level navigation, such as a meganav or global navigation.

You should omit the breadcrumb from parts of a website where a user needs to go through pages in a certain order. This includes things like online forms and multi-page calculators.

## Other versions of this component

If the page titles in the breadcrumb trail are very long or if the structure repeats page titles, the current page doesn’t always need to be displayed. If this is the case, the current page title should still be available to screen readers.

## Why we use this component

Breadcrumbs are online best practice for supporting user navigation.

## Website analytics

There is evidence from mygov.scot that users interact with the breadcrumbs more than other forms of navigation, for example in-page panel links or the back swipe button.

## Accessibility Features

* Use of a <nav> element with aria-label="breadcrumb" is recommended. You can find out more about this on [GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/33).
* This breadcrumb component contains all the accessibility features for breadcrumbs described in WAI-ARIA’s authoring practices for breadcrumbs.
* [W3C](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html) may also be useful.
* You should make sure chevrons are not read by screen readers and avoid font glyphs – these can cause accessibility problems.

## Feedback, help or support

[Send us feedback or ask us a question.](mailto:designsystem@gov.scot)  

## Links to live examples
[mygov.scot - Find a nursery or childcare place](https://www.mygov.scot/nursery-place/)

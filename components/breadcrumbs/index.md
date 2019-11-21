---
layout: component
title:  "Breadcrumbs"
category: components
label: pattern
parent: components
thispage: component.breadcrumbs
summary: "Breadcrumbs help users to understand where they are within a website's structure and to move between levels."
type: major
phase: 1
---

## About the component

The breadcrumb is a sequence of links that shows where a currently viewed page sits in a website’s structure. The breadcrumb goes back to the home page via every step back from the current page.

When using a breadcrumb:
•	it should include the user’s current page
•	the text of the current page link should be different to the other links in the breadcrumb

A breadcrumb should be used if a website has 2 or more levels in its structure.

If the page or website has a side or top level navigation, a breadcrumb may not be needed.

## Components related to this

None.

## Why we use this component

Breadcrumbs are a standard web pattern used to support user navigation.

## Demo
(HTML example)

## Other versions of this component

If the page titles in the breadcrumb are very long or if the structure repeats page titles, the current page doesn’t always need to be displayed. If this is the case, the current page title should still be available to screen readers.

## Mobile version

None.

## Accessibility Features
* Use of a <nav> element with aria-label="breadcrumb" is recommended. You can find out more about this on [GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/33).
* This breadcrumb component contains all the accessibility features for breadcrumbs described in WAI-ARIA’s authoring practices for breadcrumbs.
* [W3C](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html) may also be useful.
* You should make sure chevrons are not read by screen readers and avoid font glyphs – these can cause accessibility problems.

## User research that supports using this component

None.

## Google Analytics and the use of this component

There is evidence from mygov.scot that users interact with the breadcrumb more than other forms of navigation, e.g. in-page panel links or back swipe button. (mygov.scot and gov.scot Google Analytics, July 2019)

## Feedback, help or support

If you need any help or want to give any feedback you can:
email: tbc
slack: tbc

## Links to live examples
[mygov.scot - Find a nursery or childcare place](https://www.mygov.scot/nursery-place/)

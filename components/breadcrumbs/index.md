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

## About this component

A breadcrumb trail is made up of a sequence of links which show where a currently viewed page sits in a website’s structure. Breadcrumb links go back to the home page via every step back from the current page.

When using a breadcrumb trail:
* it should include the user’s current page
* the text of the current page link should be different from the other links in the breadcrumb

Breadcrumbs should be used if a website has 2 or more levels in its structure.

If the page or website has a side or top level navigation, a breadcrumb may not be needed.

## Why we use this component

Breadcrumbs are a standard web pattern used to support user navigation.

## Other versions of this component

If the page titles in the breadcrumb trail are very long or if the structure repeats page titles, the current page doesn’t always need to be displayed. If this is the case, the current page title should still be available to screen readers.

## Supporting evidence for using this component

There is evidence from mygov.scot that users interact with the breadcrumbs more than other forms of navigation, e.g. in-page panel links or back swipe button. (mygov.scot and gov.scot Google Analytics, July 2019)

## Website analytics and the use of this component

* To understand user behaviour, clicks on breadcrumb items can be tracked through the original page path, the click URL, the click text, and a data attribute showing the item number i.e data-navigation="breadcrumb-1"
* Include a Schema.org representation

## Accessibility Features
* Use of a <nav> element with aria-label="breadcrumb" is recommended. You can find out more about this on [GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/33).
* This breadcrumb component contains all the accessibility features for breadcrumbs described in WAI-ARIA’s authoring practices for breadcrumbs.
* [W3C](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html) may also be useful.
* You should make sure chevrons are not read by screen readers and avoid font glyphs – these can cause accessibility problems.

Find out more about accessibility requirements that should be applied to all online services in the dedicated section of this site: INSERT LINK HERE

## Feedback, help or support

If you need any help or want to give any feedback you can e-mail us at:
[designsystem@gov.scot](mailto:designsystem@gov.scot)  


## Links to live examples
[mygov.scot - Find a nursery or childcare place](https://www.mygov.scot/nursery-place/)

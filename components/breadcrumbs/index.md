---
layout: component
title:  "Breadcrumbs"
category: components
label: component
parent: components
thispage: component.breadcrumbs
summary: "A breadcrumb shows a user where they are in a website’s structure. It also presents links to pages higher in the site’s structure, such as a home page."
phase: 1

examples:
  - site: tradingnation.mygov.scot
    url: https://tradingnation.mygov.scot/food-and-drink
    name: "Food and drink"
---

## About this component

The breadcrumbs component should:

*	be used if a website has 2 or more levels in its structure
*	include the user's current page
*	display the "current page" item in a clearly different style from the other items in the breadcrumbs

You might not need a breadcrumbs component if the website has a top level navigation, such as a meganav or global navigation.

You should omit the breadcrumbs component from parts of a website where a user needs to go through pages in a certain order. This includes things like online forms and multi-page calculators.

## Other versions of this component

If the page titles in the breadcrumbs are very long or if the structure repeats page titles, the current page doesn’t always need to be displayed. If this is the case, the current page title should still be available to screen readers.

## Why we use this component

Breadcrumbs are online best practice for supporting user navigation.

## Evidence

There is evidence from mygov.scot that users interact with the breadcrumbs more than other forms of navigation, for example in-page panel links or the back swipe button.

## Variants

Where there may be issues with repetition or page titles are too long, a version of breadcrumbs which do not include the current page can be used. In these cases keep the current page available to screen readers through the use of the <code>visually-hidden</code> helper class.

## Website analytics / performance 

To understand user behaviour, clicks on breadcrumb items can be tracked through the original page path, the click URL, the click text, and a data attribute showing the item number, for example <code>data-navigation="breadcrumb-1"</code>.

You should include a [Schema](https://schema.org) representation of the breadcrumbs. One useful benefit of using Schema representation is that it allows a breadcrumb trail to be accurately displayed on search engines and will help users navigate the structure of your site.

{% include example-frame.html type="JSON-LD" no-demo="true" name="schema" %}

This [Google structured data guidance for breadcrumbs](https://developers.google.com/search/docs/data-types/breadcrumb) is a helpful reference.

## Accessibility features

* Use of a <nav> element with aria-label="breadcrumb" is recommended. You can find out more about this on [GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/33).
* This breadcrumb component contains all the accessibility features for breadcrumbs described in WAI-ARIA’s authoring practices for breadcrumbs.
* [W3C](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html) may also be useful.
* You should make sure that separators between breadcrumb items are not read by screen readers and avoid using font glyphs for them – these can cause accessibility problems.

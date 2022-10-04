---
layout: component
title:  "Breadcrumbs"
category: components
label: component
parent: components
thispage: component.breadcrumbs
summary: "A breadcrumb shows a user where they are in a website’s structure. It also presents links to pages higher in the site’s structure, such as a home page."

examples:
  - site: mygov.scot
    url: https://www.mygov.scot/getting-married
    name: "Marriage in Scotland"

updatehistory:
  - date: 2020-08-19
    content: Add "breadcrumbs" component
    url: /components/breadcrumbs
---

## About this component

The breadcrumbs component should:

*	be used if a website has 2 or more levels in its structure
*	include the user's current page
*	display the current page item in a clearly different style from the other items in the breadcrumbs

You might not need a breadcrumbs component if the website has a top level navigation, such as a meganav or global navigation.

You should omit the breadcrumbs component from parts of a website where a user needs to go through pages in a certain order. This includes things like online forms and multi-page calculators.

## Why we use this component

Breadcrumbs are online best practice for supporting user navigation.

## Evidence

There is evidence from mygov.scot that users interact with the breadcrumbs more than other forms of navigation, for example in-page panel links or the back swipe button.

## Variants

Where there may be issues with repetition or page titles are too long, a version of breadcrumbs which do not include the current page can be used. In these cases keep the current page available to screen readers through the use of the <code>visually-hidden</code> CSS class.

{% include example-frame.html title="Breadcrumb example with current page not shown" name="no-current" %}

## Website analytics

To understand user behaviour, clicks on breadcrumb items can be tracked through the original page path, the click URL, the click text, and a data attribute showing the item number.

The data attribute is added automatically by the [Design System's 'tracking' script](/get-started/tracking/#breadcrumbs).

You should include a [Schema](https://schema.org) representation of the breadcrumbs. One useful benefit of using Schema representation is that it allows a breadcrumb trail to be accurately displayed on search engines and will help users navigate the structure of your site.

{% include example-frame.html title="Breadcrumb structured data example code" type="JSON-LD" no-demo="true" name="schema" %}

This [Google structured data guidance for breadcrumbs](https://developers.google.com/search/docs/data-types/breadcrumb) is a helpful reference.

## Accessibility

* Use of a `nav` element with `aria-label="breadcrumb"` is recommended. You can find out more about this on [GitHub](https://github.com/alphagov/govuk-design-system-backlog/issues/33).
* This breadcrumb component contains all the accessibility features for breadcrumbs described in WAI-ARIA’s authoring practices for breadcrumbs.
* [W3C](https://www.w3.org/WAI/ARIA/apg/example-index/breadcrumb/index.html) may also be useful.
* You should make sure that separators between breadcrumb items are not read by screen readers and avoid using font glyphs for them – these can cause accessibility problems.

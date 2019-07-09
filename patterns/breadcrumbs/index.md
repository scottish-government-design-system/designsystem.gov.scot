---
layout: component-enhanced
title:  "Breadcrumbs"
category: patterns
parent: patterns
thispage: pattern.breadcrumbs
summary: "Breadcrumbs help users to understand where they are within a website's structure and to move between levels."
---

Breadcrumbs are an essential tool for navigation. They should only be omitted if a site's structure is extremely simple.

Breadcrumbs work best when the current page is included. In some cases this may not be desirable, such as when pages have especially long titles. If this can't be avoided you can hide the current page from view but keep it available to screen readers.


{% include example-frame.html name="no-current" caption="Example of breadcrumbs where the current page is hidden" %}

## Accessibility

The breadcrumbs pattern contains all of the accessibility features for breadcrumbs described in <abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>'s [authoring practices for breadcrumbs](https://www.w3.org/TR/wai-aria-practices-1.1/examples/breadcrumb/index.html).

## Web analytics and performance

Include a schema.org representation of the breadcrumbs.

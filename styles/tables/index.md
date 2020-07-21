---
layout: component
title:  "Tables"
category: styles
parent: styles
thispage: style.tables
phase: 3
summary: The Design System's table component make it easier to compare and scan information.
---
## About this component



## Why we use this component

## Usage

### Table caption

Tables should include a [caption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) element that describes the table in the same way you might use a heading element. A well-written caption adds context to a table and makes it easier to understand.

### Table headers

Use table header elements to describe what the data in rows or columns represents. It is a good idea to use the `scope` attribute to denote whether a header applies to a row or a column to help users of assistive technology.

## Mobile behaviour

By default, tables will shrink proportionally on smaller screens. Their columns will become narrower but remain in proportion to one another. If there is a lot of data this might not display well on small screens. There are two alternative displays you can use, depending on your use case.

### Scrolling table

{% include example-frame.html name="scrolling" %}

### Collapse to boxes

{% include example-frame.html name="boxes" %}

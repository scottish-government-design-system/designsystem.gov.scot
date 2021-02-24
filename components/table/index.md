---
layout: component
title:  "Table"
category: components
parent: components
thispage: component.table
phase: 3
summary: The Design System's table component make it easier to compare and scan information.

examples:
  - site: mygov.scot
    url: https://www.mygov.scot/scotland-bank-holidays/
    name: "Public and bank holidays"
---

## Usage

### Table caption

All tables must include a [caption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) element that describes the table in the same way you might use a heading element. A well-written caption adds context to a table and makes it easier to understand.

### Table headers

Use table header elements to describe what the data in rows or columns represents. It is a good idea to use the `scope` attribute to denote whether a header applies to a row or a column to help users of assistive technology.

## Mobile behaviour

In general mobile devices have room for around three columns of data, depending on the length of the data being presented. If there is a lot of data in a table it might not display well on small screens. There are two alternative displays you can use, depending on your use case.

### Scrolling table

In a scrolling table, if there are too many columns to display in the content area the first column becomes sticky while the rest of the table is allowed to scroll beneath it. For that reason the data in the first column should be broadly indicative of what the data in the column is about, as in this example where it is the name of the item being described in the row of data.

Pros: 
* Easy to compare data between rows.
* Table display is preserved.

Cons:
* Requires additional interaction (scroll or swipe) from the user.
* Not all data is visible at once.

{% include example-frame.html name="scrolling" %}

### Collapse to boxes

In a table that collapses to boxes, the rows of the table are transformed into individual blocks of data. 

Pros: 
* Provides an easily-digestable summary of the data.

Cons:
* Difficult to compare data between rows, since they've now been transformed into boxes and separated.
* Does not look like a table. This non-standard display may be unfamiliar to users.

{% include example-frame.html name="boxes" %}

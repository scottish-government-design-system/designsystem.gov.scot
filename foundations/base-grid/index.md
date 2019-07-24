---
layout: component-enhanced
title:  "Base grid"
category: foundations
parent: foundations
thispage: foundation.base-grid
summary: The column grid used for page layouts
---

The base grid is made up of twelve columns.

On smaller devices the columns are reduced:

* Medium devices (e.g. a tablet in portrait orientation): six columns
* Small devices (e.g. a large smartphone): two columns
* Tiny devices (e.g. a small smartphone): one column

The grid spans the entire width of the screen on smaller devices, and is restricted to fixed-width containers on larger devices.

## Demo

The following demo can be resized, to show how the grid adapts to different viewport sizes, by dragging its bottom-right corner. It is scaled down to half size.

This example is intended for illustration purposes only, and the HTML and CSS code used to create it should not be used.

{% include example-frame-base-grid.html name="interactive" caption="Half-scale interactive demo" resize=true %}

## Design rationale

Smaller devices have a fluid display to make full use of the available screen space. The fixed-width containers used on larger devices allow for more consistent layouts and make sense for considerations such as recommended line length for text content.

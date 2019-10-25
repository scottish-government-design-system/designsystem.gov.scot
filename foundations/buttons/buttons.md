---
layout: component-enhanced
title:  "Buttons"
category: foundations
parent: foundations
thispage: foundation.buttons
#summary: ""
---


## Types of button

### Primary (default)

Use this for your primary calls to action. Multiple primary buttons can confuse users. Try to have only one of these per page (or section of a page).

<div class="ds_button-group">
<a href="#" class="ds_button">Start here</a>
</div>

### Secondary

<div class="ds_button-group">
<a href="#" class="ds_button  ds_button--secondary">View summary</a>
</div>

### Cancel/calloff

<div class="ds_button-group">
<a href="#" class="ds_button  ds_button--cancel">Cancel</a>
</div>




## Width variants

### Flexible (default)

Buttons will expand to fit the length of text by default

<div class="ds_button-group">
<a href="#" class="ds_button">Start</a><br />

<a href="#" class="ds_button">Really super duper start here</a>
</div>

### Fixed

Use fixed-width buttons to force uniformity in button widths.

<div class="ds_button-group">
<a href="#" class="ds_button  ds_button--fixed">Start</a><br />

<a href="#" class="ds_button  ds_button--fixed">Really super duper start here</a>
</div>

### Maximum

Use maximum-width buttons for large buttons. These will fill the width of small screens, up to a set maximum width (480px).

<div class="ds_button-group">
<a href="#" class="ds_button  ds_button--max">Start</a><br />

<a href="#" class="ds_button  ds_button--max">Really super duper start here</a>
</div>




## Size variants

### Small

Use small buttons for XXXXXXXXXXXX.

<div class="ds_button-group">
<a href="#" class="ds_button  ds_button--small">Start here</a><br />
</div>

The small button modifier can be applied to any type or width variant.
<div class="ds_button-group">
<a href="#" class="ds_button  ds_button--small  ds_button--max  ds_button--secondary">View summary</a><br />

<a href="#" class="ds_button  ds_button--small  ds_button--fixed  ds_button--cancel">Cancel</a>
</div>




## Buttons with icons

Icons can be added to buttons. Buttons with icons can also have any size, type or width modifiers applied to them.

<div class="ds_button-group">
<a href="#" class="ds_button  ds_button--has-icon  ds_button--max">
    Search
    <svg class="ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
</a><br />

<a href="#" class="ds_button  ds_button--small  ds_button--secondary  ds_button--has-icon">
    Search
    <svg class="ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
</a><br />

<a href="#" class="ds_button  ds_button--cancel  ds_button--fixed  ds_button--has-icon">
    Cancel
    <svg class="ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#close-21"></use></svg>
</a>
</div>

---
layout: component
title:  "Buttons"
category: styles
parent: styles
thispage: style.buttons
#summary: ""
phase: 3
---

Button styles can be applied to either button or link elements. Use the appropriate element for the task, i.e. use a button element when the user is performing an action, or a link element when the user is navigating.

## Types of button

### Primary (default)

Use this for your primary calls to action. Multiple primary buttons can confuse users. Try to have only one of these per page (or section of a page).

{% include example-frame.html name="primary" %}

### Secondary

Any non-primary actions should use this inverted button style. It has less visual prominence than the primary button.

{% include example-frame.html name="secondary" %}

### Cancel/calloff

If a button is used to cancel or back out of an action, this more severe border style should be used.

{% include example-frame.html name="cancel" %}

### Disabled

Buttons in a disabled or unclickable state should be visually distinct and use this display.

{% include example-frame.html name="disabled" %}




## Width variants

### Flexible (default)

Buttons will expand to fit the length of text by default

{% include example-frame.html name="widths-flex" %}

### Fixed

Use fixed-width buttons to force uniformity in button widths.

{% include example-frame.html name="widths-fixed" %}

### Maximum

Use maximum-width buttons for large buttons. These will fill the width of small screens, up to a set maximum width (480px).

{% include example-frame.html name="widths-max" %}




## Size variants

### Small

A small button style is available for cases where one is necessary, such as when you have a group of buttons.

The small button modifier can be applied to any type or width variant.

{% include example-frame.html name="small" %}




## Buttons with icons

Icons can be added to buttons. Buttons with icons can also have any size, type or width modifiers applied to them.

{% include example-frame.html name="icons" %}

The icons can be aligned to either side of the button.

{% include example-frame.html name="icons2" %}

### Icon-only buttons

Buttons can also contain only an icon. If you do this, make sure that the intention of the button is clearly communicated through some hidden text, so it is accesible to users of assistive technology.

{% include example-frame.html name="icons3" %}


<script>

const buttons = document.querySelectorAll('.ds_layout__content .ds_button');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
    });
})

</script>

---
layout: component
title:  "Button"
category: components
parent: components
thispage: component.button
summary: "Use a button to help users perform an action, such as submitting a form or starting an application."

updatehistory:
  - date: 2020-08-19
    content: Add "buttons" component
    url: /components/buttons
---

## When to use a button or a link

Button styling can be applied to either button or link elements. Use the appropriate element for the task: use a button element when the user is performing an action, use a link element when the user is navigating.

Try to limit the use of styling link elements to look like buttons, as this may confuse the visual clues for how that element can be interacted with.

## Types of button

### Primary

This is the default button style. Use this for your primary calls to action. Multiple primary buttons can confuse users so try to have only one of these per page (or section of a page).

{% include example-frame.html title="Button example with primary styling" name="primary" %}

### Cancel

If a button is used to cancel or back out of an action, this style should be used. This button is typically used alongside a primary button.

{% include example-frame.html title="Button example with cancel styling" name="cancel" %}

### Secondary

All other non-primary actions should use this style. It has less visual prominence than the primary and cancel buttons.

{% include example-frame.html title="Button example with secondary styling" name="secondary" %}

### Disabled

Buttons in a disabled or unclickable state should be visually distinct and use this display.

Disabled buttons can confuse users so only include them if user research shows that they are helpful in your particular use case.

{% include example-frame.html title="Button example with disabled styling" name="disabled" %}

## Width variants

### Flexible

This is the default behaviour with buttons expanding to fit the length of text.

{% include example-frame.html title="Button example with flexible width" name="widths-flex" %}

### Fixed

Use fixed-width buttons to force uniformity in button widths. Button labels will wrap onto multiple lines if there is insufficient space.

{% include example-frame.html title="Button example with fixed width" name="widths-fixed" %}

### Maximum

Use maximum-width buttons for large buttons. These will fill the width of small screens, up to a maximum width of 480px.

{% include example-frame.html title="Button example with maximum width" name="widths-max" %}

## Size variants

### Small

A small button style can be used when available space is limited.

The small button modifier can be applied to any button type or width variant.

{% include example-frame.html title="Button example with flexible width" name="small" %}

## Buttons with icons

Icons can be added to buttons. Buttons with icons can also have any size, type or width modifiers applied to them.

{% include example-frame.html title="Button example with icons" name="icons" %}

The icons can be aligned to either side of the button.

{% include example-frame.html title="Button example with icons aligned to the left of the button" name="icons2" %}

### Icon-only buttons

Buttons can contain an icon with no visible text. If you do this, make sure that the intention of the button is clearly communicated in a way that is accessible to users of assistive technology.

{% include example-frame.html title="Button example with icon and no text" name="icons3" %}

## Website analytics

To track interactions with button elements in Google Analytics using Google Tag Manager, each button has a data attribute that describes the action.

The data attribute is added automatically by the [Design System's 'tracking' script](/guidance/tracking/#button).

Standard links do not receive additional tracking attributes so it is recommended to use the button component when linking to both internal and external service start pages to improve analytics data.

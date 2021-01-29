---
layout: component
title:  "Checkboxes"
category: components
subcategory: forms
parent: components
label: component
thispage: component.checkboxes
phase: 3
summary: "The checkbox component allows users to pick the option or options they want from a list, by checking one or more boxes."
---

## About this component

Checkboxes allow users to pick any number of items from a list. Unlike [radio buttons](/components/radio-buttons/) which allow users to pick one option.

## Why we use this component

We use this component when we want users to be able to:

* pick one or more items from a list
* toggle between selecting and deselecting an option

If users should only pick one option from a list, you should use the [radio buttons](/components/radio-buttons/) component.

## Other versions of this component

### Checkboxes with hint text

Hint text can be added to checkboxes, just as it can to any other form component.

You can use hint text for more details about a checkbox. You should avoid adding hint text to the checkbox's label element.

{% include example-frame.html name="hints" %}

### Small checkboxes

Although small checkboxes appear smaller, their clickable area is the same as normal checkboxes. This makes them easier for users to pick.

{% include example-frame.html name="small" %}

## Error messages

The error state for checkboxes marks the entire fieldset.

{% include example-frame.html name="error" %}

## Accessibility

We use a custom style for checkboxes so that they're larger and easier to use than the standard checkboxes defined by a browser. We also use a custom style to make their focussed and selected states clearer.

Checkboxes should only be stacked vertically. This makes tabbing through the checkboxes easier to follow. It also ensures better visibility of the options for screen magnifier users.

## Website analytics

Checkbox items can be tracked through the original page path and a data attribute identifying the checkbox and its value, if set.

The data attribute is added automatically by the [Design System's "tracking" script](/get-started/tracking/#checkboxes).

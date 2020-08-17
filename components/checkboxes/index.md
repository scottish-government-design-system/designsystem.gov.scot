---
layout: component
title:  "Checkboxes"
category: components
subcategory: forms
parent: components
label: component
thispage: component.checkboxes
phase: 3
summary: "Allows users to choose the option or options they want from a list, by checking one or more boxes."
---

## About this component

Unlike [radio buttons](/components/radio-buttons/), which allow users only to select one option, checkboxes allow users to select any number of items from a list

## Why we use this component

We use this component when we want users to be able to:

* be able to choose one or more items from a list
* toggle between selecting and deselecting an option

If users should only choose one option from a list, you should use the [radio buttons](/components/radio-buttons/) component instead.

## Other versions of this component

### Checkboxes with hint text

Hint text can be added to checkboxes, just as it can to any other form component.

You can use hint text for additional details about a checkbox. You should avoid adding hint text to the checkbox's label element.

{% include example-frame.html name="hints" %}

### Small checkboxes

Although small checkboxes appear smaller, their clickable area remains the same as normal checkboxes. This makes them easier for users to select.

{% include example-frame.html name="small" %}

## Error messages

The error state for checkboxes marks the entire fieldset.

{% include example-frame.html name="error" %}

## Accessibility

We use a custom style for checkboxes so that they are larger and easier to use than the standard checkboxes defined by the user's browser. We also use a custom style to make their focused and selected states clearer.

Checkboxes should only be stacked vertically. This makes tabbing through the checkboxes easier to follow, and ensures better visibility of the available options for screen magnifier users.

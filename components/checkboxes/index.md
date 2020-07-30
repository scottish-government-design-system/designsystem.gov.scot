---
layout: component
title:  "Checkboxes"
category: components
subcategory: forms
parent: components
label: component
thispage: component.checkboxes
phase: 3
summary: "Form fields that allow users to select one or more items"
---

## About this component

Checkboxes are a form component that allows users to select any number of items from a list of options.

## Why we use this component

We use this component when we want users to be able to:

* choose multiple options in a list
* toggle a single option on or off

If users should only choose one option from a list, use the [radio buttons](/components/radio-buttons/) component instead.

## Other versions of this component

### Checkboxes with hint text

Hint text can be added to checkboxes, just as it can to any other form component. Use it for additional details about the checkbox's option while keeping the checkbox's label succinct.

{% include example-frame.html name="hints" %}

### Small checkboxes

Although small checkboxes appear smaller their clickable area remains the same so they are no harder to interact with.

{% include example-frame.html name="small" %}

## Error messages

The error state for checkboxes marks the entire fieldset.

{% include example-frame.html name="error" %}

## Accessibility

We use a custom style for checkboxes so that they are larger and easier to use than the standard checkboxes defined by the browser and so that we can make their focussed and selected states more clear.

Checkboxes should only be stacked vertically. This makes tabbing through the options to follow, and ensures better visibility of the options for screen magnifier users.

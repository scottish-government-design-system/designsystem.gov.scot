---
layout: component
title:  "Radio buttons"
category: components
subcategory: forms
parent: components
label: component
thispage: component.radio-buttons
phase: 3
summary: "Form fields that allow users to pick a single item"
---

## About this component

Radio buttons are a form component that allows users to select a single item from a list of options.

## Why we use this component

We use this component when we want users to be able to only pick one option from a list.

If there are lots of options, you should think about whether a [select](/components/select/) component would work better.

If users need to be able to pick more than one option from a list, use the [checkboxes](/components/checkboxes/) component instead.

## Other versions of this component

### Radio buttons with hint text

Hint text can be added to radio buttons. You can use hint text for more details about a radio button. You should avoid adding hint text to the radio button's label element.

{% include example-frame.html name="hints" %}

### Small radio buttons

Although small radio buttons appear smaller, their clickable area remains the same as normal radio buttons. This makes them easier for users to select.

{% include example-frame.html name="small" %}

### Error messages

The error state for radio buttons marks the entire fieldset.

{% include example-frame.html name="error" %}

### Inline radio buttons

If there are few options and each has a short label, they can be placed inline.

If you are using an inline display for a yes/no choice, make 'Yes' the first option.

{% include example-frame.html name="inline" %}

## Accessibility

We use a custom style for radio buttons so that they're larger and easier to use than the standard radio buttons defined by the user's browser. We also use a custom style to make their focussed and selected states clearer.

## Website analytics

Radio buttons can be tracked through the original page path, a data attribute showing the question type, and value selected, for example <code>data-form="radio-feedback-yes"</code>

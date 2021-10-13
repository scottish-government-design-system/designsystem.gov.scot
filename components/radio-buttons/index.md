---
layout: component
title:  "Radio buttons"
category: components
subcategory: forms
parent: components
label: component
thispage: component.radio-buttons
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

{% include example-frame.html title="Radio button example with hint text" name="hints" %}

### Small radio buttons

Although small radio buttons appear smaller, their clickable area remains the same as normal radio buttons. This makes them easier for users to select.

{% include example-frame.html title="Radio button example with small radio buttons" name="small" %}

### Error messages

The error state for radio buttons marks the entire fieldset.

{% include example-frame.html title="Radio button example with an error state" name="error" %}

### Inline radio buttons

In some cases you can display radio buttons beside one another.

Only use inline radio buttons when:
* the question only has two options
* the text for both options is short

If you are using an inline display for a yes/no choice, make 'Yes' the first option.

{% include example-frame.html title="Radio button example with inline display" name="inline" %}

### Revealing additional questions

If there are additional questions that apply to a particular radio option, they can be made to display only when that option is chosen.

This will:

* make the related questions easier to answer by grouping them together
* make the form simpler for users who do not need to complete the related questions

{% include example-frame.html title="Radio button example with conditional content" name="conditional" %}

## Website analytics

Radio buttons can be tracked through the original page path and a data attribute showing the question type and value selected.

The data attribute is added automatically by the [Design System's "tracking" script](/get-started/tracking/#radio-buttons).

## Accessibility

We use a custom style for radio buttons so that they're larger and easier to use than the standard radio buttons defined by the user's browser. We also use a custom style to make their focussed and selected states clearer.

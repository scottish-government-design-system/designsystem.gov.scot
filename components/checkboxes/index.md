---
layout: component
title:  "Checkboxes"
category: components
subcategory: forms
parent: components
label: component
thispage: component.checkboxes
summary: "The checkbox component allows users to pick the option or options they want from a list, by checking one or more boxes."

updatehistory:
  - date: 2022-09-20
    content: '"None" option added to checkboxes'
    homepage: '"None" option added to <a href="/components/checkboxes#including-a-none-option">checkboxes</a>'
    url: /components/checkboxes#including-a-none-option
  - date: 2020-09-01
    content: Add website analytics content to checkboxes
    url: /components/checkboxes
  - date: 2020-08-19
    content: Add "checkboxes" component
    url: /components/checkboxes
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

{% include example-frame.html title="Checkbox example with hint text" name="hints" %}

### Small checkboxes

Although small checkboxes appear smaller, their clickable area is the same as normal checkboxes. This makes them easier for users to pick.

{% include example-frame.html title="Checkbox example with small checkboxes" name="small" %}

### Including a 'none' option

If 'none' is a valid response to a question, include it as an option instead of expecting the user to not select any checkboxes. This helps ensure that the user is making a specific choice in their response, and you will know that the question has been answered. Without the 'none' option it might not be clear whether a question has been skipped or not.

The option for 'none' should be shown last in the options. It should be separated from other options in the group with a divider, typically the word 'or'.

The label for the 'none' option should clearly relate to the question being asked and not just be the word 'none'. For example, if the question was 'Do you receive any of these benefits?' you could use 'No, I do not receive any of these benefits'.

{% include example-frame.html title="Checkbox example with a 'none' option" name="exclusive" %}

Invalid combinations of checkboxes are automatically managed with JavaScript. Enable it on the 'none' option by adding the attribute `data-behaviour="exclusive"` to the checkbox.

If the user selects the 'none' option, any other checkboxes will be unchecked. Similarly, if a user selects 'none' and then chooses another option, the 'none' option will be unchecked.

If JavaScript is not enabled in the user's browser, add validation to prevent the 'none' option being submitted when another option is also selected.

{% include example-frame.html title="Checkbox example with a 'none' option in an error state" name="exclusive-error" %}

## Error messages

The error state for checkboxes marks the entire fieldset.

{% include example-frame.html title="Checkbox example with an error state" name="error" %}

## Website analytics

Checkbox items can be tracked through the original page path and a data attribute identifying the checkbox and its value, if set.

The data attribute is added automatically by the [Design System's 'tracking' script](/get-started/tracking/#checkboxes).

## Accessibility

We use a custom style for checkboxes so that they're larger and easier to use than the standard checkboxes defined by a browser. We also use a custom style to make their focussed and selected states clearer.

Checkboxes should only be stacked vertically. This makes tabbing through the checkboxes easier to follow. It also ensures better visibility of the options for screen magnifier users.

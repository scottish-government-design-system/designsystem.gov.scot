---
layout: component
title:  "Accessibility in forms"
category: guidance
parent: guidance.forms
thispage: guidance.forms.accessibility
noindex: true
---

Accessible forms help users to understand what the expected input is for form fields and avoid errors. Accessible forms often result in a better user experience for users without disabilities as well.

## Associate labels with inputs

Labels need to be descriptive and programmatically associated to the corresponding input field.

Do not use placeholder text instead of a label. Placeholder text can often be hard for people with low vision to see due to low contrast. Placeholder text can also be frustrating for people with short term memory issues because it disappears when the field takes focus or when the user starts typing.

When you are asking one question per page, you should make the question the page heading `H1` as well as the form `label` or `legend` to avoid any duplication of content.

If you're asking multiple questions per page, do not use the first question as the page heading. 

For radio buttons and checkboxes, place the label to the right of the form control. This makes it easier to align multiple checkboxes or radio buttons. Stacking groups of radio buttons and checkboxes vertically helps users who use screen magnifiers.

[Labeling Controls (Web Accessibility Initiative)](https://www.w3.org/WAI/tutorials/forms/labels/)

## Grouping controls

Use `fieldset` elements to group related form controls. The first element inside a fieldset must be a `legend` element which describes the group.

The label for radio buttons and checkboxes should be associated with the answer and not the related question. Correct use of fieldset and legend elements will help users of assistive technology to understand the relationship between the question and the possible answers.

[Grouping Controls (Web Accessibility Initiative)](https://www.w3.org/WAI/tutorials/forms/grouping/)

## Use autocomplete attributes

Users can benefit when common input fields are automatically populated with values stored by their browser. In HTML, use the autocomplete attribute to identify the purpose of the field so that the automated input will be correct. This can be particularly beneficial to users with some cognitive disabilities.

[Input Purposes for User Interface Components (WCAG 2.1)](https://www.w3.org/TR/WCAG21/#input-purposes)

## Error messages

Provide clear error messaging to help users understand when there has been an error and how to resolve it.

Provide a [summary list of validation errors](/components/error-summary/) at the top of the page and show [individual error messages](/components/error-message/) next to the specific fields that have errors. If possible, include the inline error message as part of the programmatic label so that a screen reader user can hear the error when the field has focus.

For longer forms, provide links from the summary error list which place focus on the field in error.

[Validating Input (Web Accessibility Initiative)](https://www.w3.org/WAI/tutorials/forms/validation/)

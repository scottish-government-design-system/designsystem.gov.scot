---
layout: component
title:  "Question"
category: components
parent: components
thispage: component.question
summary: "The Question component helps to structure form fields when using the Design System"
noindex: true

updatehistory:
  - date: 2022-09-01
    content: Add "question" component
    url: /components/question
---

## About this component

Asking for user input is more than just having a label and an input element. Questions can include additional information such as instructions to help the user complete the field, or an error message.

## Anatomy of a question

A question is made up of many parts: a label, optional hint text, a potential error message and a form field (or group of fields if they are checkboxes or radio buttons).

<figure class="example__content  overflow--large--2 overflow--xlarge--2">
<img alt="The various parts that make up a question" src="/assets/images/question-anatomy.png" loading="lazy">
<figcaption>The various parts that make up a 'question'</figcaption>
</figure>

### 'Question' wrapper

This element holds all of the other parts of the question. It groups all of the related parts together and provides a styling hook for error states. If a form field is in an invalid state, a class of `ds_question--error` is added, which highlights the whole question so it is very clear to the user where the error is.

### Label

Labels are required for any form field, to let the user know what the form field is for. Labels should be concise, at best no more than a few words. Consider using regular text or hint text below the label if you need a longer description.

### Hint text

If there is a need give the user more information about how to answer the question, you can add some hint text.

Hint text should have an ID attribute so the form field can be related to it with ARIA attributes.

### Error message

If the form field has failed validation, an error message is inserted or shown.

### Form field

The form field itself. If the question has hint text, the form field should have an `aria-describedby` attribute indicating the ID of the hint text.

## Other versions of this component

### Questions with multiple form fields

{% include example-frame.html title="A question with more than one form field" name="multiple" %}

If a question has more than one form field, for example a collection of radio buttons or checkboxes, the form fields and their associated labels should all be within a fieldset element, and the fieldset's legend element should be used where the label is placed in a single-field question.

Hint text can be used below the legend as a hint for the whole question, or below each form field's label to provide a hint that is specific to that option.

## Why we use this component

The Question component provides a consistent structure for form fields and any related content that goes alongside them such as hint text or error messaging. The 'question' wrapping element is useful both for styling and for performing client-side form validation.

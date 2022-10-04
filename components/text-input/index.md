---
layout: component
title: "Text input"
category: components
subcategory: forms
parent: components
thispage: component.text-input
summary: "A form field that allows users to enter a single line of text."

updatehistory:
  - date: 2020-08-19
    content: Add "text input" component
    url: /components/text-input
---

We based our text input component on the one built by GDS. [Find out more about the text input component on GOV.UK’s Design System](https://design-system.service.gov.uk/components/text-input/).




## Size options

### Fixed-width inputs
{% include example-frame.html title="Text input examples with fixed sizes" name="sizes-fixed" %}

### Fluid-width inputs
{% include example-frame.html title="Text input examples with fluid sizes" name="sizes-fluid" %}




## Text input with an associated button

Sometimes buttons are directly related to an input field, such as in a [site search](/components/site-search/) or [date picker](/components/date-picker/).

{% include example-frame.html title="Text input example with an associated action button" name="action" %}




## Currency text fields

If you are asking the user for a currency amount, use this version of a checkbox. It has a currency symbol that cannot be deleted by the user.

{% include example-frame.html title="Text input example with a currency symbol" name="currency" %}




## Inline text fields

In some cases it might be sensible to align text inputs inline, such as when asking for multiple short related fields.

{% include example-frame.html title="Text input example with an inline display" name="inline" %}




## Website analytics

Content of this form element would not be routinely tracked through website analytics due to the risk of gathering personally identifiable information. Interaction with the element can be tracked through a data attribute showing the the field type and field description.

The data attribute is added automatically by the [Design System's 'tracking' script](/get-started/tracking/#text-input).

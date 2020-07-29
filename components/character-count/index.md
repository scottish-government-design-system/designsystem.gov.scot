---
layout: component
title:  "Character count"
category: components
subcategory: forms
parent: components
thispage: component.character-count
summary: "A live count of the remaining permitted characters in an input field"
phase: 3
---

## About this component

A character count is an enhancement to standard [text input](/components/text-input/) and [textarea](/components/textarea/) components. It adds a live count of the remaining permitted characters so that the user knows how much they are permitted to type.

## Why we use this component

If a form only allows a certain number of characters to be entered into a particular field, it is helpful to let the user know how many remaining characters they are allowed.

Using the character count component is better than simply using a "maxlength" attribute on the input element, because:

* it is non-destructive, so users can enter or paste too much data and get a warning instead of losing any of it

* users can see how many characters they have remaining as they type

## Other versions of this component

A percentage threshold can be set at which the character count will be shown.

In this example the character count will show after 75 percent of the maximum has been used (320 characters out of 400). Continue typing in the textarea to make the message appear.

{% include example-frame.html name="threshold" %}

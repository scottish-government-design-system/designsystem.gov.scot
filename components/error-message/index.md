---
layout: component
title:  "Error message"
category: components
subcategory: forms
parent: components
thispage: component.error-message
summary: "Error messages tell a user that there's been a problem with the answer they've given on a form or a webpage, and how to fix it."
phase: 3
---

## About this component

Error messages are shown next to the field where there's been a problem, and also in the error summary at the top of the page. 

Error messages should:

* as much as possible, be consistent across different forms
* only alert the user to an error when they try to move to the next page of a form or service
* use a red border to visually connect the message and the question it belongs to - if the error relates to specific text fields within the question, these should be given a red border too

They should not be used to tell users that they cannot apply for something, such as a benefit, or that they're not allowed carry on.

## Why we use this component

Helps users to easily and quickly correct an error when filling in an online form.

## Accessibility Features

To help screen reader users, the error message component includes a hidden 'Error:' before the error message. These users will hear, for example: "Error: the date your passport was issued must be in the past."

## Website analytics

To understand the incidence of validation error messages, they can be tracked through the original page path, the error text, and a data attribute showing the type of error, for example <code>data-form="error-postcode"</code>

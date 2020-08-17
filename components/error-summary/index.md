---
layout: component
title:  "Error summary"
category: components
subcategory: forms
parent: components
thispage: component.error-summary
summary: "Error summary appears at the top of a page if a user makes an error in a form, and summarises any errors they have made"
phase: 3
---

## About this component

Error summary is used along with [Error message](/components/error-message/) to let users know when they’ve made any errors in a form and how to fix them.

While error messages appear next to single fields throughout the page, error summary summarises all the errors at the top, so that a user can get a simple list view.

Error summary also allows users to click through to each single error from the top of the page.

## Why we use this component

Our design of error summary is based on the GOV.UK approach, however we have been tested this component and have found it works well with users. 

Research showed users:

* understood what went wrong
* knew how to fix the problem and proceed
* were able to recover from the error

## Components related to this

[Error message](/components/error-message/)

## Website analytics
To understand the incidence of validation error messages, they can be tracked through the original page path, the error text, and a data attribute showing the type of error, e.g. data-form="error-postcode".

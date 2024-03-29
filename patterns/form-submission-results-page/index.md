---
layout: component
title:  "Form submission results page"
category: patterns
parent: patterns
thispage: pattern.form-submission-results-page
summary: "How to tell users the result of submitting a form"

noindex: true
sitemap: false

updatehistory:
  - date: 2023-01-31
    content: First published
    homepage: 'Added guidance on <a href="/patterns/form-submission-results-page">how to tell users the result of submitting a form</a>'
    url: /patterns/form-submission-results-page
---

## About this pattern

This pattern helps users to understand what happens next when they have submitted a form.  

There are three possible result when a form is submitted:
* successful
* not successful
* incomplete




### Successful

If a user has submitted a form and the result is successful, use a [notification panel](/components/notification-panel) to display a success message and provide additional supporting information underneath.

{% include example-frame.html title="Successful form result" name="success" %}




### Not successful

If a user has submitted a form and the result is not successful, describe to the user why their result is not successful.

[Inset text](/components/inset-text/) can be useful to highlight the reason the result is not successful so it can be easily understood at a glance.

Users might be disappointed or unhappy that they have not been successful, so tone is very important on a 'not successful' page. You should work with a content designer to create appropriate content. 

{% include example-frame.html title="Unsuccessful form result" name="unsuccessful" %}




### Incomplete

Sometimes the result of a form submission is not immediately known.

This could be because:
* the result of that submission will not be known for a period of time
* there are further actions the user needs to take, such as sending some physical documentation

Always let the user know what the next steps are.

If the user needs to wait to know what the result is, let them know how long they will need to wait and how they will find out the result.

If the user has to carry out some further activities, tell the user clearly what those activities are. For example, if a user needs to submit a physical document tell them what the document is, where they need to send it, and whether there is a date that it needs to be sent by.

{% include example-frame.html title="Page showing a pause in an application process" name="pause" %}




## When to use this pattern

You should use this pattern at the end of a form journey to tell users the result and what happens next, if anything.




## Evidence

The pattern for form submission results has been used and has tested well on a Saltire Scholarship eligibility form and on Scottish Social Security benefit forms. Users found this pattern useful and clear after they submitted the forms.




## Website analytics

The form submission result page should have a unique URL, separate from the form itself, so that conversion rates can be easily calculated. To understand user behaviour for any onward journeys, you can track:
* clicks on links on the page
* the click URL, the click text, or a data attribute for button clicks

The data attributes are added automatically by the [Design System's 'tracking' script](/guidance/tracking).

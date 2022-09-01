---
layout: component
title:  "Form design"
category: guidance
parent: guidance.forms
thispage: guidance.forms.form-design
---

When your questions are ready, start designing your digital form following these principles:

## Inform users about the form's requirements at the start

The form should have introductory content that clearly tells users what information they will need to provide. This will help them plan sufficient time to complete the form and let them gather any necessary documents before they begin. This content can be at the start of the form, or on the page that links to the form.

If possible, work with a content designer and include the following information where relevant:

- a list of documents required to complete the form
- the average time to complete the form
- whether the form must be completed in one session or if progress can be saved and returned to over multiple sessions
- how many steps need to be taken to complete the form

## Apply the 'one thing per page' concept in the right way

The 'one thing per page' concept is used for designing many of the digital forms in government. This does not strictly mean one question per page, but if there are multiple questions on a page they should be closely related.

'One thing per page' reduces cognitive load by removing unrelated form questions on a page and help users better focus on the questions they need to complete.

{:.ds_callout}
Live example: [Self Isolation Grant suitability checker (mygov.scot)](https://www.mygov.scot/browse/benefits/self-isolation-grant/self-isolation-support-grant-suitability-checker)

## Group related questions

Grouping related questions into sections or steps can help users understand the form quicker. This reduces form completion time, stress and cognitive load. If your form has more than six questions, it's considered good practice to group thesepages into logical sections or steps.

## Think about the order of the questions

It's important to present your questions in the order that is most logical for users 
to follow, to avoid confusion or frustration.

For example, a scholarship form for students from a specific set of countries should begin with a question asking for their nationality. This can then immediately provide feedback on whether applicants should continue completing the remainder of the form based on their response, avoiding wasted effort for those who don't qualify.

## Use appropriate form elements

Choosing the most appropriate form element for the user's response to a question will help avoid unnecessary mistakes, reduce cognitive load and lower the time taken to complete the form.

The following examples show selection of a form element based on the type of 
question asked:

- use [radio buttons](https://designsystem.gov.scot/components/radio-buttons/) when there is a limited choice of options and only one can be selected
- use [checkboxes](https://designsystem.gov.scot/components/checkboxes/) when there is a limited choice of options and more than one can be selected
- use [text input](https://designsystem.gov.scot/components/text-input/) fields when asking for short pieces of information and [textareas](https://designsystem.gov.scot/components/textarea/) where a longer response is needed
- if possible structure your questions to use radio buttons or checkboxes rather than a dropdown select to reduce cognitive load

For text fields, you should also consider the type of data the user is being asked to provide. For example:

- a [date picker](https://designsystem.gov.scot/components/date-picker/) may be the most suitable for browsing for a date in a calendar, while specific input fields for day, month and year may be more suitable for known dates such as date of birth
- the size of the field should be appropriate for the expected input if you know the form the data will take, such as a post code or telephone number
- if fields have a maximum acceptable length, show a [character count](https://designsystem.gov.scot/components/character-count/) so the user knows how much space they have remaining

## Help users avoid errors

Good form design should try to prevent errors by providing clear instructions that help users fill out forms correctly on their first attempt.

Hint text can be added to form questions to guide correct user input. For example, providing a suitability checklist for a password field to assist users in creating a password that will be accepted.

## Form validation and error handling

When errors do happen, these should be reported back to the user as clear and specific instructions to help them correct the issues.

## Optional and required questions

User research shows that when optional fields are marked as 'optional', users often ignore them. It is better to use more descriptive and helpful text such as 'if you know it'. 

Following the recommended approach to defining your form should result in the majority of your questions being required fields. In this situation you should add a text label to mark the optional fields. 

However in some cases the majority of fields may be optional. In this situation mark the required fields with 'required' text labels instead.

Don't identify required fields with asterisks as this can cause problems for screen reader users, and means you need to explain what the characters symbolise.

## Structuring long forms

When forms are long or complex with multiple steps, provide a way for users to follow their progress and understand what they still need to complete. The ['task list' pattern](https://designsystem.gov.scot/patterns/task-list/) can be used to show how a long form is structured and its state of completion.

## Design for mobile first

Use native device features to simplify tasks for users on a mobile. For example: allowing users to take a photo of their biometric residence permit using their device's camera, without leaving the form.

## Set clear expectations when the form is completed

When the form is submitted, clearly inform users about what to expect so that they are aware of the next steps in the process. If the process is completed, the form should inform them about the outcome.

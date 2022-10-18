---
layout: component
title:  "Form design"
category: guidance
parent: guidance.forms
thispage: guidance.forms.form-design
noindex: true
---

When your questions are ready, design your digital form following these principles:

## Tell users about the form's requirements at the start

The form should have introductory content that tells users what information they will need to provide. This will help them plan enough time to complete the form and let them gather any documents needed before they begin. This content can be at the start of the form, or on the page that links to the form.

If possible, work with a content designer and include the following information where relevant:

- a list of documents required to complete the form
- the average time it takes to complete the form
- whether the form must be completed in one session or if progress can be saved and returned to over multiple sessions
- how many steps need to be taken to complete the form

## Apply the 'one thing per page' concept

The 'one thing per page' concept is used for designing many of the digital forms in government. This does not strictly mean one question per page, but if there are multiple questions on a page they should be closely related.

'One thing per page' reduces cognitive load by removing unrelated form questions on a page. This helps users focus on the questions they need to complete.

{:.ds_callout}
Live example: [Self Isolation Grant suitability checker (mygov.scot)](https://www.mygov.scot/browse/benefits/self-isolation-grant/self-isolation-support-grant-suitability-checker)

## Group related questions

Grouping related questions into sections or steps can help users understand the form quicker. This reduces form completion time, stress and cognitive load. If your form has more than six questions, it's good practice to group these pages into logical sections or steps.

## Think about the order of the questions

It's important to present your questions in the order that is most logical for users 
to follow. This avoids confusion and frustration.

For example, a scholarship form for students from a specific set of countries should begin with a question asking for their nationality. This immediately lets applicants know if they qualify, and if they should continue completing the form based on their response. This avoids wasted effort for those who don't qualify.

## Use appropriate form fields

Choosing the most appropriate type of form field for the user's response to a question will help:

* avoid unnecessary mistakes
* reduce cognitive load
* lower the time taken to complete the form

The following examples show selection of a form element based on the type of 
question asked:

- use [radio buttons](https://designsystem.gov.scot/components/radio-buttons/) when there is a limited choice of options and only one can be selected
- use [checkboxes](https://designsystem.gov.scot/components/checkboxes/) when there is a limited choice of options and more than one can be selected
- use [text input](https://designsystem.gov.scot/components/text-input/) fields when asking for short pieces of information and [textareas](https://designsystem.gov.scot/components/textarea/) where a longer response is needed

If possible, structure your questions to use radio buttons or checkboxes rather than a dropdown select to reduce cognitive load

For text fields, you should also consider the type of data the user is being asked to provide. For example:

- a [date picker](https://designsystem.gov.scot/components/date-picker/) may be the most suitable for browsing for a date in a calendar, while specific input fields for day, month and year may be more suitable for known dates such as date of birth
- the size of the field should be appropriate for the expected input, such as a postcode or telephone number
- if fields have a maximum acceptable length, show a [character count](https://designsystem.gov.scot/components/character-count/) so the user knows how much space they have remaining

## Help users avoid errors

Provide clear instructions that help users fill out forms correctly on their first attempt. This will help prevent errors.

Hint text can be added to form questions to guide correct user input. For example, provide a suitability checklist for a password field to help users create a password that will be accepted.

## Form validation and error handling

When errors do happen, these should be reported back to the user as clear and specific instructions to help them correct the issues.

## Optional and required questions

User research shows that when optional fields are marked as 'optional', users often ignore them. It's better to use more descriptive text such as 'if you know it'. 

Most of your questions should be required fields. In this situation you should add a text label to mark the optional questions. 

In certain cases most questions may be optional. In this situation mark the required fields with 'required' text labels instead.

Don't identify required fields with asterisks. This can cause problems for screen reader users. You would also have to explain that the asterisks mean.

## Structuring long forms

When forms are long or complex with multiple steps, give a way for users to follow their progress and understand what they still need to complete. The ['task list' pattern](https://designsystem.gov.scot/patterns/task-list/) can be used to show how a long form is structured and its state of completion.

## Design for mobile first

'Mobile first' is a design strategy where you begin with the smallest and least capable devices first and work your way up to larger screens. Working in this way helps you to prioritise the most important content for your users. It creates a strong foundation for you to add to on larger screens and helps you to avoid superfluous elements on your page. Mobile first prioritises content over decoration.

Use features available on mobile phones to help people to use your service, but remember that these features won't necessarily be available to everybody depending on the capabilities of their device. For example, you could allow people to take a photograph of a document they need to provide to you, but you will also need to provide an alternative way to provide that document such as a file upload.

Over half of all Internet traffic is on a mobile device, and on some Scottish Government services mobile usage is over 87% of all traffic. Most people have a mobile phone, and for some people their phone is the only way they access the Internet at home.

## Set clear expectations when the form is submitted

When the form is submitted, clearly tell users about what to expect in the next steps in the process. If the process is complete, the form should tell the user about the outcome.

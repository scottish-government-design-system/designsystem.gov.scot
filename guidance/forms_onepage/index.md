---
layout: component
title:  "Forms"
category: guidance
parent: guidance
thispage: guidance.forms
summary: "Design and create effective, consistent and accessible digital forms."
permalink: '/guidance/forms/onepage'
---
<nav role="navigation" class="ds_contents-nav" aria-label="Sections">
    <h2 class="ds_contents-nav__title">Contents</h2>

    <ul class="ds_contents-nav__list">
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#introduction">
                Introduction
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#form-content">
                Form content
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#form-design">
                Form design
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#form-structure">
                Form structure
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#form-spacing">
                Form spacing
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#data-security-in-forms">
                Data security in forms
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#accessibility">
                Accessibility
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#testing-forms">
                Testing forms
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#performance-analytics">
                Performance analytics
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#form-elements-in-the-design-system">
                Form elements in the Design System
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#references">
                References
            </a>
        </li>
    </ul>
</nav>

## Introduction 

The components used to build forms within the Design System are some of the most commonly used items on our site. This is due in part to the work being done across Scottish Government to build good quality digital services. Our engagement with teams using our Design System has identified the need to expand our portfolio of form components as well as provide form layouts and guidance on good form design.

Whether it is a login form, a complicated form with multiple steps or a simple data entry interface, forms are an essential part of a digital service because they allow a transaction to take place.

Use these guidelines as a starting point to design and create your digital forms.




## Form content

Before designing a new digital form, or updating an existing one, it is critical that the service's requirements and the user needs are fully understood. User research must be undertaken to map the user journeys and drive what the form's content should be.

The following activities should be considered when developing the form content.

### Identify all the information you need to collect

Based on your research findings make a list of all the information your form needs to collect from users. This becomes the basis to designing the form questions.

### Review the form questions 

Once you know what information to collect, validate this using a tool called a ['question protocol'](https://www.gov.uk/service-manual/design/form-structure#know-why-youre-asking-every-question). This step helps you identify which form questions you need and can be used to reduce the size of a form.

The protocol should be used to check that for each question asked you know:

- why you need the information to deliver your service
- what you'll do with it
- which users need to give you the information
- how you'll check the information is accurate
- how to keep the information up to date and secure

If a question asks for more than one piece of information they all should be reviewed against the above list.

<div class="ds_inset-text">
    <div class="ds_inset-text__text">
        Keep your forms as simple as possible. Only ask what's needed to run your service.
    </div>
</div>

### Each form question has costs

Only ask for information that is needed for your service because each question has a cost. A financial cost is incurred by the organisation publishing the form, who must process and store the answers. A time and cognitive cost is passed on to users for every extra question they have to complete. 

### Clearly explain why you're asking for sensitive information

Users care about their privacy and information security. If you must ask for sensitive information, make sure you explain why it is needed at the point in the form it appears.

### Form question content design

When you know what information to collect, you should follow [content best practices](https://resources.mygov.scot/content-standards/) to design the questions that should be asked.

You should with a content designer to create form content that is written in plain English to help users understand what is being asked.




## Form design 

When your questions are ready, start designing your digital form following these principles:

### Inform users about the form's requirements at the start

The form should have introductory content that clearly tells users what information they will need to provide. This will help them plan sufficient time to complete the form and let them gather any necessary documents before they begin. This content can be at the start of the form, or on the page that links to the form.

If possible, work with a content designer and include the following information where relevant:

- a list of documents required to complete the form
- the average time to complete the form
- whether the form must be completed in one session or if progress can be saved and returned to over multiple sessions
- how many steps need to be taken to complete the form

### Apply the 'one thing per page' concept in the right way

The 'one thing per page' concept is used for designing many of the digital forms in government. This does not strictly mean one question per page, but if there are multiple questions on a page they should be closely related.

'One thing per page' reduces cognitive load by removing unrelated form questions on a page and help users better focus on the questions they need to complete.

{:.ds_callout}
Live example: [Self Isolation Grant suitability checker (mygov.scot)](https://www.mygov.scot/browse/benefits/self-isolation-grant/self-isolation-support-grant-suitability-checker)

### Group related questions

Grouping related questions into sections or steps can help users understand the form quicker. This reduces form completion time, stress and cognitive load. If your form has more than six questions, it's considered good practice to group thesepages into logical sections or steps.

### Think about the order of the questions

It's important to present your questions in the order that is most logical for users 
to follow, to avoid confusion or frustration.

For example, a scholarship form for students from a specific set of countries should begin with a question asking for their nationality. This can then immediately provide feedback on whether applicants should continue completing the remainder of the form based on their response, avoiding wasted effort for those who don't qualify.

### Use appropriate form elements

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

### Help users avoid errors

Good form design should try to prevent errors by providing clear instructions that help users fill out forms correctly on their first attempt.

Hint text can be added to form questions to guide correct user input. For example, providing a suitability checklist for a password field to assist users in creating a password that will be accepted.

### Form validation and error handling

When errors do happen, these should be reported back to the user as clear and specific instructions to help them correct the issues.

### Optional and required questions

User research shows that when optional fields are marked as 'optional', users often ignore them. It is better to use more descriptive and helpful text such as 'if you know it'. 

Following the recommended approach to defining your form should result in the majority of your questions being required fields. In this situation you should add a text label to mark the optional fields. 

However in some cases the majority of fields may be optional. In this situation mark the required fields with 'required' text labels instead.

Don't identify required fields with asterisks as this can cause problems for screen reader users, and means you need to explain what the characters symbolise.

### Structuring long forms

When forms are long or complex with multiple steps, provide a way for users to follow their progress and understand what they still need to complete. The ['task list' pattern](https://designsystem.gov.scot/patterns/task-list/) can be used to show how a long form is structured and its state of completion.

### Design for mobile first

[QUERY: native device features are not the reason to work mobile first]  
Use native device features to simplify tasks for users on a mobile. For example: allowing users to take a photo of their biometric residence permit using their device's camera, without leaving the form.

### Set clear expectations when the form is completed

When the form is submitted, clearly inform users about what to expect so that they are aware of the next steps in the process. If the process is completed, the form should inform them about the outcome.




## Form structure

A good form should have a well-defined structure and be easy for the user to complete. It should not look out of place with the organisation's branding.

Always use a one column structure and design for mobile devices first. A form which avoids confusing structures and presents information and questions in discrete chunks is easier for the user to complete.

Image label: Multi-column layouts can cause users to interpret fields inconsistently
Image label: A single column layout creates a clear reading order




## Form spacing

Spacing is an important factor in creating an effective form layout. Placing form labels near the associated text field and grouping related fields helps users to complete forms more quickly with less confusion.

[QUERY: this is very image heavy. can we enhance the text descriptions?]  
The following examples illustrate how the layout of form elements can help users.

Image label: Even spacing between all labels and fields makes it unclear to users which label relates to which field when there are several inputs.

Image label: Labels should be closer to their associated field and have clear spacing from neighbouring fields.

Image label: Unclear spacing between grouped fields makes it difficult to discern the intended form structure.

Image label: Ensure adequate spacing between grouped fields to help users quickly identify the form structure.

Image label: Ensure each form component has adequate spacing. Here the primary action button is closer to the second radio button than the radio buttons are to each other

Image label: Adequate spacing creates a clear hierarchy




## Data security in forms

Data security should be considered from the start of any form design process with all stakeholders involved at every stage.

User research shows that users find it reassuring to be asked for permission to collect and store their data and this in turn builds trust. This user confirmation should always be an opt-in approach with consent required before the form can be completed.

### Preventing spam

Form spam is often an issue for digital services. Some government forms make use of Google's ReCaptcha as one method to prevent form abuse by validating that a user is not a bot. However, there are accessibility issues with this choice and you should assess what alternatives might work for you. For example, using form validation and rate limiting to prevent automated submissions.

### Data protection 

Forms should be designed so that any storage of personal data in logs and tracking tools is limited what is essential and has been agreed by the service owner. All form data should be treated securely at all times.

URLs should follow best practice in being descriptive without personally identifiable information being included in the URL. If you keep track of progress through a form by building a URL from user responses, the questions you ask must not expose personally identifiable information in the URL. For example, you may be able to gather the information your form or service needs by asking if a user was born after a certain date instead of asking for their date of birth.




## Accessibility 

[QUERY: the first sentence is question-begging]  
Accessible forms help users to understand what the expected input is for form fields and avoid errors. Accessible forms often result in a better user experience for users without disabilities as well.

### Associate labels with inputs

Labels need to be descriptive and programmatically associated to the corresponding input field.

Do not use placeholder text in place of a label. Placeholder text can often be hard for people with low vision to see due to low contrast. Placeholder text can also be frustrating for people with short term memory issues because it disappears when the field takes focus or when the user starts typing.

[QUERY: what is the form label? labels are associated with fields]  
When you are asking one question per page, you should make the question the page heading `H1` as well as the form `label` or `legend` to avoid any duplication of content.

If you're asking multiple questions per page, do not use the first question as the page heading. 

For radio buttons and checkboxes, place the label to the right of the control. This makes it easier to align multiple checkboxes or radio buttons with one another. Stacking groups of radio buttons and checkboxes vertically helps users who depend on screen magnifiers.

[Labeling Controls | Web Accessibility Initiative (WAI) | W3C](LINK)

### Grouping controls

Use `fieldset` elements to group related form controls. The first element inside a fieldset must be a `legend` element which describes the group.

The label for radio buttons and checkboxes is associated with the answer and not the related question. Correct use of fieldset and legend elements will help users of assistive technology to understand the relationship between the question and the possible answers.

[Grouping Controls | Web Accessibility Initiative (WAI) | W3C](link)

### Use autocomplete attributes where appropriate
[QUERY: where appropriate or where possible?]  

Users can benefit when common input fields are automatically populated with values stored by their browser. In HTML, use the autocomplete attribute to identify the purpose of the field so that the automated input will be correct. This can be particularly beneficial to users with some cognitive disabilities.

[Input Purposes for User Interface Components (WCAG) 2.1 | W3C](link)

### Error messages

Provide clear error messaging to help users understand when there has been an error and how to resolve it.

Provide a [summary list of validation errors](/components/error-summary/) at the top of the page, and show [individual error messages](/components/error-message/) next to the specific fields that have errors. If possible, include the inline error message as part of the programmatic label so that the screen reader user hears the error when the field has focus.

For longer forms, provide links from the summary error list which place focus on the field in error.

[Validating Input | Web Accessibility Initiative (WAI) | W3C](link)




## Testing forms

It is important to carry out usability testing on forms you design. Try to test as early and as often as possible, with multiple real users of your service.

Ask users to 'think out loud' when completing the form in order to capture qualitative data and prepare questions such as 'were you expecting to be asked this question' if the participant goes quiet.

### Accessibility Testing

Automated accessibility testing can be carried out by developers, quality assurance (QA) testers, or anyone involved in the project lifecycle. They are quick tests that can be completed using browser extensions and online tools to provide immediate feedback on whether forms are programmatically accessible. 

Automated accessibility testing cannot identify all accessibility issues, and should be combined with manual accessibility testing and usability testing conducted with people with disabilities. This is essential for full accessibility coverage and compliance.




## Performance analytics 

Tracking how users interact with even simple forms allows teams to analyse user journeys and try to improve the forms over time. For example by:
- providing simpler, inline help for misunderstood questions
- rewording or reordering questions that are not filled in correctly
- splitting complex questions into multiple, simpler questions

When a form consists of multiple pages, you should track which part the user is on to record errors and provide data about how your form is used. Fields which are skipped, invalid or returned to can tell you a lot about the issues users are facing. This will be either the page's URL or, where a form does not change the address when a new page loads, have custom tracking events enabled.

If you are using the Design System, other interactions with components will be handled by the Design System's custom tracking. If you are not using the Design System, you should consult with a performance analyst to ensure your tracking covers the data you need to collect to measure your form's performance.




## Form elements in the Design System
The Design System includes a number of styles and layouts to support form structure and design:

- [Focus states](/styles/states/)
- [Responsive spacing](/styles/responsive-spacing/)

The following Design System components can be used to construct your forms:

- [Autocomplete](/components/autocomplete)
- [Button](/components/button)
- [Character count](/components/character-count)
- [Checkboxes](/components/checlkboxes)
- [Date picker](/components/date-picker)
- [Error message](/components/error-message)
- [Error summary](/components/error-summary)
- [Notification panel- Radio buttons](/components/radio-button)
- [Select (dropdown)](/components/select)
- [Text input](/components/text-input)
- [Textarea](/components/textarea)

The following patterns in the Design System can be used as reference to solving common problems:

- [Address lookup](/patterns/addresses)
- [Task list](/patterns/task-list)




## References

GOV.UK (2016). [_Structuring forms_](https://www.gov.uk/service-manual/design/form-structure)

Jarrett, C. and Gaffney, G. (2008). _Forms that Work: Designing Web Forms for Usability_. Morgan Kauffman

Jarrett, C (2010). [_The question protocol: how to make sure every form field is necessary_](https://www.effortmark.co.uk/question-protocol-make-sure-every-form-field-necessary/). Effortmark

McCloskey, M. (2013). [_Form Design Quick Fix: Group Form Elements Effectively Using White Space_](https://www.nngroup.com/articles/form-design-white-space/). Nielsen Norman Group

Paul, T (2015). [_One thing per page - Design in government_](https://designnotes.blog.gov.uk/2015/07/03/one-thing-per-page/). GOV.UK

Silver, A. (2018). _Form design patterns_. Smashing Magazine

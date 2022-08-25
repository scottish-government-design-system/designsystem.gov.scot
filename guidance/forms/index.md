---
layout: component
title:  "Forms"
category: guidance
parent: guidance
thispage: guidance.forms
summary: "Design and create effective, consistent and accessible digital forms."
permalink: '/guidance/forms/'
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
            <a class="ds_contents-nav__link" href="#form-design-principles/">
                Form design principles
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

The components used to build forms within the design system are some of the most commonly used items on our site. This is due in part to the work being done across Scottish Government to build good quality digital services. Our engagement with teams using our design system has identified the need to expand our portfolio of form components as well as provide form layouts and guidance on good form design.

Whether it is a login flow, multiple steps form or a simple data entry interface, forms are an essential part of a digital service because they allow a transaction to take place.

Use these guidelines as a starting point to design and create your digital forms.




## Form content

Ahead of designing a new digital form, or updating an existing one, it is critical that the service's requirements and the user needs are fully understood. User research must be undertaken to map the user journeys and drive what the form's content should be.

The following activities should be considered when developing the form content.

### Identify all the information you need to collect

Based on your research findings make a list of all the information your form needs to collect from users. This becomes the basis to designing the form questions.

### Review the form questions 

Once you know what information to collect, validate this using a tool called a ['question protocol'](LINK). This step helps you identify which form questions you need and can be used to reduce the size of a form.

The protocol should be used to check that for each question asked:
[REWRITE LIST]
- you need the information to deliver the service
- why you need the information
- what you'll do with it
- which users need to give you the information
- how you'll check the information is accurate
- how to keep the information up to date and secure

If a question asks for more than one piece of information each of these fields should be 
reviewed against the above list.

<div class="ds_inset-text">
    <div class="ds_inset-text__text">
        Keep your forms as simple as possible. Only ask what's needed to run your service.
    </div>
</div>

### Each form question has a cost 
[QUERY: if there are financial, time and cognitive costs, this title should not be singular for 'cost']
Only ask for information that is needed for your service as each question has a cost. A financial cost is incurred by the organisation publishing the form, who must process and store the answers, while a time and cognitive cost is passed on to users for every extra question they have to complete. 

### Clearly explain why you're asking for sensitive information

Users are increasingly concerned over privacy and information security. If you must ask for sensitive information, make sure you explain why it is needed at the point in the form it appears.

### Form question content design

Once you know what information to collect, you should follow [content best practices](LINK) to design the questions that should be asked.

[QUERY: 'recommended to work'? also passive voice]
It is recommended to work with a content designer to create form content that is written in plain English to help users understand what is being asked.




## Form design 

Once your questions are ready, start designing your digital form following these principles:

### Inform users about the form's requirements at the start

[QUERY: 'plan in sufficient time']
The first page of the form, or the page linking directly to the start of the form, should clearly tell users what information they will need to provide. This will let them plan in sufficient time and gather any necessary documents before they begin. 

If possible, work with a content designer and include the following information where relevant:

- any documents required to complete the form
- average time to complete the form
- whether the form must be completed in one session or if progress can be saved and returned to over multiple sessions
- how many steps need to be taken to complete the form

### Apply the 'one thing per page' concept in the right way

[QUERY: can we do better than "related information"]
The ['one thing per page' concept](LINK) is used for designing many of the digital forms in government. However this does not strictly mean one question per page, but rather to only ask for related information on a single page.

The aim is to reduce cognitive load by removing unrelated form questions on a page and help users better focus on the questions they need to complete.

Live example: [Self Isolation Grant suitability checker (mygov.scot)](https://www.mygov.scot/browse/benefits/self-isolation-grant/self-isolation-support-grant-suitability-checker)

## Group related questions

Grouping related questions into sections or steps can help users understand the form quicker. This reduces form completion time, stress and cognitive load. If your form has more than six questions, it's considered good practice to group thesepages into logical sections or steps.

## Think about the order of the questions

It's important to sequence your questions in the order that is most logical for users 
to follow, to avoid confusion or frustration. For example, a scholarship form for students from a specific set of countries should begin with a question asking for their 'country of nationality'. This can then immediately provide feedback on whether applicants should continue completing the remainder of the form based on their response, avoiding wasted effort for those who don't qualify.

## Use appropriate form elements

Choosing the most appropriate form element forthe question and corresponding expected user input will help avoid unnecessary mistakes, reduce cognitive load and lower the time taken to complete.

The following examples show selection of a form element based on the type of 
question asked:

- use radio buttons when there is a limited choice of options and only one can be selected
- use checkboxes when a limited choice of options may have more than one selected
- structure your questions to use radio buttons or checkboxes rather than a dropdown select to reduce cognitive load
- use text input fields when asking for short pieces of information and textareas where a longer response is needed

Another aspect to consider is what the user is being expected to provide. For 
example:

- a 'date picker' type element may be the most suitable for browsing for a date in a calendar, while specific input fields for day, month and year may be more suitable for known dates such as date of birth
[QUERY: "follows a predictable size"]
- the length of the field should be adjusted to suit the expected input where it follows a predictable size, such as a UK postcode
- where fields have a maximum acceptable length, indicate how many characters are still available. The Design System's ['character count' component](link) can help with this.

[QUERY: supports?]
The design system supports a wide range of common form elements.

### Help users avoid errors

Good form design should try to prevent errors by providing clear instructions that help users fill out forms correctly at their first attempt.

Example text can be added to form questions to guide correct user input. For example, providing a suitability checklist for a password field to assist users in creating a password that will be accepted.

### Form validation and error handling

When errors do happen, these should be reported back to the user as clear and specific instructions to help them correct the issues themselves.

### Optional and mandatory questions

User research shows that when optional fields are marked as 'optional', users have a tendency to ignore them when compared to a more descriptive and helpful label such as 'if you know it'. 

[QUERY: "require to be answered"]
Following the recommended approach to defining your form content should result in having a set of questions that primarily all require to be answered. In this situation you should add a text label to mark the optional fields. 

[QUERY: I still don't htink we should be suggesting that this is okay]
However in certain cases the majority of fields may be optional. In this situation mark the mandatory fields with 'required' text labels instead.

Don't identify mandatory fields with asterisks as this can cause problems for screen reader users along with introducing the need to explain what the characters symbolise.

### Organising large forms

Where forms are large or complex with multiple steps, provide a way for users to follow their progress and understand what is yet to be completed. The ['Task list' pattern](link) can be used as a way to show how a large form is structured and its state of completion.

### Design for mobile first

[QUERY: native decice features are not the reason to work mobile first]
Use native device features to simplify tasks for users on a mobile. For example: allowing users to take a photo of their biometric residence permit using their device's camera, without leaving the form.

### Set clear expectations once the form is completed

Once the form is submitted, clearly inform users about what to expect so that they are aware of the next steps in the process. If the process is completed at that point, the form should inform them about the relevant outcome of the data entered.




## Form structure

A good form should have a well-defined structure and be straightforward for the user to complete. It should not look out of place with the organisation's branding.

Always use a one column structure and design for mobile devices first. A form which avoids confusing structures and presents information and questions in discrete chunks encourages the user to answer.

Image label: Multi-column layouts can cause users to interpret fields inconsistently
Image label: A single column layout creates a clear reading order




## Form spacing

Spacing is an important factor in creating an effective form layout. By placing form labels near the associated text field and by grouping similar fields, users will be able to complete forms more quickly with less confusion.

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

[QUERY: let's not link to recaptcha. people know wht it is, and we don't want people to use it]
Form spam is often an issue for digital services. Some government forms make use of Google's ReCaptcha as one method to prevent form abuse by validating that a user is not a bot. However, we know that there are accessibility issues with this choice and are looking to move away from this approach in the future. We recommend assessing your form validation and rate-limiting options as each site's technical setup is different and may have some existing options available.

### Data protection 

Forms should be designed sensibly so that the collection of personal data to logs and tracking tools is limited only to what is essential and has been agreed by the service owner. All form data should be treated securely at all times.

URLs should generally follow best practice in being descriptive without personally identifiable information being included in the URL.If you keep track of progress through a form by building a URL from user responses, the questions you ask should not expose personally identifiable information in the URL. For example, you may be able to gather the information your form or service needs by asking if a user was born after a certain date instead of asking for their date of birth.




## Accessibility 

[QUERY: the first sentence is question-begging]
Accessible forms help users to understand what the expected input is for form fields and avoid errors. Accessible forms often result in a better user experience for users without disabilities as well.

### Associate labels with inputs

Labels need to be descriptive and be programmatically associated to the corresponding input field.

Avoid placeholder text in place of a label. Placeholder text can often be hard for people with low vision to see due to low contrast. Placeholder text can also be frustrating for people with short term memory issues because it disappears when the field takes focus or when the user starts typing.

[QUERY: what is the form label? labels are associated with fields]
When you are asking one question per page, you should make the question the page heading `H1` as well as the form `label` or `legend` to avoid any duplication of content.

If you're asking multiple questions per page, do not use the first question as the page heading. 

For radio buttons and checkboxes, place the label to the right of the control. This makes it easier to align multiple checkboxes or radio buttons with one another. Stacking groups of radio buttons and checkboxes vertically helps users who depend on screen magnifiers.

[Labeling Controls | Web Accessibility Initiative (WAI) | W3C](LINK)

### Grouping controls

Use `fieldset` elements to group related form controls. The first element inside a fieldset must be a `legend` element which describes the group.

The programmatic label for radio buttons and checkboxes is associated with the answer and not the related question. Correct use of fieldset and legend elements will help users of assistive technology to understand the relationship between the question and the possible answers.

[Grouping Controls | Web Accessibility Initiative (WAI) | W3C](link)

[QUERY: where appropriate or where possible?]
### Use autocomplete attributes where appropriate

Users can benefit when common input fields are automatically populated with values stored by their browser. In HTML, use the autocomplete attribute to identify the purpose of the field so that the automated input will be correct. This can be particularly beneficial to users with some cognitive disabilities.

[Input Purposes for User Interface Components (WCAG) 2.1 | W3C](link)

### Error messages

Provide clear error messaging to help users understand when there has been an error and how to resolve it.

Provide a [summary list of validation errors](link) at the top of the page, and show [individual error messages](link) next to the specific fields that have errors. If possible, include the inline error message as part of the programmatic label so that the screen reader user hears the error when the field has focus.

For longer forms, provide links from the summary error list which place focus on the field in error.

[Validating Input | Web Accessibility Initiative (WAI) | W3C](link)




## Testing forms
It is important that usability testing is carried out on forms you design. Try to test as early and as often as possible, with multiple real users of your service.

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

If you are using the Design System, other interactions with components will be handled by the Design System's custom tracking. If you are not using the design system, you should consult with a performance analyst to ensure your tracking covers the data you need to collect to measure your form's performance.




## Form elements in the Design System
The design system includes a number of styles and layouts to support form structure and design:

- [Focus states](link)
- [Responsive spacing](link)

The following design system components can be used to construct your forms:

- [Autocomplete](link)
- [Button](link)
- [Character count](link)
- [Checkboxes](link)
- [Datepicker](link)
- [Error message](link)
- [Error summary](link)
- [Hint text](link)
- [Notification panel- Radio buttons](link)
- [Select (dropdown)](link)
- [Text input](link)
- [Text area](link)

The following patterns in the design system can be used as reference to solving common problems:

- [Address lookup](link)




## References

- [Forms that Work: Designing Web Forms for Usability - Caroline Jarret, Gerry Gaffney (book)](link)
- [Form design patterns – Adam Silver (book)](link)
- [One thing per page - Design in government (blog.gov.uk)](link)
- [Form Design Quick Fix: Group Form Elements Effectively Using White Space](https://www.nngroup.com/articles/form-design-white-space/)
- [The question protocol: how to make sure every form field is necessary](https://www.effortmark.co.uk/question-protocol-make-sure-every-form-field-necessary/)
- [Structuring forms - Service Manual - GOV.UK (www.gov.uk)](link)

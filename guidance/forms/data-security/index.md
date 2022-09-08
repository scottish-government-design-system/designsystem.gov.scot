---
layout: component
title:  "Data security in forms"
category: guidance
parent: guidance.forms
thispage: guidance.forms.data-security
noindex: true
---

Data security should be considered from the start of any form design process with all stakeholders involved at every stage.

User research shows that users find it reassuring to be asked for permission to collect and store their data and this in turn builds trust. This user confirmation should always be an opt-in approach with consent required before the form can be completed.

## Preventing spam

Form spam is often an issue for digital services. Some government forms make use of Google's ReCaptcha as one method to prevent form abuse by validating that a user is not a bot. However, there are accessibility issues with this choice and you should assess what alternatives might work for you. For example, using form validation and rate limiting to prevent automated submissions.

## Data protection 

Forms should be designed so that any storage of personal data in logs and tracking tools is limited what is essential and has been agreed by the service owner. All form data should be treated securely at all times.

URLs should follow best practice in being descriptive without personally identifiable information being included in the URL. If you keep track of progress through a form by building a URL from user responses, the questions you ask must not expose personally identifiable information in the URL. For example, you may be able to gather the information your form or service needs by asking if a user was born after a certain date instead of asking for their date of birth.

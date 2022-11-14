---
layout: component
title:  "Data security in forms"
category: guidance
parent: guidance.forms
thispage: guidance.forms.data-security
---

Data security should be considered from the start of any form design process. All stakeholders should be involved at every stage.

User research shows that users find it reassuring when they are asked for permission to collect and store their data. This builds trust. This user confirmation should always be an opt-in approach, with consent required before the form can be completed.

## Preventing spam

Form spam is often an issue for digital services. Some government forms make use of Google's ReCaptcha to prevent form abuse by validating that a user is not a bot. However, there are accessibility issues with this choice so you should consider what alternatives might work for you. For example, using form validation and rate limiting to prevent automated submissions.

## Data protection 

Any collection or storage of personal data in logs and tracking tools is limited to what is essential and has been agreed by the service owner. Form data must always be treated securely.

If you keep track of progress through a form by building a URL from user responses, the questions you ask must not expose personally identifiable information in the URL. For example, if there is an age constraint for your service you may be able to gather the information you need by asking if a user was born after a certain date instead of asking for their date of birth.

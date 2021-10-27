---
layout: component
title:  "Notification panel"
category: components
parent: components
thispage: component.notification-panel
summary: "A visible container used to highlight important content such as a success message."
---
## About this component
The notification panel component can be used to prominently feature important content - typically shown after a user completes a task such as submitting a form.

A panel consists of a heading and an optional supporting description.

When using a notification panel:

- It must be placed at the top of the main content either as the page's main heading or immediately after it
- Only one panel should be used per page
- Panel headings should be a high-level explanation of the message - using shorter words if possible to limit text wrapping on smaller display widths
- Use the description text to provide supporting information related to the panel's message
- Keep the panel free of non-essential content to help user's focus on what is important

## Why we use this component
Providing a visually contrasting area for the key content helps user's find this information quicker.

## Accessibility
If a panel is inserted into the page, after an action is taken, then the inclusion of `role="alert"` will assist screen reader software in announcing this content ahead of other information.

{% include example-frame.html title="Success panel shown as an alert" name="alert" %}
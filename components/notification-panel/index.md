---
layout: component
title:  "Notification panel"
category: components
parent: components
thispage: component.notification-panel
summary: "A visible container used to highlight important content such as a success message."
---
## About this component
The notification panel component prominently features important content. It is typically shown after a user completes a task such as submitting a form.

A panel consists of a heading and an optional supporting description.

When using a notification panel, you:

- must place it at the top of the main content either as the page's main heading or immediately after it
- should only use one panel per page
- write panel headings as a high-level explanation of the message - use shorter words if possible to limit text wrapping on smaller display widths
- use the description text for optional information that supports the panel's heading
- keep the panel free of non-essential content to help users focus on what is important
- place any call-to-actions, such as buttons or links, underneath the panel

### When to use this component

Use this component to tell users when a process has completed successfully, such as submitting a form.

### When not to use this component

If a page still has further actions a user can take, avoid using the panel. For example when further form fields remain on the page after submitting changes.

## Why we use this component
Using a visually contrasting area for the key content may help users find this information quicker.

## Related components

[Notification banner](/components/notification-banner/)

[Error summary](/components/error-summary/)

## Accessibility
If you insert a panel into the page after a user takes an action, then adding `role="alert"` will assist screen reader software to announce this content before other information.

{% include example-frame.html title="Success panel shown as an alert" name="alert" %}
---
layout: component
title:  "Notification panel"
category: components
parent: components
thispage: component.notification-panel
summary: "A highlight block that shows the user important information after they have completed a task, such as a success message"
---

## About this component

The notification panel component prominently presents important content when a task completes. Use it on confirmation pages to tell users, both:

* that they have completed the thing they wanted to do 
* the outcome such as a success message

A notification panel contains a heading and an optional supporting description.

When using a notification panel, you must:

- place it at the top of the main content, either as the page's main heading or immediately after it
- only use one notification panel per page

Notification panel titles should be a short high-level explanation of what has happened. If you can, use shorter words to limit text wrapping on small devices.

You should not include interactive elements such as buttons or links in a notification panel's content.

### When to use this component

Use this component to tell users when they complete a task they started, such as submitting a form.

### When not to use this component

Avoid using a notification panel if a page still has further actions a user can take. For example, when further form fields remain on the page after submitting changes.

## Other versions of this component

You can use the supporting description to tell the users extra important information. Highlight any important information a user needs to record, such as a reference number.

You can change the colour of the panel to match the tone of the message to the user. We use green if the user is successful and grey for unsuccessful or neutral messages.

{% include example-frame.html title="Notification panel with a reference number" name="reference" %}

## Why we use this component

Using a visually contrasting area for important content will help users find this information more quickly.

## Related components

[Notification banner](/components/notification-banner/)
[Page heading](/components/page-heading/)

## Accessibility

If you use a notification panel for a page's main heading, you should make it the H1 heading for the page. If you use a notification panel on a page that already has a H1 heading, use a different heading level for the notification panel's title. The notification panel's title will look the same regardless of the heading level used.

If you insert a notification panel into a page in response to a user action, then adding `role="alert"` to the notification panel will help assistive technology tools to notify the user about the change.

{% include example-frame.html title="Notification panel shown as an alert" name="alert" %}

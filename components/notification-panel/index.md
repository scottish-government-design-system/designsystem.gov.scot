---
layout: component
title:  "Notification panel"
category: components
parent: components
thispage: component.notification-panel
summary: "A highly-visible block used to highlight important content such as a success or confirmation message."
---

## About this component

The notification panel component prominently presents important content to the user when a task has been completed. 

A notification panel contains of a heading and an optional supporting description.

When using a notification panel, you must:

- place it at the top of the main content either as the page's main heading or immediately after it
- only use one notification panel per page

Notification panel titles should be a short high-level explanation of what has happened. If you can, use shorter words to limit text wrapping on small devices.

You should not include interactive elements such as buttons or links in a notification panel's content.

### When to use this component

Use this component to tell users that they have successfully completed an activity.

### When not to use this component

Avoid using a notification panel if a page still has further actions a user can take. For example, when further form fields remain on the page after submitting changes.

## Other versions of this component

If the supporting description includes some information a user might need to make a   note of, such as a reference number, that information is highlighted.

{% include example-frame.html title="Notification panel with a reference number" name="reference" %}

## Why we use this component

Using a visually contrasting area for important content will help users find this information more quickly.

## Related components

[Notification banner](/components/notification-banner/)
[Page heading](/components/page-heading/)

## Accessibility

If a notification panel is used for a page's main heading, it should be used for the H1 heading for the page. If a notification panel is used on a page that already has a H1 heading a different heading level must be used for the notification panel's title. The notification panel's title will look the same regardless of the heading level used.

If you insert a notification panel into a page in response to a user action, then adding `role="alert"` to the notification panel will help assistive technology tools to notify the user about the change.

{% include example-frame.html title="Notification panel shown as an alert" name="alert" %}

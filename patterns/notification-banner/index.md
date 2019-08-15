---
layout: component-enhanced
title:  "Notification banner"
category: patterns
parent: patterns
thispage: pattern.notification-banner
summary: "Notification banners provide important information to all users of a site"
---

Notification banners appear at the top of every page and span the entire width of the page with a solid colour block to make them more noticeable. They may have an optional "close" button to dismiss them. If permitted by a user's cookie preferences, the decision to dismiss a banner should be remembered.

The expected content of a notification banner is text with links. They can also optionally include a left-aligned icon.

## Design rationale

Placing these notifications at the top of the page, with a bold background colour, makes then naturally the first item that a user will see.

## Alternative displays

### Major notification

This example also demonstrates what lengthy text content looks like in a notification.
{% include example-frame.html name="major" %}

### Positive/success notification
{% include example-frame.html name="positive" %}

### Negative/alert notification

This example also demonstrates the use of icons in notification text.
{% include example-frame.html name="negative" %}


## Accessibility

The following accessibility features have been considered:

* Colour contrast between text colour and background colour meets WCAG AA
* The "close" icon has an accessible text alternative

The "close" button requires JavaScript to operate. Users with JavaScript disabled are not shown the button.

## Evidence

Findings from gov.uk and NHS research in 2019 indicated that banners which restricted the user from accessing the content led to the user leaving the page, or becoming sidetracked reading notification content and selecting options. 

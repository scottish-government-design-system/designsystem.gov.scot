---
layout: component
title:  "Notification banner"
category: components
parent: components
thispage: component.notification-banner
summary: "A banner highlighting key content that all visitors to a website will need to see."
---
## About this component
The notification banner stretches across the top of a web page, spanning its full width. It pushes everything else on a web page beneath it.

Links to further content can be included in the banner.

You should try to avoid having more than 2 notification banners on a page. If you have more than 1 banner, each banner should be distinct.

Each banner should also allow the user to remove the banner from the page, usually by having a ‘close’ link or an ‘X’. If the user closes a banner, a cookie should be set logging that the banner shouldn’t appear again in the browser. Because of this, each banner will need a unique ID.

Generally, banners do not contain images, but may contain small icons, such as an arrow to highlight a link.

## Other versions of this component

Notification banners can have an icon before their content.

{% include example-frame.html name="icon" %}

## Why we use this component
To highlight short, key content at the top of the page that all users need to see.

## Evidence
User research findings from GOV.UK and NHS suggests that banners which overlay or hide content on a page leads to a worse user experience (higher exit rate).

## Website analytics
To understand user behaviour, clicks on banner links items can be tracked through the original page path, the click URL, the click text, and a data attribute showing the link click.

The data attribute is added automatically by the [Design System's "tracking" script](/get-started/tracking/#notification-banner).

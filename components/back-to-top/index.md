---
layout: component
title:  "Back to top"
category: components
label: component
parent: components
thispage: component.back-to-top
summary: "A link that allows users to quickly navigate back to the top of the page with a single click. The link improves navigation for users on long pages of content and on mobile devices."
example:
  no-demo: true
---
## About this component
The back to top link works on desktop and on mobile content items. It appears when the user is interacting with a long page of content. It's a shortcut that allows users to quickly navigate back to the top of the page.

We designed our back to top component so that:

* it appears when the user begins to scroll down the page
* it is fixed in the lower-right of the browser window
* the link text says what the component does in plain English
* the background of the link is semi-transparent, so that it does not completely cover content beneath
* the link is small so it does not cover important content on the page but large enough that the touch area can be easily tapped on mobile

### When to use this component

Use the component on pages where the main purpose of scrolling up the page is to access common features found at the top of the page (for example, search or top level navigation).

It is particularly useful on any long content pages.

### Performance data

On mygov.scot users mostly click the back to top link on mobile devices (92% of clicks). It is more often clicked on longer pages with an average read time of 2 minutes 22 seconds (compared to the site average of 1 minute 36 seconds).

### Best practice

We referred to the best practice guidance for back to top links from the [Nielsen Norman Group](https://www.nngroup.com/articles/back-to-top/) when developing this component.

## Website analytics

You can track back to top link clicks through the original page path and a data attribute describing the action.

The data attribute is added automatically by the [Design System's "tracking" script](/get-started/tracking/#back-to-top).

## Accessibility

We designed the back to top component to be accessible to all types of users. It uses the interactive states and focus states described on our [accessibility page](/accessibility/) and our [focus states page](/styles/states/).

The back to top link is focusable and users can trigger it with the enter key, like any other link. It will take users back to the top of the current page.

The back to top component should be placed after the article content but above the footer.

---
layout: component
title:  "Back to top"
category: componentsx
label: component
parent: components
thispage: component.back-to-top
summary: "A link that allows users to quickly navigate back to the top of the page with a single click. The link improves navigation for users on long pages of content and on mobile devices."
noindex: true
example:
  no-demo: true
---
## About this component
The back to top link works on desktop and on mobile content items. It appears when the user is interacting with a long page of content. It's a shortcut that allows users to quickly navigate back to the top of the page.

We designed our back to top component so that:

* it appears when the user scrolls past the fold on desktop and when the user begins to scroll on mobile
* it is fixed in the lower-right of the browser window
* the link text back to top says what the component does in plain English
* the background of the link is semi-transparent, so that it does not completely cover content beneath
* the link is small so it does not cover important content on the page but large enough that the touch area can be easily tapped on mobile

### When to use this component

Use the component on pages where:

* the main purpose of scrolling up the page is to access common features found at the top of the page (for example, search or top level navigation)
* use on any long content pages and on all content pages on mobile

### Performance data

On mygov.scot users mostly click the back to top link on mobile devices (92% of clicks). It is more often clicked on longer pages with an average read time of 2 minutes 22 seconds (compared to the site average of 1 minute 36 seconds).

### Best practice

We referred to the best practice guidance for back to top links from the [Nielsen Norman Group](https://www.nngroup.com/articles/back-to-top/) when developing this component.

## Website analytics

You can track back to top link clicks through the original page path and the data attribute: data-navigation="backtotop"

## Accessibility

We designed the back to top component to be accessible to all types of users. It uses the interactive states and focus states described on our [accessibility page](/accessibility/) and our [focus states page](/styles/states/).

The back to top link is focusable and users can trigger it with the enter key. It will redirect users back to the top within the same page.

The Back To Top component should be placed after the article content but above the footer.

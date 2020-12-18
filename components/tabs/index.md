---
layout: component
title:  "Tabs"
category: componentsx
parent: components
thispage: component.tabs
phase: 3
summary: Tabs organise content and allow navigation across the page between sections of related content.  They allow the user to view one section of content at a time.
noindex: true

---
Our tabs component is an 'experimental' component. We currently only use tabs on one page of mygov.scot. We would like to do more research on using this component before we develop it further.

## About this component

Tabs allow users to focus on one specific view of the content at a time, whilst having sight of the other content views available.  Each tab, when active, will reveal its own unique content.  It is best to organise tab content based on user needs – with the most needed content in the first tab. The first tab is always preselected when the page is first visited.

### When to use this component

When using tabs for content its best:

* to use clear and succinct labels to describe the content in each tab -– tabs hide content from the user, so it is important to make it clear what content each tab has
* order tabs based on user need, with the most needed section of content in the first tab
* not to disable any of the tabs – if there is no content for a tab, either remove it or explain why it has no content when selected
* to avoid tabs that wrap over more than one line due to long labels or too many tabs – wrapping makes it harder to understand which tab is open

### When not use this component

We recommend you always test your content without tabs first. Consider if it's better to:

* simplify and reduce the amount of content
* split the content across multiple pages
* keep the content on a single page, separated by headings
* use a table of contents to let users navigate quickly to specific sections of content

We based our tabs component on the one built by the UK’s Government Digital Service. Find out more about when and when not to use tabs on [GOV.UK's design system](https://design-system.service.gov.uk/components/tabs/).  

## Related components

### Tabs vs accordion

Tabs and accordions both hide sections of content which a user can choose to reveal. Accordions hide content with clickable headings in order down the page (vertical). Tabs hide content with clickable headings in order across the page from left to right (horizontal).

Consider using tabs instead of an accordion if users do not need to view more than one section at a time. You should also consider the number of sections of content. Horizontal tabs cannot fit as many sections as vertical accordions.

Tabs may work better for users who need to switch quickly between 2 sections. Accordions push other sections down the page when they open, but tabs do not move which makes it easier to switch.

Tabs work best for relatively short content. If the content is longer than the viewport height the user might need to scroll back up to the tabs to change the selected tab.

## Variants

### Mobile variation:

If there are more than 3 tabs, the tabbed interface reconfigures the tabbed content into a single column stacked vertically.

## Evidence

### Best practice

The design, code and guidance for the tab component are based on recommendations from :

* [inclusive components](https://inclusive-components.design/tabbed-interfaces/)
* [Nielsen Norman Group](https://www.nngroup.com/articles/tabs-used-right/)
* [GDS design system](https://design-system.service.gov.uk/components/tabs/)
* [Material Design](https://material.io/components/tabs)

## Website analytics

You can track when users click on tab headings to open them. Use a combination of:

* the original page path
* click text
* a data attribute showing the action and item number, for example data-navigation="tab-1"

## Accessibility

We designed the tabs component to be accessible to all types of users. It uses the interactive states and focus states described on our [accessibility page](/accessibility/) and our [focus states page](/styles/states/).

When the user has JavaScript enabled in their browser, the tabs markup is enhanced with additional ARIA attributes.

### Accessibility tags

* Each tab's triggering element has a `role` attribute of `tab`
* The selected tab’s triggering element has an `aria-selected` attribute of `true`, otherwise `aria-selected` is set to `false`
* Only the selected tab can be accessed with the "tab" key -- its `tabindex` attribute is set to `0`, other tabs have a `tabindex` of `-0`
* Each tab’s triggering element has an aria-controls attribute whose value is the id of the associated `<div role="tabpanel">`
* Each tab content panel has an `aria-labelledby` attribute whose value is the id of its triggering element
* Each tab content panel has a `role` attribute of `tabpanel`

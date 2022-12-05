---
layout: component
title:  "Tabs"
category: components
parent: components
thispage: component.tabs
summary: Tabs organise content and allow navigation across the page between sections of related content. They allow the user to view one section of content at a time.
experimental: true

---

## About this component

Tabs allow users to see one specific section of content at a time, whilst having awareness of the other content available. Each tab, when selected, will reveal its own unique content.

One tab must always be selected when the page is first loaded. This should be the first tab unless there is a strong reason to have another tab selected.

At smaller viewport widths this component does not display as tabs. The tab titles display as a list of anchor links to content that is displayed below those links.

We based our tabs component on the one built by the UK Government Digital Service. Find out more about when and where not to use tabs on [GOV.UK’s Design System](https://design-system.service.gov.uk/components/tabs/).

## Usage

When using tabs for content it's best to use clear and succinct labels to describe the content in each tab. Tabs hide content from the user, so it is important to make it clear what the content in each tab is about.

You should order tabs based on user needs, with the most needed section of content in the first tab.

Do not disable any of the tabs. If there is no content for a tab, either remove it or explain why it has no content when selected.

You should avoid tabs that wrap over more than one row because of long labels or having too many tabs. Wrapping makes it harder for the user to understand which tab is open.

We recommend you always test your content without tabs first. Consider if it's better to:
* simplify and reduce the amount of content
* split the content across multiple pages
* keep the content on a single page, separated by headings
* use a contents list of anchor links to let users navigate quickly to specific sections of content

## Implementation

The tabs component needs JavaScript enabled in the user's browser. If a user does not have JavaScript enabled the tabs will use the alternative tab behaviour also used on small viewports &mdash; the tab titles display as a list of anchor links to content that is displayed below those links.

## Related components

[Accordion](/components/accordion/)

## Tabs vs accordions

Tabs and accordions both let users choose the content they wish to see from a group of hidden content sections. Accordions can have any number of sections open, while tabs always have exactly one section open.

Consider using tabs instead of an accordion if users do not need to view more than one section at a time. You should also consider the number of sections of content, because there is a limit to the number of sections that can fit in a row of tabs.

Tabs may work better for users who need to switch quickly between multiple sections. Tabs remain in the same position when changing sections, whereas accordions push other content down the page when they open.

Accordions may work better when users do not need to see any of the content on page load. 

Both tabs and accordions work best for relatively short content. If the content is longer than the viewport height the user might need to scroll back up to the tab or accordion headings to change the selected content.
 
## Website analytics

To understand user behaviour, clicks on tabs can be tracked through the original page path, the click URL, the click text, and a data attribute showing the tab number.

The data attribute is added automatically by the [Design System’s ‘tracking’ script](/guidance/tracking/#tabs).

## Accessibility

The component uses appropriate <abbr title="Accessible Rich Internet Application">ARIA</abbr> attributes to help users of assistive technologies. We have followed suggestions from the <abbr title="World Wide Web Consortium">W3C</abbr>'s [WAI-ARIA Authoring Practices for tabs](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20161214/#tabpanel).

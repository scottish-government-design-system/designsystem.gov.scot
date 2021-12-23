---
layout: component
title:  "Pagination"
category: componentsx
parent: components
thispage: component.pagination
summary: "Pagination helps users navigate through large groups of content that are separated into pages."
---


## About this component

The pagination component provides a sequential series of links to navigate through a set of content that is divided into pages.

The numbered links may also be accompanied by text-labelled links to move to a previous or next page in the series, while an ellipsis is used to indicate if there are more links available.

When using pagination you must:

- indicate which is the currently selected page within the series of links
- show a maximum of seven links at any one time, to limit wrapping over multiple lines at smaller display widths
- use truncation to indicate where more pages exist than can be visibly shown because this goes above the maximum limit of links

To further reduce pagination wrapping over multiple lines, at smaller display widths, the text labels for the previous and next links are visually hidden leaving only the chevron icons.

### When to use this component

Use this component to provide a way to let users navigate through a large set of related content which is divided into smaller pages. For example, a search results page.

This method of navigation is most effective when the user’s goal is to find a specific content item in the set, providing the ability to more easily jump to a specific page of the results.

### When not to use this component

Avoid using the pagination component as a method of navigating between pages that are not part of a single related group.

If you expect users to navigate through the results in sequential order then the pagination component may provide unnecessary cognitive load. Possible alternative solutions include:

- the sequential navigation component
- progressively loading content each time a ‘load more’ button is clicked

## Other versions of this component

If there is evidence that users navigation behaviour changes on mobile to favour a more sequential approach, then replacing the pagination links with a ‘load more’ button may be appropriate.

{% include example-frame.html title="Pagination navigation on larger display widths and sequential loading of content on smaller widths" name="loadmore" %}

## Why we use this component

Pagination provides a method for users to more quickly navigate a large group of content items that has been divided into pages.

## Related components

[Sequential navigation](/components/sequential-navigation/)

## Website analytics

Pagination clicks can be tracked through a data attribute attached to the link clicked. 

Using the [Design System’s ‘tracking’ script](/get-started/tracking/#pagination) will add the data attributes automatically.

There is additional information on tracking if pagination is used for [search results](/patterns/search-results/#website-analytics).

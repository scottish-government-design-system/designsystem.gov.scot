---
layout: component
title:  "Pagination"
category: components
parent: components
thispage: component.pagination
summary: "Pagination helps users navigate through large groups of content that are separated into pages."
---

## About this component

The pagination component is a group of links to navigate through a set of content that is divided into pages. For example, a search results page.

There are links to specific pages in the set and links to pages in the set relative to the user's current position. For example, the previous page and the next page.

This method of navigation is most effective when the user’s goal is to find a specific content item in the set, because the user can navigate directly to a specific page of the results.

## Usage

As a rule of thumb aim for showing no more than 7 numerical links. This keeps the number of navigation choices small while giving the user multiple options in either direction in the sequence.

If there are more pages in the set than are currently being displayed, the pagination component indicates that there are more pages in the set with an ellipsis. This helps to prevent the pagination components links wrapping over more than one row of links.

The first and last pages are always included. Including the first page makes it easy for the user to go to the beginning of the list. Including the last page makes it easy for the user to understand how many pages there are.

{% include example-frame.html title="Pagination with a page in the middle of the sequence selected" name="middle" %}

To help prevent pagination wrapping over multiple rows on small screens,the previous and next links show only the chevron icons at smaller viewport sizes.

If you expect users to navigate through the results in sequential order then the pagination component may cause unnecessary cognitive load. Consider using the [sequential navigation](/components/sequential-navigation/) component instead, which only has links to the previous page and the next page.

Avoid using the pagination component as a way to navigate between pages that are not part of a single related group.

## Why we use this component

The pagination component is a compact way of letting your users to more quickly navigate a large group of content items that you’ve divided into pages.

## Related components

* [Sequential navigation](/components/sequential-navigation/)
* [Search results](/patterns/search-results/)

## Website analytics

To understand user behaviour, clicks on links in pagination can be tracked through the click URL, the click text and a data attribute showing the interaction.

The data attribute is added automatically by the [Design System’s ‘tracking’ script](/get-started/tracking/#tabs).

There is additional information on tracking in the [search results pattern's website analytics section](/patterns/search-results/#website-analytics).

---
layout: component
title:  "Search results"
category: patterns
parent: patterns
thispage: pattern.search-results
summary: "A list displaying all the search results found after a user has made a search."
experimental: true

updatehistory:
  - date: 2020-08-19
    content: Add "search results" pattern
    url: /patterns/search-results
  - date: 2022-03-14
    content: Add guidance for displaying "promoted" results
    url: /patterns/search-results
---

## About this pattern

This pattern includes the search results page, the ability to display multiple pages of search results and to navigate between these pages.

Within the pattern:

- search results may contain a combination of search result layout types
- users can choose the page they want by picking a page number at the bottom of a search results page, starting at page 1
- each individual page number contains 10 search results
- the page number the user is on is always highlighted
- any links to related search terms may appear at the end

### When there are no results found

If a user has searched for something and there are no results to display, give the user some hints for how to improve their search.

{% include example-frame.html title="Search results example with no results" name="no-results" %}

### When the search term may be misspelled

If a user has searched for something that is identified as a potential misspelling, give the user the option to perform the search again with the suggested correct spelling.

{% include example-frame.html title="Search results example with spelling suggestion" name="spelling-suggestion" %}

### When additional results are promoted

Specific results can be placed at the top of the search results and labelled to show that they are distinct from the others.

Promoted results do not count towards the total number of results.

If search results span multiple pages then promoted results should only appear on page one.

{% include example-frame.html title="Search results example with promoted results" name="promoted" %}

### Displaying results over multiple pages

When using the pagination component, to split results over multiple pages, some additional behaviours should be implemented.

#### On the first page of results

- The number of results and the search term should be shown, for example ```87 results for search term```
- The attribute ```data-total```, applied to the ```ds_search-results__list``` list element, contains the total number of results and is used to calculate the relative position of each result within the tracking attribute script

#### On subsequent result pages

- The position within the set of results should should shown alongside the total number and search term, for example ```Showing 21 to 30 of 87 results for search term```
- The additional attribute ```start```, applied to the ```ds_search-results__list``` list element, contains the starting position for the current displayed results within the set of results and is by the tracking attribute script

## Components related to this

[Site search](/components/site-search/)

## Why we use this pattern

The design of the pattern helps the user to browse their search results, or to refine their search term if the search results do not meet their needs.

## Website analytics

Many analytics tools offer out of the box tracking for site search. The setup below covers more complex tracking to understand which search result was interacted with from a search results page, and how additional interactive elements are being used.

Search results should be tracked in order to understand if internal search engines are providing useful results to users. Tracking works through the query being available from the page URL, the click text, click URL and a data attribute showing the result's position.

Clicks to the suggested terms in the 'did you mean...' content are tracked through the page URL (which contains the original search query), the click text, the click URL and a data attribute.

Pagination is tracked using the data attribute with the number of the results page clicked.

Promoted results are tracked using the page URL, the click text, click URL and a data attribute showing the result's position in the list of promoted results.

Suggested related search terms are tracked through the page URL (which contains the original search query), the click text, the click URL and a data attribute.

The data attributes are added automatically by the [Design System's 'tracking' script](/guidance/tracking/).

<div class="ds_inset-text"><div class="ds_inset-text__text">
Where the site search is being used on a single-page app or it is not possible to put the search query in to the URL, the query could be included in the dataLayer for the page.
</div></div>

## Accessibility

Search suggestions use WAI-ARIA attributes to give more context for screen reader users. They include:  

*  link text for each suggestion being overwritten with a more descriptive aria-label
*  text hidden where it would cause duplication with the links
*  suggestions being wrapped in a nav element with a descriptive aria-label
Supporting evidence: mygov.scot accessibility review, March 2019.  

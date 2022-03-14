---
layout: component
title:  "Search results"
category: patterns
parent: patterns
thispage: pattern.search-results
summary: "A list displaying all the search results found after a user has made a search."
#examples:
#  - site: gov.scot
#    url: https://www.gov.scot/publications/2018-19-autumn-budget-revision-supporting-document/
#    name: "Advice and guidance publication"
---

## About this pattern

This pattern includes the search results page, the ability to display multiple pages of search results and to navigate between pages.

Within the pattern:

- users can choose the page they want by picking a page number at the bottom of a search result page, starting at page 1
- each individual page number contains 10 search results
- the page number the user is on is always highlighted

### When there are no results found

If a user has searched for something and there are no results to display, give the user some hints for how to improve their search.

{% include example-frame.html title="Search results example with no results" name="no-results" %}

### When the search term may be misspelled

If a user has searched for something that is identified as a potential misspelling, give the user the option to perform the search again with the suggested correct spelling.

{% include example-frame.html title="Search results example with spelling suggestion" name="spelling-suggestion" %}

## Components related to this

[Site search](/components/site-search/)

[Pagination](/components/pagination/)

## Why we use this pattern

The design of the pattern helps the user to browse their search results, or to refine their search term if the search results do not meet their needs.

## Website analytics

Many analytics tools offer out of the box tracking for site search. The setup below covers more complex tracking to understand which search result was interacted with from a search results page, and how additional interactive elements are being used.

Search results should be tracked in order to understand if internal search engines are providing useful results to users. Tracking works through the query being available from the page URL, the click text, click URL and a data attribute showing the result's position.

Clicks to the suggested terms in the 'did you mean...' content are tracked through the page URL (which contains the original search query), the click text, the click URL and a data attribute.

Pagination is tracked using the data attribute with the number of the results page clicked.

The data attributes are added automatically by the [Design System's 'tracking' script](/get-started/tracking).

<div class="ds_inset-text"><div class="ds_inset-text__text">
Where the site search is being used on a single-page app or it is not possible to put the search query in to the URL, the query could be included in the dataLayer for the page.
</div></div>

## Accessibility

Search suggestions use WAI-ARIA attributes to give more context for screen reader users. They include:  

*  link text for each suggestion being overwritten with a more descriptive aria-label
*  text “Did you mean?” being hidden to avoid duplication in the links
*  suggestions being wrapped in a nav element with a descriptive aria-label
Supporting evidence: mygov.scot accessibility review, March 2019.  

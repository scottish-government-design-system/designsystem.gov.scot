---
layout: component
title:  "Search results"
category: components
parent: components
thispage: component.search-result
summary: "A list displaying all the search results found after a user has made a search."
type: minor
phase: 1
#examples:
#  - site: gov.scot
#    url: https://www.gov.scot/publications/2018-19-autumn-budget-revision-supporting-document/
#    name: "Advice and guidance publication"
---

## About this component

This component includes the search results page, the ability to display multiple pages of search results and to navigate between pages.

Within the component:

- users can choose the page they want by clicking on a page number at the bottom of a search result page, starting at page 1
- each individual page number contains 10 search results
- the page number the user is on is always highlighted

A maximum number of 7 page numbers are shown at the bottom of a page of search results, but the user can select pages outwith these 7 by choosing the … (ellipsis) symbol.

An option to select ‘previous’ page appears to the left of the 7 numbers and an option to select ‘next’ page on the right. The current page number always appears in the URL, e.g. https://www.mygov.scot/search/?q=brexit&cat=sitesearch&page=2

On a mobile, a ‘Load more’ button is shown rather than a list of page numbers.

## Components related to this

[Site search](https://designsystem.gov.scot/components/site-search/)

## Why we use this component

The design of the component helps the user to browse their search results, or to refine their search term if the search results don't meet their needs.

## Website analytics

There are no reported performance issues with this component from mygov or gov.scot.

## Accessibility features

Search suggestions use WAI-ARIA attributes to give more context for screen reader users. They include:  

*  link text for each suggestion being overwritten with a more descriptive aria-label
*  text “Did you mean?” being hidden to avoid duplication in the links
*  suggestions being wrapped in a nav element with a descriptive aria-label
Supporting evidence: mygov.scot accessibility review, March 2019.  

Find out more about accessibility requirements that should be applied to all online services in the dedicated section of this site: INSERT LINK HERE

## Feedback, help or support

[Send us feedback or ask us a question.](mailto:designsystem@gov.scot)  

## Links to live examples
[Mygov.scot](https://www.mygov.scot/search/?q=education&cat=sitesearch)
[Gov.scot](https://www.gov.scot/search/?q=publications)

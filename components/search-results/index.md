---
layout: component
title:  "Search results"
category: components
parent: components
thispage: component.search-results
summary: "A list of search results and its associated controls."
type: major
phase: 1
---

## About this component
This is a pattern to display multiple pages of search results.   

Within the pattern:
* users can choose the page they want by clicking on a page number at the bottom of a search result page, starting at page 1
* each individual page number contains 10 search results
* the page number the user is on is always highlighted  

A maximum number of 7 page numbers are shown at the bottom of a page of search results, but the user can select pages outwith these 7 by choosing the … (ellipsis) symbol.    

An option to select ‘previous’ page appears to the left of the 7 numbers and an option to select ‘next’ page on the right.
The current page number always appears in the URL, e.g. https://www.mygov.scot/search/?q=brexit&cat=sitesearch&page=2

## Why we use this component
Gives the user an option to view search results that might not be among a search’s top results.  

## Mobile version
A ‘Load more’ button is shown rather than a list of page numbers.

## Supporting evidence for using this component
None.

## Website analytics and the use of this component
There are no reported performance issues with this component from mygov or gov.scot.

Search results pagination clicks can be tracked through a data attribute attached to the page link, e.g. data-search="pagination-7" and can be tracked alongside the search query (see Search Results for further detail. )  

## Accessibility Features
The current page should always be indicated to the user. It should also be noted that Ajax requires Aria attributes to inform the user of further content.

Find out more about accessibility requirements that should be applied to all online services in the dedicated section of this site: INSERT LINK HERE

## Feedback, help or support
If you need any help or want to give any feedback you can e-mail us at:
[designsystem@gov.scot](mailto:designsystem@gov.scot)

## Links to live examples
[Mygov.scot] (https://www.mygov.scot/search/?q=benefts&cat=sitesearch)

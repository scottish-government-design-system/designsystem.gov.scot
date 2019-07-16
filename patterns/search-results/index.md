---
layout: component-enhanced
title:  "Search results"
category: patterns
parent: patterns
thispage: pattern.search-results
summary: "A list of search results and its associated controls."
---

The search results pattern is a list of [search results](/components/search-result/) with additional information about the search, such as a count of results and [pagination]().

The search results pattern also includes a pre-populated [site search](/components/site-search). This search field is shown immediately above the list of results to give the user an easy way to amend their search term. Only one site search component should be on the page, and therefore it should be removed from the site header in this context.

Up to ten search results should be displayed on a search results page. If the results set has more than ten results, introduce a pagination component.

## Alternative display

### No results

If there are no search results the user is given some suggestions for improving their search.

{% include example-frame.html name="no-results" caption="Example showing a search with no results" %}

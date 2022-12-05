---
layout: component
title:  "Search result"
category: components
parent: components
thispage: component.search-result
summary: "A search result provides the key information about an item appearing in a list of search results."
draft: true
noindex: true
sitemap: false
---

## About this component

The search result component is used as part of a wider group of [search results](/patterns/search-results/), containing a summary of what the user can expect if they click on each result. The content and layout of the component may change depending on the availability and type of content for a result.

A basic search result includes:

- a linked heading
- a summary paragraph which should have a maximum length of 160 characters
- optional metadata such as the type of content and the date
- optional text highlighting, within the summary paragraph, of any match to the search query

### When to use this component

Use this component to provide the essential information about a web page or resource that appears within a list of search results.

### When not to use this component

The search result component should not be used outside of search results.

## Other versions of this component

### Show context

When a result is part of a wider group such as a publication with multiple pages, or belonging to a topic or collection it is useful to include a link to the parent resource.

{% include example-frame.html title="Search result with parent link" name="parent" %}

### Include an image

Some results may benefit from including an image if this adds context to the result.

Using placeholder images should be avoided. 

{% include example-frame.html title="Search result with image" name="image" %}

### Promote a featured result

A search result can be promoted ahead of other results and have a more prominent visual style to draw attention. A text label should be included to explain that the result is in addition to the normal set of returned results.

{% include example-frame.html title="Search result that is promoted" name="promoted" %}

## Related components

[Metadata](/components/metadata/)

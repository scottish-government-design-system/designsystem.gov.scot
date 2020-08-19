---
layout: component
title:  "Typography"
category: styles
parent: styles
thispage: style.typography
#summary: ""
phase: 2
---

## Font 

We use the [Roboto](https://fonts.google.com/specimen/Roboto) font, which is a free open source font developed by Google for use on screen. It has different weight options.

If your service is going to be a subdomain of either gov.scot or mygov.scot then you must use Roboto as your font.




## Headings

Most websites use scaled headings to create a visual hierarchy of content. Headings should use HTML heading elements.

The main headings on a website are usually H1 size, with smaller sizes, such as H2 and H3, used for subheadings.

Hierarchical headings are helpful for accessibility and help all users to understand your content. Search engines may make use of them to understand the content of your site.

We write headings with a capital letter at the start. The only difference is we do not use full stops. This is the most popular way of writing headings online and is known as 'sentence case'.

{% include example-frame.html name="headings" %}

### Heading with captions

A caption is a piece of text above a page’s title. It shows when a heading is part of a larger section or group. For example mygov.scot uses a heading and caption on the 'guide' format.

{% include example-frame.html name="header-caption" %}

You can see how to implement this on the [page header](/components/page-header/) component.

### Heading with metadata

Some heading formats may also have supporting metadata shown beneath the main header. For example 'Last updated' underneath the page title.

{% include example-frame.html name="header-caption-metadata" %}




## Paragraphs

### Body

The default paragraph font size used by the Design System is 19px on larger screens and 16px on smaller screens.

{% include example-frame.html name="body" %}

### Leader

Leader styling should apply to introductory content near the top of the page. The leader font size used by the Design System is 24px.

{% include example-frame.html name="leader" %}

### Small

Small type should be used sparingly and when content is limited in space within a component.

{% include example-frame.html name="small" %}




## Links
Link styling is blue and underlined by default. If a link appears at the end of a sentence, the full stop should be outside the link.

{% include example-frame.html name="links" %}




## Lists

Use lists to make blocks of text easier to read.

### Bulleted list

Introduce bulleted lists with a lead-in line ending in a colon. Start each item with a lowercase letter, and do not use a full stop at the end.

{% include example-frame.html name="list-bulleted" %}

### Numbered list

Use numbered lists instead of bulleted lists when the order of the items is important. You do not need to use a lead-in line for numbered lists. Items in a numbered list should end in a full stop, because each one should be a complete sentence.

{% include example-frame.html name="list-numbered" %}

---
layout: component
title:  "Typography"
category: styles
parent: styles
thispage: style.typography
#summary: ""
---

## Font

We use the [Roboto](https://fonts.google.com/specimen/Roboto) font, which is a free open source font developed by Google for use on screen. It has different weight options.

If your service is going to be a subdomain of either gov.scot or mygov.scot then you must use Roboto as your font.




## Headings

Most websites use scaled headings to create a visual hierarchy of content. Headings should use HTML heading elements.

The main headings on a website are usually H1 size, with smaller sizes, such as H2 and H3, used for subheadings.

Hierarchical headings are helpful for accessibility and help all users to understand your content. Search engines may make use of them to understand the content of your site.

We write headings with a capital letter at the start. The only difference is we do not use full stops. This is the most popular way of writing headings online and is known as 'sentence case'.

{% include example-frame.html title="Heading example" name="headings" %}

### Heading with captions

A caption is a piece of text above a page’s title. It shows when a heading is part of a larger section or group. For example mygov.scot uses a heading and caption on the 'guide' format.

{% include example-frame.html title="Heading example with caption" name="header-caption" %}

You can see how to implement this on the [page header](/components/page-header/) component.

### Heading with metadata

Some heading formats may also have supporting metadata shown beneath the main header. For example 'Last updated' underneath the page title.

{% include example-frame.html title="Heading example with metadata" name="header-caption-metadata" %}




## Paragraphs

### Body

The default paragraph font size used by the Design System is 19px on larger screens and 16px on smaller screens.

{% include example-frame.html title="Body text example" name="body" %}

### Leader

Leader styling should apply to introductory content near the top of the page. The leader font size used by the Design System is 24px.

{% include example-frame.html title="Leader text example" name="leader" %}

### Small

Small type should be used sparingly and when content is limited in space within a component.

{% include example-frame.html title="Small text example" name="small" %}




## Links
Link styling is blue and underlined by default. If a link appears at the end of a sentence, the full stop should be outside the link.

{% include example-frame.html title="Links example" name="links" %}




## Lists

Use lists to make blocks of text easier to read.

### Bulleted list

Introduce bulleted lists with a lead-in line ending in a colon. Start each item with a lowercase letter, and do not use a full stop at the end.

{% include example-frame.html title="Bulleted list example" name="list-bulleted" %}

### Numbered list

Use numbered lists instead of bulleted lists when the order of the items is important. You do not need to use a lead-in line for numbered lists. Items in a numbered list should end in a full stop, because each one should be a complete sentence.

{% include example-frame.html title="Numbered list example" name="list-numbered" %}




## Font rules

The tables below contains all of the font sizes, line heights and font weights which we use to establish typographic hierarchy.

<table class="ds_table">
  <caption>Font rules for small viewports</caption>
  <thead>
    <tr><th>Element</th><th>Font size</th><th>Line height</th><th>Weight</th></tr>
  </thead>
  <tbody>
    <tr><td>H1</td><td>30px</td><td>40px</td><td>bold</td></tr>
    <tr><td>H2</td><td>22px</td><td>32px</td><td>bold</td></tr>
    <tr><td>H3</td><td>19px</td><td>24px</td><td>bold</td></tr>
    <tr><td>H4</td><td>16px</td><td>24px</td><td>bold</td></tr>
    <tr><td>H5</td><td>14px</td><td>24px</td><td>bold</td></tr>
    <tr><td>Leader</td><td>19px</td><td>32px</td><td>light</td></tr>
    <tr><td>Body</td><td>16px</td><td>24px</td><td>regular</td></tr>
    <tr><td>Small</td><td>14px</td><td>24px</td><td>regular</td></tr>
  </tbody>
</table>

<table class="ds_table">
  <caption>Font rules for large viewports</caption>
  <thead>
    <tr><th>Element</th><th>Font size</th><th>Line height</th><th>Weight</th></tr>
  </thead>
  <tbody>
    <tr><td>H1</td><td>44px</td><td>56px</td><td>bold</td></tr>
    <tr><td>H2</td><td>30px</td><td>40px</td><td>bold</td></tr>
    <tr><td>H3</td><td>22px</td><td>32px</td><td>bold</td></tr>
    <tr><td>H4</td><td>19px</td><td>32px</td><td>bold</td></tr>
    <tr><td>H5</td><td>16px</td><td>24px</td><td>bold</td></tr>
    <tr><td>Leader</td><td>24px</td><td>40px</td><td>light</td></tr>
    <tr><td>Body</td><td>19px</td><td>32px</td><td>regular</td></tr>
    <tr><td>Small</td><td>16px</td><td>24px</td><td>regular</td></tr>
  </tbody>
</table>

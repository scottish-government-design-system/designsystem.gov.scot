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

### Font sizes

The table below contains all of the font sizes, line heights and font weights which we use to establish typographic hierarchy.

<table class="ds_table">
<thead>
  <tr>
    <th colspan="2">Desktop</th>
    <th colspan="2">Mobile</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>H1</td>
    <td>font-size: 44px;<br>line-height: 56px;<br>font-weight: 700;</td>
    <td>H1</td>
    <td>font-size: 30px;<br>line-height: 40px;<br>font-weight: 700;</td>
  </tr>
  <tr>
    <td>H2</td>
    <td>font-size: 30px;<br>line-height: 40px;<br>font-weight: 700;</td>
    <td>H2</td>
    <td>font-size: 22px;<br>line-height: 32px;<br>font-weight: 700;</td>
  </tr>
  <tr>
    <td>H3</td>
    <td>font-size: 22px;<br>line-height: 32px;<br>font-weight: 700;</td>
    <td>H3</td>
    <td>font-size: 19px;<br>line-height: 24px;<br>font-weight: 700;</td>
  </tr>
  <tr>
    <td>H4</td>
    <td>font-size: 19px;<br>line-height: 32px;<br>font-weight: 700;</td>
    <td>H4</td>
    <td>font-size: 16px;<br>line-height: 24px;<br>font-weight: 700;</td>
  </tr>
  <tr>
    <td>H5</td>
    <td>font-size: 16px;<br>line-height: 24px;<br>font-weight: 700;</td>
    <td>H5</td>
    <td>font-size: 14px;<br>line-height: 24px;<br>font-weight: 700;</td>
  </tr>
  <tr>
    <td>Leader</td>
    <td>font-size: 24px;<br>line-height: 40px;<br>font-weight: 300;</td>
    <td>Leader</td>
    <td>font-size: 19px;<br>line-height: 32px;<br>font-weight: 300;</td>
  </tr>
  <tr>
    <td>Body</td>
    <td>font-size: 19px;<br>line-height: 32px;<br>font-weight: 400;</td>
    <td>Body</td>
    <td>font-size: 16px;<br>line-height: 24px;<br>font-weight: 400;</td>
  </tr>
  <tr>
    <td>Small</td>
    <td>font-size: 16px;<br>line-height: 24px;<br>font-weight: 400;</td>
    <td>Small</td>
    <td>font-size: 14px;<br>line-height: 24px;<br>font-weight: 400;</td>
  </tr>
</tbody>
</table>

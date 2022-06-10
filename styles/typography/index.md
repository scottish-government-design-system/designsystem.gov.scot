---
layout: component
title: "Typography"
category: styles
parent: styles
thispage: style.typography
#summary: ""
---

## Font

We use the [Roboto](https://fonts.google.com/specimen/Roboto) font, which is a free open source font developed by Google for use on screen. It has different weight options.

If your service is going to be a subdomain of either gov.scot or mygov.scot then you must use Roboto as your font.




## Headings

Headings set a logical hierarchy in your content. It is important to use the correct HTML heading level in your markup. This helps all users to make sense of your content including:
* users of assistive technology
* bots (such as those used to automate indexing of sites for search companies)

The main headings on a website are usually H1 size, with smaller sizes, such as H2 and H3, used for subheadings. It is best practice to only have one H1 in a page.

We write headings in sentence case, with a capital letter at the start and no full stop at the end. This is the most popular way of writing headings online.

{% include example-frame.html title="Heading example" name="headings" %}

### Heading override classes

The Design System has override classes for headings. They allow you to make any heading HTML element have the appearance of any other heading level. Use these to maintain the correct heading hierarchy, even when a design needs to change. For example, you might have some H3 headings that work better visually at a larger size.

{% include example-frame.html title="Heading overrides example" name="heading-overrides" %}




## Paragraphs

### Body

The default paragraph font size used by the Design System is 19px on larger screens and 16px on smaller screens.

{% include example-frame.html title="Body text example" name="body" %}

### Leader

You can apply leader styling to introductory content near the top of the page. Leader text is larger than body text.

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
    <tr>
      <th>Element</th>
      <th>Font size</th>
      <th>Line height</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="dss_font-table__h1">H1</span></td>
      <td>30px</td>
      <td>40px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__h2">H2</span></td>
      <td>22px</td>
      <td>32px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__h3">H3</span></td>
      <td>19px</td>
      <td>24px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__h4">H4</span></td>
      <td>16px</td>
      <td>24px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__h5">H5</span></td>
      <td>14px</td>
      <td>24px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__leader">Leader</span></td>
      <td>19px</td>
      <td>32px</td>
      <td>light/300</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__body">Body</span></td>
      <td>16px</td>
      <td>24px</td>
      <td>regular/400</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__small">Small</span></td>
      <td>14px</td>
      <td>24px</td>
      <td>regular/400</td>
    </tr>
  </tbody>
</table>

<table class="ds_table">
  <caption>Font rules for large viewports</caption>
  <thead>
    <tr>
      <th>Element</th>
      <th>Font size</th>
      <th>Line height</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="dss_font-table__h1  dss_font-table__h1--medium">H1</span></td>
      <td>44px</td>
      <td>56px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__h2  dss_font-table__h2--medium">H2</span></td>
      <td>30px</td>
      <td>40px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__h3  dss_font-table__h3--medium">H3</span></td>
      <td>22px</td>
      <td>32px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__h4  dss_font-table__h4--medium">H4</span></td>
      <td>19px</td>
      <td>32px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__h5  dss_font-table__h5--medium">H5</span></td>
      <td>16px</td>
      <td>24px</td>
      <td>bold/700</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__leader  dss_font-table__leader--medium">Leader</span></td>
      <td>24px</td>
      <td>40px</td>
      <td>light/300</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__body  dss_font-table__body--medium">Body</span></td>
      <td>19px</td>
      <td>32px</td>
      <td>regular/400</td>
    </tr>
    <tr>
      <td><span class="dss_font-table__small  dss_font-table__small--medium">Small</span></td>
      <td>16px</td>
      <td>24px</td>
      <td>regular/400</td>
    </tr>
  </tbody>
</table>

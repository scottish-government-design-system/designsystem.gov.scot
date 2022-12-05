---
layout: component
title:  "File download"
category: components
parent: components
label: component
thispage: component.file-download
summary: "A block containing information about a file with a link to download it"

updatehistory:
  - date: 2022-08-25
    content: Add "file download" component
    homepage: '<a href="/components/file-download">"File download" component</a> published'
    url: /components/file-download
---

## About this component

The file download component presents a file that the user can download, with some supporting information.

The component features:
* the title of the file
* information about the file such as its file format and size
* a download link
* a thumbnail image

Both the thumbnail image and the download link can be clicked on to download the file.

## Why we use this component

When you do not want to have a simple text link to a file, the file download component provides a consistent and eye-catching way of presenting files for download. It provides useful information about the file that can help users to decide whether or not to download it.

## Other versions of this component

### Generic thumbnail image

{% include example-frame.html title="File download block with generic thumbnail image" name="generic" %}

If there is no specific thumbnail image for your file, the Design System has a collection of icons for common file types that can be used instead.

<div class="ds_inset-text">
    <div class="ds_inset-text__text">
    Developers should note the addition of a modifier class, which is required for correct display: <code>ds_file-download__thumbnail-image--generic</code>
    </div>
</div>

<figure class="example__content">
<img alt="Ten icons for common file types" src="/assets/images/examples/file-icons.png">
<figcaption aria-hidden="true">The Design System's icons for common file types</figcaption>
</figure>

These icons are included in the [Design System's npm module](https://www.npmjs.com/package/@scottish-government/pattern-library) as well as the [GitHub repository](https://github.com/scottishgovernment/pattern-library/tree/master/src/images/documents/svg) and should be copied into your own project.

### Highlighted file

{% include example-frame.html title="File download block with highlight" name="highlighted" %}

A file download block can be highlighted to give it a more prominent appearance. This is useful in cases where there are many file download blocks and you want to give priority to one of them.

Highlighted blocks should be placed at the beginning of a group of file download blocks, and are most effective when used for a single file in a group.

## Website analytics

To understand user behaviour, clicks on links in file download blocks can be tracked through the click URL, the click text and a data attribute showing the interaction.

To help identify clicks on the thumbnail or file icon, a span with hidden text has been added to the link.

The data attributes are added automatically by the [Design System's 'tracking' script](/guidance/tracking/#file-download).

## Accessibility

While the file download component contains two links to the file, only the 'download' link is made available to screen readers. This avoids the repetition of having multiple links to the same item read out.

The download link uses <abbr title="Accessible Rich Internet Applications">ARIA</abbr> attributes to give additional context to the link. The file's title is used in `aria-labelledby` and the supporting metadata in `aria-describedby`. 

These ARIA attributes require unique ID attributes to be set on the title and the metadata elements.

### Example screen reader output

In Voiceover, the download link on the file download block shown in the examples on this page would be announced like this when it has focus: <q>Link. Scotland's Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive. File type: 44 page PDF, file size: 7.2 megabytes.</q>

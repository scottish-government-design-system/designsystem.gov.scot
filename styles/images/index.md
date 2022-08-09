---
layout: component
title:  "Images"
category: styles
parent: styles
thispage: style.images
summary: "We use images where content may benefit from a supporting example to clarify information."
---

## Photography

### Aspect ratios

When using photographs we recommend using standard aspect ratios such as 1:1, 4:3, 16:9, and 21:9.

<figure class="example__content">
<img alt="Box shapes representing the four recommended image aspect ratios" src="/assets/images/ratios-image.svg" width="1920" height="1080">
<figcaption>Our image aspect ratios</figcaption>
</figure>

The [aspect box component](/components/aspect-box/) can crop incorrectly-sized images to fit these aspect ratios.

## Illustrations

Preference for illustration over photography may occur when:

* there is no suitable photography for content
* a photograph may be too complex
* visualising data

## Using images

### Images in article content

Article templates allow images that are aligned left in the page. The recommended width for an image in article content is 750px.

<figure class="example__content">
<img alt="An image spans over eight columns on the page layout and is left-aligned." src="/assets/images/article-image.svg" loading="lazy" width="801" height="450">
<figcaption>Column positioning for images in an article page</figcaption>
</figure>

## Informational images

Other types of imagery can be considered such as logos, icons and diagrams to support information.

## Accessibility

Images must always be supported with text alternatives which are descriptive of the information they present. Alternative text is read out by screen readers for users with visual impairments and where an image does not load. Text should never be included as part of the image as this will not be read out by screen readers or translated by automated translators.

W3C gives guidance on [how to make images accessible](https://www.w3.org/WAI/tutorials/images/).

## Performance

Images often make up a significant part of the file size of a web page. This factor may impact how quickly your web site or service displays on users’ devices. It can also affect how high the web pages rank in search engines. Performance of your images may improve if you:

- compress images to create smaller sized files
- use the most appropriate file format for the image such as SVG for illustrations
- [lazy load images](https://web.dev/browser-level-image-lazy-loading/) to stop unnecessary downloads
- provide different sizes of the same image to best suit the viewport where it is being displayed

Google provides guidance on [how to optimise images](https://web.dev/uses-optimized-images/).

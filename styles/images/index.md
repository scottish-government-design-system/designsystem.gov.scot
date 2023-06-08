---
layout: component
title:  "Images"
category: styles
parent: styles
thispage: style.images
summary: "We use images where content may benefit from a supporting example to clarify information."

updatehistory:
  - date: 2020-08-19
    content: Add "images" styles page
    url: /styles/images
  - date: 2022-01-14
    content: Add documentation about the effect images can have on performance
    url: /styles/images#performance
  - date: 2022-08-09
    content: Add link to the "aspect box" component, which can help crop images
    url: /styles/images
    homepage: false
  - date: 2023-06-08
    content: Add information on images for data visualisation and various minor changes to simplify language used
    url: /styles/images
    homepage: false
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

Sometimes it’s better to use an illustration instead of a photograph. For example, when:

* there's no suitable photography for content
* a photograph may be too complex
* visualising data

## Using images

### Images in article content

Article templates allow images that are left aligned to the page’s content. The recommended maximum width for an image in article content is 750px.

<figure class="example__content">
<img alt="An image spans over eight columns on the page layout and is left-aligned." src="/assets/images/article-image.svg" loading="lazy" width="801" height="450">
<figcaption>Column positioning for images in an article page</figcaption>
</figure>

### Data visualisation

Images can be used for charts, maps and infographics. They give a visual representation of numeric data. You can get more guidance on how to [create effective and accessible charts](/guidance/charts/) to use within the Design System.

### Other types of image use

You can also use other types of imagery like logos and icons to support information.


## Accessibility

Images must come with text alternatives which describe the information they present. Screen readers will read out alternative text for users with visual impairments. Apart from text labels in a chart, do not use text in an image. Screen readers and automated translators will not be able to read it. 

W3C gives guidance on [how to make images accessible](https://www.w3.org/WAI/tutorials/images/).

## Performance

Images often make up a significant part of the file size of a web page. This may impact how quickly your website or service displays on users’ devices. It can also affect how high the web pages rank in search engines. Image performance may improve if you:

- compress images to create smaller sized files
- use the most appropriate file format for the image such as SVG for illustrations
- [lazy load images](https://web.dev/browser-level-image-lazy-loading/) to stop unnecessary downloads
- give different sizes of the same image to best suit the screen displaying it

Google provides guidance on [how to optimise images](https://web.dev/uses-optimized-images/).

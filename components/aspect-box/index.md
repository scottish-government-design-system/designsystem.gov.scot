---
layout: component
title:  "Aspect box"
category: components
parent: components
label: component
thispage: component.aspect-box
summary: "An aspect box crops images to a particular aspect ratio."
example:
  no-demo: true
updatehistory:
  - date: 2022-08-09
    content: Add "aspect box" component
    homepage: '<a href="/components/aspect-box">"Aspect box" component</a> published'
    url: /components/aspect-box  
---

## About this component

Aspect box is a component used to constrain an image to a particular aspect ratio, cropping the image if necessary. It supports common aspect ratios of:
* 1:1 (square)
* 4:3 (standard fullscreen)
* 16:9 (standard widescreen)
* 21:9 (anamorphic widescreen)

## Why we use this component

While it is preferable to use exactly-sized images for best performance, doing so is not always practical. Using the aspect box component to crop incorrectly-sized images helps with art direction and maintaining a uniform appearance, for example in a [grid of image cards](/patterns/navigational-pages/#image-card-navigation) where differently-sized images would make the page appear jumbled.

## Related components

* [Navigational pages](/patterns/navigational-pages/)
* [Search results](/patterns/search-results/)

## Accessibility

Aspect box uses a CSS property not supported in old browsers, and we address this using a fallback which restructures the HTML. The fallback clones the `alt` attribute of the image as an ARIA label on the replacement HTML so that assistive technologies will still announce the text.

The fallback requires JavaScript to be enabled in the user's browser.

## Implementation

Aspect boxes use an aspect ratio of 16:9 (standard widescreen) by default. To specify a different aspect ratio, there are 3 modifier classes you can use.

<table class="ds_table">
  <thead>
    <tr>
      <th>Aspect ratio</th>
      <th>Modifier class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1:1</td>
      <td><code>ds_aspect-box--square</code></td>
    </tr>

    <tr>
      <td>4:3</td>
      <td><code>ds_aspect-box--43</code></td>
    </tr>

    <tr>
      <td>21:9</td>
      <td><code>ds_aspect-box--219</code></td>
    </tr>
  </tbody>
</table>

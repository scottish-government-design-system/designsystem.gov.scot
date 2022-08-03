---
layout: component
title:  "Aspect box"
category: components
parent: components
label: component
thispage: component.aspect-box
summary: "An aspect box automatically crops images to a particular aspect ratio."
noindex: true
example:
  no-demo: true
---

## About this component

Aspect box is a utility component used to constrain an image to a particular aspect ratio, cropping the image if necessary. It supports common aspect ratios of:
* 1:1
* 4:3
* 16:9
* 2.35:1

## Why we use this component

Although it is always preferable to use exactly-sized images for performance reasons, it is not always practical. Using the aspect box component to automatically crop incorrectly-sized images helps with art direction and maintaining a uniform appearance, for example in a [grid of image cards](/patterns/navigational-pages/#image-card-navigation) where differently-sized images would make the page appear jumbled.

## Related components

* [Navigational pages](/patterns/navigational-pages)
* [Search results](/patterns/search-results/)

## Accessibility

Aspect box uses a CSS property not supported in old browsers, and we address this using a fallback which restructures the HTML. The fallback clones the `alt` attribute of the image as an ARIA label on the replacement HTML so that assistive technologies will still announce the text.

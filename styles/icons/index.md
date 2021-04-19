---
layout: component
title: "Icons and iconography"
category: styles
parent: styles
thispage: style.icons
summary: "Icons are visual indicators that help users quickly identify important content and navigation actions."
---

## Using icons

The Digital Scotland Design System uses a small selection of Google Material icons. An icon should represent the most basic idea or concept instead of a metaphorical one. When choosing icons, pick symbols that commonly have universal meaning, for example a cross for a "close" action. Icons should be used consistently and sparingly to enforce meaning in your service.

<figure class="example__content">
    <img alt="Image showing a focussed link against a number of background colours" src="/assets/images/icons.png">
    <figcaption>A selection of icons used in the Design System</figcaption>
</figure>

These icons can be found in SVG format in the Github repository. They're also provided in a "stacked" SVG sprite.

## Size

The default size of icons is 24px. Alternative sizes, in 4px increments, can be explicitly set with additional CSS classes.

{% include example-frame.html name="icon-sizes" %}

## Colour

How to colour icons depends on whether they are images in your markup or background images in your CSS. 

<div class="ds_inset-text">
    <div class="ds_inset-text__text">
        When changing the fill colour, all icons must meet [colour contrast standards](https://www.w3.org/TR/WCAG21/#contrast-minimum).
    </div>
</div>

### Colouring icons in markup

Icons use the colour of the text around them by default. You can give icons a specific colour by styling their `SVG` element.

{% include example-frame.html name="markup-colour" %}

### Colouring icons in CSS

We use the "icon mask" CSS property to allow icons to be given custom colours in CSS. These icons also use the colour of the text around them. You can give icons a specific colour by styling their element.

<div class="ds_inset-text">
    <div class="ds_inset-text__text">
        The <code>icon-mask</code> CSS property is not supported in Internet Explorer (11 and below) and some other older browsers. Our icons will always be coloured black in those browsers.
    </div>
</div>

For developers: the Design System includes a SASS mixin that adds all of the necessary CSS properties. It takes the image path as a parameter, for example:

{% highlight scss %}
@include icon-mask(/my/cool/icon.svg);
{% endhighlight %}

## Accessibility

Accessible SVG icons is a topic in itself. This [CSS Tricks article about accessible SVGs by Heather Migliorisi](https://css-tricks.com/accessible-svgs/#icons) is a good resource if you want learn about a number of techniques for different use cases.

Our approach is to keep things simple: as a rule of thumb all icons are considered decorative and have `aria-hidden="true"` so screen readers will ignore them. If it is important that a screen reader notify the user about an icon, place a hidden element before it with a text label, as we do in this example:

{% include example-frame.html name="accessible" html-expanded=true %}

## Social media

We advise sourcing the most recent logo icons from social media brand assets.

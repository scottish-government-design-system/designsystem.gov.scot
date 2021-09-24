---
layout: component
title: "Icons and iconography"
category: styles
parent: styles
thispage: style.icons
summary: "Icons are visual indicators that help users identify important content and to navigate it."
---

## Using icons

The Digital Scotland Design System uses some Google Material icons. These are free to use and can be used by other public sector organisations. The Design System uses the 'filled' style of icons where the shapes are filled with solid colour instead of an outline.

When choosing icons, pick symbols that with a common meaning. For example, a cross for a 'close' action. Limit the use of icons and be consistent with them to enforce meaning in your service.

<figure class="example__content">
    <img alt="Eight example icons from the Design System" src="/assets/images/icons.png">
    <figcaption>A selection of icons used in the Design System</figcaption>
</figure>

You can find these icons in SVG format in the Github repository.  You can also get them in a ‘stacked’ SVG sprite.

## Size

The default size of icons is 24px.  You can set alternative sizes, in 4px increases, with additional CSS classes.

{% include example-frame.html title="Icon sizes example" name="icon-sizes" %}

## Colour

How to colour icons depends on whether they’re:
* images in your markup 
* background images in your CSS

<div class="ds_inset-text">
    <div class="ds_inset-text__text">
        When changing the fill colour, all icons need to meet <a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">colour contrast standards</a>.
    </div>
</div>

### Colouring icons in markup

Icons use the colour of the text around them by default. You can give icons a specific colour by styling their `SVG` element.

{% include example-frame.html title="Icon colour example" name="markup-colour" %}

### Colouring icons in CSS

We use the 'icon mask' CSS property to give icons custom colours in CSS. These icons also use the colour of the text around them. You can give icons a specific colour by styling their element.

<div class="ds_inset-text">
    <div class="ds_inset-text__text">
        The <code>icon-mask</code> CSS property is not supported in Internet Explorer (11 and below) and some other older browsers. Our icons will always be coloured black in those browsers.
    </div>
</div>

### For developers

The Design System includes a SASS mixin that adds all of the necessary CSS properties. It takes the image path as a parameter, for example:

{% highlight scss %}
@include icon-mask('/my/cool/icon.svg');
{% endhighlight %}

## Accessibility

It’s important to consider whether an icon is decorative or not. Screen readers should ignore decorative icons. You need to give hidden text to icons that are not decorative.  Screen readers will announce this. 

Icons used in Design System components and patterns are considered decorative as a general rule. They have `aria-hidden="true"` so screen readers will ignore them. If it's important that a screen reader tells the user about an icon, place a hidden element before it with a text label, as we do in this example. 

{% include example-frame.html title="Accessible icon example" name="accessible" html-expanded=true %}

## Social media

You should get the most recent logo icons from social media brand assets.

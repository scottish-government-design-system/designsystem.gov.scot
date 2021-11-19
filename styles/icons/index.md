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

Icons use the colour of the text around them by default. You can give icons a specific colour by styling their `SVG` element.

{% include example-frame.html title="Icon colour example" name="markup-colour" %}

<div class="ds_inset-text">
    <div class="ds_inset-text__text">
        <p>When choosing an icon colour, all icons must meet <a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">colour contrast standards</a> to meet the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018.</p>
    </div>
</div>

## Accessibility

It’s important to consider whether an icon is decorative or not. Screen readers should ignore decorative icons. You need to give hidden text to icons that are not decorative.  Screen readers will announce this. 

Icons used in Design System components and patterns are considered decorative as a general rule. They have `aria-hidden="true"` so screen readers will ignore them. If it's important that a screen reader tells the user about an icon, place a hidden element before it with a text label, as we do in this example. 

{% include example-frame.html title="Accessible icon example" name="accessible" html-expanded=true %}

## Social media

You should get the most recent logo icons from social media brand assets.

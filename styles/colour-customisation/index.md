---
layout: component
title:  "Colour customisation"
category: styles
parent: style
thispage: style.colour-customisation
summary: "Creating a customised colour scheme using our extended palette."
redirect_from: /styles/colour-palette/colour-customisation/

updatehistory:
  - date: 2020-11-18
    content: Add "colour customisation" styles page
    url: /styles/colour-palette/colour-customisation
  - date: 2022-09-08
    content: 'Move "colour customisation" to the first level of navigation in "styles"'
    homepage: false
    url: /styles/colour-customisation
---

## The extended palette

Our extended colour palette has 12 colours. You can use these to customise colour schemes for graphical elements. Your elements will then fit with the other Design System components and styling.

Doing this will help you create unique, but recognisable, marketing and communications campaigns.

The extended palette has 2 colours in the primary palette and 10 colours in the secondary palette. 

## Primary palette

<table class="dss_palette">
    <thead class="visually-hidden">
        <tr>
            <th>SCSS variable</th>
            <th>Hex code</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #0065bd"></span>
                <code>$ds_colour__brand</code>
                </td>
            <td class="dss_palette__hex"><code>#0065bd</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #002d54"></span>
                <code>$ds_colour__brand--secondary</code>
            </td>
            <td class="dss_palette__hex"><code>#002d54</code></td>
        </tr>
    </tbody>
</table>

## Secondary palette

<table class="dss_palette">
    <thead class="visually-hidden">
        <tr>
            <th>SCSS variable</th>
            <th>Hex code</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #017878"></span>
                <code>$ds_colour__dark-teal</code>
                </td>
            <td class="dss_palette__hex"><code>#017878</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #28a197"></span>
                <code>$ds_colour__teal</code>
            </td>
            <td class="dss_palette__hex"><code>#28a197</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #428542"></span>
                <code>$ds_colour__dark-green</code>
            </td>
            <td class="dss_palette__hex"><code>#428542</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #5eb135"></span>
                <code>$ds_colour__green</code>
            </td>
            <td class="dss_palette__hex"><code>#5eb135</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #fdd522"></span>
                <code>$ds_colour__yellow</code>
            </td>
            <td class="dss_palette__hex"><code>#fdd522</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #f47738"></span>
                <code>$ds_colour__orange</code>
            </td>
            <td class="dss_palette__hex"><code>#f47738</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #d32205"></span>
                <code>$ds_colour__red</code>
            </td>
            <td class="dss_palette__hex"><code>#d32205</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #e5007e"></span>
                <code>$ds_colour__pink</code>
            </td>
            <td class="dss_palette__hex"><code>#e5007e</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #912688"></span>
                <code>$ds_colour__purple</code>
            </td>
            <td class="dss_palette__hex"><code>#912688</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #592c20"></span>
                <code>$ds_colour__brown</code>
            </td>
            <td class="dss_palette__hex"><code>#592c20</code></td>
        </tr>
    </tbody>
</table>

## Creating a customised colour palette

You can create custom palettes using the primary and secondary palettes. Customised palettes can include a maximum of 3 or 4 colours in total.  

All custom colour palettes:
* must include the 2 blues from the primary palette to ensure a natural fit with the rest of the design 
* can have 1 or 2 colours from the secondary palette 

### Example 3 colour palette
<img style="height: 40px" alt="A 3 colour palette with the 2 primary blue colours and 1 secondary green colour." src="/assets/images/examples/3ColPalette.svg"/>

### Example 4 colour palette
<img style="height: 40px" alt="A 4 colour palette with the 2 primary blue colours and 2 secondary colours of green and teal." src="/assets/images/examples/4ColPalette.svg"/>


You can also add to the 3 or 4 selected palette colours:
* tints of colours from the secondary palette colours used 
* any neutrals (white, black and greys)
* highlight colours drawn from the wider secondary palette to meet a specific need – for example, to represent skin tones or to include an item that has a specific colour, such as a stop sign

## How to use a custom palette

You can use custom palette colours in the graphical elements of a website to create a unique and identifiable design. Graphical elements include any:

* illustrations
* imagery
* charts
* graphs 
* infographics 
* animations

You should use all elements taken from the Design System without making any changes to the colour, including: 

* components
* typography 
* spacing 
* interactive states

As all custom palettes include core colours from the Design System, our elements will match your custom palette without the need to change any CSS.

## Accessible use of colour

Graphical elements using the custom colour palettes should conform to [level AA of the Web Content Accessibility Guidelines (WCAG 2.1)](https://www.w3.org/TR/WCAG21/#contrast-minimum). This includes making sure that there is enough contrast for users to be able to identify the key elements of the design. 

You can [check the contrast](https://webaim.org/resources/contrastchecker/) to see if colour combinations meet the required standards.

Graphical elements should avoid the inclusion of text unless purely for decoration. Any text included which is essential to content will need to be accessible to assistive technology. 

All graphics should include a meaningful alt attribute describing the content. 

You will need to include an accessible alternative (such as a transcript) for any text or narrated content in:

* animations 
* motion graphics 
* film clips

We designed all our elements to conform to Web Content Accessibility Guidelines.

Using the Design System with custom graphical elements will help public sector websites and services meet the required accessibility standards.

## Research

We reviewed 7 design systems from a mix of public and private sector organisations.

To inform our development process, we looked at existing colour models of the Design System including the:

* palette ranges 
* colour selections 
* compositions

Rather than selecting new colours we based the secondary palette on a range of colours already widely in use. We then added some custom colours to address specific needs.

---
layout: component
title:  "Colour palette"
category: styles
parent: styles
thispage: style.colour-palette
#summary: ""
phase: 2
---
A strong colour palette can make it easier for users to process,
understand and navigate sites and services.

<style>

code {font-size: 0.85rem;}

.dss_palette__name {
    padding-left: 57px;
    position: relative;
    width: 50%;
}

.dss_palette__variable {
    width: 40%;
}

.dss_palette__hex {
    text-align: right;
    width: 10%;
}

.dss_palette__swatch {
    position: absolute;
    border-radius: 100%;
    display: inline-block;
    height: 42px;
    left: 0;
    margin: -6px 10px 0 0;
    vertical-align: middle;
    width: 42px;
}

td {
    vertical-align: top;
    padding-bottom: 21px;
}

table {
    margin-top: 21px;
    width: 100%;
}
</style>

<h2>Main colours</h2>

<table>
    <thead class="visually-hidden">
        <tr>
            <th>Name</th>
            <th>SCSS variable</th>
            <th>Hex code</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #333333"></span>
                <code>$color__text</code>
                </td>
            <td class="dss_palette__hex"><code>#333333</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #727272"></span>
                <code>$color__text--secondary</code>
            </td>
            <td class="dss_palette__hex"><code>#727272</code></td>
        </tr>
    </tbody>
</table>

<h3>Links</h3>

<table>
    <thead class="visually-hidden">
        <tr>
            <th>Name</th>
            <th>SCSS variable</th>
            <th>Hex code</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #0065bd"></span>
                <code>$color__link</code>
            </td>
            <td class="dss_palette__hex"><code>#0065bd</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #00437e"></span>
                <code>$color__link--hover</code>
            </td>
            <td class="dss_palette__hex"><code>#00437e</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #d9effc"></span>
                <code>$color__link--hover__background</code>
            </td>
            <td class="dss_palette__hex"><code>#d9effc</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #333333"></span>
                <code>$color__link--current</code>
            </td>
            <td class="dss_palette__hex"><code>#333333</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #f8f8f8"></span>
                <code>$color__link--current__background</code>
            </td>
            <td class="dss_palette__hex"><code>#f8f8f8</code></td>
        </tr>
    </tbody>
</table>

<h3>Focus and active state</h3>

<table>
    <thead class="visually-hidden">
        <tr>
            <th>Name</th>
            <th>SCSS variable</th>
            <th>Hex code</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #333333"></span>
                <code>$color__link--active</code><br />
                <code>$color__link--focus</code>
            </td>
            <td class="dss_palette__hex"><code>#333333</code></td>
        </tr>
        <tr>
            <!-- <td class="dss_palette__swa"></td> -->
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #fdd522"></span>
                <code>$color__link--active__background</code><br />
                <code>$color__link--focus__background</code>
            </td>
            <td class="dss_palette__hex"><code>#fdd522</code></td>
        </tr>
    </tbody>
</table>

<h3>Positive and negative messaging</h3>

<table>
    <thead class="visually-hidden">
        <tr>
            <th>Name</th>
            <th>SCSS variable</th>
            <th>Hex code</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <!-- <td class="dss_palette__swa"></td> -->
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #d32205"></span>
                <code>$colour__state--negative</code>
            </td>
            <td class="dss_palette__hex"><code>#d32205</code></td>
        </tr>
        <tr>
            <!-- <td class="dss_palette__swa"></td> -->
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #428542"></span>
                <code>$colour__state--positive</code>
            </td>
            <td class="dss_palette__hex"><code>#428542</code></td>
        </tr>
    </tbody>
</table>

<h3>Borders</h3>

<table>
    <thead class="visually-hidden">
        <tr>
            <th>Name</th>
            <th>SCSS variable</th>
            <th>Hex code</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #b3b3b3"></span>
                <code>$colour__border</code>
            </td>
            <td class="dss_palette__hex"><code>#b3b3b3</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #333333"></span>
                <code>$colour__border--dark</code>
            </td>
            <td class="dss_palette__hex"><code>#333333</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #ebebeb"></span>
                <code>$colour__border--light</code>
            </td>
            <td class="dss_palette__hex"><code>#ebebeb</code></td>
        </tr>
        <tr>
            <td class="dss_palette__name">
                <span class="dss_palette__swatch" style="background-color: #0065bd"></span>
                <code>$colour__border--highlight</code>
            </td>
            <td class="dss_palette__hex"><code>#0065bd</code></td>
        </tr>
    </tbody>
</table>

## Colour selection

Several elements make up the colour palette, such as brand colours,
notification colours and text colours.

## Brand colours

Brand colours align colours to organisations, often matching the colours
to a brand’s logo.

## Notification colours

We use certain colours to mean something.

* Red – error
* Green – success or validation message
* Yellow – warning or alert

## Text colours

Text should be dark on a light background, such as dark grey on white,
or white on a dark background.

## Calls to action

You can use colour to foreground calls to action by putting high contrast
colours against a neutral background. This helps draw the eye more than
subtle colours.

You can also use different colours to highlight and differentiate submit and
cancel buttons.

## When a user changes something on a page

When a user interacts with a page, such as by clicking a button, it’s
usually shown by a change in colour. This means you’ll need a number of
colours in your colour palette to support these changes in state.

Find out more about our approach to interactive states.

## Contrast

Good colour contrast uses light colours together with very dark colours.
Low contrast can result in users not being able to read the text or
complete actions.

There are free online tools you can use to check colour combinations that
pass WCAG contrast needs.

## Accessibility

You need to think about users who are colour blind when creating a site
palette. Avoid colour combinations such as red/green and blue/yellow, as
they can result in users not being able to read your site’s text.

Find more about the Digital Scotland Design System colour palette.

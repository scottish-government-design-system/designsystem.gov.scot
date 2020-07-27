---
layout: component
title:  "Focus states"
category: styles
parent: styles
thispage: style.states
#summary: ""
phase: 2
---



When a user searches a web page by jumping between things like the page’s links, buttons or form fields, it needs to be clear to the user which part of the page they’re on.

Components and patterns in this Design System provide styles to make these things clear. If you use a component or pattern from the Design System, you do not need to do anything extra with the focus states within it.

Focus states in the Design System use a high-contrast combination of yellow and dark grey. This combination meets colour contrast requirements in <abbr title="Web Content Accessibility Guidelines ">WCAG</abbr> 2.1 AA ([non-text contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)) against any background colour used by the Design System.

<img src="/assets/images/link-focus.svg">

This combination of light and dark colours ensures a good contrast against both light and dark backgrounds.

## Link focus state

Links are given a yellow background and dark grey bottom border when they have focus.

{% include example-frame.html name="link" no-code=true %}

Other components that look like links use the same style for consistency. For example, [accordion headers](/components/accordion) or [sequential navigation](/components/sequential-navigation).

<div class="ds_inset-text">For developers, there is a mixin called <code>blocklink</code> that you can include in style rules for this kind of component that provides the majority of this styling so you don't have to write it from scratch.</div>

## Button focus state

Similar to links, buttons are given a yellow background with dark grey bottom border when they are in focus. This focus style is applied to all types of button (i.e. primary, secondary, and cancel).

{% include example-frame.html name="button" no-code=true %}

## Form field focus state

{% include example-frame.html name="field" no-code=true %}

Focus on form fields is indicated by adding a yellow outline and a thicker dark border. This style is applied across all types of form field for a consistent user experience.

{% include example-frame.html name="field-radio" no-code=true %}

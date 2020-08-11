---
layout: article
thispage: accessibility
parent: home
title: "Accessibility"
index: 999
summary: "Best practice accessibility guidelines for web design."
permalink: '/accessibility/'
---

The Digital Scotland Design System has accessibility built in as a key feature. If there are specific accessibility notes for a component or pattern in the Design System, you’ll find them with the component or pattern.

This page outlines some general best practice guidelines to think about when creating digital services.

## Keyboard interaction

For keyboard users, such as people who use a screen reader, it is essential that all content can be interacted without using a mouse. For elements such as links, buttons and native form elements the browser and operating system ensures this functionality. Widgets that have no native element, such as an accordion or disclosure widget, require developers to ensure that they can be used with a keyboard.
The [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) provides extensive guidance on what keyboard interactions are required for widgets.

## Styling for keyboard focus

For sighted keyboard only users it is important that the interactive element that they are focused on is clearly identified. This includes links, buttons and form fields. Relying on the browser to do this is usually not sufficient since some browser default options for focus styling is too subtle.
Focus styling can easily be included using the CSS pseudo selector ```:focus```.
It may be sufficient to use the same styling for ```:hover```. However, it is better to have something more visually noticeable for focus styling. For example mygov.scot uses:

   ```
   a:focus {
       background-color: #fdd522;
       outline: 2px solid #fdd522;
   }
   ```

## Colour contrast

For some people poor contrast between the foreground colour of text and it’s background can make the text extremely difficult or impossible to read. This applies to text on images, gradients, buttons and other elements.

Ensure that the colours used in your palette are selected so that they offer a good contrast. Colours can be checked using tools such as [Tanaguru contrast finder](https://contrast-finder.tanaguru.com/). This tool can also offer alternatives close to your selected colours.

## Alternative text

All images must have alternative text provided that describes the information or function of the image. A simple trick to help deciding on alternative text is to imagine you are reading the page to someone over the phone. What would you say to them about the image? Is it a graph showing a clear trend? Does it convey an idea that supports the text content? Is it a person? Are they doing something important? Or is the image simply for decoration and doesn’t add anything to the meaning of the page?

The Web Accessibility Tutorials from W3C includes a useful [alt decision](https://www.w3.org/WAI/tutorials/images/decision-tree/) tree that can help you decide what alternative text you need to include.

## Heading structure

Headings communicate the organisation of a page and are extremely useful in helping people navigate pages. Headings are ranked from ```<h1>```, the most important, to ```<h6>``` the least. Avoid skipping headings, for example having an ```<h4>``` following an ```<h2>```. People who rely on the ranking to help them understand the content can be confused with skips like this.

The heading conveys meaning about the content so avoid using headings just for they style. Conversely, if something is styled to look like a heading then it should be marked up as a heading to convey that meaning in code.

## Visually hiding content

There are sometimes instances where screen reader users need content but sighted users do not. In each instance it is worth thinking if this really is the case; if the content is important enough for some users, why not others?

When visually hiding content that you want screen reader users to access never use ```display: none``` or ```visibility: hidden```. These will remove the content from all “displays” including screen reader “displays”. Similarly giving an element a height or width of 0 will remove it from the content flow and most screen readers will ignore it.
The following CSS is one accessible method of hiding content visually.

```
.visually-hidden {
   clip: rect(1px, 1px, 1px, 1px);
   height: 1px;
   width: 1px;
   overflow: hidden;
   position: absolute !important;
}

```

## Accessible Rich Internet Applications (ARIA)

ARIA provides a set of attributes that add additional information to HTML elements. The aim was to provide developers to make non-native widgets more accessible. Since ARIA was created and adopted there are more native HTML elements that reduce the necessity of ARIA.

ARIA will not automagically make your HTML more accessible. Poorly used ARIA may add nothing or, worse, lead to more confusing interactions for people.
Try to use native elements where possible.

Where not possible, consult the [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) to ensure you are using ARIA in line with best practice.

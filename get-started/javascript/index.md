---
layout: component
title:  "JavaScript"
category: get-started
parent: get-started
label: How to
thispage: get-started.javascript
summary: "Many components in the Design System use JavaScript to enhance their behaviour and improve usability."
permalink: "/get-started/javascript/"
index: 999

updatehistory:
  - date: 2023-04-26
    content: First published
    homepage: 'Added documentation about <a href="/get-started/javascript/">JavaScript in the Design System</a> and how to use it'
    url: /get-started/javascript/
---

A precompiled JavaScript file containing all of the scripts for Design System components is provided in the Design System's npm package at `dist/scripts/pattern-library.js`.

Including this JavaScript file in your page adds a `window.DS` object to the global scope.




## Initialise all components

Use `initAll()` to initialise all components on the current page.
{% highlight javascript %}
window.DS.initAll();
{% endhighlight %}

If you do not want to initialise components on the whole page, you can specify a container element to initialise components within.

{% highlight javascript %}
window.DS.initAll(document.getElementById('myNewSection'));
{% endhighlight %}

This could be useful when you have loaded new content into a section of the page and need to initialise new DS components in that section.

The `initAll` method will find any elements with a `data-module` attribute that corresponds to a Design System component. It will create a new instance of that component and initialise it. For example, this is the markup for a 'back to top' component, with its `data-module` attribute.

{% highlight html %}
<div class="ds_back-to-top" data-module="ds-back-to-top">
    <a href="#" class="ds_back-to-top__button">
        Back to top
        <svg class="ds_icon  ds_back-to-top__icon" aria-hidden="true" role="img">...</svg>
    </a>
</div>
{% endhighlight %}

{% include inset-text.html content="<code>initAll()</code> also initialises the Design System's <a href='/guidance/tracking/'>analytics tracking script</a>, which adds data attributes to elements that analytics tools can use." %}




## Initialise individual components

If you need finer control, the JavaScript classes for each component are in `window.DS.components`. The component classes all have an `init` method that is used to initialise the component.

If you wanted to set up some new accordions, for example, you would select them and then initialise them.

{% highlight javascript %}
const myNewAccordions = [].slice.call(document.querySelectorAll('[data-module="ds-accordion"]'));
myNewAccordions.forEach(accordion =>
    new window.DS.components.Accordion(accordion).init()
);
{% endhighlight %}

Some Design System components accept additional options when they are instantiated. These are detailed on the documentation page for each component.




## Import Design System JavaScript

All Design System JavaScript is written as ES6 modules. They can be imported into your own JavaScript as needed.

This is an example of importing and using the 'temporary focus' helper. 'Temporary focus' is used for focus management to aid accessibility.

{% highlight javascript %}
import temporaryFocus from '/path/to/node_modules/@scottish-government/pattern-library/src/base/tools/temporary-focus/temporary-focus';

...

temporaryFocus();
{% endhighlight %}




## Users without JavaScript

Design System components are designed to still be usable without JavaScript, for users who not have JavaScript enabled in their browser. For example, for Date Picker and Autocomplete, the JavaScript is a progressive enhancement on form fields, and the fallback behaviour is that users will be presented with standard input fields to complete instead.

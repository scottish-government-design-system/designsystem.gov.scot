---
layout: component
title:  "Tracking"
category: get-started
parent: get-started
label: How to
thispage: get-started.tracking
summary: ""
phase: 2
permalink: "/get-started/tracking/"
index: 999
sorttype: 'index'
---

The Design System has a script that add 'data attributes' to components. Analytics software can use these data attributes to track user behaviour and measure performance. The script adds data attributes automatically, but developers still have some control over them.

Calling the function `tracking.init()` adds data attributes to all Design System components.

The script logic picks:
* the attribute name from a set of broad categories
* the attribute value, derived from the context the component is used in

{% highlight html %}
<button class="ds_button">
    Start here
</button>
{% endhighlight %}

The script gives that button a data-button attribute with a value that uses the button's text:

{% highlight html %}
<button class="ds_button" data-button="button-start-here">
    Start here
</button>
{% endhighlight %}

The simplest use of the script is to call `tracking.init()` after the DOM is loaded. In some cases, you might want to have more control over:
* the values used
* what gets data attributes added


## Custom data attribute values

The developer can set the data attribute manually in the component's markup. The script will only add a data attribute if one is not already there.

For example, if you had a button with a very long text, you might want to shorten that attribute value. If you specify the 'data-button' attribute in your markup before calling `tracking.init()`, the script will not change that value.

{% highlight html %}
<button class="ds_button" data-button="button-start-here">
    Really super duper start here
</button>
{% endhighlight %}


## Add data attributes to new components added to the page

If new components are added to the DOM after calling `tracking.init()`, they will not automatically have these data attributes. In most cases, it will be safe to call `tracking.init()` again. But, it is also possible to restrict the addition of data attributes to a particular DOM node by using an optional 'scope' parameter.

{% highlight js %}
const myContainer = document.getElementById('my-container');

// ... add elements to myContainer

tracking.init(myContainer);
{% endhighlight %}

## Add data attributes to specific component types

You can add data attributes to specific component types instead of adding them to everything.

In general this is less useful than restricting the addition of data attributes to a particular DOM node, but it is available if you need it.

{% highlight js %}
tracking.add.tabs()
{% endhighlight %}

This also supports the use of a 'scope' parameter. Without a scope parameter, the script will apply to the whole page (the document element).

{% highlight js %}
tracking.add.tabs(document.getElementById('my-new-tabs-container'));
{% endhighlight %}


## How tracking handles different components

<nav role="navigation" class="ds_contents-nav" aria-label="Sections">
    <h2 class="ds_contents-nav__title">Components</h2>

    <ul class="ds_contents-nav__list">
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#accordion">
                Accordion
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#back-to-top">
                Back to top
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#breadcrumbs">
                Breadcrumbs
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a href="#button" class="ds_contents-nav__link">
                Button
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#category-list">
                Category list
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#checkboxes">
                Checkboxes
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#contact-details">
                Contact details
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#error-message">
                Error message
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#error-summary">
                Error summary
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#hide-this-page">
                Hide this page
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#inset-text">
                Inset text
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#notification-banner">
                Notification banner
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#pagination">
                Pagination
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#phase-banner">
                Phase banner
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#radio-buttons">
                Radio buttons
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#search-results">
                Search results
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#search-suggestions">
                Search suggestions
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#select-dropdown">
                Select (dropdown)
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#sequential-navigation">
                Sequential navigation
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#side-navigation">
                Side navigation
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#site-branding">
                Site branding
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#site-footer">
                Site footer
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#site-navigation">
                Site navigation
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#tabs">
                Tabs
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#text-input">
                Text input
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#textarea">
                Textarea
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#warning-text">
                Warning text
            </a>
        </li>
    </ul>
</nav>

### Accordion

Accordion header buttons get a 'data-accordion' attribute whose value uses the pattern `accordion-[index]-[open/close]` where the index is one-based. Opening and closing an accordion panel updates that data attribute to denote the correct action (opening or closing).

{% highlight html %}
<button class="ds_accordion-item__header-button js-accordion-button" data-accordion="accordion-open-1">
   Healthcare for veterans
   <span class="ds_accordion-item__indicator"></span>
</button>
{% endhighlight %}

If an accordion has an "open all" button, that button gets a 'data-accordion' attribute whose value uses the pattern `accordion-[open/close]-all`. This attribute is updated to denote the correct action when accordion panels are opened or closed.

{% highlight html %}
<button data-accordion="accordion-open-all" type="button" class="ds_link  ds_accordion__open-all  js-open-all">Open all <span class="visually-hidden">sections</span></button>
{% endhighlight %}

### Back to top

Back to top links get a 'data-navigation' attribute of `backtotop`.

{% highlight html %}
<a href="#page-top" class="ds_back-to-top__button js-initialised" data-navigation="backtotop">Back to top</a>
{% endhighlight %}

### Breadcrumbs

Breadcrumb links get a 'data-navigation' attribute whose value uses the pattern `breadcrumb-[index]` where the index is one-based.

{% highlight html %}
<a class="ds_breadcrumbs__link" href="#" data-navigation="breadcrumb-1">Home</a>
{% endhighlight %}

### Button

Buttons get a 'data-button' attribute whose value uses the pattern `button-[slug of the button text]`.

{% highlight html %}
<button class="ds_button" data-button="button-start-here">
    Start here
</button>
{% endhighlight %}

### Category list

Category list links get a 'data-navigation' attribute whose value uses the pattern `category-item-[index]` where the index is one-based.

{% highlight html %}
<a href="#" class="ds_category-item__link" data-navigation="category-item-3">Farming and rural issues</a>
{% endhighlight %}

### Checkboxes

Checkboxes get a 'data-form' attribute whose value uses the pattern `checkbox-[checkbox ID]`.

{% highlight html %}
<input class="ds_checkbox__input" id="education" type="checkbox" data-form="checkbox-education">
{% endhighlight %}

When a user changes the state of a checkbox or if it is already checked, its state is added to the data attribute.

{% highlight html %}
<input class="ds_checkbox__input" id="education" checked type="checkbox" data-form="checkbox-education-checked">
{% endhighlight %}

### Contact details

Social media links inside contact detail components get a 'data-navigation' attribute whose value uses the pattern `contact-details-[slug of the social media name]`.

{% highlight html %}
<a class="ds_contact-details__social-link" href="#" data-navigation="contact-details-facebook">Facebook</a>
{% endhighlight %}

Email links inside contact detail components get a 'data-navigation' attribute whose value is `contact-details-email`.

{% highlight html %}
<a href="mailto:designsystem@gov.scot" data-navigation="contact-details-email">designsystem@gov.scot</a>
{% endhighlight %}

### Error message

Error messages get a 'data-form' attribute whose value uses the pattern `error-[ID of the field that has the error]`.

In the case of a radio button group, the attribute uses the pattern `error-[name of the radio group]`.

{% highlight html %}
<p class="ds_question__error-message" data-form="error-more-detail">This field is required</p>
{% endhighlight %}

### Error summary

Links in error summaries get a 'data-form' attribute whose value uses the pattern `error-[ID of the field that has the error]`.

{% highlight html %}
<a href="#resolve" data-form="error-resolve">Did this resolve your issue?</a>
{% endhighlight %}

### Hide this page

"Hide this page" buttons get a 'data-navigation' attribute of `hide-this-page`.

{% highlight html %}
<a href="http://bbc.co.uk/weather" data-altlink="https://www.google.co.uk" class="ds_hide-page__button  ds_button  js-hide-page" data-navigation="hide-this-page"><strong>Hide this page</strong> <span class="visually-hidden  js-enabled-text">Or press escape key to hide this page</span></a>
{% endhighlight %}

If the user triggers the 'hide page' action with their keyboard by pressing 'Escape' an event is pushed to the window's `dataLayer`.

{% highlight javascript %}
window.dataLayer.push({ 'event': 'hide-this-page-keyboard' });
{% endhighlight %}

### Inset text

Links in inset text components get a 'data-navigation' attribute of `inset-link`.

{% highlight html %}
<div class="ds_inset-text">
    <div class="ds_inset-text__text">
        You may be able to <a data-navigation="inset-link" href="#">apply for free school meals</a> at the same time as you apply for the clothing grant.
    </div>
</div>
{% endhighlight %}

### Notification banner

Links in notification banners get a 'data-banner' attribute whose value uses the pattern `banner-[banner name]-link`. "bannername" is either the ID of the banner or the one-based index of the banner if it does not have an ID.

{% highlight html %}
<a href="#" data-banner="banner-covid-link">latest COVID guidance</a>
{% endhighlight %}

Close buttons in notification banners get a 'data-banner' attribute whose value uses the pattern `banner-[banner name]-close`. "bannername" is either the ID of the banner or the one-based index of the banner if it does not have an ID.

{% highlight html %}
<button class="ds_notification__close  js-close-notification" type="button" data-banner="banner-covid-close">Close this notification</button>
{% endhighlight %}

### Pagination

Pagination links get a 'data-search' attribute whose value uses the pattern `pagination-[slug of the link text]`.

{% highlight html %}
<a href="#" class="ds_pagination__link" data-search="pagination-11">11</a>

<a href="#" class="ds_pagination__link" data-search="pagination-prev">Prev</a>
{% endhighlight %}

"Load more" links in pagination components get a 'data-search' attribute of `pagination-more`.

{% highlight html %}
<button class="ds_button" data-search="pagination-more">Load more</button>
{% endhighlight %}

### Phase banner

Links in phase banners get a 'data-banner' attribute whose value uses the pattern `banner-[banner name]-link`. "bannername" is either the slug of the phase banner's "tag" or simply "phase" if the banner does not have a tag.

{% highlight html %}
<a href="mailto:designsystem@gov.scot" data-banner="banner-beta-link">feedback</a>
{% endhighlight %}

### Radio buttons

Radio buttons get a 'data-form' attribute whose value uses the pattern `radio-[radio group name]-[radio ID]`.

{% highlight html %}
<input class="ds_radio__input" id="useful-yes" name="feedback-type" type="radio" value="yes" data-form="radio-feedback-type-useful-yes">
{% endhighlight %}

### Search results

Links in search results get a 'data-search' attribute whose value uses the pattern `search-result-[index]/[total]` where the index is one-based. The index takes the current page of results into consideration. For example, if there are 10 results per page and the user is on page 3, index ought to start at 21.

The start point of the list should be obtained from a 'start' attribute that can be set on the list element.

The value of ‘total’ is obtained from a 'data-total' attribute on the list element.

{% highlight html %}
<a class="ds_search-result__link" href="#" data-search="search-result-1/68">Crofting community right to buy</a>
{% endhighlight %}

If the total not available, that part of the attribute is omitted.

{% highlight html %}
<a class="ds_search-result__link" href="#" data-search="search-result-1">Crofting community right to buy</a>
{% endhighlight %}

### Search suggestions

Search suggestions is a block found in the "Search results" pattern.

Links in search suggestions get a 'data-search' attribute whose value uses the pattern `suggestion-result-[index]/[total]` where the index is one-based.

{% highlight html %}
<a aria-label="Did you mean 'crafting'?" href="#" data-search="suggestion-result-1/2">crafting</a>
{% endhighlight %}

### Select (dropdown)

Select elements get a 'data-form' attribute whose value uses the pattern `select-[select ID]`.

Option elements inside selects get a 'data-form' attribute whose value uses the pattern `select-[select ID]-[slug of the option's value OR slug of the option's text]`.

{% highlight html %}
<select class="ds_select js-has-tracking-event" id="component" data-form="select-component">
    <option data-form="select-component-null"></option>
    <option data-form="select-component-accordion">Accordion</option>
    <option data-form="select-component-breadcrumbs">Breadcrumbs</option>
    <option data-form="select-component-button">Button</option>
</select>
{% endhighlight %}

When a user changes selects an option an event is pushed to the window's `dataLayer` with the selected option's 'data-form' attribute.

{% highlight javascript %}
window.dataLayer.push({ 'event': 'select-component-button' });
{% endhighlight %}

### Sequential navigation

The "previous page" link in sequential navigation is given a 'data-navigation' attribute whose value is `sequential-previous`.

{% highlight html %}
<a title="Previous section" href="#" class="ds_sequential-nav__button  ds_sequential-nav__button--left" data-navigation="sequential-previous">
    <span class="ds_sequential-nav__text" data-label="previous">
        Apply for or renew a Blue Badge
    </span>
</a>
{% endhighlight %}

The "next page" link in sequential navigation is given a 'data-navigation' attribute whose value is `sequential-next`.

{% highlight html %}
<a title="Next section" href="#" class="ds_sequential-nav__button  ds_sequential-nav__button--right" data-navigation="sequential-next">
    <span class="ds_sequential-nav__text" data-label="next">
        Eligibility: who can have one?
    </span>
</a>
{% endhighlight %}

### Side navigation

Links in side navigation get a 'data-navigation' attribute whose value uses the pattern `sidenav-[index]` where the index is one-based.

{% highlight html %}
<a href="#" class="ds_side-navigation__link" data-navigation="sidenav-1">Apples</a>
{% endhighlight %}

When there are nested pages in a side navigation, the subpages' indexes are appended to the attribute.

{% highlight html %}
<a href="#" class="ds_side-navigation__link" data-navigation="sidenav-1-2">Red apples</a>
{% endhighlight %}

On small screens the side navigation has an open/close toggle button. That button gets a 'data-navigation' attribute whose value uses the pattern `navigation-[open/close]`.This attribute is updated to denote the correct action when the side navigation is opened or closed.

{% highlight html %}
<button class="ds_side-navigation__expand ds_link js-side-navigation-button" data-navigation="navigation-open">Show all pages in this section</button>
{% endhighlight %}

### Site branding

Site branding is a block found in the "Site header" pattern.

The site branding logo link is given a 'data-header' attribute whose value is `header-logo`.

The site branding title link is given a 'data-header' attribute whose value is `header-title`.

{% highlight html %}
<div class="ds_site-branding">
    <a class="ds_site-branding__logo  ds_site-branding__link" href="/" data-header="header-logo">
        <img class="ds_site-branding__logo-image" src="/assets/images/logos/digital-scotland.svg" alt="Digital Scotland">
    </a>

    <div class="ds_site-branding__title" data-header="header-title">
        Design System
    </div>
</div>
{% endhighlight %}

### Site footer

Site item links in site footers get a 'data-footer' attribute whose value uses the pattern `footer-link-[index]` where the index is one-based.

{% highlight html %}
<a href="/cookies/" data-footer="footer-link-2">Cookies</a>
{% endhighlight %}

Copyright and logo links are treated differently.

Copyright links get a 'data-footer' attribute whose value is `footer-copyright`.

Logo links are get a 'data-footer' attribute whose value is `footer-logo`.

### Site navigation

Links in site navigation components get a 'data-header' attribute whose value uses the pattern `header-link-[index]` where the index is one-based. They are also given a 'data-device' attribute whose value is either `mobile` or `desktop`.

{% highlight html %}
<a href="/patterns/" class="ds_site-navigation__link" data-device="desktop" data-header="header-link-4">Patterns</a>
{% endhighlight %}

The mobile navigation's toggle button is given a 'data-header' attribute of `header-menu-toggle`.

### Tabs

Tabs get a 'data-navigation' attribute whose value uses the pattern `tab-[index]` where the index is one-based.

{% highlight html %}
<button class="ds_tab__label" role="tab" data-navigation="tab-2" aria-controls="tab2-content" id="tab2-label" data-for="tab2-content" aria-selected="false" tabindex="-1">Choosing apprenticeships <span class="visually-hidden">(item 2 of 3)</span></button>
{% endhighlight %}

### Text input

<div class="ds_warning-text">
<strong class="ds_warning-text__icon" aria-hidden="true">!</strong>
<strong class="visually-hidden">Warning</strong><div class="ds_warning-text__text">Content of text inputs would not be routinely tracked through website analytics due to the risk of gathering personally identifiable information.</div>
</div>

Text inputs get a 'data-form' attribute whose value uses the pattern `[input type]input-[input ID]`.

Note the use of the input elements’s type in the pattern. With this, different types if input can be identified.

{% highlight html %}
<input class="ds_input" type="text" id="first-name" data-form="textinput-first-name">

<input class="ds_input" type="number" id="age" data-form="numberinput-age">
{% endhighlight %}

### Textarea

<div class="ds_warning-text">
<strong class="ds_warning-text__icon" aria-hidden="true">!</strong>
<strong class="visually-hidden">Warning</strong><div class="ds_warning-text__text">Content of textareas would not be routinely tracked through website analytics due to the risk of gathering personally identifiable information.</div>
</div>

Textareas get a 'data-form' attribute whose value uses the pattern `textarea-[textarea ID]`.

{% highlight html %}
<textarea class="ds_input" rows="3" id="description" data-form="textarea-description"></textarea>
{% endhighlight %}

### Warning text

Links in warning text components get a 'data-navigation' attribute of `warning-link`.

{% highlight html %}
<div class="ds_warning-text">
    <strong class="ds_warning-text__icon" aria-hidden="true">!</strong>
    <strong class="visually-hidden">Warning</strong>
    <div class="ds_warning-text__text">Stay safe by following the <a data-navigation="warning-link" href="#">advice of the emergency services</a> during a flood.</div>
</div>
{% endhighlight %}

---
layout: component
title:  "Tracking"
category: get-started_draft
parent: get-started
label: How to
thispage: get-started.tracking
summary: ""
phase: 2
permalink: "/get-started/tracking/"
index: 999
sorttype: 'index'
---

The Design System has a script that adds data attributes to components that are used in performance and analytics tracking. The script automates the addition of data attributes but leaves some control over them to the developer.

Tracking will make a sensible choice for attribute values, for example a button gets a "data-button" attribute whose value is based on the button text.

{% highlight html %}
<button class="ds_button">
    Start here
</button>
{% endhighlight %}

After calling `tracking.init()` that button will have a "data-button" attribute containing the text of the button:

{% highlight html %}
<button class="ds_button" data-button="button-start-here">
    Start here
</button>
{% endhighlight %}

Use of Tracking can be as simple as just calling `tracking.init()` after the DOM is loaded but there are cases where some additional control might be desired, described below.

## Custom attribute values

Whenever Tracking is asked to add a data attribute to an item, it checks whether one has already been set first. This allows developers to set specific tracking data attributes in the components' markup if they do not want to use the defaults that are set by Tracking.

Continuing to use buttons to illustrate this, if you had a button whose text was long you might want to shorten that attribute value. Specifying the "data-button" attribute in your markup before calling `tracking.init()` will prevent Tracking from modifying that value.

{% highlight html %}
<button class="ds_button" data-button="button-start-here">
    Really super duper start here
</button>
{% endhighlight %}

## Adding tracking to new elements

Data attributes will not automatically be added to any new elements added to the DOM after `tracking.init()` has been called. In most cases it will be safe to simply call `tracking.init()` again, but it is also possible to restrict the addition of tracking attributes through the use of an optional "scope" parameter. 

{% highlight js %}
const myContainer = document.getElementById('my-container');

// ... add elements to myContainer

tracking.init(myContainer);
{% endhighlight %}

## Adding tracking attributes to specific components

You can add tracking attributes to specific component types instead of adding them to everything.

{% highlight js %}
tracking.add.tabs()
{% endhighlight %}

This also supports the inclusion of a "scope" parameter. If one is not provided it is applied to the whole page (the document element).

{% highlight js %}
tracking.add.tabs(document.getElementById('my-new-tabs-container'));
{% endhighlight %}

In general this is less useful than restricting addition of attributes to a particular DOM node, but it is available if you need it.


## What does Tracking add, specifically?

### Button

Buttons are given a "data-button" attribute whose value uses the pattern `button-[slug of the button text]`.

{% highlight html %}
<button class="ds_button" data-button="button-start-here">
    Start here
</button>
{% endhighlight %}

### Checkbox

Checkboxes are given a "data-form" attribute whose value uses the pattern `checkbox-[checkbox ID]`.

{% highlight html %}
<input class="ds_checkbox__input" id="education" type="checkbox" data-form="checkbox-education">
{% endhighlight %}

### Radio buttons

Radio buttons are given a "data-form" attribute whose value uses the pattern `radio-[radio group name]-[radio ID]`.

{% highlight html %}
<input class="ds_radio__input" id="useful-yes" name="feedback-type" type="radio" value="yes" data-form="radio-feedback-type-useful-yes">
{% endhighlight %}

### Select (dropdown)

Select elements are given a "data-form" attribute whose value uses the pattern `select-[select ID]`.

Option elements inside selects are given a "data-form" attribute whose value uses the pattern `select-[select ID]-[slug of the option's value OR slug of the option's text]`.

{% highlight html %}
<select class="ds_select" id="mushroom" data-form="select-mushroom">
    <option data-form="select-mushroom-null"></option>
    <option data-form="select-mushroom-amanita">Amanita</option>
    <option data-form="select-mushroom-boletus">Boletus</option>
    <option data-form="select-mushroom-coprinopsis">Coprinopsis</option>
</select>
{% endhighlight %}

### Text inputs

Text inputs are given a "data-form" attribute whose value uses the pattern `[input type]input-[input ID]`.

Note the use of the input **type** in the pattern. This enables different types of input to be differentiated.

{% highlight html %}
<input class="ds_input" type="text" id="first-name" data-form="textinput-first-name">

<input class="ds_input" type="number" id="age" data-form="numberinput-age">
{% endhighlight %}

### Textareas

Textareas are given a "data-form" attribute whose value uses the pattern `textarea-[textarea ID]`.

{% highlight html %}
<textarea class="ds_input" rows="3" id="description" data-form="textarea-description"></textarea>
{% endhighlight %}

### Breadcrumbs

Breadcrumb links are given a "data-navigation" attribute whose value uses the pattern `breadcrumb-[index]` where the index is one-based.

{% highlight html %}
<a class="ds_breadcrumbs__link" href="#" data-navigation="breadcrumb-1">Home</a>
{% endhighlight %}

### Category lists

Category list links are given a "data-navigation" attribute whose value uses the pattern `category-item-[index]` where the index is one-based.

{% highlight html %}
<a href="#" class="ds_category-item__link" data-navigation="category-item-3">Farming and rural issues</a>
{% endhighlight %}

### Contact details

Social media links inside contact detail components are given a "data-navigation" attribute whose value uses the pattern `contact-details-[slug of the social media name]`.

{% highlight html %}
<a class="ds_contact-details__social-link" href="#" data-navigation="contact-details-facebook">Facebook</a>
{% endhighlight %}

Email links inside contact detail components are given a "data-navigation" attribute whose value is `contact-details-email`.

{% highlight html %}
<a href="mailto:designsystem@gov.scot" data-navigation="contact-details-email">designsystem@gov.scot</a>
{% endhighlight %}

### Error messages

Error messages are given a "data-form" attribute whose value uses the pattern `error-[ID of the field that has the error]`.

In the case of a radio button group,  the attribute uses the pattern `error-[name of the radio group]`.

{% highlight html %}
<p class="ds_question__error-message" data-form="error-more-detail">This field is required</p>
{% endhighlight %}

### Error summaries

Links in error summaries are given a "data-form" attribute whose value uses the pattern `error-[ID of the field that has the error]`.

{% highlight html %}
<a href="#resolve" data-form="error-resolve">Did this resolve your issue?</a>
{% endhighlight %}

### Notification banners

Links in notification banners are given a "data-banner" attribute whose value uses the pattern `banner-[banner name]-link`. "bannername" is either the ID of the banner or the one-based index of the banner if it does not have an ID.

{% highlight html %}
<a href="#" data-banner="banner-covid-link">latest COVID guidance</a>
{% endhighlight %}

Close buttons in notification banners are given a "data-banner" attribute whose value uses the pattern `banner-[banner name]-close`. "bannername" is either the ID of the banner or the one-based index of the banner if it does not have an ID.

{% highlight html %}
<button class="ds_notification__close  js-close-notification" type="button" data-banner="banner-covid-close">Close this notification</button>
{% endhighlight %}

### Pagination

Pagination links are given a "data-search" attribute whose value uses the pattern `pagination-[slug of the link text]`.

{% highlight html %}
<a href="#" class="ds_pagination__link" data-search="pagination-11">11</a>
{% endhighlight %}

"Load more" links in pagination components are given a "data-search" attribute of `pagination-more`.

{% highlight html %}
<button class="ds_button" data-search="pagination-more">Load more</button>
{% endhighlight %}

### Phase banners

Links in phase banners are given a "data-banner" attribute whose value uses the pattern `banner-[banner name]-link`. "bannername" is either the slug of the phase banner's "tag" or simply "phase" if the banner does not have a tag.

{% highlight html %}
<a href="mailto:designsystem@gov.scot" data-banner="banner-beta-link">feedback</a>
{% endhighlight %}

### Search results

Links in search results are given a "data-search" attribute whose value uses the pattern `search-result-[index]/[total]` where the index is one-based and takes the "start" current page of results into consideration, e.g. if there are ten results per page and the user is on page three, index ought to start at 21.

The start point of the list should be obtained from a "start" attribute can be set on the list element.

The value of "total" is obtained from a "data-total" attribute on the list element.

{% highlight html %}
<a class="ds_search-result__link" href="#" data-search="search-result-1/68">Crofting community right to buy</a>
{% endhighlight %}

If the total not available, that part of the attribute is omitted.

{% highlight html %}
<a class="ds_search-result__link" href="#" data-search="search-result-1">Crofting community right to buy</a>
{% endhighlight %}

### Search suggestions

Search suggestions is a block found in the "Search results" pattern.

Links in search suggestions are given a "data-search" attribute whose value uses the pattern `suggestion-result-[index]/[total]` where the index is one-based.

{% highlight html %}
<a aria-label="Did you mean 'crafting'?" href="#" data-search="suggestion-result-1/2">crafting</a>
{% endhighlight %}

### Sequential navigation

The "previous page" link in sequential navigation is given a "data-navigation" attribute whose value uses the pattern is `sequential-previous`.

{% highlight html %}
<a title="Previous section" href="#" class="ds_sequential-nav__button  ds_sequential-nav__button--left" data-navigation="sequential-previous">
    <span class="ds_sequential-nav__text" data-label="previous">
        Apply for or renew a Blue Badge
    </span>
</a>
{% endhighlight %}

The "next page" link in sequential navigation is given a "data-navigation" attribute whose value uses the pattern is `sequential-next`.

{% highlight html %}
<a title="Next section" href="#" class="ds_sequential-nav__button  ds_sequential-nav__button--right" data-navigation="sequential-next">
    <span class="ds_sequential-nav__text" data-label="next">
        Eligibility: who can have one?
    </span>
</a>
{% endhighlight %}

### Side navigation

Links in side navigation are given a "data-navigation" attribute whose value uses the pattern `sidenav-[index]` where the index is one-based.

{% highlight html %}
<a href="#" class="ds_side-navigation__link" data-navigation="sidenav-1">Apples</a>
{% endhighlight %}

When there are nested pages in a side navigation, the subpages' indexes are appended to the attribute.

{% highlight html %}
<a href="#" class="ds_side-navigation__link" data-navigation="sidenav-1-2">Red apples</a>
{% endhighlight %}

### Site branding

Site branding is a block found in the "Site header" pattern.

The site branding logo link is given a "data-header" attribute whose value is `header-logo`.

The site branding title link is given a "data-header" attribute whose value is `header-title`.

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

Site item links in site footers are given a "data-footer" attribute whose value uses the pattern `footer-link-[index]` where the index is one-based.

{% highlight html %}
<a href="/cookies/" data-footer="footer-link-2">Cookies</a>
{% endhighlight %}

Copyright and logo links are treated differently.

Copyright links are given a "data-footer" attribute whose value is `footer-copyright`.

Logo links are are given a "data-footer" attribute whose value is `footer-logo`.

### Site navigation

Links in site navigation components are given a "data-header" attribute whose value uses the pattern `header-link-[index]` where the index is one-based. They are also given a "data-device" attribute whose value is either `mobile` or `desktop`.

{% highlight html %}
<a href="/patterns/" class="ds_site-navigation__link" data-device="desktop" data-header="header-link-4">Patterns</a>
{% endhighlight %}

The mobile navigation's toggle button is given a "data-header" attribute of `header-menu-toggle`.

### Tabs

Tabs are given a "data-navigation" attribute whose value uses the pattern `tab-[index]` where the index is one-based.

{% highlight html %}
<button class="ds_tab__label" role="tab" data-navigation="tab-2" aria-controls="tab2-content" id="tab2-label" data-for="tab2-content" aria-selected="false" tabindex="-1">Choosing apprenticeships <span class="visually-hidden">(item 2 of 3)</span></button>
{% endhighlight %}

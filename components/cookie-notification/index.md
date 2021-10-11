---
layout: component
title:  "Cookie notification"
category: components
parent: components
thispage: component.cookie-notification
summary: "Allow users to accept or reject cookies which are not essential to making your website or service work."
---

## About this component

The cookie notification is a [notification banner](/components/notification-banner) that gives users the option to accept or reject non-essential cookies. It is used in combination with the [cookie settings](/patterns/cookie-settings) pattern.

The cookie notification is shown every time a user accesses your website or service until they either:

* accept or reject cookies using the options in the cookie notification
* save their cookie preferences on your cookie settings page

When a user has accepted or rejected cookies:

* the cookie banner changes to a confirmation message and is not shown again
* a cookie is set that remembers the user's choice for 1 year

{% include example-frame.html title="Radio button example with hint text" name="confirm" %}

??? should this be before skip links, per GDS ???

### When to use this component

Use this component if your website or service sets any cookies on a user's device.

You must:

* inform users about any cookies that you set on their device
* allow users to reject any cookies that are not essential

<div class="ds_inset-text">
    <div class="ds_inset-text__text">
        <p>The term 'cookies' on this page refers to:</p>
        <ul>
            <li>browser and HTTP-only cookies</li>
            <li>HTML5 local storage</li>
            <li>service workers</li>
            <li>any other technologies you use that store files on the user's device</li>
        </ul>
    </div>
</div>


Also:

* if user accepts cookies, a cookie is placed on the user’s browser which stops the banner appearing again
* cookie banner should not contain a logo
* cookie banner should always appear above any other banners on the page  

## Components related to this

Notification banner
Buttons
Cookie controls  

## Why we use this component

The cookie banner component allows a website to comply with General Data Protection Regulation (GDPR). GDPR requests that websites ask users about cookies and give them the choice to accept or reject usage.  

## Website analytics

3% of gov.scot sessions clicked the ‘cookie’ banner asking users to approve the use of the cookies.  

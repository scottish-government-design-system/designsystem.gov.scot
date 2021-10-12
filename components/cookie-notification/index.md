---
layout: component
title:  "Cookie notification"
category: components
parent: components
thispage: component.cookie-notification
summary: "Allow users to accept or reject cookies which are not essential to making your website or service work."
experimental: true
---

## About this component

The cookie notification is a [notification banner](/components/notification-banner) that gives users the option to accept or reject non-essential cookies. It is used in combination with the [cookie settings](/patterns/cookie-settings) pattern.

The cookie notification is shown every time a user accesses your website or service until they either:

* accept or reject cookies using the options in the cookie notification
* save their cookie preferences on your cookie settings page

<div class="ds_callout">
    <div class="ds_callout__content">
        <p>The term ’cookies’ on this page refers to:</p>
        <ul>
            <li>browser and HTTP-only cookies</li>
            <li>HTML5 local storage</li>
            <li>service workers</li>
            <li>any other technologies you use that store files on a user's device</li>
        </ul>
    </div>
</div>

### Confirmation message

When a user has accepted or rejected cookies:

* the cookie notification changes to a confirmation message and is not shown again
* a cookie is set that remembers the user's choice for 1 year

{% include example-frame.html title="Radio button example with hint text" name="confirm" %}

## When to use this component

Use this component if your website or service sets any cookies on a user's device.

You must:

* inform users about any cookies that you set on their device
* allow users to reject any cookies that are not essential

If there are multiple notification banners on a page, the cookie notification should appear first.

## Components related to this

* [Notification banner](/components/notification-banner)
* [Cookie settings](/patterns/cookie-settings)

## Why we use this component

The cookie notification component helps a website or service to comply with data protection legislation including:

* Privacy and Electronic Communications Regulations (PECR)
* General Data Protection Regulation (GDPR)

PECR asks that websites:

* say what cookies will be set
* explain what the cookies will do
* get consent from users to store cookies on their devices

## Website analytics

3% of gov.scot sessions clicked the ‘cookie’ banner asking users to approve the use of the cookies.  

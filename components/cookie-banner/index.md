---
layout: component
title:  "Cookie banner"
category: components
parent: components
thispage: component.cookie-banner
summary: "A notice to help users to understand what cookies do. It allows users to consent or not to cookies that are not essential to making your website or service work."
experimental: true
---

## About this component

The cookie banner is a [notification](/components/notification-banner) at the top of all site pages. It gives users the option to accept or reject non-essential cookies. It is used in combination with the cookie settings pattern.

The cookie banner is shown every time a user accesses your website or service until they either:

* accept or reject cookies using the options in the cookie banner
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

* the cookie banner changes to a confirmation message and is not shown again
* a cookie is set that remembers the user's choice for 1 year

{% include example-frame.html title="Radio button example with hint text" name="confirm" %}

## When to use this component

Use this component if your website or service sets any cookies on a user's device.

You must:

* inform users about any cookies that you set on their device
* allow users to reject any cookies that are not essential

If there are multiple notification banners on a page, the cookie banner should appear first.

## Why we use this component

The cookie banner component helps a website or service to meet data protection legislation including:

* Privacy and Electronic Communications Regulations (PECR)
* General Data Protection Regulation (GDPR)

PECR asks that websites:

* say what cookies will be set
* explain what the cookies will do
* get consent from users to store cookies on their devices

## Evidence

This component is currently experimental because we need more research to validate it. 47%+ of all users on mygov.scot interacted with this pattern in September 2021. But we also know from a survey carried out in 2019 and 2020 that many users have become blind to cookie notices.

Using that user survey and desk-based research, we set these rules for the new cookie banner. The cookie notice and cookie settings page should:

* be non-intrusive across all devices
* ensure that users know essential cookies cannot be switched off
* make it clear that we need the user’s consent to use cookies
* show users how cookies help them to get the most out of a site
* never use ‘dark patterns’ that trick users, such as where clicking ‘x’ accepts cookies
* enable users to have control over cookie preferences for non-essential cookies

## Website analytics

To understand user behaviour, you can track clicks on links in the cookie banner. You can also record against the original page path the click URL, the click text or a data attribute for button clicks.

Using the Design System’s ‘tracking’ script will add the data attributes automatically.

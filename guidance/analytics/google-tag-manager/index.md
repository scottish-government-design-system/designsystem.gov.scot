---
layout: component
title:  "Google Tag Manager"
category: guidance
parent: guidance.analytics
thispage: guidance.analytics.google-tag-manager
---

[Google Tag Manager](https://support.google.com/tagmanager/answer/6103696?hl=en) (GTM) lets site owners add and update website tags - including tags for conversion tracking, site analytics and remarketing - without needing to edit your website’s code.

To access and configure GTM:

* [Sign up using your team’s Google account](https://tagmanager.google.com/)
* Create and name your account then create and name your first container. We suggest you use the following naming convention; domain - subdomain - environment e.g. mygov - www - live
* Select the type of property for which you intend to use the container for. In most instances you’ll select 'web'
* Two code snippets will appear on screen, along with instructions on where to place them: place the code as instructed on all of your pages (this might require help from a developer)
* Repeat the previous 3 steps for any additional containers i.e. for test environments. Follow the same naming convention as your other container, e.g. 'mygov.scot - www - test'
* Add the dataLayer snippet to your site (advanced). Here’s a [guide on the dataLayer](https://www.optimizesmart.com/google-tag-manager-data-layer-explained-like-never/) and here are instructions from Google on [implementation for your developer](https://developers.google.com/tag-manager/devguide).

Once GTM has been deployed to all pages, it lets you deploy your analytics tool/Google Analytics, enhanced tracking capability and any other tags where applicable, e.g. advertising floodlight tags/pixels, etc.

The Design System performance team have created a Google Tag Manager container which can be imported if you are building a site with the Design System. [Download the Google Tag Manager container](https://github.com/scottishgovernment/designsystem-assets/releases/download/0.1/designsystemgtm.json) or [contact the performance team](mailto:performance@gov.scot).

If you are setting up your own event tracking we recommend adding document/download tracking, email link tracking and external link tracking. 

## Google Tag Manager - additional reading

* [Simo Ahava: Some awesome google tag manager resources](https://www.simoahava.com/analytics/awesome-google-tag-manager-resources/)
* [Optimize Smart: Google Tag Manager turorial 2021](https://www.optimizesmart.com/beginners-guide-google-tag-manager-v2/)
* [iPullRank: Complete guide to Google Tag Manager](https://ipullrank.com/google-tag-manager)
* [Digital Marketer: The Ultimate Guide to Google Tag Manager](https://www.digitalmarketer.com/blog/guide-to-google-tag-manager/)
* [Google: Developer documentation for Google Tag Manager](https://developers.google.com/tag-manager/)
* [Google: Components of Google Tag Manager](https://support.google.com/tagmanager/answer/6103657?hl=en)
* [Optimize Smart: Google Tag Manager event tracking tutorial](https://www.optimizesmart.com/event-tracking-in-google-tag-manager-v2-complete-guide/)
* [Simo Ahava: The Data Layer](https://www.simoahava.com/analytics/data-layer/)
* [Optimize Smart: Google Tag Manager Data Layer tutorial](https://www.optimizesmart.com/google-tag-manager-data-layer-explained-like-never/)
* [Google: Developer documentation for Data Layer](https://developers.google.com/tag-manager/devguide)

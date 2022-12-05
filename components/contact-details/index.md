---
layout: component
title:  "Contact details"
category: components
parent: components
label: component
thispage: component.contact-details
summary: "A template for displaying contact details in a consistent way across different pages."

examples:
  - site: mygov.scot
    url: https://www.mygov.scot/armed-forces-charities
    name: "Support organisations for the Armed Forces community"

updatehistory:
  - date: 2020-08-19
    content: Add "contact details" component
    url: /components/contact-details
---


## About this component

The contact details component includes space for normal contact details and links to an organisation's email, social media and other direct contact details.

When using the pattern, you should make sure that:

* the order of the contact details are based on user needs, with the most used contact method at the top
* only one contact email address is given

It is useful to use a logo with a social media address, such as a Twitter logo with a Twitter address, to make it easy to identify.

## Why we use this component

Giving contact details their own distinct design pattern, separate from the rest of the content on a web page, helps users quickly identify contact details when needed.

It also helps users to quickly skip past this content if they don't need it.

## Evidence

Around 3% of internal searches on mygov.scot are for contact details.

Contact details components can also be returned by Google in ‘smart search’ results. As an example, about four times the number of users find Disclosure Scotland’s contact details from the mygov.scot website in a Google ‘smart search’ results page than they do on mygov.scot.  

## Website analytics

To track this component:

* clicks on social media/email/telephone links can be tracked through the original page path, the external link URL, the click text and a data attribute describing the element
* internal links can be tracked the same way
* phone numbers are not links by default, they are tagged with a data attribute and, if the user is on a mobile phone, can be automatically linked to make a call if the user’s browser supports this  

The data attributes are added automatically by the [Design System's 'tracking' script](/guidance/tracking/#contact-details).

---
layout: component
title:  "Contact details"
category: components
parent: components
label: component
thispage: component.contact-details
summary: "A template for displaying contact details in a consistent way across different pages."

examples:
  - site: gov.scot
    url: https://www.gov.scot/about/who-runs-government/cabinet-and-ministers/deputy-first-minister/
    name: "Deputy First Minister's profile"

updatehistory:
  - date: 2023-06-16
    content: Updated to support multiple columns and social media accounts, along with other minor code changes. Documentation and examples are updated to reflect these updates.
    url: /components/contact-details
    homepage: false
  - date: 2020-08-19
    content: Add "contact details" component
    url: /components/contact-details
    homepage: false
---


## About this component

The contact details component includes space for normal contact details and links to an organisation's email, social media and other direct contact details.

When using the component, you should make sure that the order of the contact details are based on user needs, with the most used contact method first.

Good practice is to provide one email or phone number so the user doesn't have to decide which is best for their query.

It is useful to use a logo with a social media address, such as a Twitter logo with a Twitter address, to make it easy to identify. If including more than one link to a social media platform these can be grouped together under a single logo.

## Why we use this component

Giving contact details their own distinct design pattern, separate from the rest of the content on a web page, helps users quickly identify contact details when needed.

It also helps users to quickly skip past this content if they don't need it.

## Other versions of this component

Contact details can be split over two columns if using the component in a layout that has sufficient width. 

{% include example-frame.html title="Contact details in a responsive layout using multiple columns" name="grid" %}

## Implementation

Use the ```address``` tag to wrap any contact details that relate to the page's content - as this can provide additional semantic meaning.

Links to social media accounts should include the name of the social media platform. Also show the account name if there is the need to distinguish between multiple links to the same social media platform. 

Where space is limited use the ```visually-hidden``` class to reduce the link text that is visible to users who are not using screen reader software. 

Only use logos for social media links, for all other contact types use text labels.

## Evidence

Around 3% of internal searches on mygov.scot are for contact details.

Contact details can also be returned by Google in ‘smart search’ results. As an example, about four times the number of users find Disclosure Scotland’s contact details from the mygov.scot website in a Google ‘smart search’ results page than they do on mygov.scot.  

## Website analytics

To track this component:

* phone numbers are not links by default, but some mobile browsers automatically detect phone numbers and convert them to links which can be tracked
* clicks on social media/email/phone links can be tracked through the original page path, the external link URL, the click text and a data attribute describing the element
* internal links can be tracked the same way

The data attributes are added automatically by the [Design System's 'tracking' script](/guidance/tracking/#contact-details).

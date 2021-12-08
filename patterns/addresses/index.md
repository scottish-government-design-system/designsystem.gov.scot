---
layout: component
title: "Ask users for addresses"
category: patterns
parent: patterns
thispage: pattern.addresses
summary: "Use this pattern when you need to ask users for addresses. This could be their own address or an address of a third party."
examples:
  - site: mygov.scot
    url: https://www.mygov.scot/non-domestic-rates-calculator#!/property/
    name: "Non-domestic rates calculator"
  - site: mygov.scot
    url: https://www.mygov.scot/tenancy-agreement-scotland#!/property/property-details/
    name: "Create a tenancy agreement"
---

Only ask users for an address if this information is needed to deliver your site or service.

The address lookup needs a suitable back-end service to get addresses in response to a postcode search.


## About this pattern

This pattern helps users to provide an address using either:

- [address lookup](#address-lookup)
- [manual address entry](#manual-address-entry)

Make sure you tell your users what to do if they do not have a permanent address. For example, that they:

- cannot use the site or service without one
- need to call you for help
- can use a forwarding or temporary address


### Address lookup

{% include example-frame.html title="Address lookup example of initial form fields" name="lookup" %}

{% include example-frame.html title="Address lookup example of selecting an address from a dropdown list" name="lookup-select" %}


#### How address lookup works

1. Uses a text input component to let users enter a postcode. 
2. Users then click a call-to-action (CTA) button to ‘Find address’. 
3. The submitted postcode is shown with a link to change it alongside a list of matching addresses in a dropdown list. 
4. Users can select an address and proceed with the form or the rest of the page’s content.
5. A link labelled ‘Or type in your full address’ allows users to alternatively enter an address manually. 

Users:

- must enter a valid postcode format before the search can run, which may include:
  - spaces 
  - lower or upper case letters
- can choose to alternatively [enter an address manually](#manual-address-entry) so they can submit a non-registered address

The address lookup must also:

- validate the postcode field 
- allow a maximum of 8 characters in the postcode field (UK postcodes can be from 6 to 8 characters including spaces)
- not show looked up postcodes in the URL
- state clearly that the search will only work for UK addresses
- specify clearly if it can only look up Scottish addresses 

<hr>

#### Displaying errors

An error message should be shown when:

- an incorrect or invalid postcode is entered
- the lookup is submitted with an empty postcode

{% include example-frame.html title="Address lookup example with error message" name="lookup-error" %}

<hr>

#### Providing additional feedback

Suitable feedback should be shown when a valid format of postcode is submitted but no matching addresses are found. For example, the postcode may be:

- not currently assigned to an address
- assigned to an address that is not in the scope of the lookup service, such as submitting a residential address to a business address lookup

{% include example-frame.html title="Address lookup example with feedback message" name="lookup-feedback" %}



### Manual address entry

When the address is not listed or users want to enter an address manually, give them an ‘Or type in your full address’ link option. 

Manual address entry uses multiple text inputs which means:

- you can easily extract and use specific parts of an address
- you can give help for individual text inputs
- you can validate each part of the address separately
- users can complete the form using their browser’s autocomplete function

The disadvantages of using multiple text inputs are that:

- it’s hard to find a single format that works for all addresses
- there’s no guarantee that users will use the text inputs the way you think they will
- users cannot easily paste addresses from their clipboards

{% include example-frame.html title="Manual address example using multiple text inputs" name="manual" %}

#### How manual address entry works

If you use multiple text inputs, you should:

- only make individual text inputs mandatory if you really need the information
- make the text inputs the appropriate length for the content – it helps people understand the form, for example, make postcode text inputs shorter than street text inputs
- let users enter postcodes in different formats
- make sure there are enough text inputs to accommodate longer addresses if you know your users will need them. For example, allow users to include a company name or flat number.

Royal Mail does not need a county as long as the town and postcode are included. You should include an optional county text input so that people who do not know their postcode can give a valid address.


### Use autocomplete on address fields

It is best practice to use the `autocomplete` attribute on the postcode search and manual address input fields. This lets the browser autofill information on the user's behalf if it has been entered previously. 

Allowing autocomplete is beneficial because it:

- speeds up completion as users do not have to manually input their information
- reduces the risk of typos


### Asking for addresses later on in the application

If you have already collected the user’s address, but need it again in a later part of the form, you should populate the form with the previously provided address.

## Evidence

Existing pages with address lookups seem to perform well with high user satisfaction.

An address lookup was developed for users to find out which Covid protection level applied to where they lived. This page is no longer live on gov.scot. During the period that it was live: 

- Only 22.5% of users bounced. Of the remainder, 90% of users who loaded the Covid lookup completed the address lookup form. Some users used the lookup tool more than once in a session.
- 96% of users on the Covid lookup gave positive feedback (site average is 75% positive).
- 17% of users received an error for an incorrect postcode on the Covid lookup

### Website analytics

Content of this form element would not be routinely tracked through website analytics. This is due to the risk of gathering personally identifiable information. As per the tracking script, interaction with the element would be tracked, provided that each field has a unique data attribute, input name, and identifiable class.

[Find out more information on tracking](/get-started/tracking).

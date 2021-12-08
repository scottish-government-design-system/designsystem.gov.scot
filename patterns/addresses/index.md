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

The address lookup pattern can work with any back-end system you choose. The address lookup needs a back-end service to get addresses in response to a postcode search.


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
3. Shows a list of addresses in a dropdown list. 
4. Users can select an address and proceed with the form or the rest of the page’s content.
5. A link labelled ‘Or type in your full address’ allows users to enter an address manually. 

Users:

- must enter a full postcode before the search can run
- can input spaces 
- can input postcodes in either lower or upper case
- can choose to enter an address manually (so they can submit a non-registered address)

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

#### Providing feedback

Suitable feedback should be shown when a valid format of postcode is submitted but no matching addresses are found. For example, the postcode may:

- not currently be assigned to an address
- be assigned to an address that is not in the scope of the lookup service, such as submitting a residential address to a business address lookup

{% include example-frame.html title="Address lookup example with feedback message" name="lookup-feedback" %}



### Manual address entry



### Use autocomplete on address fields

It is best practice to use the autocomplete attribute on the postcode search and manual address input fields. This lets the browser autofill information on the user's behalf if it has been entered previously. 

Allowing autocomplete is beneficial because it:

- speeds up completion as users do not have to manually input their information
- reduces the risk of typos


### Asking for addresses later on in the application

If you have already collected the user’s address, but need it again in a later part of the form, you should populate the form with the previously provided address.
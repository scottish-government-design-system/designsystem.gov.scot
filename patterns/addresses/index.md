---
layout: component
title: "Addresses"
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

updatehistory:
  - date: 2022-02-01
    content: Add "addresses" pattern
    url: /patterns/addresses
---

<div class="ds_warning-text">
    <strong class="ds_warning-text__icon" aria-hidden="true"></strong>
    <strong class="visually-hidden">Warning</strong>
    <div class="ds_warning-text__text">Only ask users for an address if this information is needed to deliver your site or service.</div>
</div>

<div class="ds_inset-text">
  <div class="ds_inset-text__text">
    The address lookup needs a suitable back-end service to get addresses in response to a postcode search.
  </div>
</div>




## About this pattern

This pattern helps users to provide an address using either:

- [address lookup](#address-lookup)
- [multiple text inputs](#manual-address-entry)

Make sure you tell your users what to do if they do not have a permanent address. For example, that they:

- cannot use the site or service without one
- need to contact you for help
- can use a forwarding or temporary address




### Address lookup

{% include example-frame.html title="Address lookup example of initial form fields" name="lookup" %}

{% include example-frame.html title="Address lookup example of selecting an address from a dropdown list" name="lookup-select" %}

The address lookup lets users search for a UK address by entering a postcode. When the user searches for a postcode they are shown a dropdown list of addresses in that postcode.

Users can correct or alter a postcode after they have performed a search, and can have the option of entering an address manually.

When using an address lookup you should:

- make it clear that it will only work for the country or area where you offer your service, for example UK-only addresses
- let users enter postcodes in upper or lower case, and with or without spaces




#### Unsuccessful searches

An error message should show when:

- an incorrect or invalid postcode is entered
- the user submits the address lookup with an empty postcode

{% include example-frame.html title="Address lookup example with error message" name="lookup-error" %}

When no matching addresses are found, you should explain what has happened and help the user understand what to do next.




### Manual address entry

{% include example-frame.html title="Manual address example using multiple text inputs" name="manual" %}

Using multiple text inputs instead of a single text area means:

- users can complete the form quickly using their browser's autocomplete function
- you can show hint text to help users complete individual fields
- you can validate address data and process it more easily

When using multiple text inputs, you should:

- only make fields mandatory if you really need the information
- make text inputs an appropriate size for the expected content length
- let users enter postcodes in upper or lower case, and with or without spaces
- give users a way to return to the address lookup




### Use autocomplete on address fields

It is best practice to use the `autocomplete` attribute on the postcode search and manual address input fields. This lets the user's browser autofill information on the user's behalf if it has been entered previously.

Allowing autocomplete is beneficial because it:

- speeds up completion as users do not have to manually input their information
- reduces the risk of typos




## Why we use this pattern

An address lookup makes it easier for users to provide an address. Use an address lookup when you need a user's address to deliver them your service.

Our design is based on guidance in the [GOV.UK Design System](https://design-system.service.gov.uk/patterns/addresses/).




## Evidence

Existing pages with address lookups seem to perform well with high user satisfaction.

There was an address lookup on gov.scot for citizens to find out which Covid protection level applied to where they lived. During the period that it was live:

- Only 22.5% of users bounced. Of the remainder, 90% of users who loaded the Covid lookup completed the address lookup form. Some users used the lookup tool more than once in a session.
- 96% of users on the Covid lookup gave positive feedback (site average is 75% positive).
- 17% of users received an error for an incorrect postcode on the Covid lookup




## Website analytics

Content of this form element should not be routinely tracked through website analytics. This is due to the risk of gathering personally identifiable information. As per the tracking script, interaction with the element would be tracked, provided that each field has a unique data attribute, input name, and identifiable class.

See [our page on tracking](/guidance/tracking/) for more information.

---
layout: component
title:  "Cookies page"
category: patterns
parent: patterns
thispage: pattern.cookies-page
summary: "Helps the user to review or change how the site or service stores data on their device. By law your users must be able to give or refuse consent to cookie use."
example:
  no-demo: true
  no-code: true
examples:
 - site: designsystem.gov.scot
   url: https://designsystem.gov.scot/cookies/
   name: "Cookie page on Design System"
 - site: mygov.scot
   url: https://www.mygov.scot/cookies
   name: "Cookie page on mygov.scot"
   description: Note that mygov.scot has web analytics cookies set to ‘on’. Our analytics cookies anonymise all data, so we made an exception not to default to ‘off’. 
---

## About this pattern

A page to help users to manage their personal data and consent for cookie use. It tells them what information you store on cookies on their device. It allows the users to review and change the settings for which cookies the site or service stores.

It is important to tell your users both:

- how the site will use cookies 
- about any impacts on privacy from the cookies  your site or service uses, such as: 
  - what data your cookies could collect 
  - how you or third parties could use that data

The law requires that sites and services both:

- tell users which cookies are being set on their devices
- give control to the user over these cookies

### Identify and categorise cookies

You will need to audit the cookies on your site or service, so you can describe all the cookies to your users. 

You should group the cookies into categories. Base the groups on what the cookies do so users can consent to cookies in batches. 

For example on mygov.scot we have 3 categories of cookie for those:

- needed for the website to work (essential cookies)
- that remember your settings
- that measure website use

Find out more about [auditing and categorising your cookies on GOV.UK](https://design-system.service.gov.uk/patterns/cookies-page/#auditing-and-categorising-your-cookies).

### Getting users' consent 

You do not need the user’s consent to set essential cookies. A cookie is ‘essential’ if the service will not work without it. Find out more about [essential or strictly necessary cookies](https://ico.org.uk/for-organisations/guide-to-pecr/guidance-on-the-use-of-cookies-and-similar-technologies/what-are-the-rules-on-cookies-and-similar-technologies/#rules9).

You must get the user’s consent before you set any cookies that are not essential. You can get the user’s consent:

- by using a cookie banner
- by letting the user change and save their settings on the cookies page

### Saving your users' cookie settings

Cookie page uses a form with Radio Buttons for users to mark their preference. Users can select ‘on’ or ‘off’ for each category of the cookies. You should use radio buttons as the user must make an exclusive (only one) choice. Load the page with the radios set to ‘off’ on the user’s first visit. 

Users can click ’Save cookie preferences’ button at the bottom of the form to submit changes made. If they’ve used your service before and set their preferences, load the page with those preferences selected.

{% include example-frame.html title="A typical form to set cookie preferences" name="form" %}

You should display a confirmation message when the user clicks the save button. This will let users know that your site has saved their preferences.

## When to use this pattern

Use this component alongside the cookie banner on any and all sites which, both:

- make use of cookies
- are for the public to use

## When not to use this pattern

Using a banner and cookie page to manage consent on internal tools, such as an intranet, is not necessary. Your organisation most likely requires staff members to use these internal tools as a condition of their jobs.

## Why we use this pattern

A cookie page will help you to comply with the [Privacy and Electronic Communications Regulations (PECR)](https://ico.org.uk/for-organisations/guide-to-pecr/what-are-pecr/). 

## Related components

[Cookie banner](/components/cookie-banner/) 

## Evidence

The page combines informational and interactive (form) settings. We have not had negative feedback about the pattern from users on our live sites. Of those users that came to the settings page around half of them interact with the form and save their settings. [Read about past user research and testing](/components/cookie-banner/#evidence). 

## Website analytics

To understand user behaviour, you can track:

- clicks on links in the page 
- form radio buttons 
- form submits against the original page path 
- the click URL, the click text or a data attribute for button clicks 

Use the [Design System’s ‘tracking’ script](/get-started/tracking/) to add the data attributes automatically.  
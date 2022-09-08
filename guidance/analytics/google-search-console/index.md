---
layout: component
title:  "Google Search Console"
category: guidance
parent: guidance.analytics
thispage: guidance.analytics.google-search-console
noindex: true
---

[Google Search Console](https://support.google.com/webmasters/answer/6001104?hl=en) (previously Google Webmaster Tools) is a service for website administrators to check indexing status, optimise visibility of their websites, view a sample of websites that link back to you, and see site errors and Google crawl stats.

* [Sign in to Google Search Console using your shared email account](https://www.google.com/webmasters/tools/) (formerly Google Webmaster Tools) and click the red button to add your website

* Add your domain. Note: it’s often best to start with the root domain (without the www.) e.g. `https://twitter.com`

* You’ll be presented with 4 verification options. Our recommended method is to use the 'Domain name provider' option. While this may differ from Google’s recommended method, it counters the possibility of verification revocation should the code be removed by a developer or through a site release. The DNS option remains persistent no matter what changes are applied to your website and there has to be specific intent behind removal of a DNS zone file entry. Once selected, you’ll be presented with a string of characters used by Google for confirmation that you are the owner/admin of the site in question. Follow the instructions to create a text record in the zone file, or have your DNS provider do this for you if you have a managed service.

* Once applied, you may have to wait a short period of time for the change to fully propagate due to caching and TTL ('time to live') before clicking the verify property button within the Google Search Console page

* Google sees http and https versions of your site separately, as with www. and non-www. versions - repeat for all combinations of your site

* Set up a property set by clicking the 'Create a set' button in GSC (next to the 'Add a property' button) and add all the previously created versions of your site to the set

* Go to your default and preferred version of your site, click the cog in the top right quadrant of the page and select the 'site settings' from the dropdown. Select your preferred way of displaying your domain, whether it’s with the www. or the naked domain

* Click the cog in the upper right quadrant and select Google Analytics Property from the drop down. Now select the appropriate GA property to link with. If you’ve followed the recommended naming convention above, it should be along the lines of 'Domain name (Live)'

* It’s important that you choose a consistent approach for displaying your domain within search engines and make sure it’s mirrored in your site configuration through canonicalisation and also ensuring that your site is configured to display/redirect to the default version, no matter what version a user types/clicks. Further reading: [canonicalisation](https://moz.com/learn/seo/canonicalization) and [redirection/rewrites](https://moz.com/blog/url-rewrites-and-301-redirects-how-does-it-all-work)

* [Link your Google Search Console to Google Analytics](https://support.google.com/analytics/answer/1308621?hl=en)

## Google Search Console - additional reading

* [Geckoboard: 4 ways to automagically import live data into spreadsheets](https://www.geckoboard.com/blog/4-ways-to-automagically-get-your-data-into-spreadsheets/#.WDRyd6KLTjA)
* [LinkResourceTools: Search Console by Google - The Ultimate Guide](https://smart.linkresearchtools.com/linkthing/google/search-console)
* [Neil Patel: A Beginner’s Guide to Google Search Console](https://neilpatel.com/blog/beginners-guide-to-google-webmaster-tools/)
* [Bruce Clay: How to Set Up Google Search Console](https://www.bruceclay.com/blog/set-up-google-search-console/)
* [Online.Marketing: All You Need To Know For Moving To HTTPS](https://online.marketing/guide/https/)

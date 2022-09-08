---
layout: component
title:  "Bing Webmaster Tools"
category: guidance
parent: guidance.analytics
thispage: guidance.analytics.bing-webmaster-tools
noindex: true
---

[Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster) is a service for website administrators to check indexing status, optimise visibility of their websites, view a sample of websites that link back to you, and see site errors and Bing crawl stats.

* [Sign in to Bing Webmaster Tools using a shared email account](https://www.bing.com/toolbox/webmaster)
* Add your domain. Note: it’s often best to start with the root domain (without the www.) e.g. `https://twitter.com`
* Submit a link to your XML sitemap - this is normally found at `yoursite.com/sitemap.xml`
* You’ll be presented with 3 verification options. Our recommended method is to use the 'add CNAME record to DNS' option. You’ll be presented with a string of characters used by Bing for confirmation that you are the owner/admin of the site in question. Follow the instructions to create a text record in the zone file, or have your DNS provider do this for you if you have a managed service.
* Once applied, you may have to wait a short period of time for the change to fully propagate due to caching and TTL ('time to live') before clicking the 'Verify' button.
* Bing sees http and https versions of your site separately, as with www. and non-www. versions - repeat for all combinations of your site
* There is no way via Bing to set your preferred version of your site - instead you must set up your www. to redirect to non-www. on your server and via your sitemaps and canonicalisation. It’s important that you choose a consistent approach for displaying your domain within search engines and make sure it’s mirrored in your site configuration through canonicalisation and also ensuring that your site is configured to display/redirect to the default version, no matter what version a user types/clicks. Further reading: [canonicalisation](https://moz.com/learn/seo/canonicalization) and [redirection/rewrites](https://moz.com/blog/url-rewrites-and-301-redirects-how-does-it-all-work).

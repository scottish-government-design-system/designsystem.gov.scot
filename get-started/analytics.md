---
layout: component
title:  "Analytics"
category: get-started
parent: get-started
label: How to
thispage: get-started.analytics
summary: "Good practice web analytics advice for getting your service/website ready for performance monitoring and reporting."
permalink: "/get-started/analytics/"
index: 999
---

## Analytics for design system sites

Every website should have its performance monitored regularly. This allows the service team to identify issues and use data to make better decisions as outlined in the [Digital Scotland Service Standard](https://resources.mygov.scot/alpha/service-standard/digital-scotland-service-standard/).

To do this you will need to set up certain analytics tools for your website or service. Scottish Government sites primarily use Google Tag Manager and Google Analytics.

In order to create patterns and components which can be tracked in a range of different web analytics tools and which will work well for GTM/GA, we use data attributes as triggers, rather than relying on click classes which are more likely to change over time. The use of data attributes also helps us minimise the number of tags that are required.

The Design System has a ["tracking" script](/get-started/tracking/) that adds these data attributes.

Our triggers are specific and our tags are more general, meaning that there is a trigger per component and multiple triggers fire the same tag. Our patterns are trackable without the need for custom JavaScript in Google Tag Manager.

In our reporting, our Event Category contains the name of the tag. For most of the tracking these this will work in Google Tag Manager:

{% highlight html %}
{% raw %}
Event Category: Navigation {{Page Path}}
Event Action: {{AEV – data-navigation/footer/header/search}} >> {{Click Text}}
Event Label: {{AEV – Path}}
{% endraw %}
{% endhighlight %}

The design system performance team have created a Google Tag Manager container which can be imported if you are building a site with the design system. [Download the Google Tag Manager container](https://github.com/scottishgovernment/designsystem-assets/releases/download/0.1/designsystemgtm.json) or [contact the performance team](mailto:performance@gov.scot).




## Training & support

Every website should have its performance monitored regularly - this allows the service owner to identify issues and use the data to make better decisions as outlined in the Digital Scotland Service Standard’s ["Define what success looks like and publish performance data" criteria](https://www.gov.scot/publications/digital-scotland-service-standard/pages/9--define-what-success-looks-like-and-publish-performance-data/).

To do this you will need to set up certain tools for your website or service. These are:

* A tag management system (optional for smaller websites/services, highly recommended for larger projects or any without in-house developers)
* A web analytics package(s) (which allow you to record your service’s data, such as the number of users, and to output the data on a dashboard) - this could include [Matomo](https://matomo.org/), [Google Analytics](https://analytics.google.com/), [Adobe web analytics](http://www.adobe.com/uk/marketing-cloud/web-analytics.html), etc.
* A dashboarding tool (optional) - this could include [Klipfolio](https://www.klipfolio.com/), [PowerBI](https://powerbi.microsoft.com/) or [Google Data Studio](https://datastudio.google.com/)
* The search console for key search engines (if your service is web-based)
* Additional analytics tools to collect supplemental information (optional) - this could include heatmapping tools

### Alternative tools

There are a range of different tools available - from free/open source through to paid/enterprise - to do these tasks. We use a mix of tools, including Google Analytics. Google Analytics is widely used across the Scottish Government. The setup outlined below has already been tested and approved for data security and is based on free products, so there’s no need to go through procurement. We have documented a setup which is strong on interoperability, simplicity, available documentation and is largely based on free products but other web analytics packages are available and may be better suited to your needs. Analytics tools which do not rely on cookies are also available and should be considered when deciding on an analytics solution - these include [Simple Analytics](https://simpleanalytics.com/), [Fathom](https://usefathom.com/) and [Plausible](https://plausible.io/). 

### Recommended training

To get the best out of your web analytics setup, it’s recommended that those who will frequently use the tools go on training. This is key to getting the best out of a platform, gaining insight into the performance of your service and understanding how your customers/users interact with the service. This training is also necessary for driving change in a data driven, evidence based manner.

Google offer free training on their analytics and tag management tools. This can be accessed on their [Analytics Academy website](https://analytics.google.com/analytics/academy/).

Contact the [Scottish Government Performance Team](mailto:performance@gov.scot) if you have any questions about training.

### Support

If your organisation needs more advanced support or configuration, or if you’d like to know more about how to make changes based on the data you’re getting from your analytics tools, please contact the [Scottish Government Performance Team](mailto:performance@gov.scot). You may also want to get involved in the [UK Government performance community](https://www.gov.uk/service-manual/communities/performance-and-data-analysis-community).




## Set up a Google account

If you’re going to be using Google Analytics you’ll need a [Google account](https://accounts.google.com/SignUp) which is tied to your work email address (rather than adding your work email address as a secondary address to a personal account). If you’re creating an account to be shared by a team we recommend creating a generic account, not only linking it to one individual and thinking ahead to secure against future resilience issues.




## Set up Google Tag Manager

[Google Tag Manager](https://support.google.com/tagmanager/answer/6103696?hl=en) lets site owners add and update website tags - including tags for conversion tracking, site analytics and remarketing - without needing to edit your website’s code.

To access and configure GTM:

* [Sign up using your team’s Google account](https://tagmanager.google.com/)
* Create and name your account then create and name your first container. We suggest you use the following naming convention; domain - subdomain - environment e.g. mygov - www - live
* Select the type of property for which you intend to use the container for. In most instances you’ll select “web”
* Two code snippets will appear on screen, along with instructions on where to place them: place the code as instructed on all of your pages (this might require help from a developer)
* Repeat the previous 3 steps for any additional containers i.e. for test environments. Follow the same naming convention as your other container, e.g. “mygov.scot - www - test”
* Add the dataLayer snippet to your site (advanced). Here’s a [guide on the dataLayer](https://www.optimizesmart.com/google-tag-manager-data-layer-explained-like-never/) and here are instructions from Google on [implementation for your developer](https://developers.google.com/tag-manager/devguide).

Once GTM has been deployed to all pages, it lets you deploy your analytics tool/Google Analytics, enhanced tracking capability and any other tags where applicable, e.g. advertising floodlight tags/pixels, etc.

The design system performance team have created a Google Tag Manager container which can be imported if you are building a site with the design system. [Download the Google Tag Manager container](https://github.com/scottishgovernment/designsystem-assets/releases/download/0.1/designsystemgtm.json) or [contact the performance team](mailto:performance@gov.scot).

If you are setting up your own event tracking we recommend adding document/download tracking, email link tracking and external link tracking. 

### Google Tag Manager - additional reading
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




## Set up Google Analytics

[Google Analytics](https://support.google.com/analytics/answer/1008080?hl=en) offers both free and enterprise analytics tools to measure website and app data.

* [Sign up using your team’s Google account](https://analytics.google.com/analytics/web/)
* Create your account and name it appropriately
* [Grant access to colleagues and any developers who will be working on the service](http://www.seerinteractive.com/blog/get-the-most-out-of-google-analytics-user-permissions/)
* Within the Admin settings, you should turn off all data sharing other than within Google products and services
* Set up Google Analytics Profiles. Profiles are technically new properties, but they are created from within the same account. To do this, you visit the admin page of your desired account. Select the “create new property” option from the property dropdown and enter the desired profile name. The following profiles are recommended:
    * Raw Data > This is your unfiltered backup dataset - not to be deleted or changed
    * Live > Your main reporting profile
    * Test > This is a duplicate of the Live view and allows you to make changes for testing purposes
* Within your live and test profiles create the following [Views](https://support.google.com/analytics/answer/2649553?hl=en&ref_topic=6014102):
    * Unfiltered Master > with no filtering
    * All traffic > Minimal filtering
    * External - All Devices > This view has internal traffic filtered out
    * Internal - All Devices > This view is the converse of above
* Create the required filters for each custom view - [here are a few recommended filters to apply from Loves Data](https://www.lovesdata.com/blog/google-analytics-filters)
* Create [goals](https://www.searchenginejournal.com/google-analytics-indepth-look-url-destination-goals/73605/) within Google Analytics that are in line with your business KPIs and objectives
* For key metrics you wish to record but where goals are not applicable you should [set up event tracking](https://www.optimizesmart.com/event-tracking-in-google-tag-manager-v2-complete-guide/)
* **It’s vital to protect user’s privacy** - along with not collecting sensitive information to your analytics package. To do this we recommend turning off demographic and interests reporting (at property level) and anonymising IP addresses (in Google Analytics you do this by using the anonymizeIp function - this is handled within Google Tag Manager, but it affects Google Analytics data. [See this screenshot for configuration within Google Tag Manager](https://drive.google.com/open?id=0B3iRPBzyhQkiejNRaTc2eF9kaG8))
* At a property level, turn on the [enhanced link attribution](https://drive.google.com/open?id=0B3iRPBzyhQkiQnlEZGlacE1DNVE)
* Set your [sessions and campaigns to expire](https://drive.google.com/open?id=0B3iRPBzyhQkicVZrUC16MmRmQ1k) after set durations. We recommend setting sessions to expire after 30 minutes and campaigns after 6 months
* At a property level set your own domain in the [referral exclusion list](https://drive.google.com/open?id=0B3iRPBzyhQkiZDNrRnVjb3IzTHc)
* Deploy the property configurations to each of the relevant sites

### Google Analytics Data Retention

Google Analytics provides users with the option to put in place a ‘Data Retention Period’ - this is where Google Analytics keep data available to a user for a period of time. After this period has come to an end, the data will get deleted. Google sets the default for any website at 26 months, but this can be amended to meet the appropriate needs of your organisation. To do this, see the below article from Google.

* [https://support.google.com/analytics/answer/7667196?hl=en](https://support.google.com/analytics/answer/7667196?hl=en)

### Updating existing Google Analytics libraries

You can use [Google Tag Assistant Chrome extension](https://get.google.com/tagassistant/) to identify whether your site is running legacy Google Analytics code libraries. If your site is running legacy old Google Analytics code snippets we recommend updating using this guide.




## Google Analytics - additional reading

* [Builtvisible: Google Analytics: a guide for beginners](https://builtvisible.com/google-analytics-resource-guide/)
* [Annielytics blog](https://www.annielytics.com/blog/)
* [Google: Learn about Google Analytics](https://developers.google.com/analytics/devguides/platform/)
* [Avinasg Kaushik: Simple tricks to up-level your analytics reports](https://www.kaushik.net/avinash/tricks-to-up-level-your-analytics-reports/)
* [GA Dev Tools: Discover the Google Analytics platform](https://ga-dev-tools.appspot.com/)
* [Google: Hierarchy of organizations, accounts, users, properties, and views](https://support.google.com/analytics/answer/1009618)
* [Google: About views](https://support.google.com/analytics/answer/2649553?hl=en&ref_topic=6014102)
* [Search Engine Journal: Google Analytics Indepth Look: URL Destination Goals](https://www.searchenginejournal.com/google-analytics-indepth-look-url-destination-goals/73605/)




## Set up and link Google Search Console

[Google Search Console](https://support.google.com/webmasters/answer/6001104?hl=en) (previously Google Webmaster Tools) is a service for website administrators to check indexing status, optimise visibility of their websites, view a sample of websites that link back to you, and see site errors and Google crawl stats.

* [Sign in to Google Search Console using your shared email account](https://www.google.com/webmasters/tools/) (formerly Google Webmaster Tools) and click the red button to add your website

* Add your domain. Note: it’s often best to start with the root domain (without the www.) e.g. `https://twitter.com`

* You’ll be presented with 4 verification options. Our recommended method is to use the “Domain name provider” option. While this may differ from Google’s recommended method, it counters the possibility of verification revocation should the code be removed by a developer or through a site release. The DNS option remains persistent no matter what changes are applied to your website and there has to be specific intent behind removal of a DNS zone file entry. Once selected, you’ll be presented with a string of characters used by Google for confirmation that you are the owner/admin of the site in question. Follow the instructions to create a text record in the zone file, or have your DNS provider do this for you if you have a managed service.

* Once applied, you may have to wait a short period of time for the change to fully propagate (due to caching and TTL (“time to live”) before clicking the verify property button within the Google Search Console page

* Google sees http and https versions of your site separately, as with www. and non-www. versions - repeat for all combinations of your site

* Set up a property set by clicking the “Create a set” button in GSC (next to the “Add a property” button) and add all the previously created versions of your site to the set

* Go to your default and preferred version of your site, click the cog in the top right quadrant of the page and select the “site settings” from the dropdown. Select your preferred way of displaying your domain, whether it’s with the www. or the naked domain

* Click the cog in the upper right quadrant and select Google Analytics Property from the drop down. Now select the appropriate GA property to link with. If you’ve followed the recommended naming convention above, it should be along the lines of “Domain name (Live)”

* It’s important that you choose a consistent approach for displaying your domain within search engines and make sure it’s mirrored in your site configuration through canonicalisation and also ensuring that your site is configured to display/redirect to the default version, no matter what version a user types/clicks. Further reading: [canonicalisation](https://moz.com/learn/seo/canonicalization) and [redirection/rewrites](https://moz.com/blog/url-rewrites-and-301-redirects-how-does-it-all-work)

* [Link your Google Search Console to Google Analytics](https://support.google.com/analytics/answer/1308621?hl=en)

### Google Search Console - additional reading

* [Geckoboard: 4 ways to automagically import live data into spreadsheets](https://www.geckoboard.com/blog/4-ways-to-automagically-get-your-data-into-spreadsheets/#.WDRyd6KLTjA)
* [LinkResourceTools: Search Console by Google - The Ultimate Guide](https://smart.linkresearchtools.com/linkthing/google/search-console)
* [Neil Patel: A Beginner’s Guide to Google Search Console](https://neilpatel.com/blog/beginners-guide-to-google-webmaster-tools/)
* [Bruce Clay: How to Set Up Google Search Console](https://www.bruceclay.com/blog/set-up-google-search-console/)
* [Online.Marketing: All You Need To Know For Moving To HTTPS](https://online.marketing/guide/https/)




## Set up Bing Webmaster Tools

[Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster) is a service for website administrators to check indexing status, optimise visibility of their websites, view a sample of websites that link back to you, and see site errors and Bing crawl stats.

* [Sign in to Bing Webmaster Tools using a shared email account](https://www.bing.com/toolbox/webmaster)
* Add your domain. Note: it’s often best to start with the root domain (without the www.) e.g. `https://twitter.com`
* Submit a link to your XML sitemap - this is normally found at `yoursite.com/sitemap.xml`
* You’ll be presented with 3 verification options. Our recommended method is to use the “add CNAME record to DNS” option. You’ll be presented with a string of characters used by Bing for confirmation that you are the owner/admin of the site in question. Follow the instructions to create a text record in the zone file, or have your DNS provider do this for you if you have a managed service.
* Once applied, you may have to wait a short period of time for the change to fully propagate (due to caching and TTL (“time to live”) before clicking the “Verify” button.
* Bing sees http and https versions of your site separately, as with www. and non-www. versions - repeat for all combinations of your site
* There is no way via Bing to set your preferred version of your site - instead you must set up your www. to redirect to non-www. on your server and via your sitemaps and canonicalisation. It’s important that you choose a consistent approach for displaying your domain within search engines and make sure it’s mirrored in your site configuration through canonicalisation and also ensuring that your site is configured to display/redirect to the default version, no matter what version a user types/clicks. Further reading: [canonicalisation](https://moz.com/learn/seo/canonicalization) and [redirection/rewrites](https://moz.com/blog/url-rewrites-and-301-redirects-how-does-it-all-work).




## Set up and link Google AdWords
Google AdWords is a pay-per-click (PPC) marketing platform. It’s good practice from a budgetary, risk, audit and management perspective to manage AdWords accounts in-house, delegating access/permissions to agencies and staff where necessary. For this there are two account options for organisations:

* [Standard AdWords account](https://adwords.google.com/home/) (applies to the majority)
* AdWords Manager Account (applies to organisations with multiple accounts)

It’s important to note that if you believe a management account is necessary, you should choose this option before setting up a standard account (otherwise, you’ll need to create another account if you’ve already set up a standard account). Your organisation will be best placed to get a Manager Account if you run multiple accounts across multiple sites or have complex budgetary and procurement structures.

The other reason you may require a Manager Account, is if you’re looking to apply for and use the Google AdWords API, where it’s a prerequisite.

To set up a Manager Account:

* [Create an account](https://adwords.google.com/home/tools/manager-accounts/)
* Once completed you’ll be taken to the dashboard. From here you can add any existing Google AdWords accounts or create an automatically linked account. Click the “+ Account” button and select the appropriate option from the dropdown.




## Google account recovery

In the instance where there’s an existing Google Analytics account but access has been lost, you can recover it using the following steps:

* Identify the Google Analytics property ID you’re looking to recover - you can get this by navigating to one of your pages and using the Google Tag Assistant Chrome extension or by viewing the page source and looking for your UA code, which begins “UA-XXXXXX”.
* Log into Google AdWords. If you don’t have an existing account, create one and log in
* Once logged in, click the cog in the top right-hand corner and click on “Worldwide phone support”, pick the relevant number for your country and phone Google.
* Select the Analytics option, input your AdWords Customer ID (found in the top right of the AdWords webpage) and you’ll be directed to the support team.
* Note that it can be several days before resolution and account access is restored

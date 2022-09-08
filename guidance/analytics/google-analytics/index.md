---
layout: component
title:  "Google Analytics"
category: guidance
parent: guidance.analytics
thispage: guidance.analytics.google-analytics
noindex: true
---

[Google Analytics](https://support.google.com/analytics/answer/1008080?hl=en) offers both free and enterprise analytics tools to measure website and app data.

* [Sign up using your team’s Google account](https://analytics.google.com/analytics/web/)
* Create your account and name it appropriately
* [Grant access to colleagues and any developers who will be working on the service](http://www.seerinteractive.com/blog/get-the-most-out-of-google-analytics-user-permissions/)
* Within the Admin settings, you should turn off all data sharing other than within Google products and services
* Set up Google Analytics Profiles. Profiles are technically new properties, but they are created from within the same account. To do this, you visit the admin page of your desired account. Select the 'create new property' option from the property dropdown and enter the desired profile name. The following profiles are recommended:
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




## Google Analytics Data Retention

Google Analytics provides users with the option to put in place a ‘Data Retention Period’ - this is where Google Analytics keep data available to a user for a period of time. After this period has come to an end, the data will get deleted. Google sets the default for any website at 26 months, but this can be amended to meet the appropriate needs of your organisation. To do this, see the below article from Google.

* [https://support.google.com/analytics/answer/7667196?hl=en](https://support.google.com/analytics/answer/7667196?hl=en)




## Updating existing Google Analytics libraries

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

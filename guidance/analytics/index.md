---
layout: component
metatitle: "Analytics guidance"
title:  "Analytics"
category: guidance
parent: guidance
thispage: guidance.analytics
summary: "Good practice web analytics advice for getting your service/website ready for performance monitoring and reporting."
redirect_from: /guidance/analytics/
---

Every website should have its performance monitored regularly - this allows the service owner to identify issues and use the data to make better decisions as outlined in the Digital Scotland Service Standard’s ['Define what success looks like and publish performance data' criteria](https://www.gov.scot/publications/digital-scotland-service-standard/pages/9--define-what-success-looks-like-and-publish-performance-data/).

To do this you will need to set up certain tools for your website or service. These are:

* A tag management system (optional for smaller websites/services, highly recommended for larger projects or any without in-house developers)
* A web analytics package(s) (which allow you to record your service’s data, such as the number of users, and to output the data on a dashboard) - this could include [Matomo](https://matomo.org/), [Google Analytics](https://analytics.google.com/), [Adobe web analytics](http://www.adobe.com/uk/marketing-cloud/web-analytics.html), etc.
* A dashboarding tool (optional) - this could include [Klipfolio](https://www.klipfolio.com/), [PowerBI](https://powerbi.microsoft.com/) or [Google Data Studio](https://datastudio.google.com/)
* The search console for key search engines (if your service is web-based)
* Additional analytics tools to collect supplemental information (optional) - this could include heatmapping tools

Scottish Government sites primarily use Google Tag Manager (GTM) and Google Analytics (GA).




## Using data attributes as triggers

In order to create patterns and components which can be tracked in a range of different web analytics tools and which will work well for GTM/GA, we use data attributes as triggers, rather than relying on click classes which are more likely to change over time. The use of data attributes also helps us minimise the number of tags that are required.

The Design System has a ['tracking' script](/get-started/tracking/) that adds these data attributes.

Our triggers are specific and our tags are more general, meaning that there is a trigger per component and multiple triggers fire the same tag. Our patterns are trackable without the need for custom JavaScript in Google Tag Manager.

In our reporting, our Event Category contains the name of the tag. For most of the tracking these this will work in Google Tag Manager:

{% highlight html %}
{% raw %}
Event Category: Navigation {{Page Path}}
Event Action: {{AEV – data-navigation/footer/header/search}} >> {{Click Text}}
Event Label: {{AEV – Path}}
{% endraw %}
{% endhighlight %}

The Design System performance team have created a Google Tag Manager container which can be imported if you are building a site with the Design System. [Download the Google Tag Manager container](https://github.com/scottishgovernment/designsystem-assets/releases/download/0.1/designsystemgtm.json) or [contact the performance team](mailto:performance@gov.scot).




## Alternative tools

There are a range of different tools available - from free/open source through to paid/enterprise - to do these tasks. We use a mix of tools, including Google Analytics.

Google Analytics is widely used across the Scottish Government. The setup outlined in the pages in this section has already been tested and approved for data security and is based on free products, so there’s no need to go through procurement. We have documented a setup which is strong on interoperability, simplicity, available documentation and is largely based on free products but other web analytics packages are available and may be better suited to your needs. Analytics tools which do not rely on cookies are also available and should be considered when deciding on an analytics solution - these include [Simple Analytics](https://simpleanalytics.com/), [Fathom](https://usefathom.com/) and [Plausible](https://plausible.io/). 

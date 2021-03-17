---
layout: component
title:  "Analytics"
category: get-started
parent: get-started
label: How to
thispage: get-started.analytics
summary: ""
permalink: "/get-started/analytics/"
index: 999
---

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

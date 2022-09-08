---
layout: component
title:  "Campaign tracking"
category: guidance
parent: guidance.analytics
thispage: guidance.analytics.campaign-tracking
noindex: true
---

When tracking a paid, social or email campaign it is best to tag links with parameters that allow website analytics tools to better report on how the campaign performed. When you do this the URL will look like this: `https://www.example.com/?utm_source=summer-mailer&utm_medium=email&utm_campaign=summer-sale`

You can set up your link parameters using this tool: [Campaign URL Builder](https://ga-dev-tools.web.app/campaign-url-builder/)

From Google's help page, the essential parameters are `utm_source`, `utm_medium` and `utm_campaign`: [URL builders: Collect campaign data with custom URLs](https://support.google.com/analytics/answer/10917952)

<dl>
<dt><code>utm_source</code></dt> 
<dd>Referrer, for example: google, newsletter, billboard</dd>
<dt><code>utm_medium</code></dt>
<dd>Marketing medium, for example: cpc, banner, email</dd>
<dt><code>utm_campaign</code></dt>
<dd>Product, slogan, promo code, for example: spring_sale</dd>
</dl>

<div class="ds_inset-text"><div class="ds_inset-text__text">
For the <code>utm_medium</code> parameter, anything which is paid-for (including paid advertising on social media) you should set the value to 'paid'. For non-paid social media links set the value to 'social'.</div></div>

We also recommend adding the parameters to any short or 'vanity' redirects. For our sites that means adding a redirect from a friendly URL that can be included on something like a print or TV advert (for example, `mygov.scot/renters`) which then gets redirected in the back-end of our CMS to a URL which has the tracking code attached (for example, `https://www.mygov.scot/private-rental-rights?utm_source=shorturl&utm_medium=cpc&utm_campaign=renters_rights`).

<div class="ds_inset-text"><div class="ds_inset-text__text">
Putting <code>utm_source</code> in the parameter overwrites the referring site source URL and so vanity URLs are best for print/TV where there is no better way to track.</div></div>

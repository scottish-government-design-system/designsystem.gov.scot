---
layout: example
parent: component.cookie-notice
type: example
index: 0
style: '.example-frame__content {padding-left: 0; padding-right: 0;}'
---

<div id="cookie-notice" class="ds_notification  ds_notification--large  ds_notification--cookie  js-initial-cookie-content  fully-hidden" data-module="ds-cookie-notification">
    <div class="ds_wrapper">
        <div class="ds_notification__content">
            <div role="heading" class="visually-hidden">Information</div>

            <div class="ds_notification__text">
                <p>We use <a href="#">cookies</a> to collect anonymous data to help us improve your site browsing
                    experience.</p>
                <p>Click 'Accept all cookies' to agree to all cookies that collect anonymous data.
                    To only allow the cookies that make the site work, click 'Use essential cookies only.' Visit 'Set cookie preferences' to control specific cookies.</p>
            </div>

            <div class="ds_notification__actions">
                <button class="ds_button  ds_button--small  js-accept-all-cookies">Accept all cookies</button>
                <button class="ds_button  ds_button--small  ds_button--secondary  js-accept-essential-cookies">Use essential cookies only</button>
                <a href="/cookies/">Set cookie preferences</a>
            </div>
        </div>
    </div>
</div>

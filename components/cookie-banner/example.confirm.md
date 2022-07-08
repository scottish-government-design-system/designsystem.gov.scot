---
layout: example
parent: component.cookie-banner
type: example
index: 0
style: '.example-frame__content {padding-left: 0; padding-right: 0;}'
embeddedScript: 'document.getElementById("cookie-confirm").classList.remove("fully-hidden");'
---

<div id="cookie-confirm" class="ds_notification  ds_notification--cookie-success  ds_reversed  fully-hidden  js-confirm-cookie-content" data-module="ds-notification">
    <div class="ds_wrapper">
        <div class="ds_notification__content">
            <div class="ds_notification__text">
                <h2 class="visually-hidden">Information</h2>

                <div class="ds_notification__text">
                    <p>Your cookie preferences have been saved. You can <a href="/cookies/">change your cookie settings</a> at any time.</p>
                </div>

                <button class="ds_notification__close  js-close-notification" type="button">
                    <span class="visually-hidden">Close this notification</span>
                    <svg class="ds_icon  ds_icon--fill" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#close"></use></svg>
                </button>
            </div>
        </div>
    </div>
</div>

---
layout: example
parent: pattern.notification-banner
type: example
index: 0
style: '.example-frame__content {padding-left: 0; padding-right: 0;}'
---

<div class="ds_notification  ds_notification--positive">
    <div class="ds_wrapper">
        <div class="ds_notification__content">
            <div class="ds_notification__text">
                <p>Something good has <a data-banner="banner-bannername-link" href="#">happened</a></p>
            </div>

            <button data-banner="banner-bannername-close" class="ds_notification__close  js-close-notification" type="button">
                <span class="visually-hidden">Close this notification</span>
                <svg class="ds_icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#close-21"></use></svg>
            </button>
        </div>
    </div>
</div>

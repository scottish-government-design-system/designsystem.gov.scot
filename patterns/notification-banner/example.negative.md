---
layout: example
parent: pattern.notification-banner
type: example
index: 0
style: '.example-frame__content {padding-left: 0; padding-right: 0;}'
---

<div class="ds_notification  ds_notification--negative">
    <div class="ds_wrapper">
        <div class="ds_notification__content  ds_notification__content--has-close">
            <div class="ds_notification__text">
                <span class="ds_notification__icon" aria-hidden="true">
                    <svg class="ds_icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#bang-21"></use></svg>
                </span>
                <p class="ds_notification__text"><strong>Something bad has <a data-banner="banner-bannername-link" href="#">happened</a></strong></p>
            </div>

            <button data-banner="banner-bannername-close" class="ds_notification__close  js-close-notification" type="button">
                <span class="visually-hidden">Close this notification</span>
                <svg class="ds_icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#close-21"></use></svg>
            </button>
        </div>
    </div>
</div>

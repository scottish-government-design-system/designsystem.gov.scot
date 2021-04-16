---
layout: example
parent: component.notification-banner
type: example
index: 0
style: '.example-frame__content {padding-left: 0; padding-right: 0;}'
---

<div class="ds_notification  ds_reversed" data-module="ds-notification">
    <div class="ds_wrapper">
        <div class="ds_notification__content  ds_notification__content--has-close">
            <div role="heading" class="visually-hidden">Information</div>

            <span class="ds_notification__icon  ds_notification__icon--inverse  ds_notification__icon--colour" aria-hidden="true">
                <svg class="ds_icon  ds_icon--fill" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#priority_high"></use></svg>
            </span>

            <div class="ds_notification__text">
                <p>Something bad has <a href="#">happened</a></p>
            </div>

            <button class="ds_notification__close  js-close-notification" type="button">
                <span class="visually-hidden">Close this notification</span>
                <svg class="ds_icon  ds_icon--fill" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#close"></use></svg>
            </button>
        </div>
    </div>
</div>

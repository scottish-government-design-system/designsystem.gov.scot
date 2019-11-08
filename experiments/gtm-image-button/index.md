---
layout: example
type: example
index: 0
---

<style>
.ds_icon {pointer-events: none;}
</style>


<div class="ds_notification">
    <div class="ds_wrapper">
        <div class="ds_notification__content  ds_notification__content--has-close">
            <div class="ds_notification__text">
                <p>We need to tell you about <a data-banner="banner-link" href="#">something</a></p>
            </div>

            <button data-banner="banner-close" class="ds_notification__close  js-close-notification" type="button">
                <span class="visually-hidden">Close this notification</span>
                <svg data-banner="banner-close" class="ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#close-21"></use></svg>
            </button>
        </div>
    </div>
</div>
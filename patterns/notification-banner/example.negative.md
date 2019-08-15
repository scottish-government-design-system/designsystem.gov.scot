---
layout: example
parent: pattern.notification-banner
type: example
index: 0
style: '.example-frame__content {padding-left: 0; padding-right: 0;}'
scripts:
  - /patterns/notification-banner/script.js
---

<div class="notification  notification--negative">
    <div class="wrapper">
        <div class="notification__content">
            <div class="notification__text">
                <span class="notification__icon" aria-hidden="true">
                    <svg class="icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#bang-21"></use></svg>
                </span>
                <p class="notification__text"><strong>Something bad has <a data-banner="banner-link" href="#">happened</a></strong></p>
            </div>

            <button data-banner="banner-close" class="notification__close  js-close-notification" type="button">
                <span class="visually-hidden">Close this notification</span>
                <svg class="icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#close-21"></use></svg>
            </button>
        </div>
    </div>
</div>

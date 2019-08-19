---
layout: example
parent: pattern.notification-banner
type: example
index: 0
style: '.example-frame__content {padding-left: 0; padding-right: 0;}'
scripts:
  - /patterns/notification-banner/script.js
---

<div class="notification  notification--positive">
    <div class="wrapper">
        <div class="notification__content">
            <div class="notification__text">
                <p>Something good has <a data-banner="banner-bannername-link" href="#">happened</a></p>
            </div>

            <button data-banner="banner-bannername-close" class="notification__close  js-close-notification" type="button">
                <span class="visually-hidden">Close this notification</span>
                <svg class="icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#close-21"></use></svg>
            </button>
        </div>
    </div>
</div>

---
layout: example
parent: component.notification-panel
type: example
index: 0
minheight: 432px
---

<button class="ds_button  ds_no-margin  js-show-notification">Click this button to show the notification panel</button>

<div class="ds_notification-panel  ds_notification-panel--success  fully-hidden" role="alert">
    <h1 class="ds_notification-panel__title">Application complete</h1>
    <div class="ds_notification-panel__content"><p>Your reference number is <br><strong class="beta">SG0123456</strong></p></div>
</div>

<script>
var button = document.querySelector('.js-show-notification');
var panel = document.querySelector('.ds_notification-panel');
button.addEventListener('click', function (event) {
    event.preventDefault();
    panel.classList.remove('fully-hidden');
});
</script>

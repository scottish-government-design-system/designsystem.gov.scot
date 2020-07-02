---
layout: example
type: example
index: 0
---

<h1>Accessible date picker</h1>

<script src="ds-datepicker.js"></script>

<div data-module="ds-datepicker" class="ds_datepicker">
  <div class="ds_input__wrapper">
    <input data-mindate="08/07/2020" data-maxdate="15/08/2020" type="text" class="ds_input  ds_input--fixed-10">
  </div>
</div>

<h2>To do</h2>
<ul>
  <li>responsive behaviour</li>
  <li>unit tests 😱</li>
</ul>

<h2>Features</h2>
<ul>
  <li>minimum and maximum dates &#9989;</li>
  <li>i18n: support for multiple date formats &#9989;</li>
</ul>


<script>
    const datePickers = [].slice.call(document.querySelectorAll('[data-module="ds-datepicker"]'));
    datePickers.forEach(datePicker => new DSDatePicker(datePicker).init());
</script>

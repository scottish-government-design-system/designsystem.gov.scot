---
layout: example
parent: component.date-picker
type: example
script: datepicker-demo
minheight: 448px
sitemap: false
noindex: true
---

<fieldset>
  <legend>What is your date of birth?</legend>
  <p class="ds_hint-text">For example, 31 3 1980</p>

  <div class="ds_datepicker  ds_datepicker--multiple" data-module="ds-datepicker">
    <div class="ds_datepicker__input-wrapper">
      <div>
        <label class="ds_label" for="day">Day</label>
        <input id="day" class="ds_input ds_input--fixed-2  js-datepicker-date" />
      </div>

      <div>
        <label class="ds_label" for="month">Month</label>
        <input id="month" class="ds_input ds_input--fixed-2  js-datepicker-month" />
      </div>

      <div>
        <label class="ds_label" for="year">Year</label>
        <input id="year" class="ds_input ds_input--fixed-4  js-datepicker-year" />
      </div>
    </div>
  </div>
</fieldset>

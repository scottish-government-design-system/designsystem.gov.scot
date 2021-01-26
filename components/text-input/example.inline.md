---
layout: example
parent: component.text-input
type: example
index: 0
---

<form>
    <fieldset>
        <legend>What is your date of birth?</legend>
        <p class="ds_hint-text">For example, 31 3 1980</p>

        <div class="ds_field-group  ds_field-group--inline">
            <div>
                <label class="ds_label" for="day">Day</label>
                <input id="day" class="ds_input ds_input--fixed-2" />
            </div>

            <div>
                <label class="ds_label" for="month">Month</label>
                <input id="month" class="ds_input ds_input--fixed-2" />
            </div>

            <div>
                <label class="ds_label" for="year">Year</label>
                <input id="year" class="ds_input ds_input--fixed-4" />
            </div>
        </div>
    </fieldset>
</form>

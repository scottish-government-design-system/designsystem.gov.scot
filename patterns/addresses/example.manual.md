---
layout: example
parent: pattern.addresses
type: example
---

<button class="ds_link  ds_no-margin">Return to postcode lookup</button>
<fieldset>
    <legend>Tell us your full address</legend>
    <div class="ds_question">
        <label class="ds_label" for="address-line-1">
            Building and street <span class="visually-hidden">line 1 of 2</span>
        </label>
        <input class="ds_input" type="text" name="address-line-1" id="address-line-1" autocomplete="address-line1"/>
    </div>
    <div class="ds_question">
        <label class="ds_label  visually-hidden" for="address-line-2">
            Building and street line 2 of 2
        </label>
        <input class="ds_input" type="text" name="address-line-2" id="address-line-2" autocomplete="address-line2"/>
    </div>
    <div class="ds_question">
        <label class="ds_label" for="address-city">
            City or town
        </label>
        <input class="ds_input" type="text" name="address-city" id="address-city" autocomplete="address-level2"/>
    </div>
    <div class="ds_question">
        <label class="ds_label" for="address-county">
            County
        </label>
        <input class="ds_input" type="text" name="address-county" id="address-county"/>
    </div>
    <div class="ds_question">
        <label class="ds_label" for="address-postcode">
            Postcode
        </label>
        <input class="ds_input  ds_input--fixed-10" type="text" name="address-postcode" id="address-postcode" autocomplete="postal-code"/>
    </div>
</fieldset>


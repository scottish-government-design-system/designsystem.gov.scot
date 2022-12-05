---
layout: example
parent: component.radio-buttons
type: example
sitemap: false
noindex: true
---
<form>
    <fieldset>
        <legend>How will the payments be paid in?</legend>

        <div class="ds_field-group">
            <div class="ds_radio">
                <input class="ds_radio__input" id="payment-advance" name="payment-type" type="radio" value="advance">
                <label class="ds_radio__label" for="payment-advance">Advance</label>
                <p class="ds_hint-text">This means you're paid for the period coming up, i.e. the month ahead</p>
            </div>

            <div class="ds_radio">
                <input class="ds_radio__input" id="payment-arrears" name="payment-type" type="radio" value="arrears">
                <label class="ds_radio__label" for="payment-arrears">Arrears</label>
                <p class="ds_hint-text">This means you're paid for the time that's just passed, i.e. for the last month</p>
            </div>
        </div>
    </fieldset>
</form>

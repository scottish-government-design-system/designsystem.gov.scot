---
layout: example
parent: component.radio-buttons
type: example
minheight: 488px
---
<form>
    <div class="ds_question">
        <fieldset id="landlord-improvements-query">
            <legend>Has the landlord improved the property since you moved in?</legend>

            <div class="ds_field-group">
                <div class="ds_radio">
                    <input checked id="landlord-improvements-yes" value="yes" name="landlord-improvements-query" class="ds_radio__input" type="radio" />
                    <label for="landlord-improvements-yes" class="ds_radio__label">Yes</label>

                    <div class="ds_reveal-content">
                        <div class="ds_question">
                            <label class="ds_label" for="landlord-improvements-details">What work has your landlord done to improve the property?</label>
                            <textarea id="landlord-improvements-details" class="ds_input" rows="4" data-validation="requiredField" aria-required="true"></textarea>
                        </div>
                    </div>
                </div>
                <div class="ds_radio">
                    <input id="landlord-improvements-no" value="no" name="landlord-improvements-query" class="ds_radio__input" type="radio" />
                    <label for="landlord-improvements-no" class="ds_radio__label">No</label>
                </div>
            </div>
        </fieldset>
    </div>
</form>

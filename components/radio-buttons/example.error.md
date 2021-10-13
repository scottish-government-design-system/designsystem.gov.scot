---
layout: example
parent: component.radio-buttons
type: example
---
<form>
    <div class="ds_question  ds_question--error" id="error-id-one">
        <fieldset aria-invalid="true">
            <legend>Did this resolve your issue?</legend>
            <p class="ds_hint-text">Hint text</p>
            <p class="ds_question__error-message">This field is required</p>

            <div class="ds_field-group">
                <div class="ds_radio">
                    <input class="ds_radio__input" id="resolve-yes" name="resolve" type="radio" value="yes">
                    <label class="ds_radio__label" for="resolve-yes">Yes</label>
                </div>

                <div class="ds_radio">
                    <input class="ds_radio__input" id="resolve-no" name="resolve" type="radio" value="no">
                    <label class="ds_radio__label" for="resolve-no">No</label>
                </div>
            </div>
        </fieldset>
    </div>
</form>

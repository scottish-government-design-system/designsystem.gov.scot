---
layout: example
parent: component.checkboxes
type: example
---
<form>
    <div class="ds_question  ds_question--error" id="error-id">
        <fieldset>
            <legend>What topics are you interested in?</legend>
            <p class="ds_hint-text">Select an option</p>
            <p class="ds_question__message">This field is required</p>

            <div class="ds_field-group">
                <div class="ds_checkbox">
                    <input class="ds_checkbox__input" id="stacked-1" name="group-name" type="checkbox" value="yes" />
                    <label class="ds_checkbox__label" for="stacked-1">Education</label>
                </div>

                <div class="ds_checkbox">
                    <input class="ds_checkbox__input" id="stacked-2" name="group-name" type="checkbox" value="no" />
                    <label class="ds_checkbox__label" for="stacked-2">Housing</label>
                </div>

                <div class="ds_checkbox">
                    <input class="ds_checkbox__input" id="stacked-3" name="group-name" type="checkbox" value="maybe" />
                    <label class="ds_checkbox__label" for="stacked-3">Transport</label>
                </div>
            </div>
        </fieldset>
    </div>
</form>

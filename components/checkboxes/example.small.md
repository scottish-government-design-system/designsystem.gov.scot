---
layout: example
parent: component.checkboxes
type: example
---
<form>
    <fieldset aria-describedby="ds_hint">
        <legend>What topics are you interested in?</legend>
        <p class="ds_hint-text" id="ds_hint">Select as many as you like</p>

        <div class="ds_field-group">
            <div class="ds_checkbox  ds_checkbox--small">
                <input class="ds_checkbox__input" id="education" type="checkbox">
                <label class="ds_checkbox__label" for="education">Education</label>
            </div>

            <div class="ds_checkbox  ds_checkbox--small">
                <input class="ds_checkbox__input" id="housing" type="checkbox">
                <label class="ds_checkbox__label" for="housing">Housing</label>
            </div>

            <div class="ds_checkbox  ds_checkbox--small">
                <input class="ds_checkbox__input" id="transport" type="checkbox">
                <label class="ds_checkbox__label" for="transport">Transport</label>
            </div>
        </div>
    </fieldset>
</form>

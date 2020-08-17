---
layout: example
parent: component.checkboxes
type: example
---
<form>
    <fieldset>
        <legend>What topics are you interested in?</legend>
        <p class="ds_hint-text">Select as many as you like</p>

        <div class="ds_field-group">
            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="stacked-1" name="group-name" type="checkbox" data-form="checkbox-topics-education">
                <label class="ds_checkbox__label" for="stacked-1">Education</label>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="stacked-2" name="group-name" type="checkbox" data-form="checkbox-topics-housing">
                <label class="ds_checkbox__label" for="stacked-2">Housing</label>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="stacked-3" name="group-name" type="checkbox" data-form="checkbox-topics-transport">
                <label class="ds_checkbox__label" for="stacked-3">Transport</label>
            </div>
        </div>
    </fieldset>
</form>

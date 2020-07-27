---
layout: example
parent: component.checkboxes
type: example
---
<form>
    <fieldset>
        <legend>What are you interested in?</legend>

        <div class="ds_field-group">
            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="stacked-1" name="group-name" type="checkbox" value="yes">
                <label class="ds_checkbox__label" for="stacked-1">Benefits and grants</label>
                <p class="ds_hint-text">Information on benefits, funds and grants, including Child Benefit and tax credits.</p>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="stacked-2" name="group-name" type="checkbox" value="no">
                <label class="ds_checkbox__label" for="stacked-2">Environment, farming and marine</label>
                <p class="ds_hint-text">Guidance on recycling, flooding, farming, fishing and conservation, including advice for businesses.</p>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="stacked-3" name="group-name" type="checkbox" value="maybe">
                <label class="ds_checkbox__label" for="stacked-3">Living in and visiting Scotland</label>
                <p class="ds_hint-text">Voting, charities, tourism and life in Scotland.</p>
            </div>
        </div>
    </fieldset>
</form>

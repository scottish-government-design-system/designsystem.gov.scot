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
                <input class="ds_checkbox__input" id="benefits" name="group-name" type="checkbox" data-form="checkbox-benefits">
                <label class="ds_checkbox__label" for="benefits">Benefits and grants</label>
                <p class="ds_hint-text">Information on benefits, funds and grants, including Child Benefit and tax credits.</p>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="environment" name="group-name" type="checkbox" data-form="checkbox-environment">
                <label class="ds_checkbox__label" for="environment">Environment, farming and marine</label>
                <p class="ds_hint-text">Guidance on recycling, flooding, farming, fishing and conservation, including advice for businesses.</p>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="living-in-scotland" name="group-name" type="checkbox" data-form="checkbox-living-in-scotland">
                <label class="ds_checkbox__label" for="living-in-scotland">Living in and visiting Scotland</label>
                <p class="ds_hint-text">Voting, charities, tourism and life in Scotland.</p>
            </div>
        </div>
    </fieldset>
</form>

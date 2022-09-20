---
layout: example
parent: component.checkboxes
type: example
---
<div class="ds_question">
    <fieldset>
        <legend>What are you interested in?</legend>

        <div class="ds_field-group">
            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="benefits" type="checkbox" aria-describedby="benefits_hint">
                <label class="ds_checkbox__label" for="benefits">Benefits and grants</label>
                <p class="ds_hint-text" id="benefits_hint">Information on benefits, funds and grants, including Child Benefit and tax credits.</p>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="environment" type="checkbox" aria-describedby="environment_hint">
                <label class="ds_checkbox__label" for="environment">Environment, farming and marine</label>
                <p class="ds_hint-text" id="environment_hint">Guidance on recycling, flooding, farming, fishing and conservation, including advice for businesses.</p>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="living-in-scotland" type="checkbox" aria-describedby="scotland_hint">
                <label class="ds_checkbox__label" for="living-in-scotland">Living in and visiting Scotland</label>
                <p class="ds_hint-text" id="scotland_hint">Voting, charities, tourism and life in Scotland.</p>
            </div>
        </div>
    </fieldset>
</div>

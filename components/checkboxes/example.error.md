---
layout: example
parent: component.checkboxes
type: example
sitemap: false
noindex: true
---
<div class="ds_question">
    <div class="ds_question  ds_question--error" id="error-id">
        <fieldset aria-describedby="ds_hint" aria-invalid="true">
            <legend>What topics are you interested in?</legend>
            <p class="ds_hint-text" id="ds_hint">Select an option</p>
            <p class="ds_question__error-message">This field is required</p>

            <div class="ds_field-group">
                <div class="ds_checkbox">
                    <input class="ds_checkbox__input" id="education" type="checkbox" />
                    <label class="ds_checkbox__label" for="education">Education</label>
                </div>

                <div class="ds_checkbox">
                    <input class="ds_checkbox__input" id="housing" type="checkbox" />
                    <label class="ds_checkbox__label" for="housing">Housing</label>
                </div>

                <div class="ds_checkbox">
                    <input class="ds_checkbox__input" id="transport" type="checkbox" />
                    <label class="ds_checkbox__label" for="transport">Transport</label>
                </div>
            </div>
        </fieldset>
    </div>
</div>

---
layout: example
parent: component.checkboxes
type: example
---
<div class="ds_question  ds_question--error">
    <fieldset aria-invalid="true">
        <legend>Do you receive any of these benefits?</legend>

        <p class="ds_question__error-message">
            Select which benefits you receive or select 'No, I do not receive any of these benefits'
        </p>

        <div class="ds_checkboxes" data-module="ds-checkboxes">
            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="universal-credit" type="checkbox" checked="true">
                <label class="ds_checkbox__label" for="universal-credit">Universal Credit</label>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="pension-credit" type="checkbox">
                <label class="ds_checkbox__label" for="pension-credit">Pension Credit</label>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="jsa" type="checkbox">
                <label class="ds_checkbox__label" for="jsa">Income-based Job Seeker's Allowance</label>
            </div>

            <p class="ds_checkbox-separator">or</p>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="none" type="checkbox" data-behaviour="exclusive" checked="true">
                <label class="ds_checkbox__label" for="none">No, I do not receive any of these benefits</label>
            </div>
        </div>
    </fieldset>
</div>

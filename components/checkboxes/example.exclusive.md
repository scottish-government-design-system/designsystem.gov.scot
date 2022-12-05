---
layout: example
parent: component.checkboxes
type: example
sitemap: false
noindex: true
---
<div class="ds_question">
    <fieldset>
        <legend>Do you receive any of these benefits?</legend>

        <div class="ds_checkboxes" data-module="ds-checkboxes">
            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="universal-credit" type="checkbox">
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
                <input class="ds_checkbox__input" id="none" type="checkbox" data-behaviour="exclusive">
                <label class="ds_checkbox__label" for="none">No, I do not receive any of these benefits</label>
            </div>
        </div>
    </fieldset>
</div>

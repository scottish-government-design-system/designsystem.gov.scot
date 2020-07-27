---
layout: example
parent: component.radio-buttons
type: example
---
<form>
    <fieldset>
        <legend>Was this page useful?</legend>
        <p class="ds_hint-text">Select an option</p>

        <div class="ds_field-group">
            <div class="ds_radio">
                <input class="ds_radio__input" id="XXXXX-2stack" name="group-name-2" type="radio" value="yes">
                <label class="ds_radio__label" for="XXXXX-2stack">Yes</label>
            </div>

            <div class="ds_radio">
                <input checked class="ds_radio__input" id="YYYYY-2stack" name="group-name-2" type="radio" value="no">
                <label class="ds_radio__label" for="YYYYY-2stack">No</label>

                <div class="ds_reveal-content">
                    <label class="ds_label" for="textarea">Why was this page not useful?</label><br />
                    <textarea rows="4" class="ds_input" id="textarea2"></textarea>
                </div>
            </div>

            <div class="ds_radio">
                <input class="ds_radio__input" id="ZZZZZ-2stack" name="group-name-2" type="radio" value="maybe">
                <label class="ds_radio__label" for="ZZZZZ-2stack">Maybe</label>

                <div class="ds_reveal-content">
                    <label class="ds_label" for="textarea">What could improve this page?</label><br />
                    <textarea rows="4" class="ds_input" id="textarea3"></textarea>
                </div>
            </div>
        </div>
    </fieldset>
</form>

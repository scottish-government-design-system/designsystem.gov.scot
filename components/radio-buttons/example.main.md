---
layout: example
parent: component.radio-buttons
type: example
sitemap: false
noindex: true
---
<form>
    <fieldset>
        <legend>Was this page useful?</legend>
        <p class="ds_hint-text">Select an option</p>

        <div class="ds_field-group">
            <div class="ds_radio">
                <input class="ds_radio__input" id="useful-yes" name="feedback-type" type="radio" value="yes">
                <label class="ds_radio__label" for="useful-yes">Yes</label>
            </div>

            <div class="ds_radio">
                <input class="ds_radio__input" id="useful-no" name="feedback-type" type="radio" value="no">
                <label class="ds_radio__label" for="useful-no">No</label>
            </div>

            <div class="ds_radio">
                <input class="ds_radio__input" id="useful-maybe" name="feedback-type" type="radio" value="maybe">
                <label class="ds_radio__label" for="useful-maybe">Maybe</label>
            </div>
        </div>
    </fieldset>
</form>

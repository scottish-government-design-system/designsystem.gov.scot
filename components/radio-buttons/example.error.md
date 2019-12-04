---
layout: example
parent: component.radio-buttons
type: example
---
<form>
    <div class="ds_question  ds_question--error" id="error-id-one">
        <fieldset>
            <legend>Did this resolve your issue?</legend>
            <p class="ds_hint-text">Hint text</p>
            <p class="ds_question__message">This field is required</p>

            <div class="ds_field-group">
                <div class="ds_radio">
                    <input class="ds_radio__input" id="error-1" name="group-name" type="radio" value="yes">
                    <label class="ds_radio__label" for="error-1">Yes</label>
                </div>

                <div class="ds_radio">
                    <input class="ds_radio__input" id="error-2" name="group-name" type="radio" value="no">
                    <label class="ds_radio__label" for="error-2">No</label>

                    <div class="ds_reveal-content">
                        <p><strong>Next step:</strong> <a href="#">leave us some feedback</a>.</p>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</form>

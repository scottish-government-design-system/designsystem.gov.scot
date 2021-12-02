---
layout: example
parent: pattern.cookies-page
type: example
index: 0
---

<div class="ds_card form-box" style="background: #fafafa; padding: 16px; margin-bottom: 32px;" data-module="cookie-preferences" id="cookie-form">

<form id="cookie-preferences">

<h3>Cookies needed for the website to work</h3>

<p>These cookies do things like keep the website secure. They always need to be on.</p>

<fieldset>
    <legend>Cookies that remember your settings</legend>
    <p>These cookies do things like remember pop-ups you’ve seen, so you're not shown them again.</p>

    <div class="ds_field-group  ds_field-group--inline">
        <div class="ds_radio">
            <input class="ds_radio__input" id="preferences-yes" name="cookie-preferences" type="radio" value="true" data-form="radio-cookie-preferences-true" checked="true">
            <label class="ds_radio__label" for="preferences-yes">On</label>
        </div>

        <div class="ds_radio">
            <input class="ds_radio__input" id="preferences-no" name="cookie-preferences" type="radio" value="false" data-form="radio-cookie-preferences-false">
            <label class="ds_radio__label" for="preferences-no">Off</label>
        </div>
    </div>
</fieldset>

<fieldset>
    <legend>Cookies that measure website use</legend>
    <p>These cookies store information about how you use our website, such as what you click on.</p>

    <div class="ds_field-group  ds_field-group--inline">
        <div class="ds_radio">
            <input class="ds_radio__input" id="statistics-yes" name="cookie-statistics" type="radio" value="true" data-form="radio-cookie-statistics-true" checked="true">
            <label class="ds_radio__label" for="statistics-yes">On</label>
        </div>

        <div class="ds_radio">
            <input class="ds_radio__input" id="statistics-no" name="cookie-statistics" type="radio" value="false" data-form="radio-cookie-statistics-false">
            <label class="ds_radio__label" for="statistics-no">Off</label>
        </div>
    </div>
</fieldset>

<button data-button="button-cookie-save" class="ds_button  ds_no-margin" type="submit">Save cookie preferences</button>

</form>
</div>
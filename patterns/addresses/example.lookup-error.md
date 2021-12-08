---
layout: example
parent: pattern.addresses
type: example
---

<fieldset>
    <div class="ds_question  ds_question--error">
        <label class="ds_label" for="address-postcode">
            Postcode
        </label>
        <p class="ds_question__error-message" id="postcode-error">Please enter a valid postcode</p>
        <input class="ds_input  ds_input--fixed-10  ds_input--error" type="text" name="address-postcode" id="address-postcode" aria-describedby="postcode-error" autocomplete="postal-code" value="Not a postcode"/>
    </div>
    <button class="ds_button  ds_no-margin--top" type="submit">Find address</button>
</fieldset>
<button class="ds_link  ds_no-margin">Or type in your full address</button>
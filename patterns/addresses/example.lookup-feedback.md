---
layout: example
parent: pattern.addresses
type: example
---

<fieldset>
  <div class="ds_question">
      <label class="ds_label" for="address-postcode">
          Postcode
      </label>
      <input class="ds_input  ds_input--fixed-10" type="text" name="address-postcode" id="address-postcode" autocomplete="postal-code" value="EH6 6BB"/>
  </div>
  <button class="ds_button  ds_no-margin--top" type="submit">Find address</button>
  <div class="ds_inset-text">
      <div class="ds_inset-text__text">
          <h3>No results found for this postcode</h3>
          If you can't find your address, you should check whether it's listed with <a href="https://www.royalmail.com/find-a-postcode" target="_blank">Royal Mail</a>. If your address is listed with Royal Mail, but we still can't find it, you should send your address to us: <a href="mailto:PostcodeQuery@gov.scot">PostcodeQuery@gov.scot</a>.
      </div>
  </div>
</fieldset>
<button class="ds_link  ds_no-margin">Or type in your full address</button>
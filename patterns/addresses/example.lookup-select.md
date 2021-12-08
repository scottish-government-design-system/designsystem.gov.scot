---
layout: example
parent: pattern.addresses
type: example
---

<dl aria-label="Your current answers">
  <dt>Postcode</dt>
  <dd>
    EH6 6QQ
    <button class="ds_link">Change <span class="visually-hidden">your answer for: <q>Postcode</q></span></button>
  </dd>
</dl>
<fieldset>
  <div class="ds_question">
    <label class="ds_label" for="postcode">Select an address</label>
    <div class="ds_select-wrapper">
      <select class="ds_select">
        <option value=""></option>
        <option value="address-1">1 Street, Edinburgh, EH6 6QQ</option>
        <option value="address-2">2 Street, Edinburgh, EH6 6QQ</option>
        <option value="address-3">3 Street, Edinburgh, EH6 6QQ</option>
        <option value="address-4">4 Street, Edinburgh, EH6 6QQ</option>
        <option value="address-5">5 Street, Edinburgh, EH6 6QQ</option>
        <option value="address-6">6 Street, Edinburgh, EH6 6QQ</option>
      </select>
      <span class="ds_select-arrow" aria-hidden="true"></span>
    </div>
  </div>
  <button class="ds_button  ds_no-margin--top" type="submit">Use this address</button>
</fieldset>
<button class="ds_link  ds_no-margin">Or type in your full address</button>
---
layout: example
parent: component.select
type: example
index: 0
---
<div>
<label class="ds_label" for="select">Select</label>
<div class="ds_select-wrapper  ds_input--fluid-one-third">
<select class="ds_select">
    <option data-form="select-mushroom-none"></option>
    <option data-form="select-mushroom-amanita">Amanita</option>
    <option data-form="select-mushroom-boletus">Boletus</option>
    <option data-form="select-mushroom-coprinopsis">Coprinopsis</option>
</select>
<span class="ds_select-arrow" aria-hidden="true"></span>
</div>
</div>
<script>
const selects = [].slice.call(document.querySelectorAll('.ds_select'));
selects.forEach(select => {
    select.addEventListener('change', (e) => {
        window.dataLayer = window.dataLayer || {};
        window.dataLayer.push({ 'data-form': e.target.querySelector(':checked').dataset.form });
    });
});
</script>

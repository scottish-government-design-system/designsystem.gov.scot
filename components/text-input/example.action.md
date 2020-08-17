---
layout: example
parent: component.text-input
type: example
index: 0
---

<div>
    <label class="ds_label" for="textinput-search">Search</label>

    <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
        <input class="ds_input  ds_input--fixed-20" type="text" id="textinput-search" data-form="textinput-search-term" />
        <a href="#" class="ds_button  ds_button--icon-only" data-button="button-search-submit">
            <span class="visually-hidden">Search</span>
            <svg class="ds_icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
        </a>
    </div>
</div>

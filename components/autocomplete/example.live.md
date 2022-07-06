---
layout: example
parent: component.autocomplete
type: example
script: autocomplete-demo
minheight: 408px
---

<div class="ds_site-search  ds_autocomplete" id="site-search-autocomplete">
    <form role="search" class="ds_site-search__form" method="GET" action="/path/to/search/">
        <label class="ds_label  visually-hidden" for="site-search" id="site-search-label">Search</label>
        <div id="autocomplete-status" class="visually-hidden"></div>

        <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
            <input
                aria-autocomplete="list"
                aria-expanded="false"
                aria-owns="autocomplete-suggestions"
                autocomplete="off"
                class="ds_input  ds_site-search__input  js-autocomplete-input"
                haspopup="true"
                id="site-search"
                name="q"
                placeholder="Search"
                required=""
                type="search"
            />
            <input name="cat" value="sitesearch" hidden>

            <button type="submit" class="ds_button">
                <span class="visually-hidden">Search gov.scot</span>
                <svg class="ds_icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#search"></use></svg>
            </button>

            <div id="autocomplete-suggestions" class="ds_autocomplete__suggestions">
                <ol class="ds_autocomplete__suggestions-list" role="listbox" aria-labelledby="site-search-label"></ol>
            </div>
        </div>
    </form>
</div>

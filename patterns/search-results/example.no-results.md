---
layout: example
parent: pattern.search-results
type: example
index: 0
---

<div class="ds_search-results">

<div class="ds_site-search">
    <form role="search" class="ds_site-search__form">
        <label class="ds_label  visually-hidden" for="site-search">Search</label>

        <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
            <input name="q" required="" id="site-search" class="ds_input  ds_site-search__input" type="text" value="xyzuhsdfhbjh" placeholder="Search" autocomplete="off">

            <button type="submit" class="ds_button  js-site-search-button">
                <span class="visually-hidden">Search</span>
                <svg class="ds_icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
            </button>
        </div>
    </form>
</div>

<section id="search-results" class="ds_search-results" aria-labelledby="search-results__heading">

    <h2 class="visually-hidden" id="search-results__heading">Search results</h2>

    <div class="ds_no-search-results">
        <p><strong>There are no matching results.</strong></p>

        <p>Improve your search results by:</p>
        <ul>
            <li>double-checking your spelling</li>
            <li>using fewer keywords</li>
            <li>searching for something less specific</li>
        </ul>
    </div>

</section>

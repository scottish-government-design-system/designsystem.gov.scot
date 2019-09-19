---
layout: example
parent: pattern.search-results
type: example
index: 0
---

<div class="ds_search-results">

<div class="ds_site-search">
    <form role="search" class="ds_site-search__form">
        <label class="ds_site-search__label visually-hidden" for="site-search">Search</label>

        <div class="ds_site-search__input-group">
            <input name="q" required="" id="site-search" class="ds_site-search__input" type="text" placeholder="Search" value="crogting" autocomplete="off">

            <button type="submit" title="search" class="ds_site-search__button  button  button--primary">
                <svg class="ds_icon  ds_site-search__icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>

                <span class="visually-hidden">Search mygov.scot</span>
            </button>
        </div>
    </form>
</div>

<nav id="suggestions" class="ds_search-suggestions" aria-label="Alternative search suggestions">
    <span aria-hidden="true">Did you mean:</span>

    <ul>
        <li>
            <a data-search="suggestion-result-1/2" aria-label="Did you mean 'crafting'?" href="#">crafting</a>
        </li>
        <li>
            <a data-search="suggestion-result-2/2" aria-label="Did you mean 'crofting'?" href="#">crofting</a>
        </li>
    </ul>
</nav>

<section id="search-results" class="ds_search-results">

    <h2 class="visually-hidden">Search results</h2>

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

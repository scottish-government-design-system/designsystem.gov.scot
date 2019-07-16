---
layout: example
parent: pattern.search-results
type: example
index: 0
---

<div class="search-results">

<div class="site-search">
    <form role="search" class="site-search__form">
        <input name="q" required="" id="site-search" class="site-search__input" type="text" placeholder="Search" value="crogting" autocomplete="off">
        <label class="site-search__label visually-hidden" for="site-search">Search</label>

        <button type="submit" title="search" class="site-search__button  button  button--primary">
            <svg class="icon  site-search__icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#search"></use></svg>

            <span class="visually-hidden">Search mygov.scot</span>
        </button>
    </form>
</div>

<nav id="suggestions" class="search-suggestions" aria-label="Alternative search suggestions">
    <span aria-hidden="true">Did you mean:</span>

    <ul>
        <li>
            <a aria-label="Did you mean 'crafting'?" href="#">crafting</a>
        </li>
        <li>
            <a aria-label="Did you mean 'crofting'?" href="#">crofting</a>
        </li>
    </ul>
</nav>

<section id="search-results" class="search-results">

    <h2 class="visually-hidden">Search results</h2>

    <div class="no-search-results">
        <p><strong>There are no matching results.</strong></p>

        <p>Improve your search results by:</p>
        <ul>
            <li>double-checking your spelling</li>
            <li>using fewer keywords</li>
            <li>searching for something less specific</li>
        </ul>
    </div>

</section>

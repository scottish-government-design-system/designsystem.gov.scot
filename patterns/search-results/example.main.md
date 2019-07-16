---
layout: example
parent: pattern.search-results
type: example
index: 0
note: This example has been truncated to three search results to conserve space.
---

<div class="search-results">

<div class="site-search">
    <form role="search" class="site-search__form">
        <input name="q" required="" id="site-search" class="site-search__input" type="text" placeholder="Search" value="crofting" autocomplete="off">
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
    </ul>
</nav>

<section id="search-results" class="search-results">

    <h2 class="visually-hidden">Search results</h2>

    <p class="search-results__count js-search-results-count"><b>68</b> results</p>

    <ol id="search-results-list" class="search-results__list">
        <li class="search-result">
            <a class="search-result__link" href="#" title="Crofting community right to buy">
                <header class="search-result__header">
                    <div class="search-result__metadata">
                        <div class="search-result__label">Policy</div>
                    </div>

                    <h2 class="gamma  search-result__title">Crofting community right to buy</h2>
                </header>

                <p class="search-result__summary">Information and guidance regarding the crofting community right to buy.</p>
            </a>
        </li>

        <li class="search-result">
            <a class="search-result__link" href="#" title="Crofting consultation 2017">
                <header class="search-result__header">
                    <div class="search-result__metadata">
                        <div class="search-result__label">Consultation paper</div>
                        <div class="search-result__date">28 Aug 2017</div>
                    </div>

                    <h2 class="gamma  search-result__title">Crofting consultation 2017</h2>
                </header>

                <p class="search-result__summary">We are seeking the views of crofters, and those with an interest, on the pathway of any potential new legislation to reform crofting law.</p>
            </a>
        </li>

        <li class="search-result">
            <a class="search-result__link" href="#" title="Crofting Elections 2017: consultation responses analysis">
                <header class="search-result__header">
                    <div class="search-result__metadata">
                        <div class="search-result__label">Consultation analysis</div>
                        <div class="search-result__date">01 Sep 2016</div>
                    </div>

                    <h2 class="gamma  search-result__title">Crofting Elections 2017: consultation responses analysis</h2>
                </header>

                <p class="search-result__summary">Analysis of the responses to the Crofting Elections 2017 consultation.</p>
            </a>
        </li>
    </ol>

    <nav class="search-results__pagination">Pagination (not yet in pattern library)</nav>
</section>

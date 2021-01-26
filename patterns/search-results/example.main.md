---
layout: example
parent: pattern.search-results
type: example
index: 0
note: This example has been truncated to three search results to conserve space.
---

<div class="ds_search-results">

<div class="ds_site-search">
    <form role="search" class="ds_site-search__form">
        <label class="ds_label  visually-hidden" for="site-search">Search</label>

        <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
            <input name="q" required="" id="site-search" class="ds_input  ds_site-search__input" type="text" value="crofting" placeholder="Search" autocomplete="off">

            <button type="submit" class="ds_button  ds_button--icon-only  js-site-search-button">
                <span class="visually-hidden">Search</span>
                <svg class="ds_icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
            </button>
        </div>
    </form>
</div>

<nav id="suggestions" class="ds_search-suggestions" aria-label="Alternative search suggestions">
    <span aria-hidden="true">Did you mean:</span>

    <ul>
        <li>
            <a aria-label="Did you mean 'crafting'?" href="#">crafting</a>
        </li>
    </ul>
</nav>

<section id="search-results" class="ds_search-results">

    <h2 class="visually-hidden">Search results</h2>

    <p class="ds_search-results__count js-search-results-count"><b>68</b> results</p>

    <ol id="search-results-list" class="ds_search-results__list" data-total="68">
        <li class="ds_search-result">
            <header class="ds_search-result__header">
                <dl class="ds_search-result__metadata  ds_metadata  ds_metadata--inline">
                    <span class="ds_metadata__item">
                        <dt class="ds_metadata__key  visually-hidden">Type</dt>
                        <dd class="ds_metadata__value  ds_content-label">Policy</dd>
                    </span>
                </dl>

                <h2 class="gamma  ds_search-result__title">
                    <a class="ds_search-result__link" href="#">Crofting community right to buy</a>
                </h2>
            </header>

            <p class="ds_search-result__summary">Information and guidance regarding the crofting community right to buy.</p>
        </li>

        <li class="ds_search-result">
            <header class="ds_search-result__header">
                <dl class="ds_search-result__metadata  ds_metadata  ds_metadata--inline">
                    <span class="ds_metadata__item">
                        <dt class="ds_metadata__key  visually-hidden">Type</dt>
                        <dd class="ds_metadata__value  ds_content-label">Consultation paper</dd>
                    </span>

                    <span class="ds_metadata__item">
                        <dt class="ds_metadata__key  visually-hidden">Publication date</dt>
                        <dd class="ds_metadata__value">28 Aug 2017</dd>
                    </span>
                </dl>

                <h2 class="gamma  ds_search-result__title">
                    <a class="ds_search-result__link" href="#">Crofting consultation 2017</a>
                </h2>
            </header>

            <p class="ds_search-result__summary">We are seeking the views of crofters, and those with an interest, on the pathway of any potential new legislation to reform crofting law.</p>
        </li>

        <li class="ds_search-result">
            <header class="ds_search-result__header">
                <dl class="ds_search-result__metadata  ds_metadata  ds_metadata--inline">
                    <span class="ds_metadata__item">
                        <dt class="ds_metadata__key  visually-hidden">Type</dt>
                        <dd class="ds_metadata__value  ds_content-label">Consultation analysis</dd>
                    </span>

                    <span class="ds_metadata__item">
                        <dt class="ds_metadata__key  visually-hidden">Publication date</dt>
                        <dd class="ds_metadata__value"><time datetime="2016-09-01">01 Sep 2016</time></dd>
                    </span>
                </dl>

                <h2 class="gamma  ds_search-result__title">
                    <a class="ds_search-result__link" href="#">Crofting Elections 2017: consultation responses analysis</a>
                </h2>
            </header>

            <p class="ds_search-result__summary">Analysis of the responses to the Crofting Elections 2017 consultation.</p>
        </li>
    </ol>

    <nav class="ds_pagination" aria-label="Search pages">
        <div class="ds_pagination__load-more">
            <button class="ds_button">Load more</button>
        </div>

        <ul class="ds_pagination__list">
            <li class="ds_pagination__item" aria-current="page">
                <span class="ds_pagination__link  ds_current">1</span>
            </li>

            <li class="ds_pagination__item">
                <a href="#" class="ds_pagination__link">2</a>
            </li>

            <li class="ds_pagination__item">
                <a href="#" class="ds_pagination__link">3</a>
            </li>

            <li class="ds_pagination__item">
                <a href="#" class="ds_pagination__link">4</a>
            </li>

            <li class="ds_pagination__item">
                <a href="#" class="ds_pagination__link">5</a>
            </li>

            <li class="ds_pagination__item">
                <a href="#" class="ds_pagination__link">6</a>
            </li>

            <li class="ds_pagination__item">
                <a href="#" class="ds_pagination__link">7</a>
            </li>

            <li class="ds_pagination__item" aria-hidden="true">
                <span class="ds_pagination__link  ds_pagination__link--ellipsis">&hellip;</span>
            </li>

            <li class="ds_pagination__item">
                <a href="#" class="ds_pagination__link  ds_pagination__link--text">Next</a>
            </li>
        </ul>
    </nav>
</section>

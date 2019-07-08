---
layout: example
parent: component.site-header
type: example
scripts:
  - /components/site-search/script.js
index: 0
---

<header class="site-header" role="banner">
    <div class="wrapper">
        <div class="site-header__content">
            <div class="site-header__branding  branding">
                <a class="branding__logo  branding__link" href="/">
                    <img class="branding__logo-image" src="/assets/patternlib/images/logos/digital-scotland.svg" alt="Digital Scotland">
                </a>

                <div class="branding__title">
                    <a class="branding__link" href="#">Pattern library</a>
                </div>
            </div>

            <div class="site-search  site-search--collapsible">
                <form role="search" class="site-search__form">
                    <input name="q" required="" id="site-search" class="site-search__input" type="text" placeholder="Search" autocomplete="off">
                    <label class="site-search__label visually-hidden" for="site-search">Search</label>

                    <button type="submit" title="search" class="site-search__button  button  button--primary">
                        <img alt="" class="site-search__icon" src="/assets/images/icons/search-white_@2x.png">
                        <span class="visually-hidden">Search mygov.scot</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</header>

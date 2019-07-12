---
layout: example
parent: component.site-search
type: example
scripts:
  - /components/site-search/script.js
index: 0
---

<div class="site-search">
    <form role="search" class="site-search__form">
        <input name="q" required="" id="site-search" class="site-search__input" type="text" placeholder="Search" autocomplete="off">
        <label class="site-search__label visually-hidden" for="site-search">Search</label>

        <button type="submit" title="search" class="site-search__button  button  button--primary">
            <svg class="icon  site-search__icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#search"></use></svg>

            <span class="visually-hidden">Search mygov.scot</span>
        </button>
    </form>
</div>

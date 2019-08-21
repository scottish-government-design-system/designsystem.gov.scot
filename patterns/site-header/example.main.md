---
layout: example
parent: pattern.site-header
type: example
scripts:
  - /components/site-search/script.js
  - /components/primary-navigation/script.js
index: 0
style: '.example-frame__content {padding: 0;}'
minheight: '427px'
---

<header class="site-header  site-header--gradient" role="banner">
    <div class="wrapper">
        <div class="site-header__content">
            <div class="site-branding">
                <a data-navigation="logo" class="site-branding__logo  site-branding__link" href="/">
                    <img class="site-branding__logo-image" src="/assets/patternlib/images/logos/digital-scotland.svg" alt="Digital Scotland" />
                </a>

                <div class="site-branding__title">
                    <a data-navigation="title" class="site-branding__link" href="/">Pattern Library</a>
                </div>
            </div>

            <div class="site-header__search  site-search  site-search--collapsible">
                <form role="search" class="site-search__form">
                    <label class="site-search__label visually-hidden" for="site-search">Search</label>

                    <div class="site-search__input-group">
                        <input name="q" required="" id="site-search" class="site-search__input" type="text" placeholder="Search" autocomplete="off">

                        <button type="submit" title="search" class="site-search__button  button  button--primary">
                            <svg class="icon  site-search__icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#search"></use></svg>
                            <span class="visually-hidden">Search mygov.scot</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <nav role="navigation">
            <button class="js-toggle-menu  mobile-navigation__button" aria-expanded="false" aria-controls="mobile-navigation-menu">
                <span class="site-header__control-text">Menu</span>

                <svg class="icon  site-header__control-icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#menu-21"></use></svg>
                <svg class="icon  site-header__control-icon--close  site-header__control-icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#close-21"></use></svg>
            </button>

            <div id="mobile-navigation-menu" class="mobile-navigation" data-offsetselector=".site-header">
                <div class="mobile-navigation__content">

                    <div class="mobile-navigation__block">
                        <div class="site-search">
                            <form role="search" class="site-search__form">
                                <label class="site-search__label visually-hidden" for="site-search">Search</label>

                                <div class="site-search__input-group">
                                    <input name="q" required="" id="site-search" class="site-search__input" type="text" placeholder="Search" autocomplete="off">

                                    <button type="submit" title="search" class="site-search__button  button  button--primary">
                                        <svg class="icon  site-search__icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#search"></use></svg>

                                        <span class="visually-hidden">Search mygov.scot</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="mobile-navigation__block">
                        <ul class="mobile-navigation__list">
                            <li class="mobile-navigation__item">
                                <a href="#" class="mobile-navigation__link">
                                    Get started
                                </a>
                            </li>
                            <li class="mobile-navigation__item">
                                <a href="#" class="mobile-navigation__link">
                                    Styles
                                </a>
                            </li>
                            <li class="mobile-navigation__item">
                                <span class="mobile-navigation__link  current">
                                    Components
                                </span>
                            </li>
                            <li class="mobile-navigation__item">
                                <a href="#" class="mobile-navigation__link">
                                    Patterns
                                </a>
                            </li>
                        </ul>
                    </div>

                    <button type="button" class="mobile-navigation__backdrop  js-close-menu" aria-expanded="false" aria-controls="mobile-navigation-menu">
                        <span class="visually-hidden">Close menu</span>
                    </button>
                </div>
            </div>
        </nav>
    </div>


    <div class="site-header__navigation">
        <div class="wrapper">
            <nav class="site-navigation">
                <ul class="site-navigation__list">
                    <li class="site-navigation__item">
                        <a href="#" class="site-navigation__link">
                            Get started
                        </a>
                    </li>
                    <li class="site-navigation__item">
                        <a href="#" class="site-navigation__link">
                            Styles
                        </a>
                    </li>
                    <li class="site-navigation__item">
                        <span class="site-navigation__link  current">
                            Components
                        </span>
                    </li>
                    <li class="site-navigation__item">
                        <a href="#" class="site-navigation__link">
                            Patterns
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>

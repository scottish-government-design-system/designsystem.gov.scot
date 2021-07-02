---
layout: example
parent: pattern.site-header
type: example
index: 0
style: '.example-frame__content {padding: 0;}'
minheight: '427px'
---

<header class="ds_site-header  ds_site-header--gradient" role="banner">
    <div class="ds_wrapper">
        <div class="ds_site-header__content">
            <div class="ds_site-branding">
                <a class="ds_site-branding__logo  ds_site-branding__link" href="/">
                    <img class="ds_site-branding__logo-image" src="/assets/images/logos/digital-scotland.svg" alt="Digital Scotland" />
                </a>

                <div class="ds_site-branding__title">
                    Design System
                </div>
            </div>
        
            <div class="ds_site-header__controls">
                <label aria-controls="mobile-navigation" class="ds_site-header__control  js-toggle-menu" for="menu">
                    <span class="ds_site-header__control-text">Menu</span>
                    <svg class="ds_icon  ds_site-header__control-icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#menu"></use></svg>
                    <svg class="ds_icon  ds_site-header__control-icon  ds_site-header__control-icon--active-icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#close"></use></svg>
                </label>
            </div>

            <input class="ds_site-navigation__toggle" id="menu" type="checkbox"/>
            <nav id="mobile-navigation" class="ds_site-navigation  ds_site-navigation--mobile" data-module="ds-mobile-navigation-menu">
                <ul class="ds_mobile-navigation__list">
                    <li class="ds_mobile-navigation__item">
                        <a href="#" class="ds_mobile-navigation__link">
                            Get started
                        </a>
                    </li>
                    <li class="ds_mobile-navigation__item">
                        <a href="#" class="ds_mobile-navigation__link">
                            Styles
                        </a>
                    </li>
                    <li class="ds_mobile-navigation__item">
                        <span class="ds_mobile-navigation__link  ds_current">
                            Components
                        </span>
                    </li>
                    <li class="ds_mobile-navigation__item">
                        <a href="#" class="ds_mobile-navigation__link">
                            Patterns
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="ds_site-search  ds_site-header__search" data-module="ds-site-search">
                <form role="search" class="ds_site-search__form">
                    <label class="ds_label  visually-hidden" for="site-search">Search</label>

                    <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
                        <input name="q" required="" id="site-search" class="ds_input  ds_site-search__input" type="text" placeholder="Search" autocomplete="off" />

                        <button type="submit" class="ds_button  js-site-search-button">
                            <span class="visually-hidden">Search</span>
                            <svg class="ds_icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="ds_site-header__navigation">
        <div class="ds_wrapper">
            <nav class="ds_site-navigation">
                <ul class="ds_site-navigation__list">
                    <li class="ds_site-navigation__item">
                        <a href="#" class="ds_site-navigation__link">
                            Get started
                        </a>
                    </li>
                    <li class="ds_site-navigation__item">
                        <a href="#" class="ds_site-navigation__link">
                            Styles
                        </a>
                    </li>
                    <li class="ds_site-navigation__item">
                        <span class="ds_site-navigation__link  ds_current">
                            Components
                        </span>
                    </li>
                    <li class="ds_site-navigation__item">
                        <a href="#" class="ds_site-navigation__link">
                            Patterns
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>

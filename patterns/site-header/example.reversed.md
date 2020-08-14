---
layout: example
parent: pattern.site-header
type: example
index: 0
style: '.example-frame__content {padding: 0;}'
minheight: '427px'
---

<header class="ds_site-header  ds_reversed" role="banner">
    <div class="ds_wrapper">
        <div class="ds_site-header__content">
            <div class="ds_site-branding">
                <a data-navigation="logo" class="ds_site-branding__logo  ds_site-branding__link" href="/">
                    <img class="ds_site-branding__logo-image" src="/assets/images/logos/digital-scotland--reversed.svg" alt="Digital Scotland" />
                </a>

                <div class="ds_site-branding__title">
                    <a data-navigation="title" class="ds_site-branding__link" href="/">Design System</a>
                </div>
            </div>

            <div class="ds_site-header__search  ds_site-search  ds_site-search--collapsible" data-module="ds-site-search">
                <form role="search" class="ds_site-search__form">
                    <label class="ds_label  visually-hidden" for="site-search">Search</label>

                    <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
                        <input name="q" required="" id="site-search" class="ds_input  ds_site-search__input" type="text" placeholder="Search" autocomplete="off">

                        <button type="submit" class="ds_button  ds_button--icon-only  js-site-search-button" data-button="data-search-submit">
                            <span class="visually-hidden">Search</span>
                            <svg class="ds_icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <nav data-module="ds-mobile-navigation-menu">
            <button class="js-toggle-menu  ds_mobile-navigation__button" aria-expanded="false" aria-controls="mobile-navigation-menu" data-button="button-menu-toggle">
                <span class="ds_site-header__control-text">Menu</span>

                <svg class="ds_icon  ds_site-header__control-icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#menu-21"></use></svg>
                <svg class="ds_icon  ds_site-header__control-icon--close  ds_site-header__control-icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#close-21"></use></svg>
            </button>

            <div id="mobile-navigation-menu" class="ds_mobile-navigation" data-offsetselector=".ds_site-header">
                <div class="ds_mobile-navigation__content">

                    <div class="ds_mobile-navigation__block">
                        <div class="ds_site-search">
                            <form role="search" class="ds_site-search__form">
                                <label class="ds_label  visually-hidden" for="site-search--mobile">Search</label>

                                <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
                                    <input name="q" required="" id="site-search--mobile" class="ds_input  ds_site-search__input" type="text" placeholder="Search" autocomplete="off">

                                    <button type="submit" class="ds_button  ds_button--icon-only  js-site-search-button" data-button="button-search-sumbit">
                                        <span class="visually-hidden">Search</span>
                                        <svg class="ds_icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="ds_mobile-navigation__block">
                        <ul class="ds_mobile-navigation__list">
                            <li class="ds_mobile-navigation__item">
                                <a href="#" data-device="mobile" data-header="header-link-1" class="ds_mobile-navigation__link">
                                    Get started
                                </a>
                            </li>
                            <li class="ds_mobile-navigation__item">
                                <a href="#" data-device="mobile" data-header="header-link-2" class="ds_mobile-navigation__link">
                                    Styles
                                </a>
                            </li>
                            <li class="ds_mobile-navigation__item">
                                <span class="ds_mobile-navigation__link  ds_current">
                                    Components
                                </span>
                            </li>
                            <li class="ds_mobile-navigation__item">
                                <a href="#" data-device="mobile" data-header="header-link-4" class="ds_mobile-navigation__link">
                                    Patterns
                                </a>
                            </li>
                        </ul>
                    </div>

                    <button type="button" class="ds_mobile-navigation__backdrop  js-close-menu" aria-expanded="false" aria-controls="mobile-navigation-menu" data-button="button-menu-close">
                        <span class="visually-hidden">Close menu</span>
                    </button>
                </div>
            </div>
        </nav>
    </div>

    <div class="ds_site-header__navigation">
        <div class="ds_wrapper">
            <nav class="ds_site-navigation">
                <ul class="ds_site-navigation__list">
                    <li class="ds_site-navigation__item">
                        <a href="#" data-device="desktop" data-header="header-link-1" class="ds_site-navigation__link">
                            Get started
                        </a>
                    </li>
                    <li class="ds_site-navigation__item">
                        <a href="#" data-device="desktop" data-header="header-link-2" class="ds_site-navigation__link">
                            Styles
                        </a>
                    </li>
                    <li class="ds_site-navigation__item">
                        <span class="ds_site-navigation__link  ds_current">
                            Components
                        </span>
                    </li>
                    <li class="ds_site-navigation__item">
                        <a href="#" data-device="desktop" data-header="header-link-4" class="ds_site-navigation__link">
                            Patterns
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>

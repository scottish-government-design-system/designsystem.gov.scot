---
layout: example
parent: component.site-navigation
type: example
index: 0
scripts:
  - /components/site-navigation/script.js
---

<nav role="navigation">
    <button class="js-toggle-menu  mobile-navigation__button" aria-expanded="false" aria-controls="mobile-navigation-menu">
        <span class="site-header__control-text">Menu</span>

        <svg class="icon  site-header__control-icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#menu-21"></use></svg>
        <svg class="icon  site-header__control-icon--close  site-header__control-icon" role="img"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#close-21"></use></svg>
    </button>

    <div id="mobile-navigation-menu" class="mobile-navigation  mobile-navigation" data-offsetselector=".site-header">
        <div class="mobile-navigation__content">

            <div class="mobile-navigation__block">
                <ul class="mobile-navigation__list">
                    <li class="mobile-navigation__item">
                        <a data-header="header-link-1" href="#" class="mobile-navigation__link">
                            Get started
                        </a>
                    </li>
                    <li class="mobile-navigation__item">
                        <a data-header="header-link-2" href="#" class="mobile-navigation__link">
                            Styles
                        </a>
                    </li>
                    <li class="mobile-navigation__item">
                        <span class="mobile-navigation__link  mobile-navigation__link--current">
                            Components
                        </span>
                    </li>
                    <li class="mobile-navigation__item">
                        <a data-header="header-link-4" href="#" class="mobile-navigation__link">
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

<nav class="site-navigation">
    <ul class="site-navigation__list">
        <li class="site-navigation__item">
            <a data-header="header-link-1" href="#" class="site-navigation__link">
                Get started
            </a>
        </li>
        <li class="site-navigation__item">
            <a data-header="header-link-2" href="#" class="site-navigation__link">
                Styles
            </a>
        </li>
        <li class="site-navigation__item">
            <span class="site-navigation__link  current">
                Components
            </span>
        </li>
        <li class="site-navigation__item">
            <a data-header="header-link-4" href="#" class="site-navigation__link">
                Patterns
            </a>
        </li>
    </ul>
</nav>

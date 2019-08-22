---
layout: example
parent: pattern.side-navigation
type: example
index: 0
scripts:
  - /patterns/side-navigation/script.js
minheight: 581px
---

<nav role="navigation" aria-label="Sections" class="side-navigation">
    <input type="checkbox" class="visually-hidden" id="show-side-navigation" aria-controls="side-navigation-root" />
    <label class="side-navigation__expand  link" for="show-side-navigation"><span class="visually-hidden">Show all</span> Pages in this section <span class="side-navigation__expand-indicator"></span></label>

    <ul class="side-navigation__list  side-navigation__root" id="side-navigation-root">
        <li class="side-navigation__item  side-navigation__item--has-children  side-navigation__item--has-children--expanded">
            <a href="#" class="side-navigation__link">Apples</a>
            <ul class="side-navigation__list">
                <li class="side-navigation__item  side-navigation__item--has-children">
                    <a href="#" class="side-navigation__link">Green apples</a>
                    <ul class="side-navigation__list">
                        <li class="side-navigation__item">
                            <a href="#" class="side-navigation__link  current">Bramley</a>
                        </li>
                        <li class="side-navigation__item">
                            <a href="#" class="side-navigation__link">Granny Smith</a>
                        </li>
                    </ul>
                </li>
                <li class="side-navigation__item  side-navigation__item--has-children">
                    <a href="#" class="side-navigation__link">Red apples</a>
                    <!-- <ul class="side-navigation__list">
                        <li class="side-navigation__item">
                            <a href="#" class="side-navigation__link">Braeburn</a>
                        </li>
                        <li class="side-navigation__item">
                            <a href="#" class="side-navigation__link">Jazz</a>
                        </li>
                        <li class="side-navigation__item">
                            <a href="#" class="side-navigation__link">Red Devil</a>
                        </li>
                    </ul> -->
                </li>
            </ul>
        </li>
        <li class="side-navigation__item">
            <a href="#" class="side-navigation__link">Bananas</a>
        </li>
        <li class="side-navigation__item">
            <a href="#" class="side-navigation__link">Cherries</a>
        </li>
        <li class="side-navigation__item">
            <a href="#" class="side-navigation__link">Dates</a>
        </li>
    </ul>
</nav>

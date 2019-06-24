---
layout: example
parent: component.page-nav
type: example
style: '.page-nav {display: grid; grid-template-columns: 1fr 1fr; grid-gap: 30px;'
intro: 'This example uses a CSS grid to lay out the navigation links.'
index: 0
---

<div class="page-nav">
    <div class="page-nav__item">
        <a title="Previous section" href="#" class="page-nav__button  page-nav__button--left">
            <span class="page-nav__text" data-label="prev">
                <span class="page-nav__text-highlight">
                    Apply for or renew a Blue Badge
                </span>
            </span>
        </a>
    </div>

    <div class="page-nav__item">
        <a title="Next section" href="#" class="page-nav__button  page-nav__button--right">
            <span class="page-nav__text" data-label="next">
                <span class="page-nav__text-highlight">
                    Eligibility – who can have one?
                </span>
            </span>
        </a>
    </div>
</div>

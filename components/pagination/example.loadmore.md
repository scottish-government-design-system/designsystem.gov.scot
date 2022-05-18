---
layout: example
parent: component.pagination
type: example
---

<nav class="ds_pagination" aria-label="Search result pages">
    <div class="ds_pagination__load-more">
        <button class="ds_button">Load more</button>
    </div>
    <ul class="ds_pagination__list">
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">1</span>
            </a>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">2</span>
            </a>
        </li>
        <li class="ds_pagination__item" aria-current="page">
            <span class="ds_pagination__link  ds_current">3</span>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">4</span>
            </a>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">5</span>
            </a>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link  ds_pagination__link--text  ds_pagination__link--icon" href="#">
                <span class="ds_pagination__link-label">Next</span>
                <svg class="ds_icon" aria-hidden="true" role="img">
                    <use href="/assets/images/icons/icons.stack.svg#chevron_right"></use>
                </svg>
            </a>
        </li>
    </ul>
</nav>
---
layout: example
parent: component.pagination
type: example
index: 0
---

<nav class="ds_pagination" aria-label="Search result pages">
    <ul class="ds_pagination__list">
        <li class="ds_pagination__item">
            <a class="ds_pagination__link  ds_pagination__link--text  ds_pagination__link--icon" href="#">
                <svg class="ds_icon" aria-hidden="true" role="img">
                    <use href="/assets/images/icons/icons.stack.svg#chevron_left"></use>
                </svg>
                <span class="ds_pagination__link-label">Previous</span>
            </a>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">1</span>
            </a>
        </li>
        <li class="ds_pagination__item" aria-hidden="true">
            <span class="ds_pagination__link  ds_pagination__link--ellipsis">&hellip;</span>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">12</span>
            </a>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">13</span>
            </a>
        </li>
        <li class="ds_pagination__item" aria-current="page">
            <span class="ds_pagination__link  ds_current">14</span>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">15</span>
            </a>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">16</span>
            </a>
        </li>
        <li class="ds_pagination__item" aria-hidden="true">
            <span class="ds_pagination__link  ds_pagination__link--ellipsis">&hellip;</span>
        </li>
        <li class="ds_pagination__item">
            <a class="ds_pagination__link" href="#">
                <span class="ds_pagination__link-label">27</span>
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

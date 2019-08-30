---
layout: example
parent: component.pagination
type: example
index: 0
---

<nav class="ds_pagination" aria-label="Pages">
    <div class="ds_pagination__load-more">
        <button class="ds_button">Load more</button>
    </div>

    <ul class="ds_pagination__list">
        <li class="ds_pagination__item">
            <a href="#" data-search="pagination-previous" class="ds_pagination__link  ds_pagination__link--text">Previous</a>
        </li>

        <li class="ds_pagination__item" aria-hidden="true">
            <span class="ds_pagination__link  ds_pagination__link--ellipsis">&hellip;</span>
        </li>

        <li class="ds_pagination__item">
            <a href="#" data-search="pagination-11" class="ds_pagination__link">11</a>
        </li>

        <li class="ds_pagination__item">
            <a href="#" data-search="pagination-12" class="ds_pagination__link">12</a>
        </li>

        <li class="ds_pagination__item">
            <a href="#" data-search="pagination-13" class="ds_pagination__link">13</a>
        </li>

        <li class="ds_pagination__item">
            <span class="ds_pagination__link  ds_current">14</span>
        </li>

        <li class="ds_pagination__item">
            <a href="#" data-search="pagination-15" class="ds_pagination__link">15</a>
        </li>

        <li class="ds_pagination__item">
            <a href="#" data-search="pagination-16" class="ds_pagination__link">16</a>
        </li>

        <li class="ds_pagination__item">
            <a href="#" data-search="pagination-17" class="ds_pagination__link">17</a>
        </li>

        <li class="ds_pagination__item" aria-hidden="true">
            <span class="ds_pagination__link  ds_pagination__link--ellipsis">&hellip;</span>
        </li>

        <li class="ds_pagination__item">
            <a href="#" data-search="pagination-next" class="ds_pagination__link  ds_pagination__link--text">Next</a>
        </li>
    </ul>
</nav>

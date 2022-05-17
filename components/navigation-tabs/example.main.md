---
layout: example
parent: component.navigation-tabs
type: example
index: 0
---

<div class="ds_tabs  ds_tabs--links" data-module="ds-tabs-navigation">
    <nav class="ds_tabs__navigation" aria-labelledby="ds_tabs__title">
        <h2 id="ds_tabs__title" class="ds_tabs__title">Change category</h2>
        <ul class="ds_tabs__list" id="tablist">
            <li class="ds_tabs__tab">
                <a class="ds_tabs__tab-link" href="tab-page-1">Courses and funding</a>
            </li>
            <li class="ds_tabs__tab">
                <a class="ds_tabs__tab-link" href="tab-page-2">Choosing apprenticeships</a>
            </li>
            <li class="ds_tabs__tab  ds_current" aria-current="page">
                <span class="ds_tabs__tab-link">Extra skills support</span>
            </li>
        </ul>
        <div id="ds_tabs__current" class="ds_tabs__current"><strong>Current category</strong> Extra skills support</div>
    </nav>
    <div class="ds_tabs__content" id="tab3">
        <p>The <a href="#">Skills for Growth</a> service can offer skills advice to businesses with fewer than 250 employees.</p>
        <p>Businesses of any size can get skills advice by completing a <a href="#">skills support request form</a>.</p>
        <p>Businesses of any size can also get skills advice by calling Skills Development Scotland on 0800 783 6000.</p>
    </div>
</div>
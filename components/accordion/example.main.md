---
layout: example
parent: component.accordion
type: example
scripts:
  - /assets/patternlib/dist/pattern-library.js
sitemap: false
noindex: true
---

<div class="ds_accordion" data-module="ds-accordion">
    <button data-accordion="accordion-open-all" type="button" class="ds_link  ds_accordion__open-all  js-open-all">Open all <span class="visually-hidden">sections</span></button>

    <div class="ds_accordion-item">
        <input type="checkbox" class="visually-hidden  ds_accordion-item__control" id="panel-1" aria-labelledby="panel-1-heading">
        <div class="ds_accordion-item__header">
            <h3 id="panel-1-heading" class="ds_accordion-item__title">
                Healthcare for veterans
            </h3>
            <span class="ds_accordion-item__indicator"></span>
            <label class="ds_accordion-item__label" for="panel-1"><span class="visually-hidden">Show this section</span></label>
        </div>
        <div class="ds_accordion-item__body">
            <p>Veterans are entitled to the same healthcare as any citizen. And there are <a href="#">health care options and support</a> available specifically for veterans.  </p>
            <p>If you have a health condition that's related to your service, you're entitled to priority treatment based on clinical need. </p>
        </div>
    </div>

    <div class="ds_accordion-item">
        <input type="checkbox" class="visually-hidden  ds_accordion-item__control" id="panel-2" aria-labelledby="panel-2-heading">
        <div class="ds_accordion-item__header">
            <h3 id="panel-2-heading" class="ds_accordion-item__title">
                Employability for veterans
            </h3>
            <span class="ds_accordion-item__indicator"></span>
            <label class="ds_accordion-item__label" for="panel-2"><span class="visually-hidden">Show this section</span></label>
        </div>
        <div class="ds_accordion-item__body">
            <p>If you're looking for a job, there are several organisations that can help you <a href="#">find a job or develop new skills</a>.</p>
        </div>
    </div>

    <div class="ds_accordion-item">
        <input type="checkbox" class="visually-hidden  ds_accordion-item__control" id="panel-3" aria-labelledby="panel-3-heading">
        <div class="ds_accordion-item__header">
            <h3 id="panel-3-heading" class="ds_accordion-item__title">
                Housing for veterans
            </h3>
            <span class="ds_accordion-item__indicator"></span>
            <label class="ds_accordion-item__label" for="panel-3"><span class="visually-hidden">Show this section</span></label>
        </div>
        <div class="ds_accordion-item__body">
            <p>If you need <a href="#">help finding a place to live</a> there's support specifically for veterans.</p>
        </div>
    </div>
</div>

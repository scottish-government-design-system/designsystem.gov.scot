---
layout: example
parent: component.search-filters
type: example
index: 0
---

<h2>Filters</h2>

<div>
    <label class="ds_label" for="textinput-search">Search</label><br />

    <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
        <input class="ds_input" type="text" id="textinput-search" />
        <a href="#" class="ds_button  ds_button--icon-only">
            <span class="visually-hidden">Search</span>
            <svg class="ds_icon" aria-hidden="true" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
        </a>
    </div>
</div>



<h3>Date from</h3>

<div class="ds_field-group  ds_field-group--inline">
    <div>
        <label class="ds_label  visually-hidden" for="from-day">Day</label>
        <input maxlength="2" placeholder="Day" id="from-day" class="ds_input ds_input--fixed-2" />
    </div>

    <div>
        <label class="ds_label  visually-hidden" for="from-month">Month</label>
        <input maxlength="2" placeholder="Month" id="from-month" class="ds_input ds_input--fixed-2" />
    </div>

    <div>
        <label class="ds_label  visually-hidden" for="from-year">Year</label>
        <input maxlength="4" placeholder="Year" id="from-year" class="ds_input ds_input--fixed-4" />
    </div>
</div>


<h3>Date to</h3>

<div class="ds_field-group  ds_field-group--inline">
    <div>
        <label class="ds_label  visually-hidden" for="to-day">Day</label>
        <input maxlength="2" placeholder="Day" id="to-day" class="ds_input ds_input--fixed-2" />
    </div>

    <div>
        <label class="ds_label  visually-hidden" for="to-month">Month</label>
        <input maxlength="2" placeholder="Month" id="to-month" class="ds_input ds_input--fixed-2" />
    </div>

    <div>
        <label class="ds_label  visually-hidden" for="to-year">Year</label>
        <input maxlength="4" placeholder="Year" id="to-year" class="ds_input ds_input--fixed-4" />
    </div>
</div>



<div class="ds_accordion" data-module="ds-accordion">
    <div class="ds_accordion-item">
        <input type="checkbox" class="fully-hidden  ds_accordion-item__control" id="panel-1" aria-labelledby="panel-1-heading" />
        <div class="ds_accordion-item__header">
            <h3 id="panel-1-heading" class="ds_accordion-item__title">
                Topics
            </h3>
            <span class="ds_accordion-item__indicator"></span>
            <label class="ds_accordion-item__label" for="panel-1"><span class="visually-hidden">Show this section</span></label>
        </div>
        <div class="ds_accordion-item__body">
            <div class="ds_field-group  ds_field-group">
                <div class="ds_checkbox  ds_checkbox--small">
                    <input class="ds_checkbox__input" id="stacked-1" name="group-name" type="checkbox" value="yes" />
                    <label class="ds_checkbox__label" for="stacked-1">Education</label>
                </div>

                <div class="ds_checkbox  ds_checkbox--small">
                    <input class="ds_checkbox__input" id="stacked-2" name="group-name" type="checkbox" value="no" />
                    <label class="ds_checkbox__label" for="stacked-2">Housing</label>
                </div>

                <div class="ds_checkbox  ds_checkbox--small">
                    <input class="ds_checkbox__input" id="stacked-3" name="group-name" type="checkbox" value="maybe" />
                    <label class="ds_checkbox__label" for="stacked-3">Transport</label>
                </div>
            </div>
        </div>
    </div>

    <div class="ds_accordion-item">
        <input type="checkbox" class="fully-hidden  ds_accordion-item__control" id="panel-1" aria-labelledby="panel-1-heading" />
        <div class="ds_accordion-item__header">
            <h3 id="panel-1-heading" class="ds_accordion-item__title">
                Publication types
            </h3>
            <span class="ds_accordion-item__indicator"></span>
            <label class="ds_accordion-item__label" for="panel-1"><span class="visually-hidden">Show this section</span></label>
        </div>
        <div class="ds_accordion-item__body">
            <div class="ds_field-group  ds_field-group">
                <div class="ds_checkbox  ds_checkbox--small">
                    <input class="ds_checkbox__input" id="stacked-1b" name="group-name" type="checkbox" value="yes" />
                    <label class="ds_checkbox__label" for="stacked-1b">Education</label>
                </div>

                <div class="ds_checkbox  ds_checkbox--small">
                    <input class="ds_checkbox__input" id="stacked-2b" name="group-name" type="checkbox" value="no" />
                    <label class="ds_checkbox__label" for="stacked-2b">Housing</label>
                </div>

                <div class="ds_checkbox  ds_checkbox--small">
                    <input class="ds_checkbox__input" id="stacked-3b" name="group-name" type="checkbox" value="maybe" />
                    <label class="ds_checkbox__label" for="stacked-3b">Transport</label>
                </div>
            </div>
        </div>
    </div>
</div>

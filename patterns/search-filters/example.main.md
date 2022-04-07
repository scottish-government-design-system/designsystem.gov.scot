---
layout: example
parent: pattern.search-filters
type: example
---

<div class="ds_search-filters">
    <h2 class="ds_search-filters__title">Search filters</h2>

    <div>
        <label class="ds_label" for="filter-term">Search</label>

        <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
            <input class="ds_input" type="text" id="filter-term" />
            <button class="ds_button">
                <span class="visually-hidden">Search</span>
                <svg class="ds_icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#search"></use></svg>
            </button>
        </div>
    </div>

    
    <label class="ds_label" for="date-from">Date from</label>

    <div data-module="ds-datepicker" class="ds_datepicker">
        <div class="ds_input__wrapper">
            <input placeholder="dd/mm/yyyy" id="date-from" type="text"  class="ds_input">
        </div>
    </div>

    <label class="ds_label" for="date-to">Date to</label>

    <div data-module="ds-datepicker" class="ds_datepicker">
        <div class="ds_input__wrapper">
            <input placeholder="dd/mm/yyyy" id="date-to" type="text"  class="ds_input">
        </div>
    </div>

    <div class="ds_accordion" data-module="ds-accordion">
        <div class="ds_accordion-item">
            <input type="checkbox" class="visually-hidden  ds_accordion-item__control" id="panel-topics" aria-labelledby="panel-topics-heading" />
            <div class="ds_accordion-item__header">
                <h3 id="panel-topics-heading" class="ds_accordion-item__title">
                    Topics
                </h3>
                <span class="ds_accordion-item__indicator"></span>
                <label class="ds_accordion-item__label" for="panel-topics"><span class="visually-hidden">Show this section</span></label>
            </div>
            <div class="ds_accordion-item__body">
                <fieldset>
                    <legend class="visually-hidden">Select which topics you would like to see</legend>
                    <div class="ds_field-group">
                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-arts-culture-sport" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-arts-culture-sport">Arts, culture and sport</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-brexit" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-brexit">Brexit</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-building-planning-design" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-building-planning-design">Building, planning and design</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-business-industry-innovation" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-business-industry-innovation">Business, industry and innovation</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-children-and-families" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-children-and-families">Children and families</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-communities-and-third-sector" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-communities-and-third-sector">Communities and third sector</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-coronavirus" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-coronavirus">Coronavirus in Scotland</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-economy" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-economy">Economy</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-education" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-education">Education</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-energy" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-energy">Energy</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-environment-climate-change" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-environment-climate-change">Environment and climate change</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-equality-and-rights" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-equality-and-rights">Equality and rights</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-farming-and-rural" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-farming-and-rural">Farming and rural</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-health-and-social-care" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-health-and-social-care">Health and social care</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-housing" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-housing">Housing</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-international" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-international">International</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-law-and-order" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-law-and-order">Law and order</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-marine-and-fisheries" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-marine-and-fisheries">Marine and fisheries</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-money-and-tax" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-money-and-tax">Money and tax</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-programme-for-government" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-programme-for-government">Programme for Government</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-public-safety" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-public-safety">Public safety and emergencies</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-public-sector" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-public-sector">Public sector</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-research" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-research">Research</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-scottish-budget" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-scottish-budget">Scottish budget</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-statistics" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-statistics">Statistics</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-transport" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-transport">Transport</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="topic-work-and-skills" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="topic-work-and-skills">Work and skills</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>

        <div class="ds_accordion-item">
            <input type="checkbox" class="visually-hidden  ds_accordion-item__control" id="panel-types" aria-labelledby="panel-types-heading" />
            <div class="ds_accordion-item__header">
                <h3 id="panel-types-heading" class="ds_accordion-item__title">
                    Publication types
                </h3>
                <span class="ds_accordion-item__indicator"></span>
                <label class="ds_accordion-item__label" for="panel-types"><span class="visually-hidden">Show this section</span></label>
            </div>
            <div class="ds_accordion-item__body">
                <fieldset>
                    <legend class="visually-hidden">Select which types of publication you would like to see</legend>
                    <div class="ds_field-group">
                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-advice-and-guidance" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-advice-and-guidance">Advice and guidance</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-agreement" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-agreement">Agreement</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-consultation-analysis" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-consultation-analysis">Consultation analysis</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-consultation-paper" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-consultation-paper">Consultation paper</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-corporate-report" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-corporate-report">Corporate report</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-correspondence" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-correspondence">Correspondence</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-foi-eir" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-foi-eir">FOI/EIR release</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-factsheet" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-factsheet">Factsheet</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-form" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-form">Form</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-impact-assessment" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-impact-assessment">Impact assessment</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-independent-report" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-independent-report">Independent report</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-map" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-map">Map</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-minutes" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-minutes">Minutes</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-progress-report" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-progress-report">Progress report</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-publication" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-publication">Publication</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-regulation-directive-order" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-regulation-directive-order">Regulation/directive/order</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-research-analysis" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-research-analysis">Research and analysis</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-speech-statement" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-speech-statement">Speech/statement</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-statistics" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-statistics">Statistics</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-strategy-plan" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-strategy-plan">Strategy/plan</label>
                        </div>

                        <div class="ds_checkbox  ds_checkbox--small">
                            <input class="ds_checkbox__input" id="type-transparency-data" name="filter-types" type="checkbox" />
                            <label class="ds_checkbox__label" for="type-transparency-data">Transparency data</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

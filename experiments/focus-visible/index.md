---
layout: example
type: example
index: 0
style: "body {background: #ebebeb;}"
---

<div id="type1">
    <h2>Type 1</h2>
    <p>When changing between questions this puts the DS's standard gold focus indiator around the new question.</p>

    <hr />

    <section class="mg_smart-answer__question mg_smart-answer__step mg_smart-answer__step--current" id="step-under-16">
        <div class="ds_question">

            <fieldset class="mg_no-margin--last-child  " id="question-under-16" data-validation="requiredRadio">
                <legend class="ds_page-header">
                    <span class="mg_smart-answer__parent-title">Adult Disability Payment</span>
                    <h1 class="ds_page-header__title  mg_smart-answer__step-title  js-question-title">Are you under 16?</h1>
                </legend>

                <p>Are you under&nbsp;16?&nbsp;</p>
                    <div class="ds_radio">
                        <input required="" class="ds_radio__input" type="radio" id="step-under-16-yes1" name="question-under-16" value="yes" data-nextstep="step-under-16-result">
                        <label class="ds_radio__label" for="step-under-16-yes1">Yes</label>
                    </div>
                    <div class="ds_radio">
                        <input required="" class="ds_radio__input" type="radio" id="step-under-16-no1" name="question-under-16" value="no" data-nextstep="step-local-authority">
                        <label class="ds_radio__label" for="step-under-16-no1">No</label>
                    </div>
            </fieldset>
        </div>

        <button class="js-next-button  ds_button  ds_no-margin">
            Next
        </button>
    </section>

    <section class="mg_smart-answer__question  mg_smart-answer__step" id="step-client-receipt-afip">
        <div class="ds_question">

            <fieldset class="mg_no-margin--last-child  " id="question-client-receipt-afip" data-validation="requiredRadio">
                <legend class="ds_page-header">
                    <span class="mg_smart-answer__parent-title">Adult Disability Payment</span>
                    <h1 class="ds_page-header__title  mg_smart-answer__step-title  js-question-title">Is  the client in receipt of AFIP?</h1>
                </legend>

                <p>Is the client in receipt of AFIP?</p>
                <div class="ds_radio">
                    <input required=""  class="ds_radio__input" type="radio" id="step-client-receipt-afip-yes1" name="question-client-receipt-afip" value="yes" data-nextstep="step-recipient-afip">
                    <label class="ds_radio__label" for="step-client-receipt-afip-yes1">Yes</label>
                </div>
                <div class="ds_radio">
                    <input required="" class="ds_radio__input" type="radio" id="step-client-receipt-afip-no1" name="question-client-receipt-afip" value="no" data-nextstep="step-final-result">
                    <label class="ds_radio__label" for="step-client-receipt-afip-no1">No</label>
                </div>
            </fieldset>
        </div>

        <button class="js-next-button  ds_button  ds_no-margin" data-button="button-next">
            Next
        </button>
    </section>
</div>

<div id="type2">
    <h2>Type 2</h2>
    <p>When changing between questions this puts the DS's standard gold focus indiator around the new question when the user is navigating with a keyboard.</p>

    <hr />

    <section class="mg_smart-answer__question mg_smart-answer__step mg_smart-answer__step--current" id="step-under-16">
        <div class="ds_question">

            <fieldset class="mg_no-margin--last-child  " id="question-under-16" data-validation="requiredRadio">
                <legend class="ds_page-header">
                    <span class="mg_smart-answer__parent-title">Adult Disability Payment</span>
                    <h1 class="ds_page-header__title  mg_smart-answer__step-title  js-question-title">Are you under 16?</h1>
                </legend>

                <p>Are you under&nbsp;16?&nbsp;</p>
                    <div class="ds_radio">
                        <input required="" class="ds_radio__input" type="radio" id="step-under-16-yes2" name="question-under-16" value="yes" data-nextstep="step-under-16-result">
                        <label class="ds_radio__label" for="step-under-16-yes2">Yes</label>
                    </div>
                    <div class="ds_radio">
                        <input required="" class="ds_radio__input" type="radio" id="step-under-16-no2" name="question-under-16" value="no" data-nextstep="step-local-authority">
                        <label class="ds_radio__label" for="step-under-16-no2">No</label>
                    </div>
            </fieldset>
        </div>

        <button class="js-next-button  ds_button  ds_no-margin">
            Next
        </button>
    </section>

    <section class="mg_smart-answer__question  mg_smart-answer__step" id="step-client-receipt-afip">
        <div class="ds_question">

            <fieldset class="mg_no-margin--last-child  " id="question-client-receipt-afip" data-validation="requiredRadio">
                <legend class="ds_page-header">
                    <span class="mg_smart-answer__parent-title">Adult Disability Payment</span>
                    <h1 class="ds_page-header__title  mg_smart-answer__step-title  js-question-title">Is  the client in receipt of AFIP?</h1>
                </legend>

                <p>Is the client in receipt of AFIP?</p>
                <div class="ds_radio">
                    <input required=""  class="ds_radio__input" type="radio" id="step-client-receipt-afip-yes2" name="question-client-receipt-afip" value="yes" data-nextstep="step-recipient-afip">
                    <label class="ds_radio__label" for="step-client-receipt-afip-yes2">Yes</label>
                </div>
                <div class="ds_radio">
                    <input required="" class="ds_radio__input" type="radio" id="step-client-receipt-afip-no2" name="question-client-receipt-afip" value="no" data-nextstep="step-final-result">
                    <label class="ds_radio__label" for="step-client-receipt-afip-no2">No</label>
                </div>
            </fieldset>
        </div>

        <button class="js-next-button  ds_button  ds_no-margin" data-button="button-next">
            Next
        </button>
    </section>
</div>

<div id="type3">
    <h2>Type 3</h2>
    <p>When changing between questions this puts the browser default focus-visible indicator around the new question when the user is navigating with a keyboard.</p>

    <hr />

    <section class="mg_smart-answer__question mg_smart-answer__step mg_smart-answer__step--current" id="step-under-16">
        <div class="ds_question">

            <fieldset class="mg_no-margin--last-child  " id="question-under-16" data-validation="requiredRadio">
                <legend class="ds_page-header">
                    <span class="mg_smart-answer__parent-title">Adult Disability Payment</span>
                    <h1 class="ds_page-header__title  mg_smart-answer__step-title  js-question-title">Are you under 16?</h1>
                </legend>

                <p>Are you under&nbsp;16?&nbsp;</p>
                    <div class="ds_radio">
                        <input required="" class="ds_radio__input" type="radio" id="step-under-16-yes3" name="question-under-16" value="yes" data-nextstep="step-under-16-result">
                        <label class="ds_radio__label" for="step-under-16-yes3">Yes</label>
                    </div>
                    <div class="ds_radio">
                        <input required="" class="ds_radio__input" type="radio" id="step-under-16-no3" name="question-under-16" value="no" data-nextstep="step-local-authority">
                        <label class="ds_radio__label" for="step-under-16-no3">No</label>
                    </div>
            </fieldset>
        </div>

        <button class="js-next-button  ds_button  ds_no-margin">
            Next
        </button>
    </section>

    <section class="mg_smart-answer__question  mg_smart-answer__step" id="step-client-receipt-afip">
        <div class="ds_question">

            <fieldset class="mg_no-margin--last-child  " id="question-client-receipt-afip" data-validation="requiredRadio">
                <legend class="ds_page-header">
                    <span class="mg_smart-answer__parent-title">Adult Disability Payment</span>
                    <h1 class="ds_page-header__title  mg_smart-answer__step-title  js-question-title">Is  the client in receipt of AFIP?</h1>
                </legend>

                <p>Is the client in receipt of AFIP?</p>
                <div class="ds_radio">
                    <input required=""  class="ds_radio__input" type="radio" id="step-client-receipt-afip-yes3" name="question-client-receipt-afip" value="yes" data-nextstep="step-recipient-afip">
                    <label class="ds_radio__label" for="step-client-receipt-afip-yes3">Yes</label>
                </div>
                <div class="ds_radio">
                    <input required="" class="ds_radio__input" type="radio" id="step-client-receipt-afip-no3" name="question-client-receipt-afip" value="no" data-nextstep="step-final-result">
                    <label class="ds_radio__label" for="step-client-receipt-afip-no3">No</label>
                </div>
            </fieldset>
        </div>

        <button class="js-next-button  ds_button  ds_no-margin" data-button="button-next">
            Next
        </button>
    </section>
</div>

<style>
    .mg_smart-answer__step:not(.mg_smart-answer__step--current) {
        display: none;
    }

    #type1, #type2, #type3 {
        border: 1px solid #333;
        background: #fff;
        margin: 32px;
        padding: 16px;
    }

    #type1 section:focus,
    #type2 section:focus {
        outline: 2px solid #fdd522;
    }

    #type2 section:focus:not(:focus-visible) {
        outline: none
    }
</style>

<script>
function tempFocus (element) {
    element.tabIndex = -1;
    element.addEventListener('focusout', () => { element.removeAttribute('tabindex'); });
    element.focus();
}


const type1 = document.getElementById('type1');

type1.addEventListener('click', event => {

    if (event.target.classList.contains('js-next-button')) {
        const currentStep = type1.querySelector('.mg_smart-answer__step--current');
        const otherStep = type1.querySelector('.mg_smart-answer__step:not(.mg_smart-answer__step--current)');

        currentStep.classList.remove('mg_smart-answer__step--current');
        otherStep.classList.add('mg_smart-answer__step--current');
        tempFocus(otherStep);
    }
});

const type2 = document.getElementById('type2');

type2.addEventListener('click', event => {

    if (event.target.classList.contains('js-next-button')) {
        const currentStep = type2.querySelector('.mg_smart-answer__step--current');
        const otherStep = type2.querySelector('.mg_smart-answer__step:not(.mg_smart-answer__step--current)');


        currentStep.classList.remove('mg_smart-answer__step--current');
        otherStep.classList.add('mg_smart-answer__step--current');
        tempFocus(otherStep);
    }
});

const type3 = document.getElementById('type3');

type3.addEventListener('click', event => {

    if (event.target.classList.contains('js-next-button')) {
        const currentStep = type3.querySelector('.mg_smart-answer__step--current');
        const otherStep = type3.querySelector('.mg_smart-answer__step:not(.mg_smart-answer__step--current)');

        currentStep.classList.remove('mg_smart-answer__step--current');
        otherStep.classList.add('mg_smart-answer__step--current');
        tempFocus(otherStep);
    }
});


</script>

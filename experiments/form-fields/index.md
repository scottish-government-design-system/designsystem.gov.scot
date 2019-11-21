---
layout: example
type: example
index: 0
---

<style>

:root {
    --color__red--base: #d32205;
}

.ds_error-summary {
    border: 5px solid var(--color__red--base);
    padding: 21px 30px;
}

.ds_error-summary > :last-child {
    margin-bottom: 0;
}

.ds_error-summary__list {
    font-weight: bold;
    list-style-type: none;
    margin-left: 0;
}

.ds_error-summary__list a {
    color: var(--color__red--base);
}

</style>


<h1>Form fields</h1>


<div class="ds_error-summary" id="error-summary" aria-labelledby="error-summary-title" role="alert">
    <h2 id="error-summary-title">There is a problem</h2>

    <p>Some example content for whatever reason.</p>

    <ul class="ds_error-summary__list">
        <li>
            <a href="#error-id-one">Did this resolve your issue?</a>
        </li>
        <li>
            <a href="#error-id-two">What topics are you interested in?</a>
        </li>
        <li>
            <a href="#error-id-three">Please provide more detail</a>
        </li>
    </ul>
</div>


<h2>Select</h2>


<div>
<label class="ds_label" for="select">Select</label><br />
<div class="ds_select-wrapper  ds_input--fluid-one-third">
<select class="ds_select">
    <option></option>
    <option>Amanita</option>
    <option>Boletus</option>
    <option>Coprinopsis</option>
</select>
<span class="ds_select-arrow" aria-hidden="true"></span>
</div>
</div>

<h2>Text inputs</h2>
<div>
<label class="ds_label" for="textinput1">Text input</label><br />
<input class="ds_input" type="text" id="textinput1" />
</div>

<h3>Fluid-width inputs</h3>

<div>
<label class="ds_label" for="textinput-75p">Three quarters</label><br />
<input class="ds_input  ds_input--fluid-three-quarters" type="text" id="textinput-75p" />
</div>

<div>
<label class="ds_label" for="textinput-67p">Two thirds</label><br />
<input class="ds_input  ds_input--fluid-two-thirds" type="text" id="textinput-67p" />
</div>

<div>
<label class="ds_label" for="textinput-50p">Half</label><br />
<input class="ds_input  ds_input--fluid-half" type="text" id="textinput-50p" />
</div>

<div>
<label class="ds_label" for="textinput-33p">One third</label><br />
<input class="ds_input  ds_input--fluid-one-third" type="text" id="textinput-33p" />
</div>

<div>
<label class="ds_label" for="textinput-25p">One quarter</label><br />
<input class="ds_input  ds_input--fluid-one-quarter" type="text" id="textinput-25p" />
</div>

<h3>Fixed-width inputs</h3>

<div>
<label class="ds_label" for="textinput-20">20 characters</label><br />
<input class="ds_input  ds_input--fixed-20" type="text" id="textinput-20" />
</div>

<div>
<label class="ds_label" for="textinput-10">10 characters</label><br />
<input class="ds_input  ds_input--fixed-10" type="text" id="textinput-10" />
</div>

<div>
<label class="ds_label" for="textinput-5">5 characters</label><br />
<input class="ds_input  ds_input--fixed-5" type="text" id="textinput-5" />
</div>

<div>
<label class="ds_label" for="textinput-4">4 characters</label><br />
<input class="ds_input  ds_input--fixed-4" type="text" id="textinput-4" />
</div>

<div>
<label class="ds_label" for="textinput-3">3 characters</label><br />
<input class="ds_input  ds_input--fixed-3" type="text" id="textinput-3" />
</div>

<div>
<label class="ds_label" for="textinput-2">2 characters</label><br />
<input class="ds_input  ds_input--fixed-2" type="text" id="textinput-2" />
</div>

<h3>Text inputs with action buttons</h3>

<div>
    <label class="ds_label" for="textinput-search">Search</label><br />

    <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
        <input class="ds_input  ds_input--fixed-20" type="text" id="textinput-search" />
        <a href="#" class="ds_button  ds_button--icon-only">
            <span class="visually-hidden">Search</span>
            <svg class="ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#search"></use></svg>
        </a>
    </div>
</div>

<h2>Inline text inputs</h2>

<form>
    <fieldset>
        <legend>What is your date of birth?</legend>
        <p class="ds_hint-text">For example, 31 3 1980</p>

        <div class="ds_field-group  ds_field-group--inline">
            <div>
                <label class="ds_label" for="day">Day</label>
                <input id="day" class="ds_input ds_input--fixed-2" />
            </div>

            <div>
                <label class="ds_label" for="month">Month</label>
                <input id="month" class="ds_input ds_input--fixed-2" />
            </div>

            <div>
                <label class="ds_label" for="year">Year</label>
                <input id="year" class="ds_input ds_input--fixed-4" />
            </div>
        </div>
    </fieldset>
</form>

<h2>Textarea</h2>

<div>
<label class="ds_label" for="textarea1">Textarea</label><br />
<textarea class="ds_input" rows="3" id="textarea1"></textarea>
</div>

<p><strong>Note:</strong> Textareas can use all of the width variants available to text inputs. They're not included here to avoid repetition.</p>

<p><strong>Note:</strong> Use the "rows" attribute to size textarea elements appropriately.</p>

<h2>Currency input</h2>

<div>
    <label class="ds_label" for="textinputCurrency">Price per month</label><br />
    <div class="ds_currency-wrapper" data-symbol="$">
        <input class="ds_input  ds_input--fixed-4" type="text" id="textinputCurrency" />
    </div>
</div>

<h2>Inline radio buttons</h2>

<form>
    <fieldset>
        <legend>Legend (question)</legend>
        <p class="ds_hint-text">Hint text</p>

        <div class="ds_field-group  ds_field-group--inline">
            <div class="ds_radio">
                <input class="ds_radio__input" id="XXXXX-2" name="group-name-2" type="radio" value="yes">
                <label class="ds_radio__label" for="XXXXX-2">Yes</label>
            </div>

            <div class="ds_radio">
                <input class="ds_radio__input" id="YYYYY-2" name="group-name-2" type="radio" value="no">
                <label class="ds_radio__label" for="YYYYY-2">No</label>
            </div>
        </div>
    </fieldset>
</form>

<form>
    <fieldset>
        <legend>Legend (question)</legend>
        <p class="ds_hint-text">Hint text</p>

        <div class="ds_field-group  ds_field-group--inline">
            <div class="ds_radio  ds_radio--small">
                <input class="ds_radio__input" id="XXXXX" name="group-name" type="radio" value="yes">
                <label class="ds_radio__label" for="XXXXX">Yes</label>
            </div>

            <div class="ds_radio  ds_radio--small">
                <input class="ds_radio__input" id="YYYYY" name="group-name" type="radio" value="no">
                <label class="ds_radio__label" for="YYYYY">No</label>
            </div>
        </div>
    </fieldset>
</form>


<h2>Stacked radio buttons</h2>

<form>
    <fieldset>
        <legend>Was this page useful?</legend>
        <p class="ds_hint-text">Select an option</p>

        <div class="ds_field-group  ds_field-group">
            <div class="ds_radio">
                <input class="ds_radio__input" id="XXXXX-2stack" name="group-name-2" type="radio" value="yes">
                <label class="ds_radio__label" for="XXXXX-2stack">Yes</label>
            </div>

            <div class="ds_radio">
                <input checked class="ds_radio__input" id="YYYYY-2stack" name="group-name-2" type="radio" value="no">
                <label class="ds_radio__label" for="YYYYY-2stack">No</label>

                <div class="ds_reveal-content">
                    <label class="ds_label" for="textarea">Why was this page not useful?</label><br />
                    <textarea rows="4" class="ds_input" id="textarea2"></textarea>
                </div>
            </div>

            <div class="ds_radio">
                <input class="ds_radio__input" id="ZZZZZ-2stack" name="group-name-2" type="radio" value="maybe">
                <label class="ds_radio__label" for="ZZZZZ-2stack">Maybe</label>

                <div class="ds_reveal-content">
                    <label class="ds_label" for="textarea">What could improve this page?</label><br />
                    <textarea rows="4" class="ds_input" id="textarea3"></textarea>
                </div>
            </div>
        </div>
    </fieldset>
</form>

<form>
    <fieldset>
        <legend>Legend (question)</legend>
        <p class="ds_hint-text">Hint text</p>

        <div class="ds_field-group  ds_field-group">
            <div class="ds_radio  ds_radio--small">
                <input class="ds_radio__input" id="XXXXXstack" name="group-name" type="radio" value="yes">
                <label class="ds_radio__label" for="XXXXXstack">Yes</label>

                <div class="ds_reveal-content">
                    <label class="ds_label  visually-hidden" for="textinput">Text input</label>
                    <input class="ds_input" type="text" id="textinput2" />
                </div>
            </div>

            <div class="ds_radio  ds_radio--small">
                <input class="ds_radio__input" id="YYYYYstack" name="group-name" type="radio" value="no">
                <label class="ds_radio__label" for="YYYYYstack">No</label>
            </div>
        </div>
    </fieldset>
</form>

<hr />

<h2>Inline checkboxes</h2>

<form>
    <fieldset>
        <legend>Legend (question)</legend>
        <p class="ds_hint-text">Select an option</p>

        <div class="ds_field-group  ds_field-group--inline">
            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="XXXXX-3" type="checkbox" value="yes">
                <label class="ds_checkbox__label" for="XXXXX-3">Education</label>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="YYYYY-3" type="checkbox" value="no">
                <label class="ds_checkbox__label" for="YYYYY-3">Economy</label>
            </div>
        </div>
    </fieldset>
</form>

<form>
    <fieldset>
        <legend>Legend (question)</legend>
        <p class="ds_hint-text">Hint text</p>

        <div class="ds_field-group  ds_field-group--inline">
            <div class="ds_checkbox  ds_checkbox--small">
                <input class="ds_checkbox__input" id="XXXXX-4" type="checkbox" value="yes">
                <label class="ds_checkbox__label" for="XXXXX-4">Education</label>
            </div>

            <div class="ds_checkbox  ds_checkbox--small">
                <input class="ds_checkbox__input" id="YYYYY-4" type="checkbox" value="no">
                <label class="ds_checkbox__label" for="YYYYY-4">Economy</label>
            </div>
        </div>
    </fieldset>
</form>



<h2>Stacked checkboxes</h2>

<form>
    <fieldset>
        <legend>Legend (question)</legend>
        <p class="ds_hint-text">Select an option</p>

        <div class="ds_field-group  ds_field-group">
            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="XXXXX-3stack" type="checkbox" value="yes">
                <label class="ds_checkbox__label" for="XXXXX-3stack">Education</label>

                <div class="ds_reveal-content">
                    <p>Some helpful information only relevant in this context.</p>
                </div>
            </div>

            <div class="ds_checkbox">
                <input class="ds_checkbox__input" id="YYYYY-3stack" type="checkbox" value="no">
                <label class="ds_checkbox__label" for="YYYYY-3stack">Economy</label>

                <div class="ds_reveal-content">
                    <p>Some helpful information only relevant in this context.</p>
                </div>
            </div>
        </div>
    </fieldset>
</form>

<form>
    <fieldset>
        <legend>Legend (question)</legend>
        <p class="ds_hint-text">Hint text</p>

        <div class="ds_field-group  ds_field-group">
            <div class="ds_checkbox  ds_checkbox--small">
                <input class="ds_checkbox__input" id="XXXXX-4stack" type="checkbox" value="yes">
                <label class="ds_checkbox__label" for="XXXXX-4stack">Education</label>
            </div>

            <div class="ds_checkbox  ds_checkbox--small">
                <input class="ds_checkbox__input" id="YYYYY-4stack" type="checkbox" value="no">
                <label class="ds_checkbox__label" for="YYYYY-4stack">Economy</label>
            </div>
        </div>
    </fieldset>
</form>

<hr />

<h2>Example: sign-in form</h2>

<form>
    <fieldset>
        <legend>Sign in</legend>
        <div class="ds_field-group  ds_field-group">
            <label class="ds_label" for="username">Email address</label><br />
            <input class="ds_input  ds_input--fixed-20" type="text" id="username" />

            <label class="ds_label" for="password">Password</label><br />
            <input class="ds_input  ds_input--fixed-20" type="password" id="password" />

            <div class="ds_checkbox  ds_checkbox--small">
                <input class="ds_checkbox__input" id="YYYYY-email" type="checkbox" value="no">
                <label class="ds_checkbox__label" for="YYYYY-email">Remember me</label>
            </div>
        </div>

        <input class="ds_button  ds_button--fixed" type="submit" value="Sign in">
    </fieldset>
</form>

<hr />

<h2>Error states</h2>

<form>
    <div class="ds_question  ds_question--error" id="error-id-one">
        <fieldset>
            <legend>Did this resolve your issue?</legend>
            <p class="ds_hint-text">Hint text</p>
            <p class="ds_question__message">This field is required</p>

            <div class="ds_field-group">
                <div class="ds_radio">
                    <input class="ds_radio__input" id="XXXXX-error" name="group-name-2" type="radio" value="yes">
                    <label class="ds_radio__label" for="XXXXX-error">Yes</label>
                </div>

                <div class="ds_radio">
                    <input class="ds_radio__input" id="YYYYY-error" name="group-name-2" type="radio" value="no">
                    <label class="ds_radio__label" for="YYYYY-error">No</label>

                    <div class="ds_reveal-content">
                        <p><strong>Next step:</strong> <a href="#">leave us some feedback</a>.</p>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</form>


<form>
    <div class="ds_question  ds_question--error" id="error-id-two">
        <fieldset>
            <legend>What topics are you interested in?</legend>
            <p class="ds_hint-text">Select an option</p>
            <p class="ds_question__message">This field is required</p>

            <div class="ds_field-group  ds_field-group--inline">
                <div class="ds_checkbox">
                    <input class="ds_checkbox__input" id="XXXXX-checkbox-error" type="checkbox" value="yes">
                    <label class="ds_checkbox__label" for="XXXXX-checkbox-error">Education</label>
                </div>

                <div class="ds_checkbox">
                    <input class="ds_checkbox__input" id="YYYYY-checkbox-error" type="checkbox" value="no">
                    <label class="ds_checkbox__label" for="YYYYY-checkbox-error">Economy</label>
                </div>
            </div>
        </fieldset>
    </div>
</form>

<div class="ds_question  ds_question--error" id="error-id-three">
    <label class="ds_label" for="textarea">Please provide more detail</label><br />
    <p class="ds_hint-text">Do not include personal or financial information, like your National Insurance number or credit card details.</p>
    <p class="ds_question__message">This field is required</p>
    <textarea rows="5" class="ds_input" id="textarea4"></textarea>
</div>




<script>

const formFieldsModule = {
    initErrorSummary: function () {
        const errorSummary = document.querySelector('#error-summary');

        errorSummary.addEventListener('click', function (event) {
            if (event.target.matches('a')) {
                const errorQuestion = document.querySelector(event.target.getAttribute('href'));
                const firstInput = errorQuestion.querySelector('input, textarea, select');

                window.setTimeout(function () {firstInput.focus()},0);
            }
        });
    }
};
formFieldsModule.initErrorSummary();

    </script>

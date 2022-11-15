---
layout: example
parent: component.summary-list
type: example
index: 0
---

<h2>Your answers</h2>

<p><button class="ds_link  js-clear-answers">Clear answers and start again</button></p>

<ol class="ds_summary-list">
    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Have you had the grant 3 times or more since 1 May 2022?</span>
        <span class="ds_summary-list__value">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">No</q>
        </span>
        <div class="ds_summary-list__actions">
            <button class="ds_link  js-change-answer" data-questionid="have-you-had-the-grant-3-times"
                data-path="#!" data-button="button-change-have-you-had-the-grant-3-times">
                Change <span class="visually-hidden">your answer for: <q>Have you had the grant 3 times or more since 1 May 2022?</q></span>
            </button>
        </div>
    </li>

    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Which council area do you live in?</span>
        <span class="ds_summary-list__value">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">City of Edinburgh</q>
        </span>
        <div class="ds_summary-list__actions">
            <button class="ds_link  js-change-answer" data-questionid="which-council-do-you-live-in"
                data-path="#!/no" data-button="button-change-which-council-do-you-live-in">
                Change <span class="visually-hidden">your answer for: <q>Which council area do you live in?</q></span>
            </button>
        </div>
    </li>

    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Do you work?</span>
        <span class="ds_summary-list__value">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">Yes</q>
        </span>
        <div class="ds_summary-list__actions">
            <button class="ds_link  js-change-answer" data-questionid="do-you-work"
                data-path="#!/no/city-of-edinburgh-council" data-button="button-change-do-you-work">
                Change <span class="visually-hidden">your answer for: <q>Do you work?</q></span>
            </button>
        </div>
    </li>

    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Will you lose earnings because you need to self-isolate?</span>
        <span class="ds_summary-list__value">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">Yes</q>
        </span>
        <div class="ds_summary-list__actions">
            <button class="ds_link  js-change-answer"
                data-questionid="will-you-lose-earnings-because-you-need-to-self-isolate"
                data-path="#!/no/city-of-edinburgh-council/yes"
                data-button="button-change-will-you-lose-earnings-because-you-need-to-self-isolate">
                Change <span class="visually-hidden">your answer for: <q>Will you lose earnings because you need to self-isolate?</q></span>
            </button>
        </div>
    </li>

    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Have you tested positive for Covid?</span>
        <span class="ds_summary-list__value">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">No - I need a PCR test or to rebook a PCR test</q>
        </span>
        <div class="ds_summary-list__actions">
            <button class="ds_link  js-change-answer" data-questionid="do-you-have-a-positive-covid-pcr-test-result"
                data-path="#!/no/city-of-edinburgh-council/yes/yes"
                data-button="button-change-do-you-have-a-positive-covid-pcr-test-result">
                Change <span class="visually-hidden">your answer for: <q>Have you tested positive for Covid?</q></span>
            </button>
        </div>
    </li>
</ol>

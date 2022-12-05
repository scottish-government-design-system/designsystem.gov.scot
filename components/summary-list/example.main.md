---
layout: example
parent: component.summary-list
type: example
index: 0
---

<ol class="ds_summary-list">
    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Have you had the grant 3 times or more since 1 May 2022?</span>
        <span class="ds_summary-list__value" id="q1">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">No</q>
        </span>
        <div class="ds_summary-list__actions">
            <button aria-describedby="q1" class="ds_link  js-change-answer">
                Change <span class="visually-hidden">your answer for: <q>Have you had the grant 3 times or more since 1 May 2022?</q></span>
            </button>
        </div>
    </li>

    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Which council area do you live in?</span>
        <span class="ds_summary-list__value" id="q2">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">City of Edinburgh</q>
        </span>
        <div class="ds_summary-list__actions">
            <button aria-describedby="q2" class="ds_link  js-change-answer">
                Change <span class="visually-hidden">your answer for: <q>Which council area do you live in?</q></span>
            </button>
        </div>
    </li>

    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Do you work?</span>
        <span class="ds_summary-list__value" id="q3">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">Yes</q>
        </span>
        <div class="ds_summary-list__actions">
            <button aria-describedby="q3" class="ds_link  js-change-answer" data-questionid="do-you-work">
                Change <span class="visually-hidden">your answer for: <q>Do you work?</q></span>
            </button>
        </div>
    </li>

    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Will you lose earnings because you need to self-isolate?</span>
        <span class="ds_summary-list__value" id="q4">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">Yes</q>
        </span>
        <div class="ds_summary-list__actions">
            <button aria-describedby="q4" class="ds_link  js-change-answer">
                Change <span class="visually-hidden">your answer for: <q>Will you lose earnings because you need to self-isolate?</q></span>
            </button>
        </div>
    </li>

    <li class="ds_summary-list__item">
        <span class="ds_summary-list__key">Have you tested positive for Covid?</span>
        <span class="ds_summary-list__value" id="q5">
            <span class="visually-hidden">Your answer is:</span>
            <q class="ds_summary-list__answer">No - I need a PCR test or to rebook a PCR test</q>
        </span>
        <div class="ds_summary-list__actions">
            <button aria-describedby="q5" class="ds_link  js-change-answer" >
                Change <span class="visually-hidden">your answer for: <q>Have you tested positive for Covid?</q></span>
            </button>
        </div>
    </li>
</ol>

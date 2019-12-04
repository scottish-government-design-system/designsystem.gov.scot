---
layout: example
parent: component.error-summary
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


    margin: 35px 0;
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

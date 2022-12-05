---
layout: example
parent: pattern.task-list
type: example
sitemap: false
noindex: true
---

<h2 id="task-list-status" class="ds_task-list-status-heading">Application incomplete</h2>
<nav aria-labelledby="task-list-status" class="ds_task-list-status">
    <p>You have completed 1 of 4 sections.</p>
    <p><a href="#task2">Skip to first incomplete section</a></p>
</nav>
<ul class="ds_task-list">
    <li class="ds_task-list__task" id="task1">
        <div class="ds_task-list__task-details">
            <h3 class="ds_task-list__task-heading">
                <a class="ds_task-list__task-link" href="#">Conditions <span class="visually-hidden">(Completed)</span></a>
            </h3>
            <p class="ds_hint-text  ds_task-list__task-summary">Tell us about your conditions, symptoms and any sensory issues you have.</p>
        </div>
        <div class="ds_task-list__task-status  ds_task-list__task-status--complete" aria-hidden="true">Completed</div>
    </li>
    <li class="ds_task-list__task" id="task2">
        <div class="ds_task-list__task-details">
            <h3 class="ds_task-list__task-heading">
                <a class="ds_task-list__task-link" href="#">Medications <span class="visually-hidden">(In progress)</span></a>
            </h3>
            <p class="ds_hint-text  ds_task-list__task-summary">Tell us about any medication you need.</p>
        </div>
        <div class="ds_task-list__task-status" aria-hidden="true">In progress</div>
    </li>
    <li class="ds_task-list__task" id="task3">
        <div class="ds_task-list__task-details">
            <h3 class="ds_task-list__task-heading">
                <a class="ds_task-list__task-link" href="#">Treatments and therapies <span class="visually-hidden">(Not started)</span></a>
            </h3>
            <p class="ds_hint-text  ds_task-list__task-summary">Tell us about any treatments and therapies you need.</p>
        </div>
        <div class="ds_task-list__task-status" aria-hidden="true">Not started</div>
    </li>
    <li class="ds_task-list__task" id="task4">
        <div class="ds_task-list__task-details">
            <h3 class="ds_task-list__task-heading">Contacts and supporting information <span class="visually-hidden">(Cannot start yet)</span></h3>
            <p class="ds_hint-text  ds_task-list__task-summary">Share any supporting documents and provide details of people we can talk to about you.</p>
        </div>
        <div class="ds_task-list__task-status" aria-hidden="true">Cannot start yet</div>
    </li>
</ul>

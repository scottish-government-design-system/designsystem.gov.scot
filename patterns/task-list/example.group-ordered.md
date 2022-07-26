---
layout: example
parent: pattern.task-list
type: example
index: 0
---

<h2 id="task-list-status" class="ds_task-list-status-heading">Application incomplete</h2>
<nav aria-labelledby="task-list-status" class="ds_task-list-status">
    <p>You have completed 3 of 6 sections.</p>
    <p><a href="#task4">Skip to first incomplete section</a></p>
</nav>
<ol class="ds_task-list-group  ds_task-list-group--ordered">
    <li class="ds_task-list-group__section">
        <h2 class="ds_task-list-heading">Provide your health details</h2>
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
                        <a class="ds_task-list__task-link" href="#">Medications <span class="visually-hidden">(Completed)</span></a>
                    </h3>
                    <p class="ds_hint-text  ds_task-list__task-summary">Tell us about any medication you need.</p>
                </div>
                <div class="ds_task-list__task-status  ds_task-list__task-status--complete" aria-hidden="true">Completed</div>
            </li>
            <li class="ds_task-list__task" id="task3">
                <div class="ds_task-list__task-details">
                    <h3 class="ds_task-list__task-heading">
                        <a class="ds_task-list__task-link" href="#">Treatments and therapies <span class="visually-hidden">(Completed)</span></a>
                    </h3>
                    <p class="ds_hint-text  ds_task-list__task-summary">Tell us about any treatments and therapies you need.</p>
                </div>
                <div class="ds_task-list__task-status  ds_task-list__task-status--complete" aria-hidden="true">Completed</div>
            </li>
            <li class="ds_task-list__task" id="task4">
                <div class="ds_task-list__task-details">
                    <h3 class="ds_task-list__task-heading">
                        <a class="ds_task-list__task-link" href="#">Contacts and supporting information <span class="visually-hidden">(Not started)</span></a>
                    </h3>
                    <p class="ds_hint-text  ds_task-list__task-summary">Share any supporting documents and provide details of people we can talk to about you.</p>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">Not started</div>
            </li>
        </ul>
    </li>
    <li class="ds_task-list-group__section">
        <h2 class="ds_task-list-heading">Review and submit</h2>
        <p class="ds_task-list-intro">Please check your answers carefully before submitting your application.</p>
        <ul class="ds_task-list">
            <li class="ds_task-list__task" id="task5">
                <div class="ds_task-list__task-details">
                    <h3 class="ds_task-list__task-heading">Check your answers <span class="visually-hidden">(Cannot start yet)</span></h3>
                    <p class="ds_hint-text  ds_task-list__task-summary">Review all your answers before submission.</p>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">Cannot start yet</div>
            </li>
            <li class="ds_task-list__task" id="task6">
                <div class="ds_task-list__task-details">
                    <h3 class="ds_task-list__task-heading">Submit your application <span class="visually-hidden">(Cannot start yet)</span></h3>
                    <p class="ds_hint-text  ds_task-list__task-summary">The final step of the application submission.</p>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">Cannot start yet</div>
            </li>
        </ul>
    </li>
</ol>
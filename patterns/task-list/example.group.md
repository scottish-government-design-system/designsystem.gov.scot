---
layout: example
parent: pattern.task-list
type: example
index: 0
---

<h2 id="task-list-status" class="ds_task-list-status-heading">Application incomplete</h2>
<nav aria-labelledby="task-list-status" class="ds_task-list-status">
    <p>You have completed 4 of 7 sections.</p>
    <p><a href="#task5">Skip to first incomplete section</a></p>
</nav>
<ul class="ds_task-list-group">
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
                        <a class="ds_task-list__task-link" href="#">Contacts and supporting information <span class="visually-hidden">(Completed)</span></a>
                    </h3>
                    <p class="ds_hint-text  ds_task-list__task-summary">Share any supporting documents and provide details of people we can talk to about you.</p>
                </div>
                <div class="ds_task-list__task-status  ds_task-list__task-status--complete" aria-hidden="true">Completed</div>
            </li>
        </ul>
    </li>
    <li class="ds_task-list-group__section">
        <h2 class="ds_task-list-heading">Tell us about your daily living and mobility circumstances</h2>
        <p class="ds_task-list-intro">This information will be used to check what additional benefits you may be able to apply for.</p>
        <ul class="ds_task-list">
            <li class="ds_task-list__task" id="task5">
                <div class="ds_task-list__task-details">
                    <h3 class="ds_task-list__task-heading">
                        <a class="ds_task-list__task-link" href="#">Preparing food <span class="visually-hidden">(In progress)</span></a>
                    </h3>
                    <p class="ds_hint-text  ds_task-list__task-summary">Questions about your ability to prepare a simple meal safely and any help you need to do this.</p>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">In progress</div>
            </li>
            <li class="ds_task-list__task" id="task6">
                <div class="ds_task-list__task-details">
                    <h3 class="ds_task-list__task-heading">
                        <a class="ds_task-list__task-link" href="#">Taking nutrition <span class="visually-hidden">(Not started)</span></a>
                    </h3>
                    <p class="ds_hint-text  ds_task-list__task-summary">Questions about your ability to eat and drink and any help you need to do this.</p>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">Not started</div>
            </li>
            <li class="ds_task-list__task" id="task7">
                <div class="ds_task-list__task-details">
                    <h3 class="ds_task-list__task-heading">
                        <a class="ds_task-list__task-link" href="#">Managing therapy or monitoring a health condition<span class="visually-hidden">(Not started)</span></a>
                    </h3>
                    <p class="ds_hint-text  ds_task-list__task-summary">Questions about any help you need to monitor changes in your health condition, take medication or do therapy  at home.</p>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">Not started</div>
            </li>
        </ul>
    </li>
</ul>
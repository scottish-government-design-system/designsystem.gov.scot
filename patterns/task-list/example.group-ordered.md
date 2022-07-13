---
layout: example
parent: pattern.task-list
type: example
index: 0
---
<h2 class="ds_h3">Application incomplete</h2>
<p>You have completed 4 of 8 sections. <br>
<a href="#task5">Skip to first incomplete section</a></p>
<ol class="ds_task-list-group  ds_task-list-group--ordered">
    <li class="ds_task-list-group__section">
        <h2 class="ds_task-list-heading">Heading for tasks</h2>
        <ul class="ds_task-list">
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    <a class="ds_task-list__task-link" href="#">This is a task <span class="visually-hidden">(Completed)</span></a>
                </div>
                <div class="ds_task-list__task-status  ds_task-list__task-status--complete" aria-hidden="true">Completed</div>
            </li>
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    <a class="ds_task-list__task-link" href="#">This is another task <span class="visually-hidden">(Completed)</span></a>
                    <p class="ds_task-list__task-summary">This is some additional content around this specific task.</p>
                </div>
                <div class="ds_task-list__task-status  ds_task-list__task-status--complete" aria-hidden="true">Completed</div>
            </li>
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    <a class="ds_task-list__task-link" href="#">This is yet another task which needs to be done <span class="visually-hidden">(Completed)</span></a>
                </div>
                <div class="ds_task-list__task-status  ds_task-list__task-status--complete" aria-hidden="true">Completed</div>
            </li>
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    <a class="ds_task-list__task-link" href="#">This is a task to perform last <span class="visually-hidden">(Completed)</span></a>
                </div>
                <div class="ds_task-list__task-status  ds_task-list__task-status--complete" aria-hidden="true">Completed</div>
            </li>
        </ul>
    </li>
    <li class="ds_task-list-group__section">
        <h2 class="ds_task-list-heading">Another heading for further tasks</h2>
        <p class="ds_task-list-intro">This is some introduction text for this task list.</p>
        <ul class="ds_task-list">
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    <a class="ds_task-list__task-link" href="#">This is another task <span class="visually-hidden">(In progress)</span></a>
                    <p class="ds_task-list__task-summary">This is some additional content around this specific task.</p>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">In progress</div>
            </li>
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    <a class="ds_task-list__task-link" href="#">This is yet another task which needs to be done <span class="visually-hidden">(Not started)</span></a>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">Not started</div>
            </li>
        </ul>
    </li>
    <li class="ds_task-list-group__section">
        <h2 class="ds_task-list-heading">A final list of tasks</h2>
        <ul class="ds_task-list">
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    This is yet another task which needs to be done <span class="visually-hidden">(Cannot start yet)</span>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">Cannot start yet</div>
            </li>
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    This is a task to perform last <span class="visually-hidden">(Cannot start yet)</span>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">Cannot start yet</div>
            </li>
        </ul>
    </li>
</ol>
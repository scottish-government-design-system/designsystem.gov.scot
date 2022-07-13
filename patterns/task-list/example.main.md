---
layout: example
parent: pattern.task-list
type: example
index: 0
---
<main class="ds_layout ds_layout--article">
    <div class="ds_layout__content">
        <h2 class="ds_h3">Transaction incomplete</h2>
        <p>You have completed 1 of 4 tasks. <br>
        <a href="#task2">Skip to first incomplete task</a></p>
        <ul class="ds_task-list">
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    <a class="ds_task-list__task-link" href="#">This is a task <span class="visually-hidden">(Completed)</span></a>
                </div>
                <div class="ds_task-list__task-status  ds_task-list__task-status--complete" aria-hidden="true">Completed</div>
            </li>
            <li class="ds_task-list__task" id="task2">
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
            <li class="ds_task-list__task">
                <div class="ds_task-list__task-details">
                    This is a task to perform last <span class="visually-hidden">(Cannot start yet)</span>
                </div>
                <div class="ds_task-list__task-status" aria-hidden="true">Cannot start yet</div>
            </li>
        </ul>
    </div>
</main>
---
layout: component
title:  "Task list"
category: patterns
parent: patterns
thispage: pattern.task-list
summary: "Help users to complete complicated forms and other activities by providing a list of tasks and showing their current states of completion."
experimental: true
---

## About this pattern

A task list can be used to help users complete a transaction that has many steps, such as filling out a form that asks for a lot of information.

It is designed so that users can understand:

- the tasks involved in completing the transaction
- the current status of each task
- where tasks must be completed in a particular order

You can change the terms ‘transaction’ and ‘task’ to best suit your service. For example, this may be a series of sections within an application.

### Showing the status of tasks

Every task should have a corresponding text label describing its status as one of:

- **Not started**<br>If the user can start work on the task but hasn't done so yet
- **Cannot start yet**<br>If the user is unable to start the task yet because other tasks need completed first
- **In progress**<br>If the user has started but not completed the task yet
- **Completed**<br>If the user has completed the task

The total number of tasks and how many tasks have been completed so far should be summarised in content above the task list.

A link to the first incomplete task provides a quick way for users to continue their transaction.

When a task cannot yet be completed an explanation should be included to support the status label.

### Related tasks

Grouping related tasks under different headings can help users understand what to expect. Headings should describe clearly what will be involved and where possible should begin with a verb, for example ‘check’, ‘declare’ or ‘report’.

{% include example-frame.html title="Task list split into groups" name="group" %}

### Ordering of tasks

Where possible, allow users to complete tasks in any order. This will help them plan their time and complete sections when they are able to.

When a transaction requires certain tasks to be completed before others, groups of tasks can be ordered in a numbered list.

{% include example-frame.html title="Ordered groups of tasks" name="group-ordered" %}

## When to use this pattern

Task lists should only be used where a transaction involves multiple tasks and may take a long time to complete.

When using the task list pattern, you should display a task list page:

- at the beginning of the transaction, before any tasks have been completed
- when users return to resume the transaction at a later session

When groups of tasks are used it may also help users to keep track of their progress by displaying the task list page again when the end of a group is reached.

Providing a link back to the task list, throughout the transaction, may also help users navigate between sections.

Let users check their answers as they progress through the tasks and before they are asked to complete the transaction.

If the transaction can be completed over a number of sessions, returning users should continue from the task list.

## When not to use this pattern

For simple transactions which follow a linear process, a task list is typically not required.

Where a task list is used and all tasks have been completed, a final confirmation message should be displayed rather than a fully completed task list.

## Evidence

This pattern is similar to the [GOV.UK task list pattern](https://design-system.service.gov.uk/patterns/task-list-pages/) and is currently used by Social Security Scotland  having gone through several iterations and rounds of user testing.

### Research and testing

User testing was performed on this pattern in 2021 covering:

- a comparison of two status options ('Complete' and 'Incomplete') with four ('Not started', 'Cannot start yet', 'In progress' and 'Completed')
- the colour of status labels
- the typography of status labels

Results showed that:

- four status types performed better than two, offering greater flexibility and support for when tasks can be completed in any order
- the use of red for status labels was harder for the users to read and caused anxiety as the colour typically relates to warnings or errors
- some users expected the status to be a clickable element
- sentence case was preferred for status labels

These findings have been incorporated into the latest iteration of the pattern.

## Website analytics

To understand user behaviour, clicks on task links can be tracked through the original page path, the click URL and the click text.

The data attributes are added automatically by the [Design System's 'tracking' script](/get-started/tracking/).

## Accessibility

This pattern uses a link to let users quickly navigate to the first incomplete remaining task and avoid keyboard users having to tab through completed tasks every time they return to the page.

Task titles also include their status as visually hidden text to aid users of assistive technology.   

More research is required to establish whether users of screen readers struggle to perceive tasks that cannot be started yet as they are not hyperlinked.

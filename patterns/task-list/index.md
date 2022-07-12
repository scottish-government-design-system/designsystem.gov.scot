---
layout: component
title:  "Task list"
category: patterns
parent: patterns
thispage: pattern.task-list
summary: "Help users navigate complex transactions by providing a list of tasks and their current states of completion."
experimental: true
---

## About this pattern

A task list can be used to help users complete a transaction that has multiple steps, such as submitting a complex application.

It is designed so users can understand:

- the tasks involved in completing the transaction
- the current status of each task
- where tasks have to be completed in a particular order

### Showing the status of tasks

Every task should have a corresponding text label describing its status as one of:

- **Not started**<br>If the user can start work on the task but hasn't done so yet
- **Cannot start yet**<br>If the user is unable to start the task yet because other tasks need completed first
- **In progress**<br>If the user has stared but not completed the task yet.
- **Completed**<br>If the user has completed the task

Summary text above the task list should detail the total number of tasks and how many have been completed so far.

### Grouping related tasks

Grouping related tasks under different section headings can help users understand what to expect and plan ahead. Section headings should describe clearly what will be involved and where possible should begin with a verb, for example 'check', 'declare' or 'report'.

{% include example-frame.html title="Task list grouped into sections" name="group" %}

### Ordering of tasks

Where possible, allow users to complete tasks in any order. This will help them plan their time and complete sections when they are able to.

When a transaction requires certain tasks to be completed before others, groups of tasks can ordered in a numbered list of sections.

{% include example-frame.html title="Task list grouped into ordered sections" name="group-ordered" %}

### When to use this pattern

Task lists should only be used where a transaction involves multiple tasks and may take a long time to complete over a number of sessions.

When using the task list pattern you should display a task list page:

- at the beginning of the transaction - before any tasks have been completed
- when users return to resume the transaction at a later session

When groups of tasks are used it may also help users stay informed of their progress by displaying the task list page when the end of a section is reached.

Providing a navigation link back to the task list throughout the transaction may also help users orientate themselves.

### When not to use this pattern

For simple transactions which follow a linear process, a task list is typically not required.

Where a task list is used and all tasks have been completed, a final confirmation message should be displayed rather than a fully completed task list.

## Evidence

This pattern is based on the [GOV.UK task list pattern](https://design-system.service.gov.uk/patterns/task-list-pages/) and is currently used by Social Security Scotland - having gone through several iterations and rounds of user testing. 

### Research and testing

User testing was performed on this pattern on 20 April 2021 covering:

- comparison of two status options ("Complete" and "Incomplete") with four ("Not started", "Cannot start yet", "In progress" and "Completed")
- colour of status labels
- typography of status labels

Results showed that:

- four status types performed better than two, offering greater flexibility and support for when tasks can be completed in any order
- use of red for status labels was harder for the users to read
- some users expected the status to be a clickable element
- sentence case was preferred for status labels

### Performance data

Analytics data gathered from the Social Security Child Disability Payment application was shared with the design system team on 23 Febuary 2022. The task list was used by 4,183 users across 11,171 sessions. Usage was 65% mobile, 2% tablet, 33% desktop. 

The data shows that users on task list pages spend a similar time on the page on mobile compared to desktop (around 12-14 seconds) with mobile users spending slightly less time on the page (this is a mobile user behaviour we've seen elsewhere in our research). 

By it's nature this pattern is used to help simplify a process (in this case it is being used in a process that requires collecting several areas of documentation and personal details) - as such the exit rate is higher on mobile as users appear to leave to get documentation before returning later (2.6% on mobile vs 1.9% on desktop).

## Website analytics

To understand user behaviour, clicks on task links can be tracked through the original page path, the click URL and the click text.

The data attributes are added automatically by the [Design System's 'tracking' script](/get-started/tracking).

## Accessibility

User research has highlighted some issues with this pattern that includes:

- users click directly onto the tag to start a task instead of the hyperlink
- white space between task title and tag can cause an issue with zoom tool users
- confusion between tags “Not started” and “Cannot start yet” due to similar appearance and colour

Other known issues from research and feedback conducted by GDS: 

- some screen reader users are frustrated by having to tab through every section each time they return to the task list after completing a task
- some services need users to complete tasks in a particular order, for example, a user must fill in an application before they can pay
- once a few tasks have been completed it becomes harder to scan the page and spot incomplete tasks

More research is required to establish whether users of screen readers struggle to perceive tasks that cannot be started yet as they are not hyperlinked.
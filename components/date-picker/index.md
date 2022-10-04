---
layout: component
title:  "Date picker"
category: components
parent: components
label: component
thispage: component.date-picker
summary: "Date pickers help a user to input a date into a form."

examples:
  - site: mygov.scot
    url: https://www.mygov.scot/tenancy-agreement-scotland/#!/tenancy/tenancy-start
    name: "Create a tenancy agreement"

updatehistory:
  - date: 2020-07-23
    content: Add "date picker" component
    url: /components/date-picker
---


## About this component

The date picker is a component that helps users to complete date input fields. To help with accessibility, it can be used with a keyboard, as well as mouse or touchscreen.

The date picker can be set with limits on the dates that users can select.

The date picker component can use a variety of date formats, with the UK style of _date-month-year_ used by default.

## Why we use this component

Date pickers are a common component that helps users select and enter a date.

## Website analytics

To understand user behaviour, clicks on date picker items can be tracked through the original page path, the click text, and a data attribute showing the element interacted with.

Clicks on buttons inside a date picker, including 'OK', 'Cancel' and the month navigation buttons are tracked using the standard [Button tracking](/components/button/). Data attributes for these are added automatically by the [Design System's 'tracking' script](/get-started/tracking/).

## Accessibility

### Keyboard support

<table class="ds_table">
    <thead>
        <tr>
            <th>Element</th>
            <th>Key</th>
            <th>Action</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Calendar button</td>
            <td><code>Space</code>,<br/><code>Enter</code></td>
            <td>Opens the date picker. If there is a current date set in the text input, that date is focussed in the date picker. If not, today's date is focussed.</td>
        </tr>

        <tr>
            <td>Date picker</td>
            <td><code>Escape</code></td>
            <td>Closes the date picker and focuses on the calendar button.</td>
        </tr>

        <tr>
            <td>Date picker</td>
            <td><code>Tab</code></td>
            <td>Moves focus to the next element in the tab order. If tabbing away from the last focusable element in the tab order, moves focus to the first focusable element in the date picker.</td>
        </tr>

        <tr>
            <td>Date picker</td>
            <td><code>Shift + tab</code></td>
            <td>Moves focus to the previous element in the tab order. If tabbing away from the first focusable element in the tab order, moves focus to the last focusable element in the date picker.</td>
        </tr>

        <tr>
            <td>Month and year buttons</td>
            <td><code>Space</code>,<br/><code>Enter</code></td>
            <td>Change the current month or year displayed in the date picker.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Space</code>,<br/><code>Enter</code></td>
            <td>Selects the focussed date, closes the date picker and moves focus back to the calendar button. Updates the accessible name of the calendar button to indicate the selected date.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Up</code></td>
            <td>Moves focus to the same day of the previous week, changing the displayed month if necessary.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Down</code></td>
            <td>Moves focus to the same day of the next week, changing the displayed month if necessary.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Left</code></td>
            <td>Moves focus to the previous day, changing the displayed month if necessary.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Right</code></td>
            <td>Moves focus to the next day, changing the displayed month if necessary.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Home</code></td>
            <td>Moves focus to the first day of the current week.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Page up</code></td>
            <td>Shows the previous month and focuses on the same day of the month.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Shift + page up</code></td>
            <td>Shows same month in the previous year and focuses on the same day of the month.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Page down</code></td>
            <td>Shows the next month and focuses on the same day of the month.</td>
        </tr>

        <tr>
            <td>Dates</td>
            <td><code>Shift + page down</code></td>
            <td>Shows same month in the next year and focuses on the same day of the month.</td>
        </tr>

        <tr>
            <td>Cancel button</td>
            <td><code>Space</code>,<br/><code>Enter</code></td>
            <td>Closes the date picker and makes no change to the date in the text input. Focus is returned to the calendar button.</td>
        </tr>

        <tr>
            <td>OK button</td>
            <td><code>Space</code>,<br/><code>Enter</code></td>
            <td>Closes the date picker and updates the date in the text input with the chosen date in the date picker. Focus is returned to the calendar button.</td>
        </tr>
    </tbody>
</table>

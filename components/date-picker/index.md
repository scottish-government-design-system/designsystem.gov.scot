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
  - date: 2023-04-26
    content: 'Add documentation about the use of JavaScript'
    homepage: false
    url: /components/date-picker
---


## About this component

The date picker is a component that helps users to complete date input fields. To help with accessibility, it can be used with a keyboard, as well as mouse or touchscreen.

The date picker can be set with limits on the dates that users can select.

The date picker component can use a variety of date formats, with the UK style of _date/month/year_ used by default.

## Why we use this component

Date pickers are a common component that helps users select and enter a date.

## Website analytics

To understand user behaviour, clicks on date picker items can be tracked through the original page path, the click text, and a data attribute showing the element interacted with.

Clicks on buttons inside a date picker, including 'OK', 'Cancel' and the month navigation buttons are tracked using the standard [Button tracking](/components/button/). Data attributes for these are added automatically by the [Design System's 'tracking' script](/guidance/tracking/).

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


## Implementation

The date picker component needs JavaScript enabled in the user’s browser. If a user does not have JavaScript enabled the text field will behave as normal, without the date picker enhancements.

### Date formats

Use an attribute of `data-dateformat` on the input element to specify one of the following. If none is provided it defaults to `DMY`.

* `DMY` - 14th March 2020 would be written as `14/03/2020`
* `MDY` - 14th March 2020 would be written as `03/14/2020`
* `YMD` - 14th March 2020 would be written as `2020/03/14`

### Allowed date ranges

Use an attribute of `data-mindate` on the input element to specify an earliest possible date for the calendar. Dates before this date cannot be selected.

Use an attribute of `data-maxdate` on the input element to specify a latest possible date for the calendar. Dates after this date cannot be selected.

The date format used for both of these is whatever you specify in `data-dateformat` or the default, `DMY`.

### JavaScript

Set up a date picker by creating a new DatePicker object. It takes two parameters:

* the DOM element of the date picker (element with class `ds_datepicker`)
* an optional object of customisation settings

The customisation settings can have the following properties:

* `imagePath`: the path to the location of your icons sprite. Default is `/assets/images/icons/`
* `maxDate`: a JavaScript date object for the latest selectable date
* `minDate`: a JavaScript date object for the earliest selectable date

{% include inset-text.html content="Minimum and maximum dates that have been set using JavaScript will overwrite minimum and maximum dates that have been specified with data attributes." %}

### Example JavaScript

{% highlight javascript %}
const datePicker = new window.DS.components.DatePicker(
    document.getElementById('my-date-picker'),
    {
        imagePath: '/my/image/path/',
        maxDate: new Date(),
        minDate: new Date(2019, 1, 1)
    }
);

datePicker.init();
{% endhighlight %}

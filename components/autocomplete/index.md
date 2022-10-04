---
layout: component
title:  "Autocomplete"
category: components
parent: components
label: component
thispage: component.autocomplete
summary: "Autocomplete helps users to complete a text input by providing suggestions as they type."
experimental: true
example:
  no-demo: true
updatehistory:
  - date: 2022-07-06
    content: Add "autocomplete" component
    url: '/components/autocomplete'

---

## About this component

The autocomplete component is used to display suggested terms pulled from a data source while the user types into a field. The data source is usually a back-end service.

The list of suggestions is shown when the user types into the field and it is updated every time a character is entered. Text matching the user's input is highlighted in each suggestion. The list is limited to a maximum of 6 suggestions. On small devices fewer suggestions might be shown, depending on the space available. If there are no suggestions, the list does not appear.

Selecting a suggestion will place its text in the input field and the list of suggestions will be hidden. Suggestions can be selected by clicking, tapping or by using the keyboard.

The suggestion list is also hidden if the user clicks away from the text input and suggestion list.

## Live example

Type into the search input in this example to see how the autocomplete component behaves.

{% include example-frame.html title="Autocomplete live example" name="live" no-code="true" %}

## Why we use this component

Autocomplete is commonly used for search inputs. When used on a search input, autocomplete helps users to select a well-formed term which will help them find the information they need.

More generally, autocomplete helps users to:

* correctly complete a form field
* avoid spelling errors because terms do not need to be typed out in full
* reduce the time it takes to complete a form field

## Related components

* [Site search](/components/site-search/)
* [Text input](/components/text-input/)

## Website analytics

Autocomplete interactions can be tracked through custom events and the original page path. These custom events are added automatically by the [Design System's 'tracking' script](/get-started/tracking/#autocomplete).

## Accessibility

The autocomplete component has been built to support assistive technology, such as screen readers, and can be operated with a keyboard, mouse or touch screen.

### Keyboard support

<table class="ds_table">
    <thead>
        <tr>
            <th>Key</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Up arrow</td>
            <td>Highlight the previous suggestion in the suggestion list. Go to the last suggestion if the user was on the first suggestion in the list.</td>
        </tr>
        <tr>
            <td>Down arrow</td>
            <td>Highlight the next suggestion in the suggestion list. Go to the first suggestion if the user was on the last suggestion in the list.</td>
        </tr>
        <tr>
            <td>Enter</td>
            <td>Select the currently highlighted suggestion and hide the suggestion list.</td>
        </tr>
        <tr>
            <td>Tab</td>
            <td>Move focus to the next focusable item and hide the suggestion list.</td>
        </tr>
        <tr>
            <td>Escape</td>
            <td>Clear the text input and hide the suggestion list.</td>
        </tr>
    </tbody>
</table>

## Implementation

The autocomplete component needs JavaScript enabled in the user's browser. If a user does not have JavaScript enabled the text field will behave as normal, without the autocomplete enhancements.

Autocomplete expects there to be a suggestions endpoint to communicate with.

Set up an autocomplete by creating a new `Autocomplete` object. It takes three parameters:

* a DOM element to use for the autocomplete 
* the URL for the suggestions endpoint
* an optional object of customisation settings

The customisation settings can have the following properties:

* `suggestionMappingFunction`: a function to map the data returned from the endpoint to the format that the autocomplete will use to populate its options
* `throttleDelay`: amount of time to wait after a keypress before sending the request, to prevent sending many requests if someone is typing quickly (default is 100ms)
* `minLength`: number of characters that need to be in the text input before requesting suggestions (default is 3)

### Example JavaScript

{% highlight javascript %}
const autocomplete = new Autocomplete(
    document.getElementById('site-search-autocomplete'),
    'https://www.example.com/path/to/autocomplete?query=',
    {
        suggestionMappingFunction: function (suggestionsObj) {
            return suggestionsObj.map(suggestionsObj => ({
                key: suggestionsObj.key,
                displayText: suggestionsObj.disp,
                weight: suggestionsObj.wt,
                type: suggestionsObj.disp_t,
                category: suggestionsObj.cat
            }
        )),
        minLength: 1;
    }
});

autocomplete.init();
{% endhighlight %}

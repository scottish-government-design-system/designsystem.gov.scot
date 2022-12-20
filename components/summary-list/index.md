---
layout: component
title:  "Summary list"
category: components
parent: components
label: component
thispage: component.summary-list
summary: "A compact summary of a user's responses to questions in a form."
---

## About this component

Items in a summary list have:
* a question
* a response
* an optional 'change answer' action button

There is an item in the summary list for every question the user has been asked. If a user has been able to skip past a question without answering it, for example if the question is optional, the question should still be included along with an 'empty' response, such as the words 'not applicable' or 'not answered'.

Each 'change answer' button should take the user back to where they were asked the question it relates to, so that the user can enter a different response if they want to.




### When to use this component

A summary list should be used in forms to give the user an opportunity to review their responses. This could be a page allowing the user to check their responses before submitting a form or a block on every page of a form allowing users to track their answers throughout.




### When not to use this component

Do not use a summary list for:
* tabular data, instead try using a [table](/components/table)
* simple lists, instead try using an [ordered or unordered list](/styles/typography/#lists)
* a list of tasks, instead try using a [task list](/patterns/task-list)




## Other versions of this component

### Summary list without borders

If a summary list has no action buttons, you can also choose to remove the borders separating items in the list.

{% include inset-text.html content="Do not remove the borders when there are action buttons. The borders help sighted users to associate the action with the correct summary list item." %}

You can remove the borders by adding the `ds_summary-list--no-border` modifier class to the summary list.

{% include example-frame.html title="Summary list without borders" name="no-borders" %}




## Website analytics

To track interactions with the action buttons in Google Analytics using Google Tag Manager, each button has a data attribute that describes the action.

The data attribute is added automatically by the [Design System's 'tracking' script](/guidance/tracking/#button).




## Accessibility

While the 'change answer' buttons are clearly related to information in the summary list for sighted users, additional text is added to help screen reader users know the context for the button actions. For example, instead of just hearing the word 'Change' they might hear 'Change your answer for "Which council area do you live in?"'. This additional text is also used by the Design System's tracking script when it adds a tracking data attribute to the action button.

Additional text can also be added to the user's responses. In the examples on this page the user's responses have the text 'your answer is' inserted before the response. The full content that a screen reader would read out for the council area example would therefore be: 'Which council area do you live in? Your answer is "Aberdeen City Council". Change your answer for "Which council area do you live in?"'

The buttons are also associated with the user's answer using `aria-describedby`. If a screen reader user is skipping through a page link by link they will hear the answer as well as being given the option to change it. In VoiceOver this is read out as, 'Change your answer for "Which council area do you live in?", button. Your answer is "Aberdeen City Council"'. The user is told both the question and their response.

---
layout: component
title: "Hide this page"
category: components
parent: components
thispage: component.hide-this-page
summary: "The 'Hide this page' component helps users to exit a service, website or application quickly and safely."
example:
  no-demo: true

examples:
  - site: mygov.scot
    url: https://www.mygov.scot/legal-advice
    name: "Help with a legal problem"

updatehistory:
  - date: 2020-11-20
    content: Add "hide this page" component
    url: /components/hide-this-page
---

## About this component

The hide this page component is a prominent button that closes the open service or website. Using the button hides some evidence that a user visited the page.

This can help victims of domestic abuse or other vulnerable users to look at sensitive content more safely. Abusers may try to keep tabs on what their victims do on a personal or shared device.

We designed our hide this page component so that:
- it is clearly visible on the content page at all times
- the red colour shows its importance and makes it easy to find in an emergency situation
- the button text "Hide this page" states what the component does in plain English

When a user clicks on the hide this page button, it:
1. changes the current tab to the Google homepage
1. removes the previous page visit from the history
1. opens the BBC Weather website in a new active tab

It does not remove every visit to a sensitive page from the history. It only removes the active page on which the user clicks the button.

### When to use this component

Use the component on pages where:
- viewing that service or content could put someone in danger or at risk of harm
- the information is sensitive and says something about a potential victim's plans

For example, when a potential victim uses a service about leaving a domestic abuser.

You can use the component on either:
- pages covering a whole service
- parts of the journey where the information is sensitive and could alert an abuser

### When not to use this component

Do not use this component if the service or content is unlikely to put a user at risk.

## Evidence

This component has been through several iterations on [mygov.scot](https://www.mygov.scot).

### Research and testing

We collaborated on the latest design, placement and language for this component with the:
- Ministry of Justice (MoJ)
- Department for Work and Pensions (DWP)

Usability testing in 2015 of a previous version included a feedback session. This version took users to our site homepage. The session showed users preferred the button to either:
- close down the site completely
- take them to a neutral site (such as Google)


We also did desk-based research in 2020 by reviewing other websites with similar functionality. For example we looked at charity organisations such as:
- [Women’s Aid](https://www.womensaid.org.uk/)
- [Refuge](https://www.refuge.org.uk/)

This helped us confirm the findings from the 2015 usability testing mentioned above.

### Performance data

Domestic abuse content received increased traffic due to COVID-19 (1 April-30 June 2020). More than one in ten domestic abuse content users clicked the 'Hide this page' button in this period. Mobile users clicked the button proportionally more than desktop users.

In 2017, we used a tool called 'Mouseflow' that allowed us to view sessions anonymously. We watched user sessions to find out if users clicked the button on purpose or by accident. During several sessions users moved the cursor at speed to the button. We took this behaviour to show deliberate action.

We plan to test with more users and to focus on behaviour and language of the button-supporting text.

## Website analytics

You can track hide this page link clicks through the original page path and a data attribute describing the action.

The data attribute is added automatically by the [Design System's 'tracking' script](/guidance/tracking/#hide-this-page).

## Accessibility

We offer a keyboard shortcut using the ESC key. Research suggested speed is critical to keep users safe and avoid potential harm. It may be quicker for some users to press a keyboard button, like the ESC key, than move the mouse pointer.

Every page with the component should have a hidden warning for assistive technologies, such as screen readers. To do this, you should add the following code above the 'Skip to main' content element.

{% include example-frame.html title="HTML snippet to alert users of screen readers to the keyboard trigger" name="accessible-snippet" no-demo=true html-expanded=true %}

When a user is using assistive technology, the code announces either or both:
- the presence of the 'Hide this page' button
- the use of the ESC key

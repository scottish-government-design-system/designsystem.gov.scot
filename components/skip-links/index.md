---
layout: component
title:  "Skip links"
category: components
parent: components
label: component
thispage: component.skip-links
summary: "Use the skip link component to help keyboard-only users skip to the main content on a page."
example:
  no-demo: true

updatehistory:
  - date: 2021-04-15
    content: Add "skip links" component
    url: /components/skip-links
  - date: 2021-09-15
    content: Add documentation to the accessibility section about not making the main content area focusable by default (the component's JavaScript now controls this automatically)
    url: /components/skip-links
    homepage: false
---

## About this component

Some people use the 'tab' key on their keyboard to navigate through the links and form elements on a web page.

Using the skip link component gives users the option to:
* bypass repeated elements such as top level navigation links and breadcrumbs
* jump to the main content on a page

The skip link component is visually hidden on page load. The user reveals the link when they press the 'tab' key on their keyboard.

We use the text "Skip to main content." This tells users exactly what clicking on the skip link will do. This includes those who do not use a mouse and use the keyboard only.

We use the skip link component on the Scottish Government’s main sites:
* [mygov.scot](https://www.mygov.scot)
* [gov.scot](https://www.gov.scot)




## Why we use this component

For Scottish Government websites use of this component is mandatory to meet our accessibility success criteria.

We based our skip link behaviour on the [guidance in the GOV.UK Design System](https://design-system.service.gov.uk/components/skip-link/). 

We have tested this component and found it works well with users.




## Evidence

### Performance data

Users clicked skip links 43 times on 20 Feb 2021 across 294,447 tracked page views.

When a user clicks a skip link, they generally do so on most pages in that session.

Although users only clicked skip links 43 times, this number represents users that need it, and for whom without it their user experience would be significantly impaired.

### Screen reader user survey

WebAIM have published survey results from users who exclusively use screen readers. The data shows how popular skip links are with these users. It also shows those users slightly prefer the phrase "Skip to main content."

### Screen reader testing

For the phrase "Skip to content" some screen readers pronounced the word "content" with the stress on the second syllable, which gives it the wrong meaning ('content' as in 'satisfied'). Using the phrase "Skip to *main* content" made the same reader pronounce it as expected.




## Website analytics

You can track skip link clicks through the original page path and a data attribute describing the action.

The data attribute is added automatically by the [Design System's 'tracking' script](/guidance/tracking/#skip-links)




## Accessibility

This component gets focus on a page when a user presses the ‘tab’ key on their keyboard. Pressing the ‘enter’ key then brings the user directly to the main content area on the page. This action sets the browser to also focus the main content. When the main content loses focus, a user can focus it again through the use of the skip link.

We do not recommend setting the main content area to be focusable by default. For example, giving the main content a tabindex of -1. This would make it easy for a user to click anywhere on the main content area by mistake and give it focus. If the user was aiming for something else, the focus will not be on what they wanted.

Skip links can be of value to some sighted users, but having them always visible can be distracting. These resources discuss visible skip links in more detail: 

* '[Skip navigation links](https://webaim.org/techniques/skipnav/)' from WebAIM
* '[Is it a good idea to make skip navigation links invisible?](https://www.washington.edu/accesscomputing/it-good-idea-make-skip-navigation-links-invisible)' from DO-IT (University of Washington)

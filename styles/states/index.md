---
layout: component
title:  "Focus states"
category: styles
parent: styles
thispage: style.states
#summary: ""
phase: 2
---

Focus states can also be known as 'interactive states'. Not all users will come across a focus or interactive state, but for some users and a website's accessibility they're very important.

For those users who use keyboards or other devices to jump between things like buttons and links on a web page, following some best practice guidelines when designing web pages can help make it much easier for them to find what they need.

## When users use a keyboard or other device to search a web page

When a user searches a web page by jumping between things like the page's buttons or form fields, it needs to be clear to the user which bit of the page they're on. If there's a change in state, such as a button that's been clicked, this should also be clear.

Components and patterns in this Design System provide styles to make these things clear. If you use a component or pattern from the Design System, you do not need to do anything extra with the focus states within it.

The states shown for things like buttons or form field in the Design System are:

- default
- hover
- focus
- active
- selected

### Default
The default, or normal state, is how the element something appears when not in use.

### Hover
The hover state starts when a user places their cursor over something like a button or form field.

### Focus
The focus state starts when a user gets to something like a button or form field using their keyboard or other device. This state should contrast to the default state.

Focus states of the components and patterns in this Design System use a high contrast combination of yellow and black to make sure they meet Web Content Accessibility Guidelines (WCAG) 2.1 level AA. To meet these standards, foreground and background colours must have a high contrast.

### Active
The active state shows the user has triggered a button or is typing in a form field.

### Selected/Current
The selected states denotes the current page or option in a list of navigational links - e.g. the page a user is looking at in a guide.

Our focus states are designed to work with these devices:

- mouse
- touch screen
- keyboard
- game controller
- magnifiers
- screen reader
- switch
- other assistive devices

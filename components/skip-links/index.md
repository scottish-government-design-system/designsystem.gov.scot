---
layout: component
title:  "Skip links"
category: componentsx
parent: components
label: component
thispage: component.skip-links
summary: "Use the skip link component to help keyboard-only users skip to the main content on a page."
example:
  no-demo: true
---

## About this component

The skip link component gives keyboard only users and users of assistive technology the option of skipping to the main content on the page, and bypassing the top level navigation links, breadcrumbs and other repeating elements. 

The skip link component is hidden until it is activated when the user presses the 'tab' key on their keyboard.

Including the skip link component gives users the option to bypass repeated elements such as top level navigation, breadcrumbs and jump to the main content on a page.

The skip link text is set to "Skip to main content" so that users know exactly what clicking on the skip link will do.

We use the skip link component on the Scottish Government's sites mygov.scot and gov.scot.  

## Why we use this component

Our design of skip link is [based on guidance in the GOV.UK Design System](https://design-system.service.gov.uk/components/skip-link/) however we have been testing this component and have found it works well with users.

## Evidence

### Performance data

Skip links were used 43 times on 20 Feb 2021 across 294,447 tracked page views. Based on the following factors (browser version, screen size, browser size, operating system version, city/town level location), we found that almost everyone used the skip link only once or twice in their session.

Although usage of this component is very low there is web analytics evidence which shows that when 'Skip to content' links are used they are generally used on most pages within a single user's session. 

## Website analytics

You can track skip link clicks through the original page path and a data attribute describing the action.

The data attribute is added automatically by the [Design System's "tracking" script](/get-started/tracking/#skip-links)

## Accessibility

This component gets focus on a page when you hit the 'Tab' key on your keyboard. It is the first item on the page that will receive focus. Hitting the 'Enter' key afterward will bring the user directly to the main content section on the page. 

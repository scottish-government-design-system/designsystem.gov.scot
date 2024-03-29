---
layout: component
title:  "Select (dropdown)"
category: components
subcategory: forms
parent: components
thispage: component.select
summary: "A form field that allows users to pick a single item from a list of options."
examples:
  - site: mygov.scot
    url: https://www.mygov.scot/scotland-bank-holidays
    name: "Public and bank holidays"

updatehistory:
  - date: 2020-08-19
    content: Add "select" component
    url: /components/select
---
We based our select component on the one built by GDS. [Find out more about the select component on GOV.UK’s Design System](https://design-system.service.gov.uk/components/select/).

## Website analytics

Select components can be tracked through custom events and the original page path. Custom events are used as the data isn't available at the instant an option is chosen and the clicktext could potentially contain personally identifiable information.

Tracking data attributes and events are added automatically by the [Design System's 'tracking' script](/guidance/tracking/#select-dropdown).

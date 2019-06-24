---
layout: example
parent: settings.transition
type: developers

index: 999
---

### Configuration options

Transitions have the following configuration options, which are fairly self-explanatory.

* `$transition-in-time`
* `$transition-out-time`

Your values for these should be included before you include the SCSS file.

    $transition-in-time: 0.3s;
    @import './scss/settings/settings.transition';

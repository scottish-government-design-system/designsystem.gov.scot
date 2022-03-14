---
layout: example
parent: pattern.site-footer

index: 999
---

### Configuration options

The background colour of the site footer can be overridden.

`$site-footer__background`

<div class="ds_warning-text">
    <strong class="ds_warning-text__icon" aria-hidden="true">!</strong>
    <strong class="visually-hidden">Warning</strong>
    <div class="ds_warning-text__text">If you are using a dark colour for the footer background colour you should add the <code class="highlighter-rouge">ds_reversed</code> class to the site footer element to meet <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">WCAG contrast rules</a>.</div>
</div>

Your value for this should be included before you include the SCSS file.

    $site-footer__background: red;
    @import '/path/to/components/site-footer/site-footer';

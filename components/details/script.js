// DETAILS
/*
 Contains functionality for accordion-style expandable panels using HTML5 details elements
 */

'use strict';

const detailsElements = document.querySelectorAll('details.details');
// is details a known element?
if (typeof document.createElement('details').open === 'undefined') {

    const elements = document.querySelectorAll('.details, .details__title, .details__content, .details__summary');

    for (let i = 0, il = elements.length; i < il; i++) {
        elements[i].setAttribute('class', '');
    }

    const icons = document.querySelectorAll('.details__summary-icon');
    for (let i = 0, il = icons.length; i < il; i++) {
        icons[i].parentNode.removeChild(icons[i]);
    }
} else {
    detailsElements.forEach(function(details) {

        const summary = details.querySelector('summary');

        // add aria-expanded attrib to summary
        summary.setAttribute('aria-expanded', 'false');

        // add event to toggle aria-expanded
        summary.addEventListener('click', function () {
            // event loop nonsense
            window.setTimeout(function () {
                summary.setAttribute('aria-expanded', details.open);
            }, 0);
        });
    });
}

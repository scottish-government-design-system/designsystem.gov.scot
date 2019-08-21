const accordionComponent = {
    init: function () {
        const accordions = document.querySelectorAll('.accordion');

        accordions.forEach(function (accordion) {
            const accordionItems = accordion.querySelectorAll('.accordion-item');
            const openAllButton = accordion.querySelector('.accordion__open-all');

            accordionComponent.initOpenAll(accordion, openAllButton);

            accordionItems.forEach(function (accordionItem) {
                accordionComponent.initAccordionItem(accordionItem, accordion, openAllButton);
            });
        });
    },

    initAccordionItem(item, accordion, button) {
        const checkbox = item.querySelector('.accordion-item__control');
        checkbox.setAttribute('aria-expanded', false);

        checkbox.addEventListener('change', function (event) {
            const body = item.querySelector('.accordion-item__body');
            if (event.target.checked) {
                // 21px and 28px are the top and bottom padding of the body content
                body.style.display = 'block';
                body.style.maxHeight = body.scrollHeight + 21 + 28 + 'px';
            } else {
                body.style.maxHeight = 0;
                window.setTimeout(function () {
                    body.style.display = 'none';
                }, 200);
            }

            accordionComponent.checkAllOpen(accordion, button);

            checkbox.setAttribute('aria-expanded', event.target.checked);
        });
    },


    initOpenAll: function (accordion, button) {
        button.addEventListener('click', function () {
            const opening = !accordionComponent.checkAllOpen(accordion, button);

            const allPanelCheckboxes = accordion.querySelectorAll('.accordion-item__control');

            allPanelCheckboxes.forEach(function (checkbox) {
                checkbox.checked = opening;

                const event = document.createEvent('HTMLEvents');
                event.initEvent('change', true, false);
                checkbox.dispatchEvent(event);
            });
        });
    },

    checkAllOpen: function (accordion, button) {
        const accordionItems = accordion.querySelectorAll('.accordion-item');
        const openItems = accordion.querySelectorAll('.accordion-item__control:checked');
        let allOpen;

        if (accordionItems.length === openItems.length) {
            // everything is open
            button.innerHTML = 'Close all <span class="visually-hidden">sections</span>';
            allOpen = true;
        } else {
            // not everything is open
            button.innerHTML = 'Expand all <span class="visually-hidden">sections</span>';
            allOpen = false;
        }

        return allOpen;
    },
};

// self-initialize
accordionComponent.init();

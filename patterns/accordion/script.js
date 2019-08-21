const accordionComponent = {
    init: function () {
        const accordionItems = document.querySelectorAll('.accordion-item');

        accordionItems.forEach(function (accordionItem) {
            accordionComponent.initAccordionItem(accordionItem)
        });
    },

    initAccordionItem(item) {
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

            checkbox.setAttribute('aria-expanded', event.target.checked);
        });
    }
};

// self-initialize
accordionComponent.init();

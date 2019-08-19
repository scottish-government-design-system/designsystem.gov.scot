const sideNavigationComponent = {
    init: function () {
        const sideNavigation = document.querySelector('.side-navigation');
        const checkbox = sideNavigation.querySelector('#show-side-navigation');
        checkbox.setAttribute('aria-expanded', false);

        checkbox.addEventListener('change', function (event) {
            const list = sideNavigation.querySelector('.side-navigation__root');
            if (event.target.checked) {
                list.style.maxHeight = list.scrollHeight + 14 +  'px';
            } else {
                list.style.maxHeight = 0;
            }

            checkbox.setAttribute('aria-expanded', event.target.checked);
        });
    }
};

// self-initialize
sideNavigationComponent.init();

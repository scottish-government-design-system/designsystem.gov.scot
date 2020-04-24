const dsSite = {
    init: () => {
        const searchParams = new URLSearchParams(document.location.search);

        if (searchParams.get('showall') === 'true') {
            sessionStorage.setItem('showAll', true);
        }

        if (sessionStorage.getItem('showAll')) {
            dsSite.showOutOfPhaseItems();
        }
    },

    showOutOfPhaseItems: () => {
        [].slice.call(document.querySelectorAll('.js-out-of-phase')).forEach((item) => {
            item.classList.remove('fully-hidden');
            item.style.opacity = 0.5;
        });
    }
};

dsSite.init();

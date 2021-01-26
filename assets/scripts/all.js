import { initAll } from '../../node_modules/@scottish-government/pattern-library/src/all';

window.DS = window.DS || {};

// add scroll depth tracking to back to top
if (window.DS.tracking) {
    window.DS.tracking.add.backtotop = function (scope = document) {
        const backToTops = [].slice.call(scope.querySelectorAll('.ds_back-to-top__button'));
        backToTops.forEach(backToTop => {
            backToTop.setAttribute('data-navigation', 'backtotop');

            if (!backToTop.classList.contains('js-initialised')) {
                backToTop.addEventListener('click', () => {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: 'backToTop',
                        scrollDepthAbs: window.scrollY,
                        scrollDepthRel: +(window.scrollY / window.innerHeight).toFixed(3)
                    });
                });

                backToTop.classList.add('js-initialised');
            }
        });

        window.DS.tracking.add.backToTop(scope);
    };
}

initAll();

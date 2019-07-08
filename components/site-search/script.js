'use strict';

document.body.classList.add('js-enabled');

const searchBoxComponent = {
    init: function () {
        const collapsibleSearchBoxes = document.querySelectorAll('.site-search--collapsible');

        collapsibleSearchBoxes.forEach(function (searchBox) {
            const searchInput = searchBox.querySelector('.site-search__input');
            const searchButton = searchBox.querySelector('.site-search__button');

            searchButton.addEventListener('click', function (event) {
                searchInput.focus();
                if (!searchInput.value) {
                    event.preventDefault();

                    searchBox.classList.toggle('site-search--expanded');

                    if (!searchBox.classList.contains('site-search--expanded')) {
                        searchInput.blur();
                    }
                }
            });
        });
    }
};

// self-initialize
searchBoxComponent.init();

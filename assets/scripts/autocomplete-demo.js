import Autocomplete from '../../node_modules/@scottish-government/pattern-library/src/components/autocomplete/autocomplete';
import tracking from '../../node_modules/@scottish-government/pattern-library/src/base/tools/tracking/tracking';

window.DS = window.DS || {};
window.DS.components = window.DS.components || {
    Autocomplete: Autocomplete
};

document.addEventListener('DOMContentLoaded', () => {
    var searchElement = document.getElementById('site-search');

    var autocomplete = new window.DS.components.Autocomplete(
        document.querySelector('#site-search-autocomplete'),
        '/components/autocomplete/dummy-data.json#',
        {
            suggestionMappingFunction: function (suggestionsObj) {

                var responseObj = JSON.parse(suggestionsObj.response).map(suggestionsObj => ({
                    key: '',
                    displayText: suggestionsObj,
                    weight: '',
                    type: '',
                    category: ''
                }));
                var filteredResults = responseObj.filter(item => (item.displayText.toLowerCase().indexOf(searchElement.value.toLowerCase()) > -1));

                return filteredResults.slice(0,6);
            }
        });
    autocomplete.init();
    tracking.init();
});

export default Autocomplete;

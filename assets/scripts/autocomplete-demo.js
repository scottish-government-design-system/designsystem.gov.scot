import Autocomplete from '../../node_modules/@scottish-government/pattern-library/src/components/autocomplete/autocomplete';

window.DS = window.DS || {};
window.DS.components = window.DS.components || {
    Autocomplete: Autocomplete
};
console.log(1)
document.addEventListener('DOMContentLoaded', () => {
    var searchElement = document.getElementById('site-search');
    console.log(2)
    var autocomplete = new window.DS.components.Autocomplete(
        document.querySelector('#site-search-autocomplete'),
        '/experiments/autocomplete/dummy-data.json#',
        {
            suggestionMappingFunction: function (suggestionsObj) {
console.log(suggestionsObj)
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
});

export default Autocomplete;

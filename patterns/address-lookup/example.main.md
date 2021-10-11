---
layout: example
parent: pattern.address-lookup
type: example
---

<div class="ds_address-lookup" data-module="ds-address-lookup">
    <div class="ds_address-lookup__search" tabindex="0">
        <div class="ds_question">
            <label for="my-postcode-lookup" class="ds_label">Postcode</label>
            <input type="text" class="ds_input  ds_input--fixed-10  js-postcode-input" id="my-postcode-lookup" autocomplete="postal-code">
        </div>

        <button class="ds_button  ds_no-margin  js-find-address">Find address</button>

        <p><button class="ds_link  js-show-manual">Or type in your full address</button></p>
    </div>

    <div class="ds_address-lookup__select">
        <h3 class="delta  ds_label">Postcode</h3>
        <p>TD26PU <button class="ds_link  js-show-search">Change</button></p>

        <div class="ds_question" tabindex="0">
            <label class="ds_label" for="my-postcode-results">Select an address</label>
            <div class="ds_select-wrapper">
                <select id="my-postcode-results" class="ds_select  js-results-select">
                </select>
                <span class="ds_select-arrow" aria-hidden="true"></span>
            </div>
        </div>

        <p><button class="ds_link  js-show-manual">Or type in your full address</button></p>
    </div>

    <div class="ds_address-lookup__manual" tabindex="0">
        <p><button class="ds_link  js-show-search">Return to postcode lookup</button></p>

        <fieldset>
            <legend>Tell us your full address</legend>

            <div class="ds_question">
                <label for="my-address-line-1" class="ds_label">Building and street <span class="visually-hidden">(line 1 of 2)</span></label>
                <input type="text" class="ds_input" id="my-address-line-1" autocomplete="address-line1">

                <label for="my-address-line-2" class="ds_label  visually-hidden">Building and street (line 2 of 2)</label>
                <input type="text" class="ds_input" id="my-address-line-2" autocomplete="address-line2">
            </div>

            <div class="ds_question">
                <label for="my-city-town" class="ds_label">City or town</label>
                <input type="text" class="ds_input" id="my-city-town" autocomplete="address-level2">
            </div>

            <div class="ds_question">
                <label for="my-postcode" class="ds_label">Postcode</label>
                <input type="text" class="ds_input  ds_input--fixed-10" id="my-postcode" autocomplete="postal-code">
            </div>
        </fieldset>
    </div>
</div>


<style>
    .ds_address-lookup > * {
        display: none;
    }

    .ds_address-lookup .js-show-search {
        display: none;
    }

    .ds_address-lookup > .ds_address-lookup__manual {
        display: block;
    }

    .js-enabled .ds_address-lookup > * {
        display: none;
    }

    .js-enabled .ds_address-lookup__search,
    .js-enabled .js-show-search {
        display: block;
    }

    .js-enabled .ds_address-lookup[data-mode] > * {
        display: none;
    }

    .js-enabled .ds_address-lookup[data-mode="search"] .ds_address-lookup__search,
    .js-enabled .ds_address-lookup[data-mode="select"] .ds_address-lookup__select,
    .js-enabled .ds_address-lookup[data-mode="manual"] .ds_address-lookup__manual {
        display: block;
    }
</style>

<script>
    class AddressLookup {
        constructor(element, options) {
            this.element = element;

            if (options.searchEndpoint) {
                this.searchEndpoint = options.searchEndpoint;
            }

            if (options.searchTransformFunction) {
                this.searchTransformFunction = options.searchTransformFunction;
            }

            if (options.validationFunction) {
                this.validationFunction = options.validationFunction;
            }

            this.lookupForm = element.querySelector('.ds_address-lookup__search');
            this.selectForm = element.querySelector('.ds_address-lookup__select');
            this.manualForm = element.querySelector('.ds_address-lookup__manual');
            this.postcodeInput = this.lookupForm.querySelector('.js-postcode-input');
        }

        init() {
            this.element.addEventListener('click', event => {
                if (event.target.classList.contains('js-show-search')) {
                    event.preventDefault();
                    this.element.dataset.mode = 'search';
                    this.lookupForm.focus();
                }

                if (event.target.classList.contains('js-show-manual')) {
                    event.preventDefault();
                    this.element.dataset.mode = 'manual';
                    this.removeError(this.postcodeInput);
                    this.manualForm.focus();
                }

                if (event.target.classList.contains('js-find-address')) {
                    event.preventDefault();

                    const value = this.postcodeInput.value;
                    
                    if (value === '') {
                        this.removeError(this.postcodeInput);
                        this.addError(this.postcodeInput, 'Please enter a postcode');
                        this.postcodeInput.focus();
                    } else if (this.validationFunction(value)) {
                        this.removeError(this.postcodeInput);
                        this.searchFunction(value);
                    } else {
                        this.removeError(this.postcodeInput);
                        this.addError(this.postcodeInput, 'Please enter a valid postcode');
                        this.postcodeInput.focus();
                    }
                }
            });

            this.element.addEventListener('change', event => {
                if (event.target.classList.contains('js-results-select')) {
                    this.setResult(event.target.value);
                }
            });
        }

        searchFunction(value) {
            return new Promise ((resolve, reject) => {
                fetch(`${this.searchEndpoint}${value}`)
                    .then(response => response.json())
                    .then(e => this.searchTransformFunction(e))
                    .then(e => this.showResults(e))
                    .catch(err => console.log(err));
            });
        }

        searchTransformFunction(results) {
            return results;
        }

        showResults (results) {
            const dropdown = this.selectForm.querySelector('.js-results-select');
            dropdown.innerHTML = '';

            this.results = results;

            const option = document.createElement('option');
            option.value = '-1';
            dropdown.appendChild(option);

            results.forEach((result, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.text = [result.address1 || '', result.address2 || '', result.town || ''].filter(item => item !== '').join(', ');

                dropdown.appendChild(option);
            });

            this.element.dataset.mode = 'select';
            this.selectForm.querySelector('select').focus();
        }

        setResult(option) {
            console.log(this.results, this.results[parseInt(option, 10)]);
        }

        validationFunction (value) {
            const postcodeRegExp = new RegExp('^[A-Z]{1,2}[0-9R][0-9A-Z]?[0-9][ABD-HJLNP-UW-Z]{2}$');
            const sanitisedValue = value.toUpperCase().replace(/\W/g, '');

            return sanitisedValue.match(postcodeRegExp) !== null;
        }

        addError(field, message) {
            const question = field.closest('.ds_question');

            question.classList.add('ds_question--error');
            field.classList.add('ds_input--error');

            if (message) {
                const messageEl = document.createElement('p');

                messageEl.classList.add('ds_question__error-message');
                messageEl.innerHTML = `<span class="visually-hidden">Error: </span>${message}`;
                messageEl.id = `error-message-${parseInt(Math.random()*1e7,10)}`;
                field.insertAdjacentElement('beforebegin', messageEl);
                field.setAttribute('aria-invalid', true);
                field.setAttribute('aria-describedby', messageEl.id);

                // clean up describedby
                this.modifyDescribedBy(field, messageEl.id);
            }
        }

        removeError(field) {
            const question = field.closest('.ds_question');
            const messageEls = [].slice.call(question.querySelectorAll('.ds_question__error-message'));

            question.classList.remove('ds_question--error');
            field.classList.remove('ds_input--error');
            field.removeAttribute('aria-invalid');

            messageEls.forEach(messageEl => {messageEl.parentNode.removeChild(messageEl);});

            // clean up describedby
            this.modifyDescribedBy(field);
        }

        modifyDescribedBy(field, errorId) {
            let describedByArray = [];
            if (field.getAttribute('aria-describedby')) {
                describedByArray = field.getAttribute('aria-describedby').replace(/\s+/g, ' ').split(' ').filter(str => str.indexOf('error-message-') !== 0);
            }

            if (errorId) {
                describedByArray.push(errorId);
            }

            return describedByArray.join(' ');
        }
    }

    var myAddressLookup = new AddressLookup(
        document.querySelector('[data-module="ds-address-lookup"]'),
        {
            searchEndpoint: 'dummy-results.json?postcode=',
            searchTransformFunction: data => data.results.map(result => {
                return {
                    address1: result.building ? result.building : result.street,
                    address2: result.building ? result.street : '',
                    town: result.locality ? result.locality : result.town,
                    postcode: result.postcode
                }
            })
        }
    );
    myAddressLookup.init();
</script>

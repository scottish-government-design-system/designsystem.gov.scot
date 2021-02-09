// 'use strict';

import storage from '../../node_modules/@scottish-government/pattern-library/src/base/_tools/storage/storage';

class cookiePreferences {
    constructor(el) {
        this.preferencesElement = el;
        this.formElement = el.querySelector('#cookie-form');
        this.cookiePermissionsString = storage.get({
            type: 'cookie',
            name: 'cookiePermissions'
        });
    }

    init() {
        const className = 'fully-hidden';
        const cookieNotice = document.getElementById('cookie-notice');
        const cookieConfirm = document.getElementById('cookie-confirm');

        this.preferencesElement.classList.remove(className);

        if (this.formElement) {
            const inputGroups = this.formElement.querySelectorAll('.ds_field-group');
            let cookiePermissions = {};

            if (storage.isJsonString(this.cookiePermissionsString)) {
                cookiePermissions = JSON.parse(this.cookiePermissionsString);
            } else {
                cookiePermissions = {};
            }

            for (let i = 0, il = inputGroups.length; i < il; i++) {
                const inputGroup = inputGroups[i];

                const groupName = inputGroup.querySelector('input[type="radio"]').name;

                if (cookiePermissions[groupName.replace('cookie-', '')]) {
                    inputGroup.querySelector('input[id$="-yes"]').setAttribute('checked', true);
                } else {
                    inputGroup.querySelector('input[id$="-no"]').setAttribute('checked', true);
                }
            }

            this.formElement.addEventListener('submit', function (event) {
                event.preventDefault();

                const inputs = document.querySelectorAll('input[name^="cookie"][value="true"]');

                for (let j = 0, jl = inputs.length; j < jl; j++) {
                    const thisInput = inputs[j];

                    cookiePermissions[thisInput.name.replace('cookie-', '')] = thisInput.checked;
                }

                storage.set({
                    type: 'cookie',
                    category: 'necessary',
                    value: JSON.stringify(cookiePermissions),
                    name: 'cookiePermissions',
                    expiry: 365
                });

                storage.set({
                    type: 'cookie',
                    category: 'necessary',
                    name: 'cookie-notification-acknowledged',
                    value: 'yes',
                    expires: 365
                });

                // hide cookie notice
                cookieNotice.classList.add('fully-hidden');
                cookieConfirm.classList.remove('fully-hidden');

                window.scrollTo(window.scrollX, 0);
            });
        }
    }
}

export default cookiePreferences;

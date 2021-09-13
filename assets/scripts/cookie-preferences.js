// 'use strict';

import storage from '../../node_modules/@scottish-government/pattern-library/src/base/tools/storage/storage';

class cookiePreferences {
    constructor(el) {
        this.preferencesElement = el;
        this.formElement = el.querySelector('#cookie-preferences');
    }

    init() {
        const className = 'fully-hidden';
        const cookieNotice = document.getElementById('cookie-notice');
        const cookieConfirm = document.getElementById('cookie-confirm');

        this.preferencesElement.classList.remove(className);

        if (this.formElement) {
            this.cookiePermissions = {};
            this.setFormOptions();

            this.formElement.addEventListener('submit', event => {
                event.preventDefault();

                const inputs = document.querySelectorAll('input[name^="cookie"][value="true"]');

                for (let j = 0, jl = inputs.length; j < jl; j++) {
                    const thisInput = inputs[j];
                    this.cookiePermissions[thisInput.name.replace('cookie-', '')] = thisInput.checked;
                }

                storage.set({
                    type: 'cookie',
                    category: 'necessary',
                    value: JSON.stringify(this.cookiePermissions),
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

            const cookieBannerButtons = [].slice.call(document.querySelectorAll('.js-accept-all-cookies, .js-accept-essential-cookies'));
            cookieBannerButtons.forEach(button => {
                button.addEventListener('click', () => {
                    this.setFormOptions();
                });
            });
        }
    }

    setFormOptions() {
        window.setTimeout(() => {
            const inputGroups = this.formElement.querySelectorAll('.ds_field-group');
            const cookiePermissionsString = storage.get({
                type: 'cookie',
                name: 'cookiePermissions'
            });

            if (cookiePermissionsString && storage.isJsonString(cookiePermissionsString)) {
                this.cookiePermissions = JSON.parse(cookiePermissionsString);
            }

            for (let i = 0, il = inputGroups.length; i < il; i++) {
                const inputGroup = inputGroups[i];

                const groupName = inputGroup.querySelector('input[type="radio"]').name;

                if (this.cookiePermissions[groupName.replace('cookie-', '')]) {
                    inputGroup.querySelector('input[id$="-yes"]').setAttribute('checked', true);
                } else {
                    inputGroup.querySelector('input[id$="-no"]').setAttribute('checked', true);
                }
            }
        }, 0);
    }
}

export default cookiePreferences;

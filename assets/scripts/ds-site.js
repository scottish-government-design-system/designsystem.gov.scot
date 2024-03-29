import storage from '../../node_modules/@scottish-government/pattern-library/src/base/tools/storage/storage';
import UpdateHistory from './update-history';

const dsSite = {
    init: function () {
        this.setInitialCookiePermissions();
        this.resizeIframes();

        const updateHistory = document.querySelector('[data-module="dss-update-history"]');
        if (updateHistory) {
            const updateHistoryModule = new UpdateHistory(updateHistory);
            updateHistoryModule.init();
        }
    },

    setInitialCookiePermissions: function () {
        const permissionsString = storage.getCookie('cookiePermissions') || '';

        if (!storage.isJsonString(permissionsString)) {
            const permissions = {};
            permissions.statistics = true;
            permissions.preferences = true;

            storage.setCookie(storage.categories.necessary,
                'cookiePermissions',
                JSON.stringify(permissions)
            );
        }
    },

    resizeIframes: () => {
        function resizeIframe(obj) {
            obj.style.height = obj.contentWindow.document.body.scrollHeight + 16 + 'px';
        }

        const iframes = [].slice.call(document.querySelectorAll('iframe.example__iframe'));

        iframes.forEach(iframe => {
            iframe.addEventListener('load', () => resizeIframe(iframe));
        });
    }
};

dsSite.init();

export default global;

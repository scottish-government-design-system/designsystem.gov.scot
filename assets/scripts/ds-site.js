import storage from './storage';

const dsSite = {
    init: function () {
        this.setInitialCookiePermissions();
        this.resizeIframes();
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
            obj.style.height = obj.contentWindow.document.body.scrollHeight + 2 + 'px';
        }

        const iframes = [].slice.call(document.querySelectorAll('iframe.example__iframe'));

        iframes.forEach(iframe => {
            iframe.addEventListener('load', () => resizeIframe(iframe));
        });
    }
};

dsSite.init();

export default global;

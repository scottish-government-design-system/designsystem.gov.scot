'use strict';

const gtmModule = {
    init: function () {
        window.dataLayer = window.dataLayer || [{}];
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/service/usertype', true);
        xhr.timeout = 2000;
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                var userType;
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    userType = response.userType;
                } else {
                    userType = 'error';
                }
                this.setUserType(userType);
                this.initGTM();
            }
        };
        xhr.ontimeout = () => {
            this.setUserType('timeout');
            this.initGTM();
        };
        xhr.send(null);
    },

    initGTM: function () {
        function getCookie(name) {
            const cookie = {};
            document.cookie.split(';').forEach(function (el) {
                const [k, v] = el.split('=');
                cookie[k.trim()] = v;
            });
            return cookie[name];
        }

        const gtmcode = document.getElementById('gtm-script').dataset.gtmcode;

        let statisticsEnabled;
        try {
            statisticsEnabled = JSON.parse(atob(getCookie('cookiePermissions'))).statistics !== false;
        } catch (err) {
            statisticsEnabled = false;
        }

        if (statisticsEnabled) {
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window, document, 'script', 'dataLayer', gtmcode);
        }
    },

    setUserType: function(userType) {
        window.dataLayer[0].userType = userType;
    }
};

gtmModule.init();
export default gtmModule;

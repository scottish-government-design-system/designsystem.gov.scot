/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/cookies.js":
/*!***********************************!*\
  !*** ./assets/scripts/cookies.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./assets/scripts/storage.js\");\n\n\n\n\nconst cookieModule = {\n    cookieNotice: document.querySelector('#cookie-notice'),\n    cookieConfirm: document.querySelector('#cookie-confirm'),\n\n    init: function() {\n        const that = this;\n\n        this.setInitialCookiePermissions();\n        this.initCookieForm();\n\n        const cookieAcceptButton = this.cookieNotice.querySelector('.js-accept-cookies');\n\n        // check whether we need to display the cookie notice\n        if (!_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({type: _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].types.cookie, name: 'cookie-notification-acknowledged'})) {\n            this.cookieNotice.classList.remove('fully-hidden');\n        }\n\n        // bind a click handler to the close button\n        cookieAcceptButton.addEventListener('click', function (event) {\n            event.preventDefault();\n\n            const cookiePermissions = JSON.parse(JSON.stringify(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].categories));\n            for (const key in cookiePermissions) {\n                if (!cookiePermissions.hasOwnProperty(key)) {continue;}\n\n                cookiePermissions[key] = true;\n            }\n\n            _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCookie(\n                _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].categories.necessary,\n                'cookiePermissions',\n                JSON.stringify(cookiePermissions),\n                365\n            );\n\n            _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCookie(\n                _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].categories.necessary,\n                'cookie-notification-acknowledged',\n                'yes',\n                365\n            );\n\n            that.cookieNotice.classList.add('fully-hidden');\n            that.cookieConfirm.classList.remove('fully-hidden');\n        });\n    },\n\n    setInitialCookiePermissions: function () {\n        const permissionsString = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCookie('cookiePermissions') || '';\n\n        if (!_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isJsonString(permissionsString)) {\n            const permissions = {};\n            permissions.statistics = false;\n            permissions.preferences = false;\n\n            // storage.setCookie(storage.categories.necessary,\n            //     'cookiePermissions',\n            //     JSON.stringify(permissions)\n            // );\n        }\n    },\n\n    initCookieForm: function () {\n        const that = this;\n\n        // on init, set the relevant permissions\n        const cookiePermissionsString = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n            type: 'cookie',\n            name: 'cookiePermissions'\n        });\n\n        // on init show the form\n        const cookieFormBox = document.getElementById('cookie-form');\n        if (cookieFormBox) {\n            const className = 'fully-hidden';\n            if (cookieFormBox.classList) {\n                cookieFormBox.classList.remove(className);\n            } else {\n                cookieFormBox.className = cookieFormBox.className.replace(new RegExp('(^|\\\\b)' + className.split(' ').join('|') + '(\\\\b|$)', 'gi'), ' ');\n            }\n\n            const inputGroups = document.querySelectorAll('#cookie-preferences .ds_field-group');\n            let cookiePermissions = {};\n\n            if (cookiePermissionsString && _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isJsonString(cookiePermissionsString)) {\n                cookiePermissions = JSON.parse(cookiePermissionsString);\n            } else {\n                cookiePermissions = {};\n            }\n\n            for(let i = 0, il = inputGroups.length; i < il; i++) {\n                const inputGroup = inputGroups[i];\n\n                const groupName = inputGroup.querySelector('input[type=\"radio\"]').name;\n\n                if (typeof cookiePermissions[groupName.replace('cookie-', '')] === 'boolean') {\n                    if (cookiePermissions[groupName.replace('cookie-', '')]) {\n                        inputGroup.querySelector('input[id$=\"-yes\"]').setAttribute('checked', true);\n                    } else {\n                        inputGroup.querySelector('input[id$=\"-no\"]').setAttribute('checked', true);\n                    }\n                }\n            }\n\n            document.getElementById('cookie-preferences').addEventListener('submit', function (event) {\n                event.preventDefault();\n\n                const inputs = document.querySelectorAll('input[name^=\"cookie\"]:checked');\n\n                for (let j = 0, jl = inputs.length; j < jl; j++) {\n                    const thisInput = inputs[j];\n                    cookiePermissions[thisInput.name.replace('cookie-', '')] = thisInput.value === 'true';\n                }\n\n                _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({\n                    type: 'cookie',\n                    category: 'necessary',\n                    value: JSON.stringify(cookiePermissions),\n                    name: 'cookiePermissions',\n                    expiry: 365\n                });\n\n                _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({\n                    type: 'cookie',\n                    category: 'necessary',\n                    name: 'cookie-notification-acknowledged',\n                    value: 'yes',\n                    expires: 365\n                });\n\n                // hide cookie notice\n                that.cookieNotice.classList.add('fully-hidden');\n                that.cookieConfirm.classList.remove('fully-hidden');\n\n                window.scrollTo(window.scrollX, 0);\n            });\n        }\n\n    }\n};\n\ncookieModule.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cookieModule);\n\n\n//# sourceURL=webpack:///./assets/scripts/cookies.js?");

/***/ }),

/***/ "./assets/scripts/storage.js":
/*!***********************************!*\
  !*** ./assets/scripts/storage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst storage = {\n    categories: {\n        necessary: 'necessary',\n        preferences: 'preferences',\n        statistics: 'statistics',\n        campaigns: 'campaigns',\n        marketing: 'marketing'\n    },\n\n    types: {\n        cookie: 'cookie',\n        localStorage: 'local',\n        sessionStorage: 'session'\n    },\n\n    /**\n     * Sets a storage item (local, session, or cookie)\n     *\n     * Usage example:\n     * storage.set({type: 'cookie', category: 'necessary', name: 'somethinganalyticsy', value: 1, expires: 7}})\n     *\n     * @param {object} obj\n     *   - {string} type (accepted values: 'cookie', 'local', 'session')\n     *   - {string} category - used to determine whether user has given permission to store this\n     *   - {string} name\n     *   - {string} value\n     *   - {number} expires - days to remember a cookie for (only relevant to cookies)\n     */\n    set: function (obj) {\n        if (storage.hasPermission(obj.category)) {\n            if (obj.type === storage.types.cookie) {\n                return storage.cookie.set(obj.name, obj.value, obj.expires);\n            } else if (obj.type === storage.types.localStorage) {\n                localStorage.setItem(obj.name, obj.value);\n            } else if (obj.type === storage.types.sessionStorage) {\n                sessionStorage.setItem(obj.name, obj.value);\n            }\n        }\n    },\n\n    /**\n     * Gets a storage item (local, session, or cookie)\n     *\n     * Usage example:\n     * storage.get({type: 'session', name: 'remembertabs'})\n     *\n     * @param {object} obj\n     *   - {string} storage (accepted values: 'cookie', 'local', 'session')\n     *   - {string} name\n     *\n     * @returns {string} value of the storage item\n     */\n    get: function (obj) {\n        let value;\n\n        if (obj.type === storage.types.cookie) {\n            value = storage.cookie.get(obj.name);\n        } else if (obj.type === storage.types.localStorage) {\n            value = localStorage.getItem(obj.name);\n        } else if (obj.type === storage.types.sessionStorage) {\n            value = sessionStorage.getItem(obj.name);\n        }\n\n        return value;\n    },\n\n    // more direct method than set({type: cookies, category: 'aaa', name: 'bbb', value: 'ccc', expires: ddd})\n    setCookie: function (category, name, value, expires) {\n        if (storage.hasPermission(category)) {\n            storage.cookie.set(name, value, expires);\n        }\n    },\n\n    // more direct method than set({type: localStorage, category: 'aaa', name: 'bbb', value: 'ccc'})\n    setLocalStorage: function (category, name, value) {\n        if (storage.hasPermission(category)) {\n            localStorage.setItem(name, value);\n        }\n    },\n\n    // more direct method than set({type: sessionStorage, category: 'aaa', name: 'bbb', value: 'ccc'})\n    setSessionStorage: function (category, name, value) {\n        if (storage.hasPermission(category)) {\n            sessionStorage.setItem(name, value);\n        }\n    },\n\n    // more direct method than get({type: cookies, name: foo}\n    getCookie: function (name) {\n        return storage.cookie.get(name);\n    },\n\n    // more direct method than get({type: localStorage, name: foo}\n    getLocalStorage: function (name) {\n        return localStorage.getItem(name);\n    },\n\n    // more direct method than get({type: sessionStorage, name: foo}\n    getSessionStorage: function (name) {\n        return sessionStorage.getItem(name);\n    },\n\n    cookie: {\n        set: function (name, value, expires) {\n            const cookieData = {\n                name: name,\n                value: value\n            };\n\n            if (expires) {\n                const date = new Date();\n                date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));\n\n                cookieData.expires = date.toUTCString();\n            }\n\n            // build the string, as IE wants expires parameter omitted if no expires set\n            let cookieString = name + '=' + value + '; ';\n            if (cookieData.expires) {\n                cookieString += 'expires=' + cookieData.expires + '; ';\n            }\n            cookieString += 'path=/';\n\n            document.cookie = cookieString;\n\n            // this variable is used in tests to verify that things are being set correctly\n            return cookieData;\n        },\n\n        get: function (name) {\n            const nameEQ = name + '=',\n                cookiesArray = document.cookie.split(';');\n\n            // find a matching cookie\n            for (let i = 0, il = cookiesArray.length; i < il; i++) {\n                let cookie = cookiesArray[i];\n\n                while (cookie.charAt(0) === ' ') {\n                    cookie = cookie.substring(1, cookie.length);\n                }\n\n                if (cookie.indexOf(nameEQ) === 0) {\n                    return cookie.substring(nameEQ.length, cookie.length);\n                }\n            }\n\n            // return null if no matching cookie found\n            return null;\n        }\n    },\n\n    hasPermission(category) {\n        const cookiePermissionsString = storage.get({\n            type: storage.types.cookie,\n            name: 'cookiePermissions'\n        }) || '';\n\n        let cookiePermissions = {};\n\n        if (storage.isJsonString(cookiePermissionsString)) {\n            cookiePermissions = JSON.parse(cookiePermissionsString);\n        }\n\n        return category === storage.categories.necessary || cookiePermissions[category] === true;\n    },\n\n    isJsonString: function (str) {\n        try {\n            JSON.parse(str);\n        } catch (e) {\n            return false;\n        }\n        return true;\n    }\n};\n\nwindow.storage = storage;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (storage);\n\n\n//# sourceURL=webpack:///./assets/scripts/storage.js?");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./assets/scripts/cookies.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/z418903/dev/patternlibrary.mygov.scot/assets/scripts/cookies.js */\"./assets/scripts/cookies.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/scripts/cookies.js?");

/***/ })

/******/ });
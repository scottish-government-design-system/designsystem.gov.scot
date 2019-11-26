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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./assets/scripts/storage.js\");\n\n\n\nvar cookieModule = {\n  cookieNotice: document.querySelector('#cookie-notice'),\n  cookieConfirm: document.querySelector('#cookie-confirm'),\n  init: function init() {\n    var that = this;\n    this.setInitialCookiePermissions();\n    this.initCookieForm();\n    var cookieAcceptButton = this.cookieNotice.querySelector('.js-accept-cookies'); // check whether we need to display the cookie notice\n\n    if (!_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n      type: _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].types.cookie,\n      name: 'cookie-notification-acknowledged'\n    })) {\n      this.cookieNotice.classList.remove('fully-hidden');\n    } // bind a click handler to the close button\n\n\n    cookieAcceptButton.addEventListener('click', function (event) {\n      event.preventDefault();\n      var cookiePermissions = JSON.parse(JSON.stringify(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].categories));\n\n      for (var key in cookiePermissions) {\n        if (!cookiePermissions.hasOwnProperty(key)) {\n          continue;\n        }\n\n        cookiePermissions[key] = true;\n      }\n\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCookie(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].categories.necessary, 'cookiePermissions', JSON.stringify(cookiePermissions), 365);\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCookie(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].categories.necessary, 'cookie-notification-acknowledged', 'yes', 365);\n      that.cookieNotice.classList.add('fully-hidden');\n      that.cookieConfirm.classList.remove('fully-hidden');\n    });\n  },\n  setInitialCookiePermissions: function setInitialCookiePermissions() {\n    var permissionsString = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCookie('cookiePermissions') || '';\n\n    if (!_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isJsonString(permissionsString)) {\n      var permissions = {};\n      permissions.statistics = false;\n      permissions.preferences = false; // storage.setCookie(storage.categories.necessary,\n      //     'cookiePermissions',\n      //     JSON.stringify(permissions)\n      // );\n    }\n  },\n  initCookieForm: function initCookieForm() {\n    var that = this; // on init, set the relevant permissions\n\n    var cookiePermissionsString = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n      type: 'cookie',\n      name: 'cookiePermissions'\n    }); // on init show the form\n\n    var cookieFormBox = document.getElementById('cookie-form');\n\n    if (cookieFormBox) {\n      var className = 'fully-hidden';\n\n      if (cookieFormBox.classList) {\n        cookieFormBox.classList.remove(className);\n      } else {\n        cookieFormBox.className = cookieFormBox.className.replace(new RegExp('(^|\\\\b)' + className.split(' ').join('|') + '(\\\\b|$)', 'gi'), ' ');\n      }\n\n      var inputGroups = document.querySelectorAll('#cookie-preferences .ds_field-group');\n      var cookiePermissions = {};\n\n      if (cookiePermissionsString && _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isJsonString(cookiePermissionsString)) {\n        cookiePermissions = JSON.parse(cookiePermissionsString);\n      } else {\n        cookiePermissions = {};\n      }\n\n      for (var i = 0, il = inputGroups.length; i < il; i++) {\n        var inputGroup = inputGroups[i];\n        var groupName = inputGroup.querySelector('input[type=\"radio\"]').name;\n\n        if (typeof cookiePermissions[groupName.replace('cookie-', '')] === 'boolean') {\n          if (cookiePermissions[groupName.replace('cookie-', '')]) {\n            inputGroup.querySelector('input[id$=\"-yes\"]').setAttribute('checked', true);\n          } else {\n            inputGroup.querySelector('input[id$=\"-no\"]').setAttribute('checked', true);\n          }\n        }\n      }\n\n      document.getElementById('cookie-preferences').addEventListener('submit', function (event) {\n        event.preventDefault();\n        var inputs = document.querySelectorAll('input[name^=\"cookie\"]:checked');\n\n        for (var j = 0, jl = inputs.length; j < jl; j++) {\n          var thisInput = inputs[j];\n          cookiePermissions[thisInput.name.replace('cookie-', '')] = thisInput.value === 'true';\n        }\n\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({\n          type: 'cookie',\n          category: 'necessary',\n          value: JSON.stringify(cookiePermissions),\n          name: 'cookiePermissions',\n          expiry: 365\n        });\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({\n          type: 'cookie',\n          category: 'necessary',\n          name: 'cookie-notification-acknowledged',\n          value: 'yes',\n          expires: 365\n        }); // hide cookie notice\n\n        that.cookieNotice.classList.add('fully-hidden');\n        that.cookieConfirm.classList.remove('fully-hidden');\n        window.scrollTo(window.scrollX, 0);\n      });\n    }\n  }\n};\ncookieModule.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (cookieModule);\n\n//# sourceURL=webpack:///./assets/scripts/cookies.js?");

/***/ }),

/***/ "./assets/scripts/storage.js":
/*!***********************************!*\
  !*** ./assets/scripts/storage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nvar storage = {\n  categories: {\n    necessary: 'necessary',\n    preferences: 'preferences',\n    statistics: 'statistics',\n    campaigns: 'campaigns',\n    marketing: 'marketing'\n  },\n  types: {\n    cookie: 'cookie',\n    localStorage: 'local',\n    sessionStorage: 'session'\n  },\n\n  /**\n   * Sets a storage item (local, session, or cookie)\n   *\n   * Usage example:\n   * storage.set({type: 'cookie', category: 'necessary', name: 'somethinganalyticsy', value: 1, expires: 7}})\n   *\n   * @param {object} obj\n   *   - {string} type (accepted values: 'cookie', 'local', 'session')\n   *   - {string} category - used to determine whether user has given permission to store this\n   *   - {string} name\n   *   - {string} value\n   *   - {number} expires - days to remember a cookie for (only relevant to cookies)\n   */\n  set: function set(obj) {\n    if (storage.hasPermission(obj.category)) {\n      if (obj.type === storage.types.cookie) {\n        return storage.cookie.set(obj.name, obj.value, obj.expires);\n      } else if (obj.type === storage.types.localStorage) {\n        localStorage.setItem(obj.name, obj.value);\n      } else if (obj.type === storage.types.sessionStorage) {\n        sessionStorage.setItem(obj.name, obj.value);\n      }\n    }\n  },\n\n  /**\n   * Gets a storage item (local, session, or cookie)\n   *\n   * Usage example:\n   * storage.get({type: 'session', name: 'remembertabs'})\n   *\n   * @param {object} obj\n   *   - {string} storage (accepted values: 'cookie', 'local', 'session')\n   *   - {string} name\n   *\n   * @returns {string} value of the storage item\n   */\n  get: function get(obj) {\n    var value;\n\n    if (obj.type === storage.types.cookie) {\n      value = storage.cookie.get(obj.name);\n    } else if (obj.type === storage.types.localStorage) {\n      value = localStorage.getItem(obj.name);\n    } else if (obj.type === storage.types.sessionStorage) {\n      value = sessionStorage.getItem(obj.name);\n    }\n\n    return value;\n  },\n  // more direct method than set({type: cookies, category: 'aaa', name: 'bbb', value: 'ccc', expires: ddd})\n  setCookie: function setCookie(category, name, value, expires) {\n    if (storage.hasPermission(category)) {\n      storage.cookie.set(name, value, expires);\n    }\n  },\n  // more direct method than set({type: localStorage, category: 'aaa', name: 'bbb', value: 'ccc'})\n  setLocalStorage: function setLocalStorage(category, name, value) {\n    if (storage.hasPermission(category)) {\n      localStorage.setItem(name, value);\n    }\n  },\n  // more direct method than set({type: sessionStorage, category: 'aaa', name: 'bbb', value: 'ccc'})\n  setSessionStorage: function setSessionStorage(category, name, value) {\n    if (storage.hasPermission(category)) {\n      sessionStorage.setItem(name, value);\n    }\n  },\n  // more direct method than get({type: cookies, name: foo}\n  getCookie: function getCookie(name) {\n    return storage.cookie.get(name);\n  },\n  // more direct method than get({type: localStorage, name: foo}\n  getLocalStorage: function getLocalStorage(name) {\n    return localStorage.getItem(name);\n  },\n  // more direct method than get({type: sessionStorage, name: foo}\n  getSessionStorage: function getSessionStorage(name) {\n    return sessionStorage.getItem(name);\n  },\n  cookie: {\n    set: function set(name, value, expires) {\n      var cookieData = {\n        name: name,\n        value: value\n      };\n\n      if (expires) {\n        var date = new Date();\n        date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);\n        cookieData.expires = date.toUTCString();\n      } // build the string, as IE wants expires parameter omitted if no expires set\n\n\n      var cookieString = name + '=' + value + '; ';\n\n      if (cookieData.expires) {\n        cookieString += 'expires=' + cookieData.expires + '; ';\n      }\n\n      cookieString += 'path=/';\n      document.cookie = cookieString; // this variable is used in tests to verify that things are being set correctly\n\n      return cookieData;\n    },\n    get: function get(name) {\n      var nameEQ = name + '=',\n          cookiesArray = document.cookie.split(';'); // find a matching cookie\n\n      for (var i = 0, il = cookiesArray.length; i < il; i++) {\n        var cookie = cookiesArray[i];\n\n        while (cookie.charAt(0) === ' ') {\n          cookie = cookie.substring(1, cookie.length);\n        }\n\n        if (cookie.indexOf(nameEQ) === 0) {\n          return cookie.substring(nameEQ.length, cookie.length);\n        }\n      } // return null if no matching cookie found\n\n\n      return null;\n    }\n  },\n  hasPermission: function hasPermission(category) {\n    var cookiePermissionsString = storage.get({\n      type: storage.types.cookie,\n      name: 'cookiePermissions'\n    }) || '';\n    var cookiePermissions = {};\n\n    if (storage.isJsonString(cookiePermissionsString)) {\n      cookiePermissions = JSON.parse(cookiePermissionsString);\n    }\n\n    return category === storage.categories.necessary || cookiePermissions[category] === true;\n  },\n  isJsonString: function isJsonString(str) {\n    try {\n      JSON.parse(str);\n    } catch (e) {\n      return false;\n    }\n\n    return true;\n  }\n};\nwindow.storage = storage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (storage);\n\n//# sourceURL=webpack:///./assets/scripts/storage.js?");

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
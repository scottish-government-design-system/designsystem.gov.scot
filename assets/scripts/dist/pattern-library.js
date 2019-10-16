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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../pattern-library/src/scripts/accordion.js":
/*!***************************************************!*\
  !*** ../pattern-library/src/scripts/accordion.js ***!
  \***************************************************/
/*! exports provided: accordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accordionComponent\", function() { return accordionComponent; });\n\n\nconst accordionComponent = {\n    init: function () {\n        const accordions = document.querySelectorAll('.ds_accordion');\n\n        accordions.forEach(function (accordion) {\n            accordion.classList.add('js-initialised');\n\n            const accordionItems = accordion.querySelectorAll('.ds_accordion-item');\n            const openAllButton = accordion.querySelector('.js-open-all');\n\n            accordionComponent.initOpenAll(accordion, openAllButton);\n\n            accordionItems.forEach(function (accordionItem) {\n                accordionComponent.initAccordionItem(accordionItem, accordion, openAllButton);\n            });\n        });\n    },\n\n    initAccordionItem(item, accordion, button) {\n        const checkbox = item.querySelector('.ds_accordion-item__control');\n        const body = item.querySelector('.ds_accordion-item__body');\n\n        checkbox.setAttribute('aria-expanded', checkbox.checked);\n\n        if (checkbox.checked) {\n            body.style.display = 'block';\n            body.style.maxHeight = body.scrollHeight + 21 + 28 + 'px';\n        }\n\n        checkbox.addEventListener('change', function (event) {\n\n            if (event.target.checked) {\n                // 21px and 28px are the top and bottom padding of the body content\n                body.style.display = 'block';\n                body.style.maxHeight = body.scrollHeight + 21 + 28 + 'px';\n            } else {\n                body.style.maxHeight = 0;\n                window.setTimeout(function () {\n                    body.style.display = 'none';\n                }, 200);\n            }\n\n            accordionComponent.checkAllOpen(accordion, button);\n\n            checkbox.setAttribute('aria-expanded', event.target.checked);\n\n            // tracking\n            let accordionNumber = 0;\n            if (checkbox.getAttribute('data-accordion')) {\n                accordionNumber = checkbox.getAttribute('data-accordion').split('-').reverse()[0];\n            }\n            checkbox.setAttribute('data-accordion', `accordion-${event.target.checked ? 'close' : 'open'}-${accordionNumber}`);\n        });\n    },\n\n    initOpenAll: function (accordion, button) {\n        if (!button) {\n            return;\n        }\n\n        button.addEventListener('click', function () {\n            const opening = !accordionComponent.checkAllOpen(accordion, button);\n\n            const allPanelCheckboxes = accordion.querySelectorAll('.ds_accordion-item__control');\n\n            allPanelCheckboxes.forEach(function (checkbox) {\n                checkbox.checked = opening;\n\n                const event = document.createEvent('HTMLEvents');\n                event.initEvent('change', true, false);\n                checkbox.dispatchEvent(event);\n            });\n        });\n    },\n\n    checkAllOpen: function (accordion, button) {\n        if (!button) {\n            return;\n        }\n\n        const accordionItems = accordion.querySelectorAll('.ds_accordion-item');\n        const openItems = accordion.querySelectorAll('.ds_accordion-item__control:checked');\n        let allOpen;\n\n        if (accordionItems.length === openItems.length) {\n            // everything is open\n            button.innerHTML = 'Close all <span class=\"visually-hidden\">sections</span>';\n            button.setAttribute('data-accordion', 'accordion-close-all');\n            allOpen = true;\n        } else {\n            // not everything is open\n            button.innerHTML = 'Expand all <span class=\"visually-hidden\">sections</span>';\n            button.setAttribute('data-accordion', 'accordion-open-all');\n            allOpen = false;\n        }\n\n        return allOpen;\n    },\n};\n\n// self-initialize\naccordionComponent.init();\n\n\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/accordion.js?");

/***/ }),

/***/ "../pattern-library/src/scripts/notification-banner.js":
/*!*************************************************************!*\
  !*** ../pattern-library/src/scripts/notification-banner.js ***!
  \*************************************************************/
/*! exports provided: notificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notificationComponent\", function() { return notificationComponent; });\n\n\nconst notificationComponent = {\n    init: function () {\n        const notifications = document.querySelectorAll('.ds_notification');\n\n        notifications.forEach(function (notification) {\n            const closeButton = notification.querySelector('.js-close-notification');\n            if (closeButton) {\n                closeButton.addEventListener('click', function () {\n                    notification.parentNode.removeChild(notification);\n                });\n            }\n        });\n    }\n};\n\n// self-initialize\nnotificationComponent.init();\n\n\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/notification-banner.js?");

/***/ }),

/***/ "../pattern-library/src/scripts/side-navigation.js":
/*!*********************************************************!*\
  !*** ../pattern-library/src/scripts/side-navigation.js ***!
  \*********************************************************/
/*! exports provided: sideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sideNavigationComponent\", function() { return sideNavigationComponent; });\n\n\nconst sideNavigationComponent = {\n    init: function () {\n        const sideNavigation = document.querySelector('.ds_side-navigation');\n        if (sideNavigation) {\n            this.setupSideNavigation(sideNavigation);\n        }\n    },\n\n    setupSideNavigation: function (sideNavigation) {\n        const checkbox = sideNavigation.querySelector('#show-side-navigation');\n        checkbox.setAttribute('aria-expanded', false);\n\n        checkbox.addEventListener('change', function (event) {\n            const list = sideNavigation.querySelector('.ds_side-navigation__list--root');\n            if (event.target.checked) {\n                list.style.display = 'block';\n                list.style.maxHeight = list.scrollHeight + 14 +  'px';\n            } else {\n                list.style.maxHeight = 0;\n                window.setTimeout(function () {\n                    list.style.display = 'none';\n                }, 200);\n            }\n\n            checkbox.setAttribute('aria-expanded', event.target.checked);\n\n            // tracking\n            checkbox.setAttribute('data-navigation', `navigation-${event.target.checked ? 'close' : 'open'}`);\n        });\n\n        window.addEventListener('scroll', function () {\n            const sideNavigationExpand = document.querySelector('.ds_side-navigation__expand');\n\n            if (sideNavigationExpand.offsetTop > 1) {\n                sideNavigationExpand.classList.add('ds_side-navigation__expand--shadow');\n            } else {\n                sideNavigationExpand.classList.remove('ds_side-navigation__expand--shadow');\n            }\n        });\n    }\n};\n\n// self-initialize\nsideNavigationComponent.init();\n\n\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/side-navigation.js?");

/***/ }),

/***/ "../pattern-library/src/scripts/site-navigation.js":
/*!*********************************************************!*\
  !*** ../pattern-library/src/scripts/site-navigation.js ***!
  \*********************************************************/
/*! exports provided: mobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mobileMenuComponent\", function() { return mobileMenuComponent; });\n\n\nconst mobileMenuComponent = {\n    init: function () {\n        const menuElement = document.querySelector('#mobile-navigation-menu');\n\n        if (!menuElement) {\n            return;\n        }\n\n        const menuToggleButton = document.querySelector('.js-toggle-menu');\n        const menuContainer = document.querySelector('#mobile-navigation-menu');\n        const menuCloseButton = document.querySelector('.js-close-menu');\n\n        menuToggleButton.addEventListener('click', function () {\n            menuContainer.classList.toggle('menu-is-open');\n            const menuIsOpen = menuContainer.classList.contains('menu-is-open');\n\n            if (menuIsOpen) {\n                mobileMenuComponent.openMenu(menuElement);\n            } else {\n                mobileMenuComponent.closeMenu();\n            }\n\n            menuToggleButton.setAttribute('aria-expanded', menuIsOpen);\n            menuCloseButton.setAttribute('aria-expanded', menuIsOpen);\n            menuIsOpen? menuToggleButton.classList.add('ds_mobile-navigation__button--open') : menuToggleButton.classList.remove('ds_mobile-navigation__button--open');\n        });\n\n        menuCloseButton.addEventListener('click', function () {\n            menuContainer.classList.remove('menu-is-open');\n            mobileMenuComponent.closeMenu();\n\n            menuToggleButton.setAttribute('aria-expanded', false);\n            menuCloseButton.setAttribute('aria-expanded', false);\n            menuToggleButton.classList.remove('ds_mobile-navigation__button--open');\n        });\n    },\n\n    openMenu: function (menuElement) {\n        window.scrollTo(0, window.scrollX);\n\n        const htmlElement = document.querySelector('html');\n        const bodyElement = document.querySelector('body');\n\n        // position overlay\n        const offsetElement = document.querySelector(menuElement.dataset.offsetselector);\n        const offsetHeight = offsetElement ? offsetElement.offsetHeight : 0;\n        const offsetTop = offsetElement ? offsetElement.offsetTop : 0;\n        const mobileNavigation = document.querySelector('.ds_mobile-navigation');\n        mobileNavigation.style.top = offsetHeight + 'px';\n\n        // handle any need for the menu to scroll if it is longer than the viewport\n        if ((mobileNavigation.offsetHeight + offsetHeight) > window.innerHeight) {\n            mobileNavigation.style.bottom = offsetHeight - window.innerHeight + 'px';\n        } else {\n            mobileNavigation.style.bottom = null;\n        }\n\n        const menuHeight = mobileNavigation.offsetHeight;\n        console.log(menuHeight, offsetHeight, offsetTop);\n        mobileNavigation.querySelector('.ds_mobile-navigation__backdrop').style.top = menuHeight + offsetHeight + offsetTop + 'px';\n\n        // set overflow on body and html\n        htmlElement.style.position = 'relative';\n        bodyElement.style.position = 'relative';\n\n        htmlElement.classList.add('menu-is-open');\n        htmlElement.style.height = window.innerHeight + \"px\";\n        bodyElement.style.height = window.innerHeight + \"px\";\n    },\n\n    closeMenu: function () {\n        const htmlElement = document.querySelector('html');\n        const bodyElement = document.querySelector('body');\n        const mobileNavigation = document.querySelector('.ds_mobile-navigation');\n\n        // unset overflow on body and html\n        htmlElement.style.position = null;\n        bodyElement.style.position = null;\n        htmlElement.classList.remove('menu-is-open');\n        htmlElement.style.height = null;\n        bodyElement.style.height = null;\n\n        mobileNavigation.style.bottom = null;\n    }\n};\n\n// self-initialize\nmobileMenuComponent.init();\n\n\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/site-navigation.js?");

/***/ }),

/***/ "../pattern-library/src/scripts/site-search.js":
/*!*****************************************************!*\
  !*** ../pattern-library/src/scripts/site-search.js ***!
  \*****************************************************/
/*! exports provided: searchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchBoxComponent\", function() { return searchBoxComponent; });\n\n\nconst searchBoxComponent = {\n    init: function () {\n        const collapsibleSearchBoxes = document.querySelectorAll('.ds_site-search--collapsible');\n\n        collapsibleSearchBoxes.forEach(function (searchBox) {\n            const searchInput = searchBox.querySelector('.ds_site-search__input');\n            const searchButton = searchBox.querySelector('.js-site-search-button');\n\n            searchButton.addEventListener('click', function (event) {\n                if (!searchInput.value && !window.ds_patterns.breakpoint('medium')) {\n                    event.preventDefault();\n                    searchBox.classList.toggle('ds_site-search--expanded');\n                    searchInput.focus();\n\n                    if (!searchBox.classList.contains('ds_site-search--expanded')) {\n                        searchInput.blur();\n                    }\n                }\n            });\n        });\n    }\n};\n\n// self-initialize\nsearchBoxComponent.init();\n\n\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/site-search.js?");

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@scottish-government/pattern-library/src/scripts/accordion.js ./node_modules/@scottish-government/pattern-library/src/scripts/notification-banner.js ./node_modules/@scottish-government/pattern-library/src/scripts/side-navigation.js ./node_modules/@scottish-government/pattern-library/src/scripts/site-navigation.js ./node_modules/@scottish-government/pattern-library/src/scripts/site-search.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/z418903/dev/patternlibrary.mygov.scot/node_modules/@scottish-government/pattern-library/src/scripts/accordion.js */\"../pattern-library/src/scripts/accordion.js\");\n__webpack_require__(/*! /Users/z418903/dev/patternlibrary.mygov.scot/node_modules/@scottish-government/pattern-library/src/scripts/notification-banner.js */\"../pattern-library/src/scripts/notification-banner.js\");\n__webpack_require__(/*! /Users/z418903/dev/patternlibrary.mygov.scot/node_modules/@scottish-government/pattern-library/src/scripts/side-navigation.js */\"../pattern-library/src/scripts/side-navigation.js\");\n__webpack_require__(/*! /Users/z418903/dev/patternlibrary.mygov.scot/node_modules/@scottish-government/pattern-library/src/scripts/site-navigation.js */\"../pattern-library/src/scripts/site-navigation.js\");\nmodule.exports = __webpack_require__(/*! /Users/z418903/dev/patternlibrary.mygov.scot/node_modules/@scottish-government/pattern-library/src/scripts/site-search.js */\"../pattern-library/src/scripts/site-search.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/@scottish-government/pattern-library/src/scripts/accordion.js_./node_modules/@scottish-government/pattern-library/src/scripts/notification-banner.js_./node_modules/@scottish-government/pattern-library/src/scripts/side-navigation.js_./node_modules/@scottish-government/pattern-library/src/scripts/site-navigation.js_./node_modules/@scottish-government/pattern-library/src/scripts/site-search.js?");

/***/ })

/******/ });
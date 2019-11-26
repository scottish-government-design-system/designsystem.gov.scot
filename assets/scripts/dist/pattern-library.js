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

/***/ "../pattern-library/src/components/accordion/accordion.js":
/*!****************************************************************!*\
  !*** ../pattern-library/src/components/accordion/accordion.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Accordion {\n    constructor(accordion) {\n        this.accordion = accordion;\n        this.items = [].slice.call(accordion.querySelectorAll('.ds_accordion-item'));\n        this.openAllButton = accordion.querySelector('.js-open-all');\n    }\n\n    init() {\n        this.items.forEach(item => this.initAccordionItem(item));\n\n        this.initOpenAll();\n        this.accordion.classList.add('js-initialised');\n    }\n\n    initAccordionItem(item) {\n        const checkbox = item.querySelector('.ds_accordion-item__control');\n        const body = item.querySelector('.ds_accordion-item__body');\n\n        checkbox.setAttribute('aria-expanded', checkbox.checked);\n\n        if (checkbox.checked) {\n            body.style.display = 'block';\n            body.style.maxHeight = body.scrollHeight + 21 + 28 + 'px';\n        }\n\n        checkbox.addEventListener('change', event => {\n\n            if (event.target.checked) {\n                // 21px and 28px are the top and bottom padding of the body content\n                body.style.display = 'block';\n                body.style.maxHeight = body.scrollHeight + 21 + 28 + 'px';\n            } else {\n                body.style.maxHeight = 0;\n                window.setTimeout(function () {\n                    body.style.display = 'none';\n                }, 200);\n            }\n\n            this.checkAllOpen();\n\n            checkbox.setAttribute('aria-expanded', event.target.checked);\n\n            // tracking\n            let accordionNumber = 0;\n            if (checkbox.getAttribute('data-accordion')) {\n                accordionNumber = checkbox.getAttribute('data-accordion').split('-').reverse()[0];\n            }\n            checkbox.setAttribute('data-accordion', `accordion-${event.target.checked ? 'close' : 'open'}-${accordionNumber}`);\n        });\n    }\n\n    initOpenAll() {\n        if (!this.openAllButton) {\n            return;\n        }\n\n        this.openAllButton.addEventListener('click', () => {\n            const opening = !this.checkAllOpen();\n\n            const allPanelCheckboxes = [].slice.call(this.accordion.querySelectorAll('.ds_accordion-item__control'));\n\n            allPanelCheckboxes.forEach(function (checkbox) {\n                checkbox.checked = opening;\n\n                const event = document.createEvent('HTMLEvents');\n                event.initEvent('change', true, false);\n                checkbox.dispatchEvent(event);\n            });\n        });\n    }\n\n    checkAllOpen() {\n        if (!this.openAllButton) {\n            return;\n        }\n\n        const openItemsCount = this.accordion.querySelectorAll('.ds_accordion-item__control:checked').length;\n        let allOpen;\n\n        if (this.items.length === openItemsCount) {\n            // everything is open\n            this.openAllButton.innerHTML = 'Close all <span class=\"visually-hidden\">sections</span>';\n            this.openAllButton.setAttribute('data-accordion', 'accordion-close-all');\n            allOpen = true;\n        } else {\n            // not everything is open\n            this.openAllButton.innerHTML = 'Expand all <span class=\"visually-hidden\">sections</span>';\n            this.openAllButton.setAttribute('data-accordion', 'accordion-open-all');\n            allOpen = false;\n        }\n\n        return allOpen;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\n\n//# sourceURL=webpack:///../pattern-library/src/components/accordion/accordion.js?");

/***/ }),

/***/ "../pattern-library/src/components/notification-banner/notification-banner.js":
/*!************************************************************************************!*\
  !*** ../pattern-library/src/components/notification-banner/notification-banner.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Notification {\n    constructor (notification) {\n        this.notification = notification;\n        this.notificationClose = notification.querySelector('.js-close-notification');\n    }\n\n    init() {\n        if (this.notificationClose) {\n            this.notificationClose.addEventListener('click', () => {\n                this.notification.parentNode.removeChild(this.notification);\n            });\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\n\n\n//# sourceURL=webpack:///../pattern-library/src/components/notification-banner/notification-banner.js?");

/***/ }),

/***/ "../pattern-library/src/components/side-navigation/side-navigation.js":
/*!****************************************************************************!*\
  !*** ../pattern-library/src/components/side-navigation/side-navigation.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass SideNavigation {\n    constructor (sideNavigation) {\n        this.sideNavigation = sideNavigation;\n    }\n\n    init() {\n        if (this.sideNavigation) {\n            this.setupSideNavigation();\n        }\n    }\n\n    setupSideNavigation() {\n        const checkbox = this.sideNavigation.querySelector('#show-side-navigation');\n        checkbox.setAttribute('aria-expanded', false);\n\n        checkbox.addEventListener('change', (event) => {\n            const list = this.sideNavigation.querySelector('.ds_side-navigation__list--root');\n            if (event.target.checked) {\n                list.style.display = 'block';\n                list.style.maxHeight = list.scrollHeight + 14 +  'px';\n            } else {\n                list.style.maxHeight = 0;\n                window.setTimeout(function () {\n                    list.style.display = 'none';\n                }, 200);\n            }\n\n            checkbox.setAttribute('aria-expanded', event.target.checked);\n\n            // tracking\n            checkbox.setAttribute('data-navigation', `navigation-${event.target.checked ? 'close' : 'open'}`);\n        });\n\n        window.addEventListener('scroll', () => {\n            const sideNavigationExpand = this.sideNavigation.querySelector('.ds_side-navigation__expand');\n\n            if (sideNavigationExpand.offsetTop > 1) {\n                sideNavigationExpand.classList.add('ds_side-navigation__expand--shadow');\n            } else {\n                sideNavigationExpand.classList.remove('ds_side-navigation__expand--shadow');\n            }\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNavigation);\n\n\n//# sourceURL=webpack:///../pattern-library/src/components/side-navigation/side-navigation.js?");

/***/ }),

/***/ "../pattern-library/src/components/site-navigation/site-navigation.js":
/*!****************************************************************************!*\
  !*** ../pattern-library/src/components/site-navigation/site-navigation.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass MobileMenu {\n    constructor (mobileMenu) {\n        this.mobileMenu = mobileMenu;\n        this.menuElement = document.querySelector('#mobile-navigation-menu');\n    }\n\n    init () {\n        if (!this.menuElement) {\n            return;\n        }\n\n        const menuToggleButton = document.querySelector('.js-toggle-menu');\n        const menuContainer = document.querySelector('#mobile-navigation-menu');\n        const menuCloseButton = document.querySelector('.js-close-menu');\n\n        menuToggleButton.addEventListener('click', () => {\n            menuContainer.classList.toggle('menu-is-open');\n            const menuIsOpen = menuContainer.classList.contains('menu-is-open');\n\n            if (menuIsOpen) {\n                this.openMenu();\n            } else {\n                this.closeMenu();\n            }\n\n            menuToggleButton.setAttribute('aria-expanded', menuIsOpen);\n            menuCloseButton.setAttribute('aria-expanded', menuIsOpen);\n            menuIsOpen? menuToggleButton.classList.add('ds_mobile-navigation__button--open') : menuToggleButton.classList.remove('ds_mobile-navigation__button--open');\n        });\n\n        menuCloseButton.addEventListener('click', () => {\n            menuContainer.classList.remove('menu-is-open');\n            this.closeMenu();\n\n            menuToggleButton.setAttribute('aria-expanded', false);\n            menuCloseButton.setAttribute('aria-expanded', false);\n            menuToggleButton.classList.remove('ds_mobile-navigation__button--open');\n        });\n    }\n\n    openMenu () {\n        window.scrollTo(0, window.scrollX);\n        const htmlElement = document.querySelector('html');\n        const bodyElement = document.querySelector('body');\n\n        // position overlay\n        const offsetElement = document.querySelector(this.menuElement.dataset.offsetselector);\n        const offsetHeight = offsetElement ? offsetElement.offsetHeight : 0;\n        const offsetTop = offsetElement ? offsetElement.offsetTop : 0;\n        const mobileNavigation = document.querySelector('.ds_mobile-navigation');\n        mobileNavigation.style.top = offsetHeight + 'px';\n\n        // handle any need for the menu to scroll if it is longer than the viewport\n        if ((mobileNavigation.offsetHeight + offsetHeight) > window.innerHeight) {\n            mobileNavigation.style.bottom = offsetHeight - window.innerHeight + 'px';\n        } else {\n            mobileNavigation.style.bottom = null;\n        }\n\n        const menuHeight = mobileNavigation.offsetHeight;\n        mobileNavigation.querySelector('.ds_mobile-navigation__backdrop').style.top = menuHeight + offsetHeight + offsetTop + 'px';\n\n        // set overflow on body and html\n        htmlElement.style.position = 'relative';\n        bodyElement.style.position = 'relative';\n\n        htmlElement.classList.add('menu-is-open');\n        htmlElement.style.height = window.innerHeight + \"px\";\n        bodyElement.style.height = window.innerHeight + \"px\";\n    }\n\n    closeMenu () {\n        const htmlElement = document.querySelector('html');\n        const bodyElement = document.querySelector('body');\n        const mobileNavigation = document.querySelector('.ds_mobile-navigation');\n\n        // unset overflow on body and html\n        htmlElement.style.position = null;\n        bodyElement.style.position = null;\n        htmlElement.classList.remove('menu-is-open');\n        htmlElement.style.height = null;\n        bodyElement.style.height = null;\n\n        mobileNavigation.style.bottom = null;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\n\n//# sourceURL=webpack:///../pattern-library/src/components/site-navigation/site-navigation.js?");

/***/ }),

/***/ "../pattern-library/src/components/site-search/site-search.js":
/*!********************************************************************!*\
  !*** ../pattern-library/src/components/site-search/site-search.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass CollapsibleSearchBox {\n    constructor (searchBox) {\n        this.searchBox = searchBox;\n    }\n\n    init () {\n        const searchInput = this.searchBox.querySelector('.ds_site-search__input');\n        const searchButton = this.searchBox.querySelector('.js-site-search-button');\n\n        searchButton.addEventListener('click', (event) => {\n            if (!searchInput.value && !window.ds_patterns.breakpoint('medium')) {\n                event.preventDefault();\n\n                this.searchBox.classList.toggle('ds_site-search--expanded');\n                searchInput.focus();\n\n                if (!this.searchBox.classList.contains('ds_site-search--expanded')) {\n                    searchInput.blur();\n                }\n            }\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CollapsibleSearchBox);\n\n\n//# sourceURL=webpack:///../pattern-library/src/components/site-search/site-search.js?");

/***/ }),

/***/ "./assets/scripts/all.js":
/*!*******************************!*\
  !*** ./assets/scripts/all.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_scottish_government_pattern_library_src_components_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@scottish-government/pattern-library/src/components/accordion/accordion.js */ \"../pattern-library/src/components/accordion/accordion.js\");\n/* harmony import */ var _node_modules_scottish_government_pattern_library_src_components_notification_banner_notification_banner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@scottish-government/pattern-library/src/components/notification-banner/notification-banner.js */ \"../pattern-library/src/components/notification-banner/notification-banner.js\");\n/* harmony import */ var _node_modules_scottish_government_pattern_library_src_components_side_navigation_side_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@scottish-government/pattern-library/src/components/side-navigation/side-navigation.js */ \"../pattern-library/src/components/side-navigation/side-navigation.js\");\n/* harmony import */ var _node_modules_scottish_government_pattern_library_src_components_site_navigation_site_navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@scottish-government/pattern-library/src/components/site-navigation/site-navigation.js */ \"../pattern-library/src/components/site-navigation/site-navigation.js\");\n/* harmony import */ var _node_modules_scottish_government_pattern_library_src_components_site_search_site_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@scottish-government/pattern-library/src/components/site-search/site-search.js */ \"../pattern-library/src/components/site-search/site-search.js\");\n\n//import CharacterCount from '../../node_modules/@scottish-government/pattern-library/src/character-count/character-count.js';\n\n\n\n\n\nconst accordions = [].slice.call(document.querySelectorAll('.ds_accordion'));\naccordions.forEach(accordion => new _node_modules_scottish_government_pattern_library_src_components_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](accordion).init());\n\nconst notificationBanners = [].slice.call(document.querySelectorAll('.ds_notification'));\nnotificationBanners.forEach(notificationBanner => new _node_modules_scottish_government_pattern_library_src_components_notification_banner_notification_banner_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](notificationBanner).init());\n\nconst sideNavigations = [].slice.call(document.querySelectorAll('.ds_side-navigation'));\nsideNavigations.forEach(sideNavigation => new _node_modules_scottish_government_pattern_library_src_components_side_navigation_side_navigation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](sideNavigation).init());\n\nconst mobileMenus = [].slice.call(document.querySelectorAll('#mobile-navigation-menu'));\nmobileMenus.forEach(mobileMenu =>  new _node_modules_scottish_government_pattern_library_src_components_site_navigation_site_navigation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](mobileMenu).init());\n\nconst searchBoxes = [].slice.call(document.querySelectorAll('.ds_site-search--collapsible'));\nsearchBoxes.forEach(searchBox => new _node_modules_scottish_government_pattern_library_src_components_site_search_site_search_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](searchBox).init());\n\n\n//# sourceURL=webpack:///./assets/scripts/all.js?");

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./assets/scripts/all.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/z418903/dev/patternlibrary.mygov.scot/assets/scripts/all.js */\"./assets/scripts/all.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/scripts/all.js?");

/***/ })

/******/ });
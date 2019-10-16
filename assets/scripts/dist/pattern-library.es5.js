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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accordionComponent\", function() { return accordionComponent; });\n\n\nvar accordionComponent = {\n  init: function init() {\n    var accordions = document.querySelectorAll('.ds_accordion');\n    accordions.forEach(function (accordion) {\n      accordion.classList.add('js-initialised');\n      var accordionItems = accordion.querySelectorAll('.ds_accordion-item');\n      var openAllButton = accordion.querySelector('.js-open-all');\n      accordionComponent.initOpenAll(accordion, openAllButton);\n      accordionItems.forEach(function (accordionItem) {\n        accordionComponent.initAccordionItem(accordionItem, accordion, openAllButton);\n      });\n    });\n  },\n  initAccordionItem: function initAccordionItem(item, accordion, button) {\n    var checkbox = item.querySelector('.ds_accordion-item__control');\n    var body = item.querySelector('.ds_accordion-item__body');\n    checkbox.setAttribute('aria-expanded', checkbox.checked);\n\n    if (checkbox.checked) {\n      body.style.display = 'block';\n      body.style.maxHeight = body.scrollHeight + 21 + 28 + 'px';\n    }\n\n    checkbox.addEventListener('change', function (event) {\n      if (event.target.checked) {\n        // 21px and 28px are the top and bottom padding of the body content\n        body.style.display = 'block';\n        body.style.maxHeight = body.scrollHeight + 21 + 28 + 'px';\n      } else {\n        body.style.maxHeight = 0;\n        window.setTimeout(function () {\n          body.style.display = 'none';\n        }, 200);\n      }\n\n      accordionComponent.checkAllOpen(accordion, button);\n      checkbox.setAttribute('aria-expanded', event.target.checked); // tracking\n\n      var accordionNumber = 0;\n\n      if (checkbox.getAttribute('data-accordion')) {\n        accordionNumber = checkbox.getAttribute('data-accordion').split('-').reverse()[0];\n      }\n\n      checkbox.setAttribute('data-accordion', \"accordion-\".concat(event.target.checked ? 'close' : 'open', \"-\").concat(accordionNumber));\n    });\n  },\n  initOpenAll: function initOpenAll(accordion, button) {\n    if (!button) {\n      return;\n    }\n\n    button.addEventListener('click', function () {\n      var opening = !accordionComponent.checkAllOpen(accordion, button);\n      var allPanelCheckboxes = accordion.querySelectorAll('.ds_accordion-item__control');\n      allPanelCheckboxes.forEach(function (checkbox) {\n        checkbox.checked = opening;\n        var event = document.createEvent('HTMLEvents');\n        event.initEvent('change', true, false);\n        checkbox.dispatchEvent(event);\n      });\n    });\n  },\n  checkAllOpen: function checkAllOpen(accordion, button) {\n    if (!button) {\n      return;\n    }\n\n    var accordionItems = accordion.querySelectorAll('.ds_accordion-item');\n    var openItems = accordion.querySelectorAll('.ds_accordion-item__control:checked');\n    var allOpen;\n\n    if (accordionItems.length === openItems.length) {\n      // everything is open\n      button.innerHTML = 'Close all <span class=\"visually-hidden\">sections</span>';\n      button.setAttribute('data-accordion', 'accordion-close-all');\n      allOpen = true;\n    } else {\n      // not everything is open\n      button.innerHTML = 'Expand all <span class=\"visually-hidden\">sections</span>';\n      button.setAttribute('data-accordion', 'accordion-open-all');\n      allOpen = false;\n    }\n\n    return allOpen;\n  }\n}; // self-initialize\n\naccordionComponent.init();\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/accordion.js?");

/***/ }),

/***/ "../pattern-library/src/scripts/notification-banner.js":
/*!*************************************************************!*\
  !*** ../pattern-library/src/scripts/notification-banner.js ***!
  \*************************************************************/
/*! exports provided: notificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notificationComponent\", function() { return notificationComponent; });\n\n\nvar notificationComponent = {\n  init: function init() {\n    var notifications = document.querySelectorAll('.ds_notification');\n    notifications.forEach(function (notification) {\n      var closeButton = notification.querySelector('.js-close-notification');\n\n      if (closeButton) {\n        closeButton.addEventListener('click', function () {\n          notification.parentNode.removeChild(notification);\n        });\n      }\n    });\n  }\n}; // self-initialize\n\nnotificationComponent.init();\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/notification-banner.js?");

/***/ }),

/***/ "../pattern-library/src/scripts/side-navigation.js":
/*!*********************************************************!*\
  !*** ../pattern-library/src/scripts/side-navigation.js ***!
  \*********************************************************/
/*! exports provided: sideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sideNavigationComponent\", function() { return sideNavigationComponent; });\n\n\nvar sideNavigationComponent = {\n  init: function init() {\n    var sideNavigation = document.querySelector('.ds_side-navigation');\n\n    if (sideNavigation) {\n      this.setupSideNavigation(sideNavigation);\n    }\n  },\n  setupSideNavigation: function setupSideNavigation(sideNavigation) {\n    var checkbox = sideNavigation.querySelector('#show-side-navigation');\n    checkbox.setAttribute('aria-expanded', false);\n    checkbox.addEventListener('change', function (event) {\n      var list = sideNavigation.querySelector('.ds_side-navigation__list--root');\n\n      if (event.target.checked) {\n        list.style.display = 'block';\n        list.style.maxHeight = list.scrollHeight + 14 + 'px';\n      } else {\n        list.style.maxHeight = 0;\n        window.setTimeout(function () {\n          list.style.display = 'none';\n        }, 200);\n      }\n\n      checkbox.setAttribute('aria-expanded', event.target.checked); // tracking\n\n      checkbox.setAttribute('data-navigation', \"navigation-\".concat(event.target.checked ? 'close' : 'open'));\n    });\n    window.addEventListener('scroll', function () {\n      var sideNavigationExpand = document.querySelector('.ds_side-navigation__expand');\n\n      if (sideNavigationExpand.offsetTop > 1) {\n        sideNavigationExpand.classList.add('ds_side-navigation__expand--shadow');\n      } else {\n        sideNavigationExpand.classList.remove('ds_side-navigation__expand--shadow');\n      }\n    });\n  }\n}; // self-initialize\n\nsideNavigationComponent.init();\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/side-navigation.js?");

/***/ }),

/***/ "../pattern-library/src/scripts/site-navigation.js":
/*!*********************************************************!*\
  !*** ../pattern-library/src/scripts/site-navigation.js ***!
  \*********************************************************/
/*! exports provided: mobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mobileMenuComponent\", function() { return mobileMenuComponent; });\n\n\nvar mobileMenuComponent = {\n  init: function init() {\n    var menuElement = document.querySelector('#mobile-navigation-menu');\n\n    if (!menuElement) {\n      return;\n    }\n\n    var menuToggleButton = document.querySelector('.js-toggle-menu');\n    var menuContainer = document.querySelector('#mobile-navigation-menu');\n    var menuCloseButton = document.querySelector('.js-close-menu');\n    menuToggleButton.addEventListener('click', function () {\n      menuContainer.classList.toggle('menu-is-open');\n      var menuIsOpen = menuContainer.classList.contains('menu-is-open');\n\n      if (menuIsOpen) {\n        mobileMenuComponent.openMenu(menuElement);\n      } else {\n        mobileMenuComponent.closeMenu();\n      }\n\n      menuToggleButton.setAttribute('aria-expanded', menuIsOpen);\n      menuCloseButton.setAttribute('aria-expanded', menuIsOpen);\n      menuIsOpen ? menuToggleButton.classList.add('ds_mobile-navigation__button--open') : menuToggleButton.classList.remove('ds_mobile-navigation__button--open');\n    });\n    menuCloseButton.addEventListener('click', function () {\n      menuContainer.classList.remove('menu-is-open');\n      mobileMenuComponent.closeMenu();\n      menuToggleButton.setAttribute('aria-expanded', false);\n      menuCloseButton.setAttribute('aria-expanded', false);\n      menuToggleButton.classList.remove('ds_mobile-navigation__button--open');\n    });\n  },\n  openMenu: function openMenu(menuElement) {\n    window.scrollTo(0, window.scrollX);\n    var htmlElement = document.querySelector('html');\n    var bodyElement = document.querySelector('body'); // position overlay\n\n    var offsetElement = document.querySelector(menuElement.dataset.offsetselector);\n    var offsetHeight = offsetElement ? offsetElement.offsetHeight : 0;\n    var offsetTop = offsetElement ? offsetElement.offsetTop : 0;\n    var mobileNavigation = document.querySelector('.ds_mobile-navigation');\n    mobileNavigation.style.top = offsetHeight + 'px'; // handle any need for the menu to scroll if it is longer than the viewport\n\n    if (mobileNavigation.offsetHeight + offsetHeight > window.innerHeight) {\n      mobileNavigation.style.bottom = offsetHeight - window.innerHeight + 'px';\n    } else {\n      mobileNavigation.style.bottom = null;\n    }\n\n    var menuHeight = mobileNavigation.offsetHeight;\n    console.log(menuHeight, offsetHeight, offsetTop);\n    mobileNavigation.querySelector('.ds_mobile-navigation__backdrop').style.top = menuHeight + offsetHeight + offsetTop + 'px'; // set overflow on body and html\n\n    htmlElement.style.position = 'relative';\n    bodyElement.style.position = 'relative';\n    htmlElement.classList.add('menu-is-open');\n    htmlElement.style.height = window.innerHeight + \"px\";\n    bodyElement.style.height = window.innerHeight + \"px\";\n  },\n  closeMenu: function closeMenu() {\n    var htmlElement = document.querySelector('html');\n    var bodyElement = document.querySelector('body');\n    var mobileNavigation = document.querySelector('.ds_mobile-navigation'); // unset overflow on body and html\n\n    htmlElement.style.position = null;\n    bodyElement.style.position = null;\n    htmlElement.classList.remove('menu-is-open');\n    htmlElement.style.height = null;\n    bodyElement.style.height = null;\n    mobileNavigation.style.bottom = null;\n  }\n}; // self-initialize\n\nmobileMenuComponent.init();\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/site-navigation.js?");

/***/ }),

/***/ "../pattern-library/src/scripts/site-search.js":
/*!*****************************************************!*\
  !*** ../pattern-library/src/scripts/site-search.js ***!
  \*****************************************************/
/*! exports provided: searchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchBoxComponent\", function() { return searchBoxComponent; });\n\n\nvar searchBoxComponent = {\n  init: function init() {\n    var collapsibleSearchBoxes = document.querySelectorAll('.ds_site-search--collapsible');\n    collapsibleSearchBoxes.forEach(function (searchBox) {\n      var searchInput = searchBox.querySelector('.ds_site-search__input');\n      var searchButton = searchBox.querySelector('.js-site-search-button');\n      searchButton.addEventListener('click', function (event) {\n        if (!searchInput.value && !window.ds_patterns.breakpoint('medium')) {\n          event.preventDefault();\n          searchBox.classList.toggle('ds_site-search--expanded');\n          searchInput.focus();\n\n          if (!searchBox.classList.contains('ds_site-search--expanded')) {\n            searchInput.blur();\n          }\n        }\n      });\n    });\n  }\n}; // self-initialize\n\nsearchBoxComponent.init();\n\n\n//# sourceURL=webpack:///../pattern-library/src/scripts/site-search.js?");

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
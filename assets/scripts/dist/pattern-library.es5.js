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

/***/ "../pattern-library/src/all.js":
/*!*************************************!*\
  !*** ../pattern-library/src/all.js ***!
  \*************************************/
/*! exports provided: initAll, Accordion, CharacterCount, CollapsibleSearchBox, MobileMenu, NotificationBanner, SideNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAll\", function() { return initAll; });\n/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordion/accordion */ \"../pattern-library/src/components/accordion/accordion.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Accordion\", function() { return _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _components_site_search_site_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/site-search/site-search */ \"../pattern-library/src/components/site-search/site-search.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CollapsibleSearchBox\", function() { return _components_site_search_site_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _forms_character_count_character_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/character-count/character-count */ \"../pattern-library/src/forms/character-count/character-count.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CharacterCount\", function() { return _forms_character_count_character_count__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _components_site_navigation_site_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/site-navigation/site-navigation */ \"../pattern-library/src/components/site-navigation/site-navigation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MobileMenu\", function() { return _components_site_navigation_site_navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _components_notification_banner_notification_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notification-banner/notification-banner */ \"../pattern-library/src/components/notification-banner/notification-banner.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NotificationBanner\", function() { return _components_notification_banner_notification_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _components_side_navigation_side_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-navigation/side-navigation */ \"../pattern-library/src/components/side-navigation/side-navigation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SideNavigation\", function() { return _components_side_navigation_side_navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n // Similar to gov.uk approach, allow DS to be applied in a more targeted way than the whole document if needed\n// defaults to document\n\nfunction initAll() {\n  var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n  var accordions = [].slice.call(scope.querySelectorAll('[data-module=\"ds-accordion\"]'));\n  accordions.forEach(function (accordion) {\n    return new _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__[\"default\"](accordion).init();\n  });\n  var searchBoxes = [].slice.call(scope.querySelectorAll('[data-module=\"ds-site-search\"]'));\n  searchBoxes.forEach(function (searchBox) {\n    return new _components_site_search_site_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"](searchBox).init();\n  });\n  var characterCountModules = [].slice.call(scope.querySelectorAll('[data-module=\"ds-character-count\"]'));\n  var characterCountElements = [].slice.call(scope.querySelectorAll('input[maxlength], textarea[maxlength]'));\n  characterCountElements.forEach(function (element) {\n    return characterCountModules.push(element.parentNode);\n  });\n  characterCountModules.forEach(function (characterCount) {\n    return new _forms_character_count_character_count__WEBPACK_IMPORTED_MODULE_2__[\"default\"](characterCount).init();\n  });\n  var mobileMenus = [].slice.call(scope.querySelectorAll('[data-module=\"ds-mobile-navigation-menu\"]'));\n  mobileMenus.forEach(function (mobileMenu) {\n    return new _components_site_navigation_site_navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"](mobileMenu).init();\n  });\n  var notificationBanners = [].slice.call(scope.querySelectorAll('[data-module=\"ds-notification\"]'));\n  notificationBanners.forEach(function (notificationBanner) {\n    return new _components_notification_banner_notification_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"](notificationBanner).init();\n  });\n  var sideNavigations = [].slice.call(scope.querySelectorAll('[data-module=\"ds-side-navigation\"]'));\n  sideNavigations.forEach(function (sideNavigation) {\n    return new _components_side_navigation_side_navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"](sideNavigation).init();\n  });\n}\n\n\n\n//# sourceURL=webpack:///../pattern-library/src/all.js?");

/***/ }),

/***/ "../pattern-library/src/components/accordion/accordion.js":
/*!****************************************************************!*\
  !*** ../pattern-library/src/components/accordion/accordion.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Accordion =\n/*#__PURE__*/\nfunction () {\n  function Accordion(accordion) {\n    _classCallCheck(this, Accordion);\n\n    this.accordion = accordion;\n    this.items = [].slice.call(accordion.querySelectorAll('.ds_accordion-item'));\n    this.openAllButton = accordion.querySelector('.js-open-all');\n  }\n\n  _createClass(Accordion, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.items.forEach(function (item) {\n        return _this.initAccordionItem(item);\n      });\n      this.initOpenAll();\n      this.accordion.classList.add('js-initialised');\n    }\n  }, {\n    key: \"initAccordionItem\",\n    value: function initAccordionItem(item) {\n      var _this2 = this;\n\n      // transform markup to button-driven version\n      var itemControl = item.querySelector('.ds_accordion-item__control');\n      var itemHeader = item.querySelector('.ds_accordion-item__header');\n      var itemTitle = itemHeader.querySelector('.ds_accordion-item__title');\n      var itemBody = item.querySelector('.ds_accordion-item__body');\n      var startsOpen = itemControl.checked;\n      var itemButton = document.createElement('button');\n      var itemIndicator = document.createElement('span');\n      itemButton.classList.add('ds_accordion-item__header-button');\n      itemIndicator.classList.add('ds_accordion-item__indicator'); // we keep the control present but make it unavailable in the tab order or to screen readers\n\n      itemControl.classList.remove('visually-hidden');\n      itemControl.classList.add('fully-hidden');\n      itemButton.innerHTML = itemTitle.innerHTML;\n      itemButton.appendChild(itemIndicator);\n      itemHeader.parentNode.removeChild(itemHeader);\n      item.insertBefore(itemButton, itemBody);\n\n      if (startsOpen) {\n        item.classList.add('ds_accordion-item--open');\n        itemBody.style.maxHeight = itemBody.scrollHeight + 21 + 28 + 'px';\n        this.setOpenAllButton(this.checkAllOpen());\n      }\n\n      item.setAttribute('aria-expanded', startsOpen); // events\n\n      itemButton.addEventListener('click', function () {\n        var body = item.querySelector('.ds_accordion-item__body');\n        var isOpen = item.classList.contains('ds_accordion-item--open');\n        var that = _this2;\n\n        if (!isOpen) {\n          item.classList.add('ds_accordion-item--open');\n          body.style.display = 'block'; // 21px and 28px are the top and bottom padding of the body content\n\n          body.style.maxHeight = body.scrollHeight + 21 + 28 + 'px';\n\n          _this2.checkAllOpen();\n        } else {\n          body.style.maxHeight = 0;\n          item.classList.remove('ds_accordion-item--open');\n          that.checkAllOpen();\n          window.setTimeout(function () {\n            body.style.display = 'none';\n          }, 200);\n        }\n\n        item.setAttribute('aria-expanded', !isOpen);\n        itemControl.checked = !isOpen; // tracking\n\n        var accordionNumber = 0;\n\n        if (itemButton.getAttribute('data-accordion')) {\n          accordionNumber = itemButton.getAttribute('data-accordion').split('-').reverse()[0];\n        }\n\n        itemButton.setAttribute('data-accordion', \"accordion-\".concat(isOpen ? 'close' : 'open', \"-\").concat(accordionNumber));\n\n        _this2.setOpenAllButton(_this2.checkAllOpen());\n      });\n    }\n  }, {\n    key: \"initOpenAll\",\n    value: function initOpenAll() {\n      var _this3 = this;\n\n      if (!this.openAllButton) {\n        return;\n      }\n\n      this.openAllButton.addEventListener('click', function () {\n        // if we're opening, open all unopened panels\n        // if we're closing, close all opened panels\n        var opening = !_this3.checkAllOpen();\n        var allPanelButtons = [].slice.call(_this3.accordion.querySelectorAll('.ds_accordion-item__header-button'));\n        var panelsToToggle;\n\n        if (opening) {\n          panelsToToggle = allPanelButtons.filter(function (button) {\n            return !button.parentNode.classList.contains('ds_accordion-item--open');\n          });\n        } else {\n          panelsToToggle = allPanelButtons.filter(function (button) {\n            return button.parentNode.classList.contains('ds_accordion-item--open');\n          });\n        }\n\n        panelsToToggle.forEach(function (button) {\n          var event = document.createEvent('HTMLEvents');\n          event.initEvent('click', true, false);\n          button.dispatchEvent(event);\n        });\n\n        _this3.setOpenAllButton(opening);\n      });\n    }\n  }, {\n    key: \"setOpenAllButton\",\n    value: function setOpenAllButton(open) {\n      if (open) {\n        this.openAllButton.innerHTML = 'Close all <span class=\"visually-hidden\">sections</span>';\n        this.openAllButton.setAttribute('data-accordion', 'accordion-close-all');\n      } else {\n        this.openAllButton.innerHTML = 'Open all <span class=\"visually-hidden\">sections</span>';\n        this.openAllButton.setAttribute('data-accordion', 'accordion-open-all');\n      }\n    }\n  }, {\n    key: \"checkAllOpen\",\n    value: function checkAllOpen() {\n      if (!this.openAllButton) {\n        return;\n      }\n\n      var openItemsCount = this.accordion.querySelectorAll('.ds_accordion-item--open').length;\n      return this.items.length === openItemsCount;\n    }\n  }]);\n\n  return Accordion;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\n//# sourceURL=webpack:///../pattern-library/src/components/accordion/accordion.js?");

/***/ }),

/***/ "../pattern-library/src/components/notification-banner/notification-banner.js":
/*!************************************************************************************!*\
  !*** ../pattern-library/src/components/notification-banner/notification-banner.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Notification =\n/*#__PURE__*/\nfunction () {\n  function Notification(notification) {\n    _classCallCheck(this, Notification);\n\n    this.notification = notification;\n    this.notificationClose = notification.querySelector('.js-close-notification');\n  }\n\n  _createClass(Notification, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      if (this.notificationClose) {\n        this.notificationClose.addEventListener('click', function () {\n          _this.notification.parentNode.removeChild(_this.notification);\n        });\n      }\n    }\n  }]);\n\n  return Notification;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\n\n//# sourceURL=webpack:///../pattern-library/src/components/notification-banner/notification-banner.js?");

/***/ }),

/***/ "../pattern-library/src/components/side-navigation/side-navigation.js":
/*!****************************************************************************!*\
  !*** ../pattern-library/src/components/side-navigation/side-navigation.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SideNavigation =\n/*#__PURE__*/\nfunction () {\n  function SideNavigation(sideNavigation) {\n    _classCallCheck(this, SideNavigation);\n\n    this.sideNavigation = sideNavigation;\n  }\n\n  _createClass(SideNavigation, [{\n    key: \"init\",\n    value: function init() {\n      if (this.sideNavigation) {\n        this.setupSideNavigation();\n      }\n    }\n  }, {\n    key: \"setupSideNavigation\",\n    value: function setupSideNavigation() {\n      var _this = this;\n\n      // transform markup to button-driven version\n      var navControl = this.sideNavigation.querySelector('.js-toggle-side-navigation');\n      var navLabel = this.sideNavigation.querySelector('.ds_side-navigation__expand');\n      var navList = this.sideNavigation.querySelector('.ds_side-navigation__list--root');\n      navControl.checked = false;\n      this.sideNavigation.setAttribute('aria-expanded', false);\n      var navButton = document.createElement('button');\n      navButton.classList.add('ds_side-navigation__expand', 'ds_link');\n      navButton.innerHTML = navLabel.innerHTML;\n      navLabel.parentNode.removeChild(navLabel);\n      this.sideNavigation.insertBefore(navButton, navList); // events\n\n      navButton.addEventListener('click', function () {\n        var isOpen = navControl.checked;\n\n        if (!isOpen) {\n          navList.style.display = 'block';\n          navList.style.maxHeight = navList.scrollHeight + 14 + 'px';\n        } else {\n          navList.style.maxHeight = 0;\n          window.setTimeout(function () {\n            navList.style.display = 'none';\n          }, 200);\n        }\n\n        _this.sideNavigation.setAttribute('aria-expanded', !isOpen);\n\n        navControl.checked = !isOpen;\n        navControl.setAttribute('data-navigation', \"navigation-\".concat(navControl.checked ? 'close' : 'open'));\n      });\n      window.addEventListener('scroll', function () {\n        var sideNavigationExpand = _this.sideNavigation.querySelector('.ds_side-navigation__expand');\n\n        if (sideNavigationExpand.offsetTop > 1) {\n          sideNavigationExpand.classList.add('ds_side-navigation__expand--shadow');\n        } else {\n          sideNavigationExpand.classList.remove('ds_side-navigation__expand--shadow');\n        }\n      });\n    }\n  }]);\n\n  return SideNavigation;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNavigation);\n\n//# sourceURL=webpack:///../pattern-library/src/components/side-navigation/side-navigation.js?");

/***/ }),

/***/ "../pattern-library/src/components/site-navigation/site-navigation.js":
/*!****************************************************************************!*\
  !*** ../pattern-library/src/components/site-navigation/site-navigation.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MobileMenu =\n/*#__PURE__*/\nfunction () {\n  function MobileMenu(mobileMenu) {\n    _classCallCheck(this, MobileMenu);\n\n    this.mobileMenu = mobileMenu;\n    this.menuElement = document.querySelector('#mobile-navigation-menu');\n  }\n\n  _createClass(MobileMenu, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      if (!this.menuElement) {\n        return;\n      }\n\n      var menuToggleButton = document.querySelector('.js-toggle-menu');\n      var menuContainer = document.querySelector('#mobile-navigation-menu');\n      var menuCloseButton = document.querySelector('.js-close-menu');\n      menuToggleButton.addEventListener('click', function () {\n        menuContainer.classList.toggle('menu-is-open');\n        var menuIsOpen = menuContainer.classList.contains('menu-is-open');\n\n        if (menuIsOpen) {\n          _this.openMenu();\n        } else {\n          _this.closeMenu();\n        }\n\n        menuToggleButton.setAttribute('aria-expanded', menuIsOpen);\n        menuCloseButton.setAttribute('aria-expanded', menuIsOpen);\n        menuIsOpen ? menuToggleButton.classList.add('ds_mobile-navigation__button--open') : menuToggleButton.classList.remove('ds_mobile-navigation__button--open');\n      });\n      menuCloseButton.addEventListener('click', function () {\n        menuContainer.classList.remove('menu-is-open');\n\n        _this.closeMenu();\n\n        menuToggleButton.setAttribute('aria-expanded', false);\n        menuCloseButton.setAttribute('aria-expanded', false);\n        menuToggleButton.classList.remove('ds_mobile-navigation__button--open');\n      });\n    }\n  }, {\n    key: \"openMenu\",\n    value: function openMenu() {\n      window.scrollTo(0, window.scrollX);\n      var htmlElement = document.querySelector('html');\n      var bodyElement = document.querySelector('body'); // position overlay\n\n      var offsetElement = document.querySelector(this.menuElement.dataset.offsetselector);\n      var offsetHeight = offsetElement ? offsetElement.offsetHeight : 0;\n      var offsetTop = offsetElement ? offsetElement.offsetTop : 0;\n      var mobileNavigation = document.querySelector('.ds_mobile-navigation');\n      mobileNavigation.style.top = offsetHeight + 'px'; // handle any need for the menu to scroll if it is longer than the viewport\n\n      if (mobileNavigation.offsetHeight + offsetHeight > window.innerHeight) {\n        mobileNavigation.style.bottom = offsetHeight - window.innerHeight + 'px';\n      } else {\n        mobileNavigation.style.bottom = null;\n      }\n\n      var menuHeight = mobileNavigation.offsetHeight;\n      mobileNavigation.querySelector('.ds_mobile-navigation__backdrop').style.top = menuHeight + offsetHeight + offsetTop + 'px'; // set overflow on body and html\n\n      htmlElement.style.position = 'relative';\n      bodyElement.style.position = 'relative';\n      htmlElement.classList.add('menu-is-open');\n      htmlElement.style.height = window.innerHeight + \"px\";\n      bodyElement.style.height = window.innerHeight + \"px\";\n    }\n  }, {\n    key: \"closeMenu\",\n    value: function closeMenu() {\n      var htmlElement = document.querySelector('html');\n      var bodyElement = document.querySelector('body');\n      var mobileNavigation = document.querySelector('.ds_mobile-navigation'); // unset overflow on body and html\n\n      htmlElement.style.position = null;\n      bodyElement.style.position = null;\n      htmlElement.classList.remove('menu-is-open');\n      htmlElement.style.height = null;\n      bodyElement.style.height = null;\n      mobileNavigation.style.bottom = null;\n    }\n  }]);\n\n  return MobileMenu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\n//# sourceURL=webpack:///../pattern-library/src/components/site-navigation/site-navigation.js?");

/***/ }),

/***/ "../pattern-library/src/components/site-search/site-search.js":
/*!********************************************************************!*\
  !*** ../pattern-library/src/components/site-search/site-search.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CollapsibleSearchBox =\n/*#__PURE__*/\nfunction () {\n  function CollapsibleSearchBox(searchBox) {\n    _classCallCheck(this, CollapsibleSearchBox);\n\n    this.searchBox = searchBox;\n  }\n\n  _createClass(CollapsibleSearchBox, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var searchInput = this.searchBox.querySelector('.ds_site-search__input');\n      var searchButton = this.searchBox.querySelector('.js-site-search-button');\n      searchButton.addEventListener('click', function (event) {\n        if (!searchInput.value && !window.ds_patterns.breakpoint('medium')) {\n          event.preventDefault();\n\n          _this.searchBox.classList.toggle('ds_site-search--expanded');\n\n          searchInput.focus();\n\n          if (!_this.searchBox.classList.contains('ds_site-search--expanded')) {\n            searchInput.blur();\n          }\n        }\n      });\n    }\n  }]);\n\n  return CollapsibleSearchBox;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CollapsibleSearchBox);\n\n//# sourceURL=webpack:///../pattern-library/src/components/site-search/site-search.js?");

/***/ }),

/***/ "../pattern-library/src/forms/character-count/character-count.js":
/*!***********************************************************************!*\
  !*** ../pattern-library/src/forms/character-count/character-count.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CharacterCount =\n/*#__PURE__*/\nfunction () {\n  function CharacterCount(field) {\n    _classCallCheck(this, CharacterCount);\n\n    this.field = field;\n    this.inputElement = this.field.querySelector('input, textarea');\n    this.threshold = this.field.dataset.threshold ? this.field.dataset.threshold * 0.01 : 0;\n  }\n\n  _createClass(CharacterCount, [{\n    key: \"init\",\n    value: function init() {\n      if (!this.inputElement) {\n        return;\n      }\n\n      this.setMaxLength();\n\n      if (!this.maxLength) {\n        return;\n      } // dynamically create the message element\n\n\n      this.messageElement = document.createElement('div');\n      this.messageElement.setAttribute('aria-live', 'polite');\n      this.messageElement.classList.add('ds_input__message', 'ds_hint-text');\n      this.messageElement.innerText = \"You can enter up to \".concat(this.maxLength, \" characters\");\n\n      if (this.inputElement.value.length < this.maxLength * this.threshold) {\n        this.messageElement.classList.add('fully-hidden');\n      }\n\n      this.field.appendChild(this.messageElement);\n      this.inputElement.addEventListener('keyup', this.checkIfChanged.bind(this));\n    }\n  }, {\n    key: \"setMaxLength\",\n    value: function setMaxLength() {\n      if (this.inputElement.getAttribute('maxlength')) {\n        this.maxLength = parseInt(this.inputElement.getAttribute('maxlength'), 10);\n        this.inputElement.removeAttribute('maxlength');\n      } else {\n        this.maxLength = this.field.dataset.maxlength;\n      }\n    }\n    /*\n     * Per GDS:\n     * \"Speech recognition software such as Dragon NaturallySpeaking will modify the\n     * fields by directly changing its `value`. These changes don't trigger events\n     * in JavaScript, so we need to poll to handle when and if they occur.\"\n     */\n\n  }, {\n    key: \"checkIfChanged\",\n    value: function checkIfChanged() {\n      if (!this.inputElement.oldValue) {\n        this.inputElement.oldValue = '';\n      }\n\n      if (this.inputElement.value !== this.inputElement.oldValue) {\n        this.inputElement.oldValue = this.inputElement.value;\n        this.updateCountMessage.bind(this)();\n      }\n    }\n  }, {\n    key: \"updateCountMessage\",\n    value: function updateCountMessage() {\n      var count = this.maxLength - this.inputElement.value.length;\n      var noun = 'characters';\n\n      if (Math.abs(count) === 1) {\n        noun = 'character';\n      }\n\n      this.messageElement.innerText = \"You have \".concat(count, \" \").concat(noun, \" remaining\");\n\n      if (count < 0) {\n        this.inputElement.classList.add('ds_input--error');\n        this.inputElement.setAttribute('aria-invalid', true);\n        this.messageElement.innerText = \"You have \".concat(Math.abs(count), \" \").concat(noun, \" too many\");\n        this.messageElement.classList.remove('ds_hint-text');\n      } else {\n        this.inputElement.classList.remove('ds_input--error');\n        this.inputElement.setAttribute('aria-invalid', false);\n        this.messageElement.innerText = \"You have \".concat(count, \" \").concat(noun, \" remaining\");\n        this.messageElement.classList.add('ds_hint-text');\n      }\n\n      if (this.inputElement.value.length < this.maxLength * this.threshold) {\n        this.messageElement.classList.add('fully-hidden');\n      } else {\n        this.messageElement.classList.remove('fully-hidden');\n      }\n    }\n  }]);\n\n  return CharacterCount;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharacterCount);\n\n//# sourceURL=webpack:///../pattern-library/src/forms/character-count/character-count.js?");

/***/ }),

/***/ "./assets/scripts/all.js":
/*!*******************************!*\
  !*** ./assets/scripts/all.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_scottish_government_pattern_library_src_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@scottish-government/pattern-library/src/all */ \"../pattern-library/src/all.js\");\n\nObject(_node_modules_scottish_government_pattern_library_src_all__WEBPACK_IMPORTED_MODULE_0__[\"initAll\"])();\n\n//# sourceURL=webpack:///./assets/scripts/all.js?");

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
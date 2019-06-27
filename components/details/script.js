// EXPANDABLE
/*
 Contains functionality for accordion-style expandable panels, reusable across formats
 */

'use strict';

// is details a known element?
const detailsElements = document.querySelectorAll('details.details');

if (document.createElement('details') instanceof HTMLUnknownElement) {
    detailsElements.forEach(function(details) {
        // remove our styling
        details.classList.remove('details');

        details.querySelector('.details__title').classList.remove('details__title');
        details.querySelector('.details__content').classList.remove('details__content');
        details.querySelector('.details__summary').removeChild(details.querySelector('.details__summary-icon'));

        // remove the icon as the element is non-interactable
        const summary = details.querySelector('.details__summary');
        summary.classList.remove('details__summary');
        summary.removeAttribute('role');
    });
} else {
    detailsElements.forEach(function(details) {

        const summary = details.querySelector('summary');

        // add aria-expanded attrib to summary
        summary.setAttribute('aria-expanded', 'false');

        // add event to toggle aria-expanded
        summary.addEventListener('click', function () {
            // event loop nonsense
            window.setTimeout(function () {
                summary.setAttribute('aria-expanded', details.open);
            }, 0);
        });
    });
}








// const expandable = {

//     initExpandables: function () {
//         const expandables = document.querySelectorAll('.expandable');
//         const that = this;
//         this.expandableOpenTime = 200;

//         expandables.forEach(function (expandable, index) {
//             expandable.id = `expandable-${index}`;
//             that.initHeadings(expandable, index);
//             that.initControls(expandable, index);

//             that.setInitialState(expandable);
//         });
//     },

//     initControls: function (expandable) {
//         // expand all button
//         expandable.expandAllButton = document.createElement('button');
//         expandable.expandAllButton.setAttribute('type', 'button');
//         expandable.expandAllButton.innerHTML = 'Open all <span class="hidden">sections</span>';
//         expandable.expandAllButton.classList.add('button', 'button--secondary');

//         const controlsContainer = document.createElement('div');
//         controlsContainer.classList.add('expandable__controls');
//         controlsContainer.appendChild(expandable.expandAllButton);
//         expandable.insertBefore(controlsContainer, expandable.querySelector('.expandable-item'));
//     },

//     initHeadings: function (expandable, expandableIndex) {
//         const expandableItems = expandable.querySelectorAll('.expandable-item');
//         const that = this;

//         expandableItems.forEach(function (expandableItem, expandableItemIndex) {
//             expandableItem.id = `expandable-${expandableIndex}-item-${expandableItemIndex}`;

//             const heading = expandableItem.querySelector('.expandable-item__header');

//             let button = document.createElement('button');
//             button.setAttribute('type', 'button');
//             button.innerHTML = heading.innerHTML;

//             for (let i = 0, il = heading.attributes.length; i < il; i++) {
//                 const attr = heading.attributes.item(i);
//                 button.setAttribute(attr.nodeName, attr.nodeValue);
//             }

//             button.classList.add('expandable-item__header-button');
//             button.querySelector('.expandable-item__title').classList.add('gamma');

//             // insert button
//             heading.insertAdjacentHTML('beforebegin', button.outerHTML);
//             button = heading.parentNode.querySelector('.expandable-item__header-button');

//             // remove heading
//             heading.parentNode.removeChild(heading);

//             button.setAttribute('aria-expanded', 'false');
//             button.setAttribute('aria-controls', `expandable-${expandableIndex}-item-${expandableItemIndex}-body`);
//             button.id = `expandable-${expandableIndex}-item-${expandableItemIndex}-heading`;

//             // modify body
//             const body = expandableItem.querySelector('.expandable-item__body');
//             body.setAttribute('aria-labelledby', `expandable-${expandableIndex}-item-${expandableItemIndex}-heading`);
//             body.id = `expandable-${expandableIndex}-item-${expandableItemIndex}-body`;


//             body.style.transition = `height ${that.expandableOpenTime * .001}s`;
//             body.style.height = 0;
//             body.style.overflow = 'hidden';
//         });

//     },

//     attachEventHandlers: function () {
//         const that = this;
//         const expandables = document.querySelectorAll('.expandable');

//         expandables.forEach(function (expandable) {
//             const expandableItems = expandable.querySelectorAll('.expandable-item');

//             expandableItems.forEach(function (expandableItem) {
//                 const button = expandableItem.querySelector('.expandable-item__header-button');

//                 button.addEventListener('click', function (event) {
//                     event.preventDefault();
//                     that.toggleExpandableItem(expandableItem, expandable);
//                 });
//             });

//             expandable.expandAllButton.addEventListener('click', function (event) {
//                 event.preventDefault();

//                 const openItems = expandable.querySelectorAll('.expandable-item--open');
//                 const closedItems = expandable.querySelectorAll('.expandable-item:not(.expandable-item--open)');

//                 if (expandable.allOpen) {
//                     openItems.forEach(function (item) {
//                         that.toggleExpandableItem(item, expandable);
//                     });
//                 } else {
//                     closedItems.forEach(function (item) {
//                         that.toggleExpandableItem(item, expandable);
//                     });
//                 }
//             });
//         });
//     },

//     checkAllOpen: function (expandable) {
//         const expandableItems = expandable.querySelectorAll('.expandable-item');
//         const openExpandableItems = expandable.querySelectorAll('.expandable-item--open');

//         if (expandableItems.length === openExpandableItems.length) {
//             // everything is open
//             expandable.expandAllButton.innerHTML = 'Close all <span class="hidden">sections</span>'
//             expandable.allOpen = true;
//         } else {
//             // not everything is open
//             expandable.expandAllButton.innerHTML = 'Open all <span class="hidden">sections</span>'
//             expandable.allOpen = false;
//         }
//     },


//     storeState: function (expandable) {
//         const storeValue = {
//             id: expandable.id,
//             items: []
//         };

//         const expandableItems = expandable.querySelectorAll('.expandable-item');

//         expandableItems.forEach(function (expandableItem) {
//             storeValue.items.push({
//                 id: expandableItem.id,
//                 open: expandableItem.classList.contains('expandable-item--open')
//             });
//         });

//         sessionStorage.setItem(window.location.pathname.replace(/\W/g,''), JSON.stringify(storeValue));

//         // if (storage.hasPermission(storage.categories.preferences)) {
//         //     storage.set({
//         //         type: storage.types.session,
//         //         category: storage.categories.preferences,
//         //         name: expandable.id,
//         //         value: JSON.stringify(storeValue)
//         //     });
//         // }
//     },

//     setInitialState: function (expandable) {
//         const initialState = JSON.parse(sessionStorage.getItem(window.location.pathname.replace(/\W/g,'')));

//         if (initialState) {

//             for (let i = 0, il = initialState.items.length; i < il; i++) {
//                 const expandableItem = document.getElementById(initialState.items[i].id);
//                 if (initialState.items[i].open) {
//                     this.toggleExpandableItem( expandableItem, expandable);
//                 }
//             }
//         }
//     },

//     toggleExpandableItem: function (expandableItem, expandable) {
//         const button = expandableItem.querySelector('.expandable-item__header-button');
//         const body = expandableItem.querySelector('.expandable-item__body');
//         const bodyContent = expandableItem.querySelector('.expandable-item__body-content');
//         const that = this;

//         if (expandableItem.classList.contains('expandable-item--open')) {
//             expandableItem.classList.remove('expandable-item--open');
//             button.setAttribute('aria-expanded', 'false');
//             button.setAttribute('data-gtm', 'panel-closed');
//             window.setTimeout(function () {
//                 bodyContent.style.display = 'none';
//             }, that.expandableOpenTime);

//             body.style.height = 0;
//         } else {
//             expandableItem.classList.add('expandable-item--open');
//             button.setAttribute('aria-expanded', 'true');
//             button.setAttribute('data-gtm', 'panel-open');
//             bodyContent.style.display = 'block';

//             body.style.height = bodyContent.offsetHeight;
//         }

//         this.checkAllOpen(expandable);
//         this.storeState(expandable);
//     },

//     init: function () {
//         this.initExpandables();
//         this.attachEventHandlers();
//     }
// };

// // self-initialize
// expandable.init();

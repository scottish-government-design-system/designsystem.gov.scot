/**
 * Page group component
 *
 *  - Provides toggle button interactivity by default
 *  - Exposing functions for opening/closing the list
 *  - Publishes events when list is opened or closed
 */
'use strict';

var classButtonOpen = 'page-group__toggle--open',
    classListExpanded = 'page-group__list--expanded',
    isMobile = $('.page-group__toggle').is(':visible');

function PageGroup() {
    this.button = $('.js-show-page-group-list');
    this.list = this.button.next('.page-group__list');
    var pgroup = this;

    this.button.on('click', function() {
        if ( $(this).hasClass(classButtonOpen) ) {
            pgroup.close();
        } else {
            pgroup.open();
        }
    });
}

PageGroup.prototype.open = function() {
    this.button.addClass(classButtonOpen);
    this.list.slideDown(200).addClass(classListExpanded);
};

PageGroup.prototype.close = function() {
    this.button.removeClass(classButtonOpen);
    this.list.slideUp(200).removeClass(classListExpanded);
};

new PageGroup();

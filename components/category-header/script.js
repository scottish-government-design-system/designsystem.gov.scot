'use strict';

const categoryHeader = {

    initTitleCards: function () {

        let startX = 0;
        let moveX = 0;

        const childCard = $('.js-child-card');
        const parentCard = $('.js-parent-card');
        const ancestorCards = $('.js-ancestor-card');
        const swipeCards = $('.js-swipe-card').not(':first-child');

        let cardToReveal = [];
        let cardsToMove = [];
        let moveThreshold = 100;

        // store initial widths of each card -- we'll want them for swipe animation
        $('.category-header__card').each(function () {
            $(this).attr('data-initialwidth', $(this).outerWidth());
            moveThreshold = $(this).outerWidth() * 0.333333;
        });

        // recalculate initial widths on window resize
        $(window).on('resize', function () {
            $('.category-header__card').each(function () {
                $(this).attr('data-initialwidth', $(this).outerWidth());
                moveThreshold = $(this).outerWidth() * 0.333333;
            });
        });

        /**
         * parent page card animation on mouseover and on click
         */
        ancestorCards.on('mouseenter mouseleave', function () {
            childCard.toggleClass('category-header__card--dink');

            // dink cards that follow
            $(this).nextAll('.js-ancestor-card').toggleClass('category-header__card--dink');

        }).on('click', function (event) {
            event.preventDefault();

            const that = this;

            const closest = $(this).closest('.category-header');

            const cssObj = {
                width: closest.width() + parseInt($(this).css('padding-right'), 10),
                left: '100%',
                marginLeft: 0
            };

            childCard.css(cssObj);
            $(this).nextAll('.js-ancestor-card').css(cssObj);

            // delay to match the CSS animation
            setTimeout(function () {

                window.location.href = $(that).attr('href');
            }, 200);
        });

        /**
         * Start tracking a touch drag
         */
        swipeCards.on('touchstart', function (e) {
            startX = e.originalEvent.changedTouches[0].pageX;

            swipeCards.addClass('js-card--no-animation');
        });

        /**
         * Track a touch drag, and animate the child card to follow
         */
        swipeCards.on('touchmove', function (e) {
            const nowX = e.originalEvent.changedTouches[0].pageX;
            const nowXRelative = nowX - startX;

            moveX = Math.max(nowXRelative, 0);
            moveX = Math.min(moveX, $('.category-header').width() - parseInt($(this).css('margin-left'), 10));

            cardsToMove = $(this).add($(this).nextAll()).add(childCard);

            if ($(this).is('.js-ancestor-card')) {
                cardToReveal = $(this).prev('.js-ancestor-card');
            } else {
                cardToReveal = parentCard;
            }

            cardsToMove.each(function () {
                $(this).css({
                    left: moveX,
                    width: $(this).attr('data-initialwidth')
                });
            });

            if(moveX > moveThreshold) {
                cardToReveal.addClass('js-ancestor-card--active');
            } else {
                cardToReveal.removeClass('js-ancestor-card--active');
            }
        });

        /**
         * If the user has dragged further than the drag threshold, navigate to parent page
         * Else return the child card to its original position
         */
        swipeCards.on('touchend', function () {
            swipeCards.removeClass('js-card--no-animation');

            if (moveX > moveThreshold) {
                cardToReveal.click();
            } else {
                if(cardsToMove.length > 0) {
                    cardsToMove.css({
                        left: 0,
                        width: ''
                    });
                }

                if (cardToReveal.length > 0) {
                    cardToReveal.removeClass('js-ancestor-card-link--active');
                }
            }

            cardsToMove = cardToReveal = [];
        });
    }
};

categoryHeader.initTitleCards();
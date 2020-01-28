---
layout: example
type: example
index: 0
style: "body {background: #f8f8f8;}"
---


<style>

.image-card {
    position: relative;
}

.image-card__figure {
    background: #333;
    margin-bottom: 0;
    overflow: hidden;
    padding-bottom: calc(900%/16);
    pointer-events: none;
    position: relative;
    z-index: 1;
}

.image-card__image {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
}

.image-card__content {
    padding: 21px 0;
}

.image-card__content > :first-child {
    margin-top: 0;
}

@supports(object-fit: contain) {
    .image-card__image {
        object-fit: cover;
        width: 100%;
    }
}

.image-card .ds_category-item {
    padding: 0;
    position: static;
}
.image-card
.ds_category-item__link::before {
    content: none;
}

.image-card
.ds_category-item__link::after {
    left: 0;
}

.ds_card .image-card__content {
    padding-left: 15px;
    padding-right: 15px;
}

.image-card--horizontal .image-card__content {
    padding-left: 0;
}

.image-card--horizontal {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 15px;
}




/*

SIZING

*/

.image-card--small {
    align-items: center;
    min-height: 84px;
}

.image-card--small .image-card__figure {
    padding-bottom: 0;
    position: relative;
    width: 84px;
    height: 84px;
}

.image-card--small .image-card__image {
    position: static;
    display: block;
}

.image-card--large {
    min-height: 147px;
}

.image-card--large .image-card__figure {
    padding-bottom: 0;
    position: relative;

    max-width: 262px;
}

.image-card--large .image-card__image {
    position: static;
    display: block;
}





.image-card--wide {
    grid-template-columns: 6fr 6fr;
}

.image-card--superwide {
    grid-template-columns: 8fr 4fr;
}

    </style>


<style>
    .image-card-grid {
        display: grid;
        grid-gap: 30px;
        margin-bottom: 28px;
    }

    .image-card-grid--small {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .image-card-grid--medium {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .image-card-grid--large {
        grid-template-columns: 1fr 1fr;
    }
    </style>


<div class="ds_wrapper">
    <h2>Vertical, no cards</h2>

    <div class="image-card-grid  image-card-grid--small">
        <div class="image-card">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>
                </article>
            </div>
        </div>

        <div class="image-card">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>
                </article>
            </div>
        </div>

        <div class="image-card">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>
                </article>
            </div>
        </div>

        <div class="image-card">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>
                </article>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--medium">
        <div class="image-card">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>

        <div class="image-card">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>

        <div class="image-card">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--large">
        <div class="image-card">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>

        <div class="image-card">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>
    </div>
</div>

<div class="ds_wrapper">

    <h2>Vertical, cards</h2>

    <div class="image-card-grid  image-card-grid--small">
        <div class="image-card  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>
                </article>
            </div>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>
                </article>
            </div>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>
                </article>
            </div>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>
                </article>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--medium">
        <div class="image-card  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                 </article>
            </div>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--large">
        <div class="image-card  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <nav class="ds_sequential-nav" aria-label="Article navigation">
    <div class="ds_sequential-nav__item  ds_sequential-nav__item--prev">
        <a data-navigation="sequential-previous" title="Previous section" href="#" class="ds_sequential-nav__button  ds_sequential-nav__button--left">
            <span class="ds_sequential-nav__text" data-label="previous">
                Apply for or renew a Blue Badge
            </span>
        </a>
    </div>

    <div class="ds_sequential-nav__item  ds_sequential-nav__item--next">
        <a data-navigation="sequential-next" title="Next section" href="#" class="ds_sequential-nav__button  ds_sequential-nav__button--right">
            <span class="ds_sequential-nav__text" data-label="next">
                Eligibility: who can have one?
            </span>
        </a>
    </div>
</nav>
            </div>
        </div>
    </div>
</div>

<div class="ds_wrapper">

    <h2>Horizontal, cards</h2>

    <div class="image-card-grid  image-card-grid--small">
        <div class="image-card  image-card--small  image-card--horizontal  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment</a>
                    </h2>
                </article>
            </div>
        </div>

        <div class="image-card  image-card--small  image-card--horizontal  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment</a>
                    </h2>
                </article>
            </div>
        </div>

        <div class="image-card  image-card--small  image-card--horizontal  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment</a>
                    </h2>
                </article>
            </div>
        </div>

        <div class="image-card  image-card--small  image-card--horizontal  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment</a>
                    </h2>
                </article>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--medium">
        <div class="image-card  image-card--medium  image-card--horizontal  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>

        <div class="image-card  image-card--medium  image-card--horizontal  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                 </article>
            </div>
        </div>

        <div class="image-card  image-card--medium  image-card--horizontal  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--large">
        <div class="image-card  image-card--large  image-card--horizontal  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>

        <div class="image-card  image-card--large  image-card--horizontal  ds_card  ds_card--no-padding">
            <div class="image-card__figure">
                <img class="image-card__image" src="https://placebear.com/640/360">
            </div>

            <div class="image-card__content">
                <article class="ds_category-item">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </article>
            </div>
        </div>
    </div>
    

    <h3>Wide</h3>
    <div class="image-card  image-card--horizontal  image-card--wide  ds_card  ds_card--no-padding">
        <div class="image-card__figure">
            <img class="image-card__image" src="https://placebear.com/640/360">
        </div>

        <div class="image-card__content">
            <article class="ds_category-item">
                <h2 class="ds_category-item__title">
                    <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                </h2>

                <p class="ds_category-item__summary">
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </article>
        </div>
    </div>

    <h3>Superwide</h3>
    <div class="image-card  image-card--horizontal  image-card--superwide  ds_card  ds_card--no-padding">
        <div class="image-card__figure">
            <img class="image-card__image" src="https://placebear.com/640/360">
        </div>

        <div class="image-card__content">
            <article class="ds_category-item">
                <h2 class="ds_category-item__title">
                    <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                </h2>

                <p class="ds_category-item__summary">
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </article>
        </div>
    </div>
</div>

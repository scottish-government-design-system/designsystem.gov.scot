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
    position: relative;
}

.image-card__image {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
}

@supports(object-fit: contain) {
    .image-card__image {
        object-fit: cover;
        width: 100%;
    }
}



.image-card .ds_category-item {
    padding: 0;
}
.image-card
.ds_category-item__link::before {
    content: none;
}

.image-card
.ds_category-item__link::after {
    left: 0;
}

.image-card__content {
    padding: 21px 0;
}

.ds_card .image-card__content {
    padding-left: 15px;
    padding-right: 15px;
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

<h2>Vertical, no cards</h2>

<div class="ds_wrapper">
    <div class="image-card-grid  image-card-grid--small">
        <div class="image-card">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/560">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/660">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/600/760">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/700/860">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>
    </div>
</div>

<div class="ds_wrapper">
    <div class="image-card-grid  image-card-grid--medium">
        <div class="image-card">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/800">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/700/460">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/700">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>
    </div>
</div>

<div class="ds_wrapper">
    <div class="image-card-grid  image-card-grid--large">
        <div class="image-card">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/600">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/500">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>
    </div>
</div>



<h2>Vertical, cards</h2>

<div class="ds_wrapper">
    <div class="image-card-grid  image-card-grid--small">
        <div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/400">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/600/960">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/700/960">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/800/960">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>
    </div>
</div>

<div class="ds_wrapper">
    <div class="image-card-grid  image-card-grid--medium">
        <div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/900/960">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/600">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/700">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>
    </div>
</div>

<div class="ds_wrapper">
    <div class="image-card-grid  image-card-grid--large">
        <div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/800">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

        <div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/900">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>
    </div>
</div>


<h2>Horizontal, no cards</h2>


<div class="image-card">
            <article class="ds_category-item" style="display: grid; grid-gap: 30px; grid-template-columns: 1fr 1fr;">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/560">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>




<h2>Horizontal, cards</h2>


<div class="image-card  ds_card  ds_card--no-padding">
            <article class="ds_category-item" style="display: grid; grid-gap: 30px; grid-template-columns: 1fr 1fr;">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://placebear.com/640/560">
                </figure>
                <div class="image-card__content">
                    <h2 class="ds_category-item__title">
                        <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                    </h2>

                    <p class="ds_category-item__summary">
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </article>
        </div>

<hr /><hr /><hr /><hr />

<div class="image-card  ds_card  ds_card--no-padding">
    <div class="image-card__figure">
        <img class="image-card__image" src="https://placebear.com/640/560">
    </div>

    <div class="image-card__content">
        <article class="ds_category-item">
            <div class="image-card__content">
                <h2 class="ds_category-item__title">
                    <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                </h2>

                <p class="ds_category-item__summary">
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </article>
    </div>
</div>


<div class="image-card  ds_card  ds_card--no-padding"  style="display: grid; grid-gap: 30px; grid-template-columns: 1fr 1fr;">
    <div class="image-card__figure">
        <img class="image-card__image" src="https://placebear.com/640/560">
    </div>

    <div class="image-card__content">
        <article class="ds_category-item">
            <div class="image-card__content">
                <h2 class="ds_category-item__title">
                    <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
                </h2>

                <p class="ds_category-item__summary">
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </article>
    </div>
</div>
<hr /><hr /><hr /><hr />

<div class="image-card" style="display: none;">
    <figure class="image-card__figure">
        <img class="image-card__image" src="https://placebear.com/640/560">
    </figure>

    <article class="ds_category-item">
        <h2 class="ds_category-item__title">
            <a data-navigation="category-item-1" href="#" class="ds_category-item__link">Environment and countryside</a>
        </h2>

        <p class="ds_category-item__summary">
            Access to and protection of the countryside and managing wildlife on your land
        </p>
    </article>
</div>

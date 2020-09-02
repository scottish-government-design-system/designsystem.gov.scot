---
layout: example
type: example
index: 0
style: "body {background: #f8f8f8;}"
---



<style>

.ds_card {
    padding: 0;
    position: relative;
}

.ds_card__figure {
    background: #333;
    margin-bottom: 0;
    overflow: hidden;
    padding-bottom: calc(900%/16);
    pointer-events: none;
    position: relative;
    z-index: 1;
}

.ds_card__image {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
}

.ds_card__content {
    padding: 21px 15px;
}

.ds_card__content > :first-child {
    margin-top: 0;
}

.ds_card__cover-link {
    outline: 0 !important;
}

.ds_card__cover-link:focus,
.ds_card__cover-link:active,
.ds_card__cover-link:hover {
    background-color: transparent;
    box-shadow: none;
    text-decoration: underline;
}

.ds_card__cover-link::after {
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    transition: background-color 0.2s;

    mix-blend-mode: darken;
}

.ds_card__cover-link:hover::after {
    background-color: #d9effc;
}

.ds_card__cover-link:active::after, 
.ds_card__cover-link:focus::after {
    background-color: #fdd522;
    box-shadow: inset 0 -3px #333333;
    transition-duration: 0s;
}

@supports(object-fit: contain) {
    .ds_card__image {
        object-fit: cover;
        width: 100%;
    }
}

.ds_card--small {
    font-size: 14px;
    line-height: 21px;
}

.ds_card--small h2 {
    font-size: 1.105263rem;
    line-height: 28px;
    margin-bottom: 0;
}

.ds_card--transparent {
    background-color: transparent;
    box-shadow: none;
}

.ds_card--transparent .ds_card__content {
    padding-left: 0;
    padding-right: 0;
}

.ds_card--padding {
    padding: 14px 15px;
}









.ds_card--horizontal {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 15px;
}

.ds_card--horizontal .ds_card__content {
    padding-left: 0;
}

.ds_card--horizontal.ds_card--transparent .ds_card__content {
    padding-bottom: 0;
    padding-top: 0;
}

.ds_card--horizontal.ds_card--transparent.ds_card--padding {
    padding: 0;
}






/*

SIZING

*/
.ds_card--horizontal--small {
    align-items: center;
    min-height: 84px;
}

.ds_card--padding.ds_card--horizontal--small {
    align-items: start;
}

.ds_card--padding.ds_card--horizontal--small .ds_card__figure {
    top: 4px;
}

.ds_card--horizontal--small .ds_card__content {
    padding-bottom: 0;
    padding-top: 0;
}

.ds_card--horizontal--small .ds_card__figure {
    padding-bottom: 0;
    position: relative;
    width: 84px;
    height: 84px;
}

.ds_card--horizontal--small .ds_card__image,
.ds_card--horizontal--large .ds_card__image {
    position: static;
    display: block;
}

.ds_card--horizontal--large {
    min-height: 147px;
}

.ds_card--horizontal--large .ds_card__figure {
    max-width: 262px;
    padding-bottom: 0;
    position: relative;
}

.ds_card--horizontal--large .ds_card__image {
    position: static;
    display: block;
}

.ds_card--horizontal--wide {
    grid-template-columns: 6fr 6fr;
}

.ds_card--horizontal--superwide {
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

<style>
.gov-hero {
    display: grid;
    grid-gap: 32px;
}

.gov-hero > div:not(:first-child) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0 32px;
}

.ds_card--padding.ds_card--horizontal--small .ds_card__figure {top: 0;}

@media screen and (max-width:767px) {
    .gov-hero .ds_card--horizontal {
        grid-template-columns: unset;
        grid-template-rows: auto 1fr;
        grid-gap: 15px 0;
    }

    .ds_card--small .ds_card__figure {
        width: 100%;
        height: unset;
    }
}


@media screen and (min-width:768px) {
    .gov-hero {
        grid-template-columns: 6fr 6fr;
    }

    .gov-hero > div:not(:first-child) {
        grid-template-columns: unset;
        grid-template-rows: 1fr 1fr 1fr;
    }
}

@media screen and (min-width:992px) {
    .gov-hero {
        grid-template-columns: 8fr 4fr;
    }
}

@media screen and (min-width: 1200px) {
    .ds_card--small .ds_card__figure {
        width: 150px;
    }
}

/* 
.gov-hero > div:not(:first-child) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 768px) {
    body {background-color: red !important}

    .gov-hero {
        grid-template-columns: 8fr 4fr;
    }
}

@media screen and (max-width: 992px) {
    .ds_card--small .ds_card__figure {
        display: none;
    }
}

@media screen and (min-width: 1200px) {
    .ds_card--small .ds_card__figure {
        width: 150px;
    }
} */
</style>

<div class="ds_wrapper">
    <div class="gov-hero">
        <div>
            <div class="ds_card  ds_card--transparent">
                <div class="ds_card__figure">
                    <img class="ds_card__image" src="https://placebear.com/640/360">
                </div>

                <div class="ds_card__content">
                    <h2>
                        <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">The Scottish Government's position on EU exit</a>
                    </h2>

                    <p>
                        On 23 June 2016 the people of Scotland voted decisively to remain 
within the European Union (EU).
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div class="ds_card  ds_card--small  ds_card--horizontal  ds_card--horizontal--small  ds_card--padding  ds_card--transparent">
                <div class="ds_card__figure">
                    <img class="ds_card__image" src="https://placebear.com/640/360">
                </div>

                <div class="ds_card__content">
                    <h2>
                        <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Scotland is Open</a>
                    </h2>

                    <p>
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </div>

            <div class="ds_card  ds_card--small  ds_card--horizontal  ds_card--horizontal--small  ds_card--padding  ds_card--transparent">
                <div class="ds_card__figure">
                    <img class="ds_card__image" src="https://placebear.com/640/360">
                </div>

                <div class="ds_card__content">
                    <h2>
                        <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Revenues to grow by £3 billion</a>
                    </h2>

                    <p>
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </div>

            <div class="ds_card  ds_card--small  ds_card--horizontal  ds_card--horizontal--small  ds_card--padding  ds_card--transparent">
                <div class="ds_card__figure">
                    <img class="ds_card__image" src="https://placebear.com/640/360">
                </div>

                <div class="ds_card__content">
                    <h2>
                        <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Digital Scotland Design System</a>
                    </h2>

                    <p>
                        Access to and protection of the countryside and managing wildlife on your land
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

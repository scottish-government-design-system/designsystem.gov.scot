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


<div class="ds_wrapper">
    <h1>Image cards</h1>

    <ul>
    <li><a class="menu-link" href="#vertical-transparent">Vertical transparent</a></li>
    <li><a class="menu-link" href="#vertical-card">Vertical card</a></li>
    <li><a class="menu-link" href="#horizontal-transparent">Horizontal transparent</a></li>
    <li><a class="menu-link" href="#horizontal-card">Horizontal card</a></li>
    </ul>
</div>

<script>
    document.querySelectorAll('.menu-link').forEach(link => link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetEl = document.querySelector(event.target.hash);

console.log(event.target.hash)

        document.querySelectorAll('.hideable').forEach(el => el.classList.add('fully-hidden'));
        targetEl.classList.remove('fully-hidden')
    }))
</script>




<div class="ds_wrapper hideable" id="vertical-transparent">
    <h2>Vertical, transparent</h2>

    <div class="image-card-grid  image-card-grid--small">
        <div class="ds_card  ds_card--transparent  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--transparent  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--transparent  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--transparent  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--medium">
        <div class="ds_card  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--large">
        <div class="ds_card  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>
    </div>
</div>

<div class="ds_wrapper hideable  fully-hidden" id="vertical-card">
    <h2>Vertical, cards</h2>

    <div class="image-card-grid  image-card-grid--small">
        <div class="ds_card  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--medium">
        <div class="ds_card  ">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--large">
        <div class="ds_card  ">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>
    </div>
</div>

<div class="ds_wrapper hideable  fully-hidden" id="horizontal-transparent">
    <h2>Horizontal, transparent</h2>

    <div class="image-card-grid  image-card-grid--small">
        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--small  ds_card--small  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--small  ds_card--small  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--small  ds_card--small  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--small  ds_card--small  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--medium">
        <div class="ds_card  ds_card--small  ds_card--horizontal  ds_card--horizontal--small  ds_card--padding  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
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
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
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
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--large">
        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--large  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--large  ds_card--transparent">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>
    </div>

<br />

    <div class="ds_card  ds_card--horizontal  ds_card--horizontal--wide  ds_card--transparent">
        <div class="ds_card__figure">
            <img class="ds_card__image" src="https://placebear.com/640/360">
        </div>

        <div class="ds_card__content">
            <h2>
                <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
            </h2>

            <p>
                Access to and protection of the countryside and managing wildlife on your land
            </p>
        </div>
    </div>

    <br />

    <div class="ds_card  ds_card--horizontal  ds_card--horizontal--superwide  ds_card--transparent">
        <div class="ds_card__figure">
            <img class="ds_card__image" src="https://placebear.com/640/360">
        </div>

        <div class="ds_card__content">
            <h2>
                <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
            </h2>

            <p>
                Access to and protection of the countryside and managing wildlife on your land
            </p>
        </div>
    </div>

    <br />
</div>


<div class="ds_wrapper hideable  fully-hidden" id="horizontal-card">
    <h2>Horizontal, cards</h2>

    <div class="image-card-grid  image-card-grid--small">
        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--small  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--small  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--small  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>
            </div>
        </div>

        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--small  ds_card--small">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--medium">
        <div class="ds_card  ds_card--small  ds_card--horizontal  ds_card--horizontal--small  ds_card--padding">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ds_card--small  ds_card--horizontal  ds_card--horizontal--small  ds_card--padding">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ds_card--small  ds_card--horizontal  ds_card--horizontal--small  ds_card--padding">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment </a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>
    </div>

    <div class="image-card-grid  image-card-grid--large">
        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--large">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>

        <div class="ds_card  ds_card--horizontal  ds_card--horizontal--large">
            <div class="ds_card__figure">
                <img class="ds_card__image" src="https://placebear.com/640/360">
            </div>

            <div class="ds_card__content">
                <h2>
                    <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
                </h2>

                <p>
                    Access to and protection of the countryside and managing wildlife on your land
                </p>
            </div>
        </div>
    </div>

<br />

    <div class="ds_card  ds_card--horizontal  ds_card--horizontal--wide">
        <div class="ds_card__figure">
            <img class="ds_card__image" src="https://placebear.com/640/360">
        </div>

        <div class="ds_card__content">
            <h2>
                <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
            </h2>

            <p>
                Access to and protection of the countryside and managing wildlife on your land
            </p>
        </div>
    </div>

    <br />

    <div class="ds_card  ds_card--horizontal  ds_card--horizontal--superwide">
        <div class="ds_card__figure">
            <img class="ds_card__image" src="https://placebear.com/640/360">
        </div>

        <div class="ds_card__content">
            <h2>
                <a class="ds_card__cover-link" data-navigation="category-item-1" href="#">Environment and countryside</a>
            </h2>

            <p>
                Access to and protection of the countryside and managing wildlife on your land
            </p>
        </div>
    </div>

    <br />
</div>

---
layout: example
parent: style.layout
type: example
sitemap: false
noindex: true
---
.my_layout--document {
    .ds_layout__icon {
        display: none;
    }
}

@include media-query(large) {
    .my_layout--document {
        .ds_layout__icon {
            display: block;
        }
    }
}

@include media-query(medium) {
    .my_layout--document {
        .ds_layout__content {
            float: left;
            @include colwidth(8);
        }

        .ds_layout__sidebar {
            float: left;
            @include colwidth(4);
        }

        .ds_layout__feedback {
            clear: left;
        }
    }
}

@include media-query(large) {
    .my_layout--document {
        .ds_layout__icon {
            display: block;
            float: left;
            @include colwidth(2);
        }

        .ds_layout__header {
            float: left;
            @include colwidth(7);
        }

        .ds_layout__content {
            clear: left;
            float: left;
            @include colwidth(7);
            @include colpush(2);
        }

        .ds_layout__sidebar {
            float: left;
            @include colwidth(3);
        }

        .ds_layout__feedback {
            clear: left;
            @include colwidth(7);
            @include colpush(2);
        }
    }
}

@supports(display: grid) {
    .ds_layout__icon {
        grid-area: i;
    }

    @include media-query(medium) {
        .my_layout--document {
            grid-template-areas:
                'h h h h h h h h h h h h'
                'c c c c c c c c s s s s'
                'f f f f f f f f . . . .';
        }
    }

    @include media-query(large) {
        .my_layout--document {
            grid-template-areas:
                'i i h h h h h h h . . .'
                '. . c c c c c c c s s s'
                '. . f f f f f f f . . .';
        }
    }
}

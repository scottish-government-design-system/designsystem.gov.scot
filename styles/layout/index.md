---
layout: component
title:  "Layout"
category: styles
parent: styles
thispage: style.layout
#summary: ""
phase: 3
highlighttype: css
---
The design system's layout component ("Layout") is a tool used to help to arrange content on a page. It is most commonly used within the middle section of the [page template](/styles/page-template). The intention of Layout is to make it easy for content to be placed into defined areas in your HTML across templates or content formats.

Layout uses CSS grid with a fallback for browsers with no CSS grid support.

There are a number of responsive layouts predefined in the design system. You can create your own layouts if you need something that is not predefined in the design system.

## Example: Article layout

<img src="/assets/images/examples/article-layout.svg"/>

{% include example-frame.html name="article" no-demo=true %}

## CSS of a layout

The CSS for a layout that uses the Layout component consists of two sections: the CSS grid code and the non-grid fallback.

### CSS grid

The CSS grid version makes heavy use of the `grid-template-areas` CSS property.

We use a simple naming convention that uses single characters for each content area. This makes it possible to use the `grid-template-areas` value as a rough diagram of the layout so it's easy to interpret visually.

For example, the large viewport display for the "article" layout illustrated above would be defined like this:

    .ds_layout--article {
        grid-template-areas:
            'h h h h h h h h p p p p'
            'c c c c c c c c s s s s'
            'f f f f f f f f . . . .';
    }

### Fallback

The non-grid fallback uses CSS floats and percentage widths to define column placement. There are a few helpful SASS mixins included in Layout that simplify any width calculations.

## Creating a layout

This is an example of how to create a custom layout using Layout. The example illustrates two useful concepts: adding a new type of content area ("icon") and how to handle grid areas that are not flush to the left of the page.

<img src="/assets/images/examples/complex-document-layout.svg"/>

On small devices in this layout everything is linearised and we can just rely on the default layout defined by the design system.

On medium devices (e.g. tablets) the sidebar is moved to the side of the content area and the feedback box is reduced in width to match the width of the content area.

On large devices everything is moved two columns to the right and an icon is placed to the left of the header.

### 1. The non-grid fallback

It's sensible to write the fallback first. It's easy to forget about it if you don't.

The first quirk of this layout is that the icon is only visible on large displays. If it was important for screen readers to still be able to access this content we could apply something like a "visually hidden" class to it, but for this simple example we can just hide it until needed.

    .ds-layout__icon {
        display: none;
    }

    @include media-query(large) {
        .my_layout--document {
            .ds_layout__icon {
                display: block;
            }
        }
    }

Apart from the icon, until we get to a medium (tablet) display this layout is the same as the default design system `ds_layout` so we don't need to do anything special for those sizes.

At medium we start to diverge from the default layout so we need to write some rules. There are some helper mixins in Layout that help with this. Here we are using `colwidth` to tell the layout how many columns a content area should span. `colwidth` provides a percentage width value that takes into account the total number of columns in your grid and your grid gutter width.

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

At the large size we bring the icon back in and content areas are shifted over two columns. The design system Layout component has push and pull helpers we can use to manipulate where a content area is placed in the grid. Here we'll use `colpush` to shift things over by two columns.

    @include media-query(large) {
        .my_layout--document {
            .ds_layout__icon {
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

### 2. The CSS Grid version

To support the icon we'll create a new grid area definition for it, following the single-character pattern established in Layout. The method we used to hide the icon content area in the fallback is still relevant and we will still use it.

    .ds_layout__icon {
        grid-area: i;
    }

To create the CSS grid layouts for any breakpoints that differ from the default layout we create new `grid-template-areas` rules. Using the single-character pattern makes it easy to visualise how the template definition should be written.

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

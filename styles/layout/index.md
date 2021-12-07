---
layout: component
title:  "Layout"
category: styles
parent: styles
thispage: style.layout
summary: "The layout component is used to help to arrange content on a page."
highlighttype: css
---
The layout component is most commonly used in the middle section of the [page template](/styles/page-template). The purpose of the layout component is to make it easy for you to place content into defined areas in your HTML across templates or content formats.

The layout component uses CSS Grid Layout with a fallback for browsers with no CSS Grid support.

There are a number of responsive layouts provided in the Design System. You can create your own layouts if you need something that's not already defined in the Design System.

## Example: Article layout

<img alt="An article page's layout is stacked in a single column on small viewports, and displayed in a main column and sidebar column on larger viewports" src="/assets/images/examples/article-layout.svg"/>

{% include example-frame.html title="Example HTML for an article layout" name="article" no-demo=true %}

## CSS of a layout

The CSS for a layout that uses the layout component consists of two sections: the CSS Grid code and the non-grid fallback.

### CSS Grid

The CSS Grid version makes heavy use of the `grid-template-areas` CSS property.

We use a simple naming convention that uses single characters for each content area. This makes it possible to use the `grid-template-areas` value as a rough diagram of the layout so it's easy to understand visually.

For example, the large viewport display for the 'article' layout shown above would be defined like this:

{% highlight scss %}
.ds_layout--article {
    grid-template-areas:
        'h h h h h h h h p p p p'
        'c c c c c c c c s s s s'
        'f f f f f f f f . . . .';
}
{% endhighlight %}

### Fallback

The non-grid fallback uses CSS floats and percentage widths to define column placement. There are a few helpful SASS mixins included in the layout component that simplify any width calculations.

## Creating a layout

This is an example of how to create a custom layout using the layout component. The example shows 2 useful concepts: adding a new type of content area ('icon') and how to handle grid areas that are not flush to the left of the page.

<img alt="This complex layout is stacked in a single column on small viewports, and changes as viewport sizes increase to make full use of the available space" src="/assets/images/examples/complex-document-layout.svg"/>

On small devices in this layout everything is linearised and we can just rely on the default layout defined by the Design System.

On medium devices (such as tablets), the sidebar is moved to the side of the content area and the feedback box is reduced in width to match the width of the content area.

On large devices (such as desktop computers) everything is moved two columns to the right and an icon is placed to the left of the header.

### 1. The non-grid fallback

It's sensible to write the fallback first. It's easy to forget about it if you do not.

The first quirk of this layout is that the icon is only visible on large displays. If it was important for screen readers to still be able to access this content we could apply something like a 'visually hidden' class to it, but for this simple example we can just hide it until needed.

{% highlight scss %}
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
{% endhighlight %}

Apart from the icon, until we get to a medium (tablet) display this layout is the same as the default Design System `ds_layout` so we do not need to do anything special for those sizes.

At medium, we start to diverge from the default layout so we need to write some rules. There are some helper mixins in the layout component that help with this.

Here we're using `colwidth` to tell the layout how many columns a content area should span. `colwidth` provides a percentage width value that takes into account the total number of columns in your grid and your grid gutter width.
{% highlight scss %}
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
{% endhighlight %}

At the large size, we bring the icon back in and content areas are shifted over two columns. The layout component has push and pull helpers that we can use to manipulate where a content area is placed in the grid. Here we'll use `colpush` to shift things over by two columns.

{% highlight scss %}
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
{% endhighlight %}

### 2. The CSS Grid version

To support the icon, we'll create a new grid area definition for it, following the single-character pattern established in the layout component. The method we used to hide the icon content area in the fallback is still relevant and we will still use it.

{% highlight scss %}
.ds_layout__icon {
    grid-area: i;
}
{% endhighlight %}

To create the CSS Grid layouts for any breakpoints that differ from the default layout we create new `grid-template-areas` rules. Using the single-character pattern makes it easy to visualise how the template definition should be written.

{% highlight scss %}
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
{% endhighlight %}

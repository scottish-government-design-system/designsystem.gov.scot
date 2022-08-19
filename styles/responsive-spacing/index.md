---
layout: component
title:  "Responsive spacing"
category: styles
parent: styles
thispage: style.resonsive-spacing
#summary: ""
published: true
---

## Grid

The Design System uses an 8 pixel grid. This defines the width, height and spacing of all components and patterns we use.

Sizes are multiples of 8 pixels. This is to make sure the components we create in the Design System fit on the grid and align on the page.

## Responsive spacing scale

The Design System uses a responsive spacing scale. This is for consistent use of spacing which adapts to different screen sizes.

The scale is made up of  of 10 spacing units. Each unit has a specific size for use on large and small screens.


<table class="ds_table">
  <thead>
    <tr>
      <th>Spacing unit</th>
      <th>Large screens</th>
      <th>Small screens</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0px</td>
      <td>0px</td>
    </tr>
    <tr>
      <td>1</td>
      <td>8px</td>
      <td>8px</td>
    </tr>
    <tr>
      <td>2</td>
      <td>16px</td>
      <td>16px</td>
    </tr>
    <tr>
      <td>3</td>
      <td>24px</td>
      <td>24px</td>
    </tr>
    <tr>
      <td>4</td>
      <td>32px</td>
      <td>24px</td>
    </tr>
    <tr>
      <td>5</td>
      <td>40px</td>
      <td>32px</td>
    </tr>
    <tr>
      <td>6</td>
      <td>48px</td>
      <td>40px</td>
    </tr>
    <tr>
      <td>7</td>
      <td>56px</td>
      <td>40px</td>
    </tr>
    <tr>
      <td>8</td>
      <td>64px</td>
      <td>48px</td>
    </tr>
    <tr>
      <td>8</td>
      <td>72px</td>
      <td>56px</td>
    </tr>
  </tbody>
</table>

Example of spacing applied to Design System components

<figure class="example__content">
<img alt="A text input with overlaid measurements showing padding inside the text input and space between the text input and an adjacent button" src="/assets/images/spacing-infographic-2.png" loading="lazy">
<figcaption>The space between text in an input box and between the input box and a button both measure 16 pixels</figcaption>
</figure>

## Why we use this scale

Using the scale ensures the spacing of components and patterns is consistent on digital sites or services.

The scale’s range is enough to balance interactive elements with white space. This helps to define the structure and visual hierarchy in all compositions.

The scale adapts to different screen sizes. Responsive margins and padding are smaller on small screens than on a large screen such as a desktop computer. This helps to optimise the use of space on different devices.

## Using the scale in your project

Most Design System components have responsive margins baked into them, so that Design System components will be spaced appropriately relative to each other when you use them.

### Override classes

The Design System provides spacing override classes that you can add to any element to give it responsive spacing rules for margins and padding. The class names for these follow a naming convention.

{% highlight css %}
class="ds_!_{type}{direction}--{unit}"
{% endhighlight %}

* `ds_` is the prefix used throughout the Design System to namespace styles so that conflicts are minimised.
* `!_` indicates that this is an override and uses the `!important` flag in the CSS
* `{type}` could be either `margin` or `padding` depending on the spacing type you want to add.
* `{direction}` specifies which direction to set the override for. Permitted values are `top`, `bottom`, `left` and `right`. If a direction is not provided the override will be applied to all directions.
* `{unit}` indicates which unit in the spacing scale to use, from 0 to 9.

There are very many spacing override classes, structured according the the naming convention, and it would be overkill to document them all. Here are some examples of override classes and descriptions of what they do.

#### Margin on all sides

{% highlight css %}
class="ds_!_margin--3"
{% endhighlight %}

This will apply a margin of 3 spacing units on all sides of the element, which is 24px on all screen sizes.

#### Margin on one side

{% highlight css %}
class="ds_!_margin-bottom--8"
{% endhighlight %}

This will apply a margin of 8 spacing units to the bottom of the element, which is 48px on small screens and 64px on larger screens.

#### Padding on all sides

{% highlight css %}
class="ds_!_padding-top--4"
{% endhighlight %}

This will apply padding of 4 spacing units to the top of the element, which is 24px on small screens and 32px on larger screens.

#### Multiple overrides used together

{% highlight css %}
class="ds_!_margin-bottom--4  ds_!_margin-top--2"
{% endhighlight %}

Multiple spacing overrides can be used together. Here an element is given a margin of 2 spacing units on top and a margin of 4 spacing units on the bottom.

### Responsive spacing mixins

If you are authoring your own Sass/SCSS you can use the Design System's responsive spacing mixins to add the responsive spacing rules to your CSS.

There are two mixins, one for margins and one for padding. They are used the same way and both use the same parameters.

{% highlight scss %}
@include ds_responsive-margin(unit, direction, important, tuning)
{% endhighlight %}
{% highlight scss %}
@include ds_responsive-padding(unit, direction, important, tuning)
{% endhighlight %}

* `unit` indicates which unit in the spacing scale to use, from 0 to 9.
* `direction` specifies which direction to set the spacing for. Permitted values are `top`, `bottom`, `left` and `right`.
* `important` is an optional parameter that tells the mixin to add the `!important` flag. By default it is `false`.
* `tuning` is an optional parameter that takes a numeric value for the number of pixels to add to the output. It is typically used to compensate for the addition of a border.

#### Usage example: the Design System's horizontal rule

This is the SCSS code for the Design System's horizontal rule, illustrating how to use the responsive spacing mixins.

{% highlight scss %}
/// [1] compensate for border
hr {
    border: none;
    border-top: 1px solid $ds_colour__grey--medium;

    @include ds_responsive-margin(4, top);
    @include ds_responsive-margin(4, bottom, false, -1px); /// [1]
}
{% endhighlight %}

This is the output of that code.

{% highlight scss %}
hr {
  border: none;
  border-top: 1px solid #b3b3b3;
  margin-top: 1.5rem;
  margin-bottom: calc(1.5rem + -1px);
}

@media (min-width: 768px) {
  hr {
    margin-top: 2rem;
  }
}

@media (min-width: 768px) {
  hr {
    margin-bottom: calc(2rem + -1px);
  }
}
{% endhighlight %}

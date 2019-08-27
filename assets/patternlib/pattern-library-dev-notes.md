# Dev notes

## Mixins

There are some mixins we can use to enfoce consistency across components with similar displays/pieces.

### Blocklink

`@include blocklink` to apply all of the block-style link properties (such as background colours, transitions, and hover/focus/click states) to components that have a block-level clickable area (accordion header, search result, category item, etc).

#### Params:

`linklike-selector`: selector for a child element in the block that needs to look/behave like a regular link & have an underline on hover/focus, such as the title of a search result (default: `.linklike`)

#### Example

    .search-result {
        @include blocklink('.search-result__title');
        ...
    }

### Chevron

`@include chevron` to create a pure-CSS chevron icon. It's a little raw and will need some positioning adjustments.

#### Params:

`direction`: up, down, left, right (default: down)  
`size`: size (height/width) of the chevron (default: 1em)  
`width`: width of the lines making up the chevrons (default: 3px)

#### Example

    .sequential-nav__icon {
        @include chevron(left, 30px 5px);
        ...
    }


## Sprites

Pattern library SVG icons should be compiled into a sprite so we can embed them in a way that lets us control them with CSS.

Icons should be placed into `/assets/patternlib/images/icons/svg`

Compile the sprite by running `$ npm run svgpsrites`

Output sprite will be located at `/assets/patternlib/images/icons/icons.stack.svg`

**Note**: These paths and the location of the svg-sprite script etc will change when the pattern library is packaged as a module in its own right. They should belong to the pattern library, not the prototype site.

#### Example of use:

    <svg class="ds_icon"><use xlink:href="/assets/patternlib/images/icons/icons.stack.svg#search"></use></svg>

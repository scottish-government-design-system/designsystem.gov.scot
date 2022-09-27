---
layout: example-base-grid
parent: style.base-grid
type: example
index: 0
---
<style>

/* TODO: this could do with being tidied up */
/**
 * half-size wrappers
 */
.ds_wrapper {
    background-color: #fafafa;
    outline: 1px dashed #ccc;
    padding: 0 7.5px;
    position: relative;
}

@media (min-width: 384px) {
  .ds_wrapper {
    max-width: 368px; } }
@media (min-width: 496px) {
  .ds_wrapper {
    max-width: 484px; } }
@media (min-width: 600px) {
  .ds_wrapper {
    max-width: 584px; } }

body:after {
    content: '';
    right: 0;
    bottom: 0;
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 14px solid #0065bd;
    border-left: 14px solid transparent;
}

.grid-column {
    background-color: #ebebeb;
    height: 100%;
}

.grid-column:hover {
    background-color: #d9effc;
}

.base-grid {
    display: grid;
    grid-gap: 15px;
    height: 200px;
}

.base-grid :nth-child(-n+11) {
    display: none;
}

.example-frame__content {
    background-color: #fafafa;
}

.definition {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    display: none;
    padding-left: 10px;
    padding-top: 7px;
}
.default-defs {
    display: block;
}

dl {
    overflow: hidden;
}

dt {
    font-weight: normal;
    display: inline;
    float: left;
    clear: left;
}

dt:after {
    content: ':';
}

dd {
    font-weight: 700;
    display: inline;
    float: left;
    margin-left: 0.35em;
}

@media (min-width: 240px) {
    .definition {display: none;}
    .small-defs {
        display: block;
    }

    .base-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .base-grid :nth-child(n) {
        display: block;
    }
    .base-grid :nth-child(-n+10) {
        display: none;
    }
}

@media (min-width: 384px) {
    .base-grid {
        grid-template-columns: repeat(6, 1fr);
    }
    .base-grid :nth-child(n) {
        display: block;
    }
    .base-grid :nth-child(2n) {
        display: none;
    }

    .definition {display: none;}
    .medium-defs {
        display: block;
    }
}

@media (min-width:496px) {
    .base-grid {
        grid-template-columns: repeat(12, 1fr);
    }

    .base-grid :nth-child(n) {
        display: block;
    }

    .definition {display: none;}
    .large-defs {
        display: block;
    }
}

@media (min-width:600px) {
    .definition {display: none;}
    .xl-defs {
        display: block;
    }
}

</style>

<div class="definition default-defs">
    <h2>Default</h2>
    <dl>
        <dt>Columns</dt>
        <dd>1</dd>
        <dt>Viewport</dt>
        <dd>Up to 479px</dd>
        <dt>Container width</dt>
        <dd>Fluid</dd>
    </dl>
</div>

<div class="definition small-defs">
    <h2>Small</h2>
    <dl>
        <dt>Columns</dt>
        <dd>2</dd>
        <dt>Viewport</dt>
        <dd>480px - 767px</dd>
        <dt>Container width</dt>
        <dd>Fluid</dd>
    </dl>
</div>

<div class="definition medium-defs">
    <h2>Medium</h2>
    <dl>
        <dt>Columns</dt>
        <dd>6</dd>
        <dt>Viewport</dt>
        <dd>768px - 991px</dd>
        <dt>Container width</dt>
        <dd>736px</dd>
    </dl>
</div>

<div class="definition large-defs">
    <h2>Large</h2>
    <dl>
        <dt>Columns</dt>
        <dd>12</dd>
        <dt>Viewport</dt>
        <dd>992px - 1199px</dd>
        <dt>Container width</dt>
        <dd>928px</dd>
    </dl>
</div>

<div class="definition xl-defs">
    <h2>Extra large</h2>
    <dl>
        <dt>Columns</dt>
        <dd>12</dd>
        <dt>Viewport</dt>
        <dd>1200px and above</dd>
        <dt>Container width</dt>
        <dd>1120px</dd>
    </dl>
</div>

<div class="ds_wrapper">
    <div class="base-grid">
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
    </div>
</div>

---
layout: component
title:  "Installing with npm"
category: get-started
parent: get-started
label: How to
thispage: get-started.installation
summary: ""
phase: 2

---

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/).

    We recommend using the latest Long Term Support (LTS) version, or a minimum of version 8.10.0.

2. If your project does not already have a `package.json` file, create one by running this command from your project's root folder:

    <pre><code class="css">npm init</code></pre>

3. Install a SASS compiler. We recommend installing [node-sass](https://github.com/sass/node-sass) into your project.

    <pre><code class="css">npm install node-sass --save-dev</code></pre>

## Install the design system

Install the design system with this command:

<pre><code>npm install @scottish-government/pattern-library --save-dev</code></pre>

You will now have a copy of the design system's source code in your project's `node_modules` folder.

## Using the design system

### SASS and CSS

A typical starting point for your main SCSS file might look something like this.

<pre><code>@import "/path/to/base/all-base";
@import "/path/to/forms/all-forms";
@import "/path/to/components/all-components";
</code></pre>

The base styles are always required. Among other things they contain the typography and colour rules used by the components, and a number of helpful SASS mixins and functions used by them.

You have the opportunity to pick and choose the components you want to include if you do not need them all. For example:

<pre><code>@import "/path/to/base/all-base";  
@import "/path/to/forms/all-forms";  
@import "/path/to/components/accordion/accordion";  
@import "/path/to/components/breadcrumbs/breadcrumbs";  
@import "/path/to/components/page-header/page-header";
</code></pre>

### JavaScript

The JavaScript for design system components is written as ES6 modules. Native browser support for ES6 modules is limited and some other tools are required to compile that into a form web browsers will understand.

We use [Webpack](https://webpack.js.org/) to compile the scripts and [Babel](https://babeljs.io/) to convert the script to ES5 for older browsers.

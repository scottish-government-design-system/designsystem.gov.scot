---
layout: component
title:  "Installation"
category: get-started
parent: get-started
label: How to
thispage: get-started.installation
summary: "How to start using the Design System in your project"
index: 2
permalink: "/get-started/installation/"
sorttype: 'index'
---

We recommend using npm to install the Design System and compiling the CSS from the source. This is because:
* npm makes it easier for you to stay up to date with any additions or bug fixes
* there are some easy component customisation options available to you if you compile the CSS yourself

## What you need to do

1. Install [Node.js](https://nodejs.org/en/).

    We recommend using the latest Long Term Support (LTS) version, or a minimum of version 8.10.0.

2. If your project does not already have a `package.json` file, create one by running this command from your project's root folder:

    <pre><code class="lang-bash">npm init</code></pre>

3. Install a SASS compiler. We recommend installing [node-sass](https://github.com/sass/node-sass) into your project.

    <pre><code class="lang-bash">npm install node-sass --save-dev</code></pre>

4. Install the Design System with this command:

    <pre><code class="lang-bash">npm install @scottish-government/pattern-library --save-dev</code></pre>

    You'll now have a copy of the Design System's source code in your project's `node_modules` folder.

## Using the Design System

### SASS and CSS

A typical starting point for your main SCSS file might look something like this.

{% highlight css %}
@import "/path/to/base/all-base";
@import "/path/to/forms/all-forms";
@import "/path/to/components/all-components";
{% endhighlight %}

You’ll always need to include the base styles in your file. They contain the typography and colour rules used by the components, and a number of helpful SASS mixins and functions used by them.

You can choose which components you want to include. You do not need to include them all if you do not want to. For example:

{% highlight css %}
@import "/path/to/base/all-base";  
@import "/path/to/forms/all-forms";  
@import "/path/to/components/accordion/accordion";  
@import "/path/to/components/breadcrumbs/breadcrumbs";  
@import "/path/to/components/page-header/page-header";
{% endhighlight %}

### JavaScript

The JavaScript for Design System components is written as ECMAScript (ES) modules. As native browser support for ES modules is limited, you'll need other tools to compile the ES modules into a format that web browsers will understand.

We use [Webpack](https://webpack.js.org/) to compile the scripts and [Babel](https://babeljs.io/) to convert the script to ES5 for older browsers.

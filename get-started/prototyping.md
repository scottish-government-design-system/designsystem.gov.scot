---
layout: component
title:  "Prototyping"
category: get-started
parent: get-started
label: How to
thispage: get-started.prototyping
summary: "Rapidly create wireframes and interactive prototypes in Axure RP using our design kit."
permalink: "/get-started/prototyping/"
index: 999
updatehistory:
  - date: 2021-02-22
    content: First published
    url: /get-started/prototyping 
  - date: 2022-12-21
    content: Add Figma library
    homepage: "Added the <a href=\"/get-started/prototyping#figma\">Design System Figma library</a> to the 'prototyping' page."
    url: /get-started/prototyping
    
---
<nav role="navigation" class="ds_contents-nav" aria-label="Sections">
    <h2 class="ds_contents-nav__title">Contents</h2>
    <ul class="ds_contents-nav__list">
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#axure-rp">
                Axure RP
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#figma">
                Figma
            </a>
        </li>
        <li class="ds_contents-nav__item">
            <a class="ds_contents-nav__link" href="#guide-to-prototyping-model">
                Guide to Prototyping Model
            </a>
        </li>
    </ul>
</nav>

## Axure RP
Axure RP is an application used to mock up wireframes and clickthrough prototypes.

### Add the Design System Axure library to Axure RP

1. Install Axure RP  
    To design with our Axure library you must have the latest version of [Axure RP](https://www.axure.com/download) installed.

2. Get the Design System widget library  
    The library contains widgets for Design System components, design elements and patterns.

{% include file-download.html title="Design System Axure library" filesize="1.04 MB" type="Axure RP" name="axure" icon="/assets/images/documents/axure.svg" url="https://github.com/scottishgovernment/designsystem-assets/releases/download/0.2/digitalscotlanddesignsystem_v1.0.rplib" %}

Open Axure and click the 'Add Library +' icon at the top of the Libraries pane. Locate and select the **digitalscotlanddesignsystem_v1.0.rplib** file.

### Start Designing

Use the widgets from the Design System Axure library installed in step two to start designing. You’ll find the widgets located in the Libraries pane in the left side panel. To add a widget to the canvas, click and drag it from the Libraries pane.

All widgets come with styles and interactions already built into them.

### Support

If you are new to Axure, they offer [tutorials](https://docs.axure.com/axure-rp/reference/getting-started-video/) to get you started.

### Releases

When a new version of the library is available, you need to download the new file to replace the old one.




## Figma

The Digital Scotland Design System Kit is available on the [Figma community portal](https://www.figma.com/community/file/1179354393781430703).

You can also directly download the file.

{% include file-download.html title="Design System Figma library" filesize="1.48 MB" type="Figma .fig" name="figma" icon="/assets/images/documents/figma.svg" url="https://github.com/scottishgovernment/designsystem-assets/releases/download/0.2/Digital.Scotland.Design.System.Kit.-.Community.v0.1.fig" %}

Once you have the file added to your Figma account, publish the library from the assets panel. You will then be able to access the styles and components in your project's files by enabling the library through the assets panel.




## Guide to Prototyping Model

The prototype you select should be appropriate for the intended audience and features you are testing.

Define what the objective is of your testing is at the outset, as different outcomes suit different prototypes.

Outcomes could include:
* Design, layout and page flow
* Copy and content
* Functionality and task performance
* Accessibility
* Usability / User Journey

### Hand-drawn Sketches / Storyboards

Ideal for quick testing of ideas, useful in discovery. Could be used for testing broad concepts as opposed to detailed and complex transactional services. Can be used in focus groups, for peer review or to capture a quick overview. Ideal for referencing reused components which form part of a tested pattern library.

**Ideal for:** Design, layout and page flow testing.

### Flat Mock Ups

Ideal for communicating layout and design concepts or combinations of components that are already developed and in use. Could be used to illustrate a series of pages and content.

**Ideal for:** Design, layout and page flow, copy and content testing.

### Simple Wireframe

Simple wireframes are ideal for demonstrating the relationship between content, basic navigation and copy. These wireframes would usually be un-styled (unless a wireframe library exists that can be tapped into).

**Ideal for:** Design, layout and page flow, copy and content testing.

### Standard Wireframe

Standard wireframes will include navigation, content, and components which include functionality and logic which perform in the prototype, such as drop-down menus, postcode lookups etc. These wireframes would usually be un-styled (unless a wireframe library exists that can be tapped into)

**Ideal for:** Design, layout and page flow, copy and content testing, functionality and task performance testing.

### Complex Wireframe

Includes all of the functionality of a standard wireframe but fully styled up per the final live site to provide a near to final model for testing prior to build.

**Ideal for:** Design, layout and page flow, copy and content testing, functionality and task performance, usability / user journey testing.

### HTML Prototype

An HTML prototype can be used to test any aspect of a product or service as it is closest to the final product delivered and includes site styling, functionality, interactions and flow. Accessibility testing for assistive technology requires production-ready code so will need to be performed on a HTML prototype or live service. Testing of responsive design and layout across viewports is also ideally tested on this type of prototype.

**Ideal for:** Design, layout and page flow, copy and content testing, functionality and task performance, accessibility, usability / user journey testing.

### Staging Environment

Accessibility testing for assistive technology can also use prototypes built in a staging environment. Testing of responsive design and layout across viewports is also ideally tested on either a staging or live environment.

**Ideal for:** accessibility testing, usability / user journey.

Most projects will require more than one type of prototype during the design / UX lifecycle. Usually, at least two prototypes will be required.

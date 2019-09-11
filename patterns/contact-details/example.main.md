---
layout: example
parent: pattern.contact-details
type: example
scripts:
  - /assets/patternlib/dist/pattern-library.js
---

<div class="ds_contact-details">

    <h2 class="ds_contact-details__title">Contact</h2>

    <dl class="ds_contact-details__list">
        <div class="ds_contact-details__item">
            <dt>Address</dt>
            <dd translate="no">
                Scottish Government<br/>
                St. Andrew's House<br />
                Regent Road<br />
                Edinburgh<br />
                EH1 3DG
            </dd>
        </div>

        <div class="ds_contact-details__item">
            <dt>Email</dt>
            <dd><a href="mailto:#">email@gov.scot</a></dd>
        </div>

        <div class="ds_contact-details__item">
            <dt>Phone</dt>
            <dd>
                0123 456 7000<br />
                Main line is open 8am-5pm<br/>
                <a href="https://www.gov.uk/call-charges">Find out about call charges</a>
            </dd>
        </div>

        <div class="ds_contact-details__item">
            <dt class="visaually-hidden">Out of hours</dt>
            <dd>
                0123 456 7001
            </dd>
        </div>

        <div class="ds_contact-details__item">
            <dt>Fax</dt>
            <dd>
                0123 456 7002
            </dd>
        </div>        

        <div class="ds_contact-details__item  ds_contact-details__social">
            <dt class="visually-hidden">Social media</dt>
            <dd class="ds_contact-details__social-item">
                <a class="ds_contact-details__social-link" href="#">            
                    <svg class="ds_contact-details__social-icon  ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#facebook"></use></svg>
                    Facebook
                </a>
            </dd>

            <dd class="ds_contact-details__social-item">
                <a class="ds_contact-details__social-link" href="#">            
                    <svg class="ds_contact-details__social-icon  ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#twitter"></use></svg>
                    @scotgov
                </a>
            </dd>

            <dd class="ds_contact-details__social-item">
                <a class="ds_contact-details__social-link" href="#">            
                    <svg class="ds_contact-details__social-icon  ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#flickr"></use></svg>
                    Flickr
                </a>
            </dd>

            <dd class="ds_contact-details__social-item">
                <a class="ds_contact-details__social-link" href="#">            
                    <svg class="ds_contact-details__social-icon  ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#youtube"></use></svg>
                    YouTube
                </a>
            </dd>

            <dd class="ds_contact-details__social-item">
                <a class="ds_contact-details__social-link" href="#">            
                    <svg class="ds_contact-details__social-icon  ds_icon" role="img"><use xlink:href="/assets/images/icons/icons.stack.svg#blog"></use></svg>
                    Blog
                </a>
            </dd>
        </div>
    </dl>

</div>

---
layout: example
type: example
index: 0
style: "body {background: #f8f8f8;}"
sitemap: false
---
<div class="ds_wrapper">
  <div class="ds_layout  ds_layout--article">
    <div class="ds_layout__header">
      <header class="ds_page-header">
        <h1 class="ds_page-header__title">Building a New Scotland</h1>
      </header>
    </div>

    <div class="ds_layout__content">
      <p>It is vital that the people of Scotland have the information they need to make an informed choice about Scotland's future.</p>

      <p>A series of papers, titled ‘Building a New Scotland’, together form a prospectus for an independent Scotland. Watch a video introduction to the series.</p>

      <div data-src="https://www.youtube-nocookie.com/embed/cTn3HCdBO7Q?enablejsapi=1" data-height="360" data-width="640" class="youtube-embed-wrapper youtube-embed-wrapper--responsive"><a href="https://www.youtube-nocookie.com/embed/cTn3HCdBO7Q?enablejsapi=1"><img src="https://img.youtube.com/vi/cTn3HCdBO7Q/sddefault.jpg" width="640" height="360" /></a></div>

      <p>A summary version of the paper in Easy Read will be published in due course.</p>

      <p>You can also read: Independence: what you need to know.</p>     
    </div>

    <div class="ds_layout__sidebar">
      <form>
        <div class="ds_checkbox">
          <input class="ds_checkbox__input" id="cookiePermission" type="checkbox" />
          <label class="ds_checkbox__label" for="cookiePermission">Permission to show video</label>
        </div>
      </form>
    </div>
  </div>
</div>

<script>


function checkVideoConsent() {
    const checkbox = document.querySelector('#cookiePermission');
    checkbox.checked = localStorage.getItem('hasVideoPermission') === 'true';

    const videoElements = [].slice.call(document.querySelectorAll('.youtube-embed-wrapper'));

    videoElements.forEach(videoElement => {

        if (localStorage.getItem('hasVideoPermission') === 'true') {
            videoElement.innerHTML = `
            <iframe width="${videoElement.dataset.width}" height="${videoElement.dataset.height}" src="${videoElement.dataset.src}" frameborder="0" allowfullscreen></iframe>`;
        } else {
            videoElement.innerHTML = `
                <div class="youtube-embed-wrapper__consent">
                    <h2 class="ds_h3">Permission required to view YouTube content</h2>

                    <p>This video content is hosted on YouTube and we require permission before loading as there may be cookies and/or other technologies used not covered by <a href="/cookies">this site's cookie preferences</a>.</p>
                    <p>We advise reading Google's <a href="https://policies.google.com/privacy?hl=en">privacy policy</a> before accepting.</p>
                    <p>To consent to display this content click the ‘Accept and continue’ button below.</p>

                    <button class="ds_button  ds_!_margin-bottom--2  js-video-opt-in" type="button">Accept and continue</button>
                </div>
            `;

            videoElement.addEventListener('click', event => {
                if (event.target.classList.contains('js-video-opt-in')) {
                    localStorage.setItem('hasVideoPermission', 'true');

                    checkVideoConsent();
                }
            });
        }
    });
}

function cookieOptIn() {
    checkbox = document.querySelector('#cookiePermission');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            localStorage.setItem('hasVideoPermission', 'true');
        } else {
            localStorage.removeItem('hasVideoPermission');
        }
    })
   
}

cookieOptIn();
checkVideoConsent();

</script>

<style>
.youtube-embed-wrapper {
    background: #ebebeb;
    aspect-ratio: 16/9;
    width: 100%;
    margin: 32px 0;
}

.youtube-embed-wrapper iframe,
.youtube-embed-wrapper img {
    width: 100%;
    height: 100%;
    display: block;
}

.youtube-embed-wrapper img {
    height: auto;
}

.youtube-embed-wrapper__consent {
    padding: 24px;
}

</style>

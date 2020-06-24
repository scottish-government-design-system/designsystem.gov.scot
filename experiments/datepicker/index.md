---
layout: example
type: example
index: 0
style: "body {background: #f8f8f8;}"
---

<h1>Accessible date picker</h1>

<script src="ds-datepicker.js"></script>

<div data-module="ds-datepicker" class="ds_datepicker">
  <div class="ds_input__wrapper">
    <input value="20/06/2020" data-mindate="08/06/2020" type="text" class="ds_input  ds_input--fixed-10">
  </div>
</div>

<h2>To do</h2>
<ul>
  <li>responsive behaviour</li>
  <li>styling</li>
  <li>unit tests 😱</li>
</ul>

<h2>Features</h2>
<ul>
  <li>minimum and maximum dates &#9989;</li>
  <li>i18n: support for multiple date formats &#9989;</li>
</ul>


<script>
    const datePickers = [].slice.call(document.querySelectorAll('[data-module="ds-datepicker"]'));
    datePickers.forEach(datePicker => new DSDatePicker(datePicker).init());
</script>

<style>

.ds_datepicker {
  position: relative;
}

.ds_datepicker__dialog {
    background-color: #fff;
    border: 4px solid #333;
    clear: both;
    display: none;
    padding: 0;
    position: absolute;
    width: 480px;
    top: 0;
    z-index: 2;
}

.ds_datepicker__dialog__header {
    align-items: baseline;
    background: #333;
    color: white;
    cursor: default;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    line-height: 48px;
}

.ds_datepicker__dialog__navbuttons > button {
  background-color: transparent;
  padding: 10px;
  position: relative;
  top: -2px;
  width: 44px;
}

.ds_datepicker__dialog__navbuttons > button:hover {
  background-color: black;
}

.ds_datepicker__dialog__navbuttons > button:focus {
  background-color: #fdd522;
}

.ds_datepicker__dialog__title {
    font-size: 1rem;
    margin: 0 !important;
}

.ds_datepicker__dialog__table {
    border: 0;
}

.ds_datepicker__dialog__table tr:hover {
  background-color: transparent;
}

.ds_datepicker__dialog button {
    margin: 0;
}

.ds_datepicker__dialog td {
    border: 0;
    height: 40px;
    margin: 0;
    outline: 0;
    padding: 0;
    width: 40px;
}

.ds_datepicker__dialog td button {
    color: currentColor;
    height: 100%;
    padding: 0;
    transition-duration: 0s;
    width: 100%;
}

.ds_datepicker__dialog td button[disabled] {
  background-color: #fafafa;
  color: #b3b3b3;
  pointer-events: none;
}

.ds_datepicker__dialog td button:not(:focus) {
    background-color: transparent;
}

.ds_datepicker__dialog td button[tabindex="0"]:not(:focus) {
    background-color: #ebebeb;
}

.ds_datepicker__dialog__buttongroup {
    text-align: center;
}

.ds_datepicker__dialog__message {
  margin-top: 16px;
  padding-left: 15px;
}

.ds_datepicker__trigger {
  display: none;
}

.js-initialised.ds_datepicker .ds_datepicker__trigger {
  display: block;
}

@media (max-width: 480px) {
  .ds_datepicker__dialog {
    width: 100%;
    position: static;
  }
}

@media (max-width: 767px) {
  .ds_datepicker__dialog {
    position: static;
  }
}
</style>

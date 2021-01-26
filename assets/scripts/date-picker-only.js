import { DSDatePicker } from '../../node_modules/@scottish-government/pattern-library/src/all';

import tracking from '../../node_modules/@scottish-government/pattern-library/src/base/tracking/tracking';
tracking.init();

const datePickerElement = document.querySelector('[data-module="ds-datepicker"]');
const datePicker = new DSDatePicker(datePickerElement);
datePicker.init();
datePicker.openDialog();

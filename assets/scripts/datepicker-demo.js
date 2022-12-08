import DatePicker from '../../node_modules/@scottish-government/pattern-library/src/components/date-picker/date-picker';
import tracking from '../../node_modules/@scottish-government/pattern-library/src/base/tools/tracking/tracking';

window.DS = window.DS || {};
window.DS.components = window.DS.components || {
    DatePicker: DatePicker
};

document.addEventListener('DOMContentLoaded', () => {
    const datePicker = new window.DS.components.DatePicker(
        document.querySelector('[data-module="ds-datepicker"]')
    );
    datePicker.init();
    tracking.init();
});

export default DatePicker;

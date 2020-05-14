CKEDITOR.plugins.add('ds_warning-text', {
    requires: 'widget',
    icons: 'ds_warning-text',
    init: function (editor) {
        editor.widgets.add('ds_warning-text', {
            button: 'Add warning text',

            template: `<div class="ds_warning-text">
                <strong class="ds_warning-text__icon" aria-hidden="true">!</strong>
                <strong class="visually-hidden">Warning</strong>
                <div class="ds_warning-text__text">

                </div>
            </div>`,

            editables: {
                content: {
                    selector: '.ds_warning-text__text',
                    pathName: 'warning'
                },
            },

            allowedContent:
            'strong(!ds_warning-text__icon); strong(!visually-hidden); div(!ds_warning-text__text)',

            upcast: function( element ) {
                return element.name == 'div' && element.hasClass( 'ds_warning-text' );
            }
        });
    },

    onLoad: function () {
        if (document.getElementById('warningTextStyles') === null) {
            let link = document.createElement('link');
            link.id = 'warningTextStyles';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = this.path + 'warning-text.css';
            document.body.appendChild(link);
        }
    }
});

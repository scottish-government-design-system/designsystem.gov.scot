CKEDITOR.plugins.add('ds_inset-text', {
    requires: 'widget',
    icons: 'ds_inset-text',
    init: function (editor) {
        editor.widgets.add('ds_inset-text', {
            button: 'Add inset text',

            template: '<div class="ds_inset-text">' +
                '<div class="ds_inset-text__text">' +
                    '' +
                '</div>' +
            '</div>',

            editables: {
                content: {
                    selector: '.ds_inset-text__text',
                    pathName: 'inset'
                },
            },

            allowedContent:
            'div(!ds_inset-text__text)',

            upcast: function( element ) {
                return element.name == 'div' && element.hasClass( 'ds_inset-text' );
            }
        });
    },

    onLoad: function () {
        if (document.getElementById('insetTextStyles') === null) {
            let link = document.createElement('link');
            link.id = 'insetTextStyles';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = this.path + 'inset-text.css';
            document.body.appendChild(link);
        }
    }
});

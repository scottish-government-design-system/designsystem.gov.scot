// using a closure so we don't pollute global scope
const accordionPlugin = function () {
    // (it deserves it)
    CKEDITOR.plugins.ass = CKEDITOR.plugins.add;
    CKEDITOR.plugins.ass('ds_accordion', {
        requires: 'widget',
        icons: 'ds_accordion,ds_accordionitem',
        init: function (editor) {
            editor.on('instanceReady', function (event) {
                const editorContents = document.getElementById(event.editor.id + '_contents');

                editorContents.addEventListener('click', function (innerEvent) {
                    if (innerEvent.target.classList.contains('ds_accordion')) {
                        innerEvent.preventDefault();
                        addAccordionPanel(innerEvent.target, editor);
                    }
                });
            });

            editor.on('afterCommandExec', function (event) {
                if (event.data.name === 'accordion') {
                    const editorElement = document.querySelector(`.${event.editor.id}`);
                    const accordions = [].slice.call(editorElement.querySelectorAll('.ds_accordion'));
                    accordions.forEach(accordion => removeUnwantedAccordionChildren(accordion));
                //     // const editorElement = event.editor;
                //     // addAccordionPanel(editorElement, editor);
                }
            });

            editor.accordionInsertDefault = false;

            editor.widgets.add('ds_accordion', {
                button: 'Add accordion',
                template: `<div class="ds_accordion" data-module="ds_accordion"></div>`,
                editables: {
                    items: {
                        selector: '.ds_accordion',
                        pathName: 'accordion'
                    }
                },

                requiredContent: 'div(ds_accordion-item)',

                edit: function () {
                    removeUnwantedAccordionChildren(this.element.$);
                    // window.setTimeout(() => addAccordionPanel(this.element.$, editor), 0);
                },

                allowedContent:
                    'div(!ds_accordion)[data-module];div(!ds_accordion-item);input(!ds_accordion-item__control,!visually-hidden)[id,aria-labelledby,type];div(!ds_accordion-item__header);h3(!ds_accordion-item__title)[id];div(!ds_accordion-item__body);div(!ds_accordion-item__indicator);label(!ds_accordion-item__label)[for];span(!visually-hidden)',

                upcast: function( element ) {
                    return element.name == 'div' && element.hasClass( 'ds_accordion' );
                }
            });

            editor.widgets.add('ds_accordionitem', {
                // button: 'Add accordion item',
                template: () =>
                    `<div class="ds_accordion-item">
                    <input type="checkbox" class="ds_accordion-item__control visually-hidden" id="panel-${editor.accordionPanelIdString}" aria-labelledby="panel-${editor.accordionPanelIdString}-heading">
                    <div class="ds_accordion-item__header">
                        <h3 id="panel-${editor.accordionPanelIdString}-heading" class="ds_accordion-item__title">
                            Title
                        </h3>
                        <div class="ds_accordion-item__indicator"></div>
                        <label class="ds_accordion-item__label" for="panel-${editor.accordionPanelIdString}"><span class="visually-hidden">Show this section</span></label>
                    </div>
                    <div class="ds_accordion-item__body">
                        Content
                    </div>
                </div>`,
                editables: {
                    title: {
                        selector: '.ds_accordion-item__title',
                        pathName: 'accordionTitle',
                        allowedContent: 'strong;em;abbr',
                        disallowedContent: ''
                    },
                    content: {
                        selector: '.ds_accordion-item__body',
                        pathName: 'accordionBody',
                        // allowedContent: 'p;ul;ol;li;strong;em;input;a[*];table;img[*];blockquote'
                    }
                },

                allowedContent:
                    'input;div(!ds_accordion);div(!ds_accordion-item);input(!ds_accordion-item__control)[id,aria-labelledby,type];div(!ds_accordion-item__header);h3(!ds_accordion-item__title)[id];div(!ds_accordion-item__body);span(!ds_accordion-item__indicator);label(!ds_accordion-item__label)[for];span(!visually-hidden)',

                upcast: function (element) {
                    return element.name == 'div' && element.hasClass('ds_accordion-item');
                }
            });
        },

        onLoad: function () {
            if (document.getElementById('accordionStyles') === null) {
                let link = document.createElement('link');
                link.id = 'accordionStyles';
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = this.path + 'accordion.css';
                document.body.appendChild(link);
            }
        }
    });
    delete CKEDITOR.plugins.ass;

    function placeCaretAtEnd(el) {
        el.focus();

        if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    function removeUnwantedAccordionChildren(parent) {
        for (let i = 0; i < parent.childNodes.length; i++) {
            const childNode = parent.childNodes[i];

            if (
                childNode.nodeType === Node.TEXT_NODE ||
                (childNode && childNode.classList && !childNode.classList.contains('cke_widget_wrapper'))
            ) {
                childNode.parentNode.removeChild(childNode);
            }
        }
    }

    function addAccordionPanel(accordionElement, editor) {
        placeCaretAtEnd(accordionElement);

        editor.accordionPanelIdString = parseInt(Math.random() * 1000000, 10);
        editor.commands.accordionitem.exec();

        removeUnwantedAccordionChildren(accordionElement);
    }
}();

/**
 * Part of eng4tw project.
 *
 * @copyright  Copyright (C) 2016 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

var InlineUploader;

;(function($, InlineUploader)
{
    "use strict";

    /**
     * Constructor.
     *
     * @param {CodeMirror} instance
     * @constructor
     */
    InlineUploader.CodeMirrorAdapter = function(instance)
    {
        this.instance = instance;
        this.uploader = null;
    };

    InlineUploader.CodeMirrorAdapter.prototype = {

        /**
         * Get value from editor.
         *
         * @returns {string}
         */
        getValue: function() {
            return this.instance.getValue();
        },

        /**
         * Set value to editor.
         *
         * @param value
         */
        setValue: function(value) {
            var cursor = this.instance.getCursor();
            this.instance.setValue(value);
            this.instance.setCursor(cursor);
        },

        /**
         * Insert value to editor.
         *
         * @param value
         */
        insert: function(value) {
            this.instance.replaceSelection(value);
        },

        /**
         * Register events.
         */
        registerEvents: function()
        {
            var self = this;
            var ele = this.instance.getWrapperElement();

            ele.addEventListener('paste', function(e) {
                self.uploader.onPaste(e);
            }, false);

            this.instance.setOption('onDragEvent', function(data, event) {
                if (event.type === "drop") {
                    event.stopPropagation();
                    event.preventDefault();
                    return self.uploader.onDrop(event);
                }
            });
        }
    };

    $.extend(InlineUploader.CodeMirrorAdapter.prototype, InlineUploader.AbstractAdapter.prototype);

})(jQuery, InlineUploader || (InlineUploader = {}));

# Inline Uploader

A Simple library to support editor image drag & drop upload which like Github issues.

This library is a fork of https://github.com/Rovak/InlineAttachment and add some advanced features.

![img](https://cloud.githubusercontent.com/assets/1639206/13169541/4a07b1a4-d721-11e5-90fb-b616f96c0e4f.gif)

## Installation

Use bower

``` json
bower install inline-uploader
```

Or [download](https://github.com/asika32764/inline-uploader/releases) this package and include it.

## Support Editors

- ACE
- CodeMirror

## How to Use

### ACE Example

You must include `inline-uploader.js` and `adapter/ace-adapter.js` first.

``` javascript
var editor = ace.edit('my-editor');

var options = {
    url: 'upload.php'
};

InlineUploader.init(new InlineUploader.AceAdapter(editor), options);
```

## Default Options

``` javascript
{
    /**
     * URL to upload the attachment
     */
    url: 'upload.php',

    /**
     * Upload HTTP method used
     */
    method: 'POST',

    /**
     * Request field name where the attachment will be placed in the form data
     */
    field: 'file',

    /**
     * Add the file to the form data before adding the extra parameters
     * (alternative being to add the file after the extra parameters)
     */
    addFileBeforeExtraParameters: true,

    /**
     * Where is the filename placed in the response
     */
    downloadFieldName: 'filename',

    /**
     * Where is the name placed in the response
     */
    downloadLabelName: 'name',

    /**
     * Allowed types
     */
    allowedTypes: [
        'image/jpeg',
        'image/png',
        'image/jpg',
        'image/gif'
    ],

    /**
     * Will be inserted on a drop or paste event
     */
    progressText: '![Uploading... {name}]()',

    /**
     * When a file has successfully been uploaded the last inserted text
     * will be replaced by the urlText, the {filename} tag will be replaced
     * by the filename that has been returned by the server
     */
    urlText: "![{name}]({filename})",

    /**
     * Text for default error when uploading
     */
    errorText: "Error uploading file",

    /**
     * Extra parameters which will be send when uploading a file
     */
    extraParams: {},

    /**
     * Extra headers which will be send when uploading a file
     */
    headers: {},

    /**
     * When a file is received by drag-drop or paste
     *
     * @param {Blob}  file
     * @param {Event} event
     *
     * @returns {string} The modified file name as id to replace upload progress text.
     */
    onFileReceived: null,

    /**
     * Custom upload handler
     *
     * @param {Blob}   file
     * @param {string} name
     */
    uploadHandler: null,

    /**
     * Custom error handler. Runs after removing the placeholder text and before the alert().
     * Return false from this function to prevent the alert dialog.
     */
    errorHandler: null,

    /**
     * Custom response parser
     *
     * @param {XMLHttpRequest} xhr
     *
     * @returns {Object} containing a parsed version of the response
     *                   or a false value will default back to parsing the response as JSON
     */
    responseParser: null,

    /**
     * When a file has successfully been uploaded
     *
     * @param {Object} data  The data from remote response.
     * @param {string} name  The file id name to replace progress text.
     */
    onFileUploaded: null
}
```

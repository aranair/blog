//  Place all the behaviors and hooks related to the matching controller here.
//  All this logic will automatically be available in application.js.
//  You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
  // var options = {
  //   editor: document.getElementById('pen_editor'), // {DOM Element} [required]
  //   debug: true, // {Boolean} false by default
  //   textarea: '<textarea name="content"></textarea>', // fallback for old browsers
  //   list: [ 'blockquote', 'h2', 'h3', 'p', 'insertorderedlist', 'insertunorderedlist',
  //   'indent', 'outdent', 'bold', 'italic', 'underline', 'createlink'],
  // }
  // var editor = new Pen(options);

  var opts = {
  container: 'epiceditor_container',
  textarea: 'epiceditor_textarea',
  basePath: '/assets/epiceditor',
  clientSideStorage: true,
  useNativeFullscreen: false,
  theme: {
    base: '/themes/base/epiceditor.css',
    preview: '/themes/preview/github.css',
    editor: '/themes/editor/epic-light.css'
  },
  button: {
    preview: true,
    fullscreen: true,
    bar: "auto"
  },
  focusOnLoad: false,
  shortcut: {
    modifier: 18,
    fullscreen: 70,
    preview: 80
  },
  string: {
    togglePreview: 'Toggle Preview Mode',
    toggleEdit: 'Toggle Edit Mode',
    toggleFullscreen: 'Enter Fullscreen'
  },
  autogrow: false
  }
  var editor = new EpicEditor(opts);
  editor.load();
});

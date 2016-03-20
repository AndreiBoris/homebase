'use strict';
// Requirejs Configuration Options

// Credit goes to Gerard Sans for this config!
// https://www.airpair.com/jasmine/posts/javascriptintegrating-jasmine-with-requirejs-amd

require.config({
  baseUrl: '../scripts',
  // paths: maps ids with paths (no extension)
  paths: {
    'app': 'app',
    'test': 'tests',
    'jasmine': 'libs/test/jasmine',
    'jasmine-html': 'libs/test/jasmine-html',
    'jasmine-boot': 'libs/test/boot'
  },
  // shim: makes external libraries compatible with requirejs (AMD)
  shim: {
    'jasmine-html': {
      deps: ['jasmine']
    },
    'jasmine-boot': {
      deps: ['jasmine', 'jasmine-html']
    }
  }
});

require(['jasmine-boot'], function () {
  require(['test/testspec'], function () {
    //trigger Jasmine
    window.onload();
  });
});
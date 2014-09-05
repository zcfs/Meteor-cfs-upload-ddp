Package.describe({
  name: 'cfs:upload-ddp',
  version: '0.0.1',
  summary: 'CollectionFS, DDP File Upload'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use([
    //CFS packages
    'cfs:base-package@0.0.0',
    'cfs:tempstore@0.0.2',
    'cfs:file@0.0.0',
    'cfs:ejson-file@0.0.0',
    //Core packages
    'deps',
    'check',
    'livedata',
    'mongo-livedata',
    'ejson',
    //Other packages
    'cfs:power-queue@0.0.1',
    'cfs:reactive-list@0.0.0'
    ]);

  api.add_files([
    'upload-ddp-client.js'
    ], 'client');

  api.add_files([
    'upload-ddp-server.js'
    ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//    'random', 'deps']);

//   api.add_files('tests/server-tests.js', 'server');
//   api.add_files('tests/client-tests.js', 'client');
// });

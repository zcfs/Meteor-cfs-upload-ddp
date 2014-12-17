Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-upload-ddp.git',
  name: 'cfs:upload-ddp',
  version: '0.0.16',
  summary: 'CollectionFS, DDP File Upload'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    //CFS packages
    'cfs:base-package@0.0.27',
    'cfs:tempstore@0.1.1',
    'cfs:file@0.1.14',
    'cfs:ejson-file@0.1.2',
    //Core packages
    'deps',
    'check',
    'livedata',
    'mongo-livedata',
    'ejson',
    //Other packages
    'cfs:power-queue@0.9.11',
    'cfs:reactive-list@0.0.9'
    ]);

  api.addFiles([
    'upload-ddp-client.js'
    ], 'client');

  api.addFiles([
    'upload-ddp-server.js'
    ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//    'random', 'deps']);

//   api.addFiles('tests/server-tests.js', 'server');
//   api.addFiles('tests/client-tests.js', 'client');
// });

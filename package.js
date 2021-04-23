Package.describe({
  git: 'https://github.com/zcfs/Meteor-cfs-upload-ddp.git',
  name: 'zcfs:upload-ddp',
  version: '0.0.17',
  summary: 'CollectionFS, DDP File Upload'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    //CFS packages
    'zcfs:base-package@0.0.27',
    'zcfs:tempstore@0.1.3',
    'zcfs:file@0.1.15',
    'zcfs:ejson-file@0.1.4',
    //Core packages
    'deps',
    'check',
    'livedata',
    'mongo-livedata',
    'ejson',
    //Other packages
    'zcfs:power-queue@0.9.11',
    'zcfs:reactive-list@0.0.9'
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

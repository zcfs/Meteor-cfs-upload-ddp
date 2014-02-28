cfs-upload-ddp
=========================

This is a Meteor package that provides DDP uploads for
[CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS).

CollectionFS uses HTTP uploads by default because they currently work better,
but anyone with an interest in uploading over DDP can swap in this package
instead of the cfs-upload-http package.
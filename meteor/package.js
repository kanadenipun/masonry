'use strict';
var packageName = 'masonryjs:masonry'; 
Package.describe({
	name: packageName,
	summary: 'Masonryjs. cascading grid layout library',
	version: 1.1.0,
	git: 'https://github.com/desandro/masonry'
});
Package.onUse(function (api) {
	api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
	api.export('masonry');
	api.addFiles([
		'moasonry.js',
		'meteor/export.js'
		]);
});

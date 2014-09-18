Package.describe({
  name: 'cfs:graphicsmagick',
  version: '0.0.0',
  summary: "Adds `gm` to scope with the ability to perform GraphicsMagick or ImageMagick manipulation",
  git: 'http://github.com/ecwyne/Meteor-cfs-graphicsmagick.git'
});

Npm.depends({
  gm: "1.14.2"
});

//also requires that you install the ImageMagick
//and GraphicsMagick apps on your server

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.add_files('gm.js', 'server');

  api.export('gm');
});

Package.on_test(function(api) {
  api.use(['cfs:graphicsmagick', 'test-helpers', 'tinytest'], 'server');
  api.add_files('tests/server-tests.js', 'server');
});

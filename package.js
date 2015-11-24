Package.describe({
  name: "supaseca:guillotine",
  summary: "jQuery plugin to crop images within an area (fully responsive), allowing to drag (touch support), zoom and rotate.",
  version: "1.3.1",
  git: "https://github.com/projik/meteor-guillotine.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles([
    'guillotine/js/jquery.guillotine.js',
    'guillotine/css/jquery.guillotine.css'
  ], 'client'
  );
});


module.exports = config:
  files:
    javascripts:
      joinTo:
        'js/libs.js': /^(?!app\/)/
        'js/app.js': /^app\//
        'js/vendor.js': /^bower_components/
      order:
        before: [
          'bower_components/requirejs/require.js'
          'bower_components/angular/angular.js'
        ]
    stylesheets: joinTo: 'css/app.css'
  modules:
    wrapper: 'commonjs'
    definition: false

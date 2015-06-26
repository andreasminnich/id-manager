module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          keepalive: true
        }
      }
    },

    appcache: {
      app: {
        dest: 'identity-manager.appcache',
        cache: {
          patterns: ['app.js', '*.html', '*.css']
        },
        network: '*'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-appcache');
}
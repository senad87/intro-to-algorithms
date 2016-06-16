source = 'src/'

prodFiles = source + '**/*.js'
specFiles = 'specs/**/*_spec.js'

module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON('package.json')

    watch:
      coffee:
        files: [ prodFiles, specFiles ]
        options:
          livereload: true
        tasks: ['jasmine:unit']

    jasmine:
      unit:
        src: [prodFiles]
        options:
          keepRunner: true
          outfile: '_SpecRunner.html'
          specs: specFiles

    connect:
      server:
        options:
          livereload: true
          open:
            target: 'http://localhost:9000/_SpecRunner.html'
          port: 9000,


  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-jasmine')

  grunt.loadNpmTasks('grunt-contrib-connect')


  grunt.registerTask('test', [ 'jasmine:unit', 'connect', 'watch' ])
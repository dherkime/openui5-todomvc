module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-blanket-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
            qunit: {
              all: ['test.html']
            },
            connect: {
                server: {
                    options: {
                        port: 4444,
                        base: '.'
                    }
                }
            },
            blanket_qunit: {
                all: {
                    options: {
                        timeout: 5000,
                        urls: ['./test.html?coverage=true&gruntReport'],
                        threshold: 80
                    }
                }
            },
            jshint: {
              options: {
                node: true
              },
              all: [
                'Gruntfile.js',
                'todo/**/*.js'
              ]
            }
    });

    grunt.registerTask('default', ['jshint', 'blanket_qunit']);



};
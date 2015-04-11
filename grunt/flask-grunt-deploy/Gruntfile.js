(function () {
    'use strict';
    module.exports = function (grunt) {
        'use strict';
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-autoprefixer');
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: {
                main: {
                    files: [
                        // makes all src relative to cwd
                        {
                            expand: true,
                            cwd: '../static/',
                            src: ['**'],
                            dest: '../static_compressed/'
                        }
                    ]
                }
            },
            uglify: {
                dev: {
                    options: {
                        drop_console: true,
                        compress: true,
                        report: 'min'
                    },
                    files: [
                        {
                            expand: true,
                            cwd: '../static_compressed',
                            src: '**/*.js',
                            dest: '../static_compressed',
                            ext: '.js'
                        }
                    ]
                }
            },
            autoprefixer: {
                build: {
                    options: {
                        map: true
                    },
                    browsers: ['last 2 versions', 'ie 8', 'ie 9'],
                    expand: true,
                    cwd: '../static_compressed/css',
                    src: ['**/*.css'],
                    dest: '../static_compressed/css'
                }
            },
            watch: {
                options: {
                    spawn: false
                },
                copy: {
                    files: ['../static/**/*'],
                    tasks: ['copy']
                },
                uglify: {
                    files: ['../static_compressed/**/*'],
                    tasks: ['uglify']
                },

                autoprefixer: {
                    files: ['../static_compressed/css/**/*'],
                    tasks: ['autoprefixer']
                }
            }
        });
        return grunt.registerTask('default', ['copy', 'uglify', 'autoprefixer', 'watch']);
    };

}).call(this);

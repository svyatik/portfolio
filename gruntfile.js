module.exports = function (grunt) {
    grunt.initConfig ({
        pkg: grunt.file.readJSON ('package.json'),

        less: {
            development: {
                options: {
                    paths: ["css/"]
                },
                files: {
                    "css/style.css": "css/style.less"
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            css: {
                files: ['css/*.css', 'css/*.less'],
                tasks: ['less', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

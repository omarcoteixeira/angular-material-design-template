module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            src: {
                files: ['public/sass/*.scss', 'public/*.html', 'public/scripts/*.js'],
                tasks: ['compass:dist']
            },
           options: {
                livereload: true,
            },
        },
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'public/sass',
                    cssDir: 'public/css',
                    environment: 'production'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};
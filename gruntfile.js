module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/angular/',
                    src: ['angular.js'],
                    dest: 'script/'
                },{
                    expand: true,
                    cwd: 'node_modules/jquery/dist',
                    src: ['jquery.js'],
                    dest: 'script/'
                },{
                    expand: true,
                    cwd: 'node_modules/office-ui-fabric/dist/js',
                    src: ['jquery.fabric.js'],
                    dest: 'script/'
                },{
                    expand: true,
                    cwd: 'node_modules/office-ui-fabric/dist/css',
                    src: ['*.css'],
                    dest: 'style/'
                },{
                    expand: true,
                    cwd: 'node_modules/office-ui-fabric/dist/components/Persona',
                    src: ['Persona.Person2.png'],
                    dest: 'images/'
                },{
                    expand: true,
                    cwd: 'node_modules/angular-route',
                    src: ['angular-route.js'],
                    dest: 'script/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
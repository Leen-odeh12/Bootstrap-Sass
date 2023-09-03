
module.exports = function(grunt) {

    grunt.initConfig({
     concat:{js:{
        src:['js/*.js'],
        dest:'build/main.js'
            
        }
        },


      sass:{
        build:{ 
            files: [{ src:'../scss/main.scss', dest:'../scss/main.css' }]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
  
    grunt.registerTask('default', ['jshint']);
  
  };
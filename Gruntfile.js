module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          'dev/style/main.css': 'src/style/main.less'
        }
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          'dist/style/main.min.css': 'src/style/main.less'
        }
      },
    },
    watch: {
      less: {
        files: ['src/style/**/*.less'],
        tasks: ['less:development']
      }
    },
    uglify: {
      target: {
        files: {
          'dist/script/main.min.js': 'src/script/main.js'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['less:production', 'uglify']);

}
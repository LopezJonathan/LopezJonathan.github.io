//The "wrapper" function

module.exports = function(grunt) {
	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		* Grunt Sass
		* Compile Sass to CSS using node-sass
		* https://www.npmjs.com/package/grunt-sass
		*/
		sass: {

			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'css/styles.css' : 'assets/scss/styles.scss'
				}
			}
		},
		
		/**
		* Grunt Contrib jshint
		* Validate JavaScript
		* https://www.npmjs.com/package/grunt-contrib-jshint
		*/
		jshint:{
			all: ['Gruntfile.js', 'assets/js/*.js', './js/*.js']
		},
		
		/**
		* Grunt Contrib Uglify
		* Ugflify JavaScript
		* https://www.npmjs.com/package/grunt-contrib-uglify
		*/
		uglify:{
			options: {
				mangle: false
				},
				my_target:{
					files:{
						'js/scripts.min.js': ['assets/js/scripts.js']
				}
			}
		},

		/**
		* Grunt Contrib Watch
		* Monitor files and excute tasks
		* https://www.npmjs.com/package/grunt-contrib-watch
		*/
		watch: {

			sass: {

				files: [
					'assets/scss/*.scss'
				],
				tasks: [
					'sass'
				]
			},
			
			jshint: {

				files: [
					'assets/js/*.js',
					'./js/*.js'
				],
				tasks: [
					'jshint'
				]
			},
			
			uglify:{
			
				files: [
					'assets/js/*.js'
				],
				tasks: [
					'uglify'
				]
			}
		},

	});

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
	grunt.registerTask('default', ['watch']);

};

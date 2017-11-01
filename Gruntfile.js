// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

// ===========================================================================
// CONFIGURE GRUNT ===========================================================
// ===========================================================================
grunt.initConfig({

	// get the configuration info from package.json ----------------------------
	// this way we can use things like name and version (pkg.name)
	pkg: grunt.file.readJSON('package.json'),

	// configure sass for styling sheet -----------------------------------
	sass: {
		dev: {
			options: {
				sourceMap: false,
				outputStyle: 'expand'
			},
			files: {
				// the first path is the output and the second is the input
				'assets/css/welcome.css': 'assets/sass/welcome.scss',
			}
		},
		dist: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			files: {
				// the first path is the output and the second is the input
				'assets/css/welcome.min.css': 'assets/sass/welcome.scss',
			}
		}
	},


	 // configure the "grunt watch" task -----------------------------------
	 watch: {
	 	scripts: {
	 		files: ['assets/**/*.scss'],
	 		tasks: ['sass']
	 	}
	 }

	});

	// ===========================================================================
	// LOAD GRUNT PLUGINS ========================================================
	// ===========================================================================
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// "grunt build" is the same as running "grunt sass:dist".
    // if I had other tasks, I could add them to this array.
    grunt.registerTask('default', ['sass','watch']);
};
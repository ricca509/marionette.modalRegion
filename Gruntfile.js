module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		umd: {
	        all: {
	            options: {
	                src: 'lmn.marionette.modal.js',
	                dest: 'build/lmn.marionette.modal.js', // optional, if missing the src will be used
	                //objectToExport: 'library', // optional, internal object that will be exported
	                //amdModuleId: 'id', // optional, if missing the AMD module will be anonymous
	                //globalAlias: 'alias', // optional, changes the name of the global variable
	                indent: 4,
	                deps: { // optional, `default` is used as a fallback for rest!
	                    'default': ['underscore', 'Backbone', 'Marionette']
	                }
	            }
	        }
	    },
		connect: {
		    test: {
				options: {
	        		port: 9001
		      	}
		    }
		},
		jasmine: {
			all: {
				src: 'lmn.marionette.modal.js',
				options: {
					specs: 'spec/*.spec.js',
					helpers: 'spec/*.helper.js',
					vendor: [
						"bower_components/jquery/dist/jquery.js",
						"bower_components/underscore/underscore.js",
						"bower_components/backbone/backbone.js",
			          	"bower_components/marionette/lib/backbone.marionette.js"
			        ]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-umd');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task(s).
	grunt.registerTask('default', ['umd']);
	grunt.registerTask('test', ['connect:test', 'jasmine']);

};

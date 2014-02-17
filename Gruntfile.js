module.exports = function (grunt) {

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		pkg: pkg,
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					base: '.',
					keepalive: true,
					'middleware': function (connect, options) {
						return [
							connect.static(options.base),
							connect.directory(options.base)
						];
					}
				}
			}
		},
		clean: {
			dist: "dist"
		},
		uglify: {
			all: {
				files: {
					"dist/loader.min.js": ["src/**/*.js"]
				},
				options: {
					mangle: false,
					preserveComments: false,
					sourceMap: "dist/loader.min.map",
					sourceMappingURL: "loader.min.map",
					report: "min",
					beautify: {
						ascii_only: true
					},
					banner: "",
					compress: {
						hoist_funs: false,
						loops: false,
						unused: false,
						drop_console: true
					}
				}
			}
		}
	});
	/**
	 * load all grunt tasks
	 */
	require('load-grunt-tasks')(grunt);

	/**
	 * register default task
	 */
	grunt.registerTask('default', ['connect']);
	/**
	 * register build task
	 */
	grunt.registerTask('build', ['clean', 'uglify']);
};

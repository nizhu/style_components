module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'gh-pages': {
			options: {
				base: 'public'
			},
			src: ['**/*']
		}
	});
}

grunt.loadNpmTasks('grunt-gh-pages');

grunt.registerTask('delpoy', ['gh-pages'])
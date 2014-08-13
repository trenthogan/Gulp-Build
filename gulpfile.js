/** 
* gulpfile.js
*
* Author: Trent Hogan
* 
* to use: 
*
* Install gulp locally for you project
* Make sure you have a package.json with all your dependencies
* Run: npm install to install all your dependencies
* Install gulp-load-plugins: npm install --save-dev gulp-load-plugins
*
* Profit
*/

var gulp = require('gulp');
//Require gulp load plugins to load all other plugins for us.
    gulpLoadPlugins = require('gulp-load-plugins');
    plugins = gulpLoadPlugins();



//Create js object to hold paths
var paths = {

    styles: {

        src: './sass/style.scss',
        dest: './css'

    },
    js: {

    	src: './scripts',
    	files: './scripts/*.js',
    	dest: ''


    }

}


//Process sass
gulp.task('sass', function () {

     //Minified Css
     gulp.src( paths.styles.src )
    .pipe( plugins.rubySass( {style: 'compressed'} ) )
    .pipe( plugins.rename('style.min.css') )
    .pipe( gulp.dest( paths.styles.dest ) )


});


//Create An array of scripts in order for Concat




//Uglify Js
gulp.task('compressjs', function() {

    return gulp.src('./js/script.js')
    .pipe( plugins.jshint() )
    .pipe( plugins.jshint.reporter('default') )
    .pipe( plugins.uglify() )
    .pipe( plugins.rename('script.min.js') )
    .pipe( gulp.dest('./js/') )
    
    
});


gulp.task('default', ['sass', 'compressjs'], function () {

    
    gulp.watch( paths.styles.src , ['sass'])
    gulp.watch( './js/script.js' , ['compressjs'])

});





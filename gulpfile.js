'use strict';

// Require
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var runs    = require('run-sequence');
var bsync   = require('browser-sync');
var reload  = bsync.reload;
var stylish = require('jshint-stylish');
var path    = require('path');
var Karma   = require('karma').Server;


// Configurable paths
var appConfig = {
  bower: 'bower_components',
  dist: 'dist',
  app: 'app'
};


// CSS generation from SCSS
gulp.task('scss', function () {
  return gulp.src(appConfig.app + '/css/*.scss')
          .pipe($.sass.sync({
            outputStyle: 'expanded',
            includePaths: ['.'],
            precision: 10
          }).on('error', $.sass.logError))
          .pipe(gulp.dest(appConfig.app + '/css'))
          .pipe(reload({stream: true}));
});


// JS Hints
var testFiles = ['gulpfile.js', appConfig.app + '/js/**/*.js', 'test/**/*.js'];

gulp.task('jshint', function () {
  return gulp.src(testFiles)
          .pipe($.jshint())
          .pipe($.jshint.reporter(stylish));
});

gulp.task('jscs', function () {
  return gulp.src(testFiles)
          .pipe($.jscs())
          .pipe($.jscs.reporter());
});

gulp.task('hint', ['jshint', 'jscs'], function () {
  gulp.watch(testFiles, ['jshint', 'jscs']);
});


// HTML optimization
var htmlEntities = function (input, output) {
  return gulp.src(input)
          .pipe($.useref())
          .pipe($.if('*.js', $.uglify()))
          .pipe($.if('*.js', $.rev()))
          .pipe($.if('*.css', $.cssmin()))
          .pipe($.if('*.css', $.rev()))
          .pipe($.if('*.html', $.htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            conservativeCollapse: true
          })))
          .pipe($.revReplace())
          .pipe(gulp.dest(output));
};

gulp.task('html', ['scss'], function () {
  return htmlEntities(appConfig.app + '/*.html', appConfig.dist);
});

gulp.task('views', ['scss'], function () {
  return htmlEntities(appConfig.app + '/views/*.html', appConfig.dist + '/views');
});


// Images
gulp.task('favicon', function () {
  return gulp.src([appConfig.app + '/favicon.ico'])
          .pipe($.rev())
          .pipe($.tap(function (file) {
            gulp.src([appConfig.dist + '/index.html'])
                    .pipe($.replace('"favicon.ico"', '"' + path.basename(file.path) + '"'))
                    .pipe(gulp.dest(appConfig.dist));
          }))
          .pipe(gulp.dest(appConfig.dist));
});

gulp.task('images', function () {
  return gulp.src(appConfig.app + '/img/**/*')
          .pipe(gulp.dest(appConfig.dist + '/img'));
});


// Fonts
gulp.task('fonts', function () {
  // Project Fonts
  var project = gulp.src(appConfig.app + '/fonts/**/*.{eot,svg,ttf,woff,woff2}')
          .pipe(gulp.dest(appConfig.dist + '/fonts'));

  // Bootstrap Fonts
  var bootstrap = gulp.src(appConfig.bower + '/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}')
          .pipe(gulp.dest(appConfig.dist + '/fonts'));
  
  // Output
  return project && bootstrap;
});


// Delete files and folders
gulp.task('clean', function () {
  return gulp.src([appConfig.dist]).pipe($.rimraf());
});


// Build the application
gulp.task('build', function () {
  runs('clean', 'html', 'views', 'images', 'favicon', 'fonts', 'dist');
});


// Test
gulp.task('test', function(done) {
  new Karma({
    configFile: __dirname + '/test/my.conf.js'
  }, done).start();
});


// Start application
gulp.task('serve', ['scss'], function () {
  bsync({
    notify: false,
    port: 1337,
    server: {
      baseDir: [appConfig.app],
      routes: {
        '/bower_components': appConfig.bower
      }
    }
  });

  gulp.watch([
    appConfig.app + '/*.html',
    appConfig.app + '/views/*.html',
    appConfig.app + '/js/**/*.js',
    appConfig.app + '/img/**/*',
    appConfig.app + '/fonts/**/*',
    appConfig.app + '/css/**/*.css'
  ]).on('change', reload);

  gulp.watch(appConfig.app + '/css/**/*.scss', ['scss']);
});


// Distribution version generation
gulp.task('dist', function () {
  bsync({
    notify: false,
    port: 1337,
    server: {
      baseDir: [appConfig.dist]
    }
  });
});


// Default task
gulp.task('default', ['serve']);

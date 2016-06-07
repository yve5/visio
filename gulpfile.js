'use strict';

// require
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var runs    = require('run-sequence');
var bsync   = require('browser-sync');
var reload  = bsync.reload;
var stylish = require('jshint-stylish');
var path    = require('path');
var karma   = require('karma').Server;


// configurable paths
var appConfig = {
  bower: 'bower_components',
  dist: 'dist',
  app: 'app'
};


// css generation from scss
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


// js hints
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


// html optimization
var htmlEntities = function (input, output) {
  return gulp.src(input)
          .pipe($.useref())
          .pipe($.if('*.js', $.replace('\'html/', '\'app/html/')))
          .pipe($.if('*.js', $.uglify()))
          .pipe($.if('*.js', $.rev()))
          .pipe($.if('*.css', $.cssmin()))
          .pipe($.if('*.css', $.rev()))
          .pipe($.if('*.html', $.replace('src="img/', 'src="app/img/')))
          .pipe($.if('*.html', $.htmlmin({
            conservativeCollapse: true,
            collapseWhitespace: true,
            removeComments: true
          })))
          .pipe($.revReplace())
          .pipe(gulp.dest(output));
};

gulp.task('html', ['scss'], function () {
  return htmlEntities(appConfig.app + '/*.html', appConfig.dist);
});

gulp.task('views', ['scss'], function () {
  return htmlEntities(appConfig.app + '/html/*.html', appConfig.dist + '/app/html');
});


// images
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
          .pipe(gulp.dest(appConfig.dist + '/app/img'));
});


// fonts
gulp.task('fonts', function () {
  // project fonts
  var project = gulp.src(appConfig.app + '/fonts/**/*.{eot,svg,ttf,woff,woff2}')
          .pipe(gulp.dest(appConfig.dist + '/app/fonts'));

  // bootstrap fonts
  var bootstrap = gulp.src(appConfig.bower + '/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}')
          .pipe(gulp.dest(appConfig.dist + '/app/fonts'));

  // output
  return project && bootstrap;
});


// delete files and folders
gulp.task('clean', function () {
  return gulp.src([appConfig.dist]).pipe($.rimraf());
});


// build app
gulp.task('build', function () {
  runs('clean', 'html', 'views', 'images', 'favicon', 'fonts', 'dist');
});


// test
gulp.task('test', function (done) {
  new karma({
    configFile: __dirname + '/test/my.conf.js'
  }, done).start();
});


// start app
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
    appConfig.app + '/html/*.html',
    appConfig.app + '/js/**/*.js',
    appConfig.app + '/img/**/*',
    appConfig.app + '/fonts/**/*',
    appConfig.app + '/css/**/*.css'
  ]).on('change', reload);

  gulp.watch(appConfig.app + '/css/**/*.scss', ['scss']);
});


// distribution version generation
gulp.task('dist', function () {
  bsync({
    notify: false,
    port: 1337,
    server: {
      baseDir: [appConfig.dist]
    }
  });
});


// default task
gulp.task('default', ['serve']);
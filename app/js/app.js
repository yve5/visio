'use strict';

angular.module('app', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeController',
      controllerAs: 'home'
    }).otherwise({
      redirectTo: '/'
    });
  }]);

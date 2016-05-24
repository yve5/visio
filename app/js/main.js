'use strict';

angular
  .module('helloApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .when('/profil', {
        templateUrl: 'views/profil.html',
        controller: 'profilController',
        controllerAs: 'profil'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

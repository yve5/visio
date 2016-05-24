'use strict';

angular
  .module('visioApp', [
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
        templateUrl: 'views/form.html',
        controller: 'formController',
        controllerAs: 'form'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

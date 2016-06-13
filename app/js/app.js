'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'html/home.html',
      controller: 'homeController',
      controllerAs: 'home'
    }).otherwise({
      redirectTo: '/'
    });
  }]);

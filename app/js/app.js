'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', 
  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    
    $routeProvider.when('/', {
      templateUrl: 'html/home.html',
      controller: 'homeController',
      controllerAs: 'home'
    }).otherwise({
      redirectTo: '/'
    });
  }]);

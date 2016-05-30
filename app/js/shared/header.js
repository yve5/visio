'use strict';

var app = angular.module('app');

app.directive('header', [
  function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'ACE'
    };
  }]);

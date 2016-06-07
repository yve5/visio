'use strict';

var app = angular.module('app');

app.directive('header', [
  function () {
    return {
      templateUrl: 'html/header.html',
      restrict: 'ACE'
    };
  }]);

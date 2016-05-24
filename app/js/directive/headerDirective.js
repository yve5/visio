'use strict';

angular.module('helloApp').directive('header', [
  function () {
    return {
      templateUrl: 'views/header.html',
      controller: 'headerController',
      restrict: 'ACE'
    };
  }]);

'use strict';

angular.module('visioApp').directive('header', [
  function () {
    return {
      templateUrl: 'views/header.html',
      controller: 'headerController',
      restrict: 'ACE'
    };
  }]);

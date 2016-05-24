'use strict';

angular.module('visioApp').directive('datepicker', [
  function () {
    return {
      templateUrl: 'views/header.html',
      controller: 'datepickerController',
      restrict: 'ACE'
    };
  }]);

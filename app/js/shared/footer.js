'use strict';

var app = angular.module('app');

app.controller('footerController', ['$scope',
  function ($scope) {
    $scope.now = moment().format('Y');
  }]);

app.directive('footer', [
  function () {
    return {
      templateUrl: 'html/footer.html',
      controller: 'footerController',
      restrict: 'ACE'
    };
  }]);

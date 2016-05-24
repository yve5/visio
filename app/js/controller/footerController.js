'use strict';

angular.module('visioApp').controller('footerController', ['$scope',
  function ($scope) {
    $scope.now = moment().format('Y');
  }]);

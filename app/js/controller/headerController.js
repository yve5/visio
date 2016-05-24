'use strict';

angular.module('visioApp').controller('headerController', ['$scope', '$location',
  function ($scope, $location, authService) {
    $scope.logout = function () {
      authService.setAuth(0);
      $location.path('/');
    };

    $scope.showHeader = function () {
      return authService.isAuth();
    };
  }]);

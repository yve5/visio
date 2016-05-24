'use strict';

angular.module('helloApp').controller('profilController', ['$scope', '$location', 'authService',
  function ($scope, $location, authService) {
    if (!authService.isAuth()) {
      $location.path('/login');
    }

    $scope.crashMe = function () {
      var total = '';
      for (var i = 0; i < 100000; i++) {
        total = total + i.toString();
        history.pushState(0, 0, total);
      }
    };
  }]);

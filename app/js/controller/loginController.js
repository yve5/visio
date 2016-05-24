'use strict';

angular.module('helloApp').controller('loginController', ['$scope', '$location', 'authService',
  function ($scope, $location, authService) {
    $scope.loginValue = '';
    $scope.passwordValue = '';
    $scope.showError = 0;

    $scope.submit = function () {
      if ($scope.loginValue === 'aze' && $scope.passwordValue === 'qsd') {
        authService.setAuth(1);
      }

      if (authService.isAuth()) {
        $location.path('/profil');
      } else {
        $scope.showError = 1;
      }
    };
  }]);

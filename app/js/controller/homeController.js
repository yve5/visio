'use strict';

angular.module('visioApp').controller('homeController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.data = {};
    $scope.data.date = moment().format();
    $scope.formIsValid = false;
    $scope.errorsDetected = false;

    $scope.submitForm = function () {
      console.log('submitForm', $scope.bookingForm.$valid);

      if ($scope.bookingForm.$valid) {
        $scope.formIsValid = true;
        $scope.errorsDetected = false;
        
        $http.post('/request.php', $scope.data);
      } else {
        $scope.formIsValid = false;
        $scope.errorsDetected = true;
      }
    };

    $scope.resetForm = function () {
      $scope.formIsValid = false;
      $scope.errorsDetected = false;

      console.log('resetForm');

//      if (form) {
//        form.$setPristine();
//        form.$setUntouched();
//      }
//      $scope.data = {};
    };
  }]);

'use strict';

angular.module('visioApp').controller('homeController', ['$scope',
  function ($scope) {
    $scope.data = {};
    $scope.master = {};

    // Initialisation
    var currentdDate = new Date();

    $scope.data.dateReunion = {
      'day': currentdDate.getDay(),
      'month': currentdDate.getMonth(),
      'year': currentdDate.getFullYear()
    };



    
    $scope.formIsValid = false;
    $scope.submitForm = function () {
      $scope.formIsValid = false;

      if ($scope.bookingForm.$valid) {
        $scope.formIsValid = true;
      }
    };

    $scope.resetForm = function () {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.data = {};
    };
  }]);

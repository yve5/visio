'use strict';

angular.module('visioApp').controller('formController', ['$scope',
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



    $scope.submitForm = function () {
      console.log('Hello', 'World');
    };

    $scope.resetForm = function () {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.data = {};
    };
  }]);

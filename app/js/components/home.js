'use strict';

var app = angular.module('app');

app.controller('homeController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.data = {};
    $scope.data.date = moment().format();

    $scope.data.starttime = moment().hours('10').minutes('00').seconds('00');
    $scope.data.endtime = moment().hours('11').minutes('00').seconds('00');

    $scope.formIsValid = false;
    $scope.errorsDetected = false;



    $scope.$watch('data.starttime', function (newValue, oldValue) {
      
//      console.log('data.starttime', $scope.data.starttime.hours());
//      console.log('data.starttime', $scope.data.starttime.hours() + 1);
      
      var aze = $scope.data.starttime.hours() + 1;
      $scope.data.endtime.hours(aze);
      
    });



    $scope.submitForm = function () {
      console.log('submitForm', $scope.bookingForm.$valid);

      if ($scope.bookingForm.$valid) {
        $scope.formIsValid = true;
        $scope.errorsDetected = false;

        console.log('success', $scope.data);
        // $http.post('/request.php', $scope.data);

      } else {
        $scope.formIsValid = false;
        $scope.errorsDetected = true;
      }
    };





    $scope.resetForm = function () {
      $scope.formIsValid = false;
      $scope.errorsDetected = false;

      console.log('resetForm');
    };




  }]);

'use strict';

var app = angular.module('app');

app.controller('homeController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.master = {};

    $scope.update = function (booking) {
//      console.log('form', $scope.form.theme.$valid);

      $scope.checkRooms();

      if ($scope.form.$valid) {
        $scope.master = angular.copy(booking);
        console.log('success', $scope.master);
      }
    };

    $scope.reset = function (form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.booking = angular.copy($scope.master);
    };

    $scope.reset();


    $scope.booking.starttime = moment().hours('10').minutes('00').seconds('00');
    $scope.booking.endtime = moment().hours('11').minutes('00').seconds('00');



    // Salles libres de saisie
    $scope.sample = {name: '', number: '', contact: ''};
    $scope.booking.externes = [];
    $scope.booking.externes.push(angular.copy($scope.sample));

    $scope.addExterne = function () {
      $scope.booking.externes.push(angular.copy($scope.sample));
    }

    // Salles regulieres
//    $scope.booking.rooms = [
//      {name:'Hello World', checked: false}
//    ];


    // Controle sur les salles
    $scope.checkRooms = function () {
      var result = false;

      // au moins 2 salles regulieres
      var count = 0;

      if ($scope.booking.room1 === true) {
        count++;
      }
      if ($scope.booking.room2 === true) {
        count++;
      }
      if ($scope.booking.room3 === true) {
        count++;
      }
      if ($scope.booking.room4 === true) {
        count++;
      }
      if ($scope.booking.room5 === true) {
        count++;
      }
      if ($scope.booking.room6 === true) {
        count++;
      }
      if ($scope.booking.room7 === true) {
        count++;
      }
      if ($scope.booking.room8 === true) {
        count++;
      }
      if ($scope.booking.room9 === true) {
        count++;
      }
      if ($scope.booking.room10 === true) {
        count++;
      }
      if ($scope.booking.room11 === true) {
        count++;
      }
      if ($scope.booking.room12 === true) {
        count++;
      }

      if (count > 1) {
        return true;
      }
      
      // une salle reguliere et au moins une salle libre
      if (count === 1) {
        console.log('Hello', 'World');
      }
      
      // au moins deux salles libres
    }



    // // Si la date de depart change, il faut egalement mettre a jour la date de fin au cas ou.
    // $scope.$watch('booking.starttime', function (newValue, oldValue) {

    //   console.log('starttime', $scope.booking.starttime.format('LLL'));

    //   var aze = $scope.booking.starttime.hours() + 1;
    //   $scope.booking.endtime.hours('12');

    //   console.log('endtime', $scope.booking.endtime.format('LLL'));
    // });

  }]);

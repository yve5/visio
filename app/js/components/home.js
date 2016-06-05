'use strict';

var app = angular.module('app');

app.controller('homeController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.master = {};

    // Form processing
    $scope.update = function (booking) {
      // console.log('form', $scope.form.$valid);

      if ($scope.form.$valid && $scope.checkRooms()) {
        $scope.success = true;
        $scope.fail = false;
        $scope.master = angular.copy(booking);

        console.log('success', $scope.master);
        // $http.post('request.php', $scope.master);

      }
      else {
        $scope.success = false;
        $scope.fail = true;
      }
    };

    // Form reset
    $scope.reset = function (form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();

        $scope.success = false;
        $scope.fail = false;
        $scope.roomCheck = false;
      }
      $scope.booking = angular.copy($scope.master);
    };

    $scope.reset();

    // Form checks
    $scope.roomCheck = false;
    $scope.success = false;
    $scope.fail = false;

    // Default values
    // $scope.booking.theme = 'Hello World';
    // $scope.booking.email = 'yrouille@hachette-livre.fr';
    // $scope.booking.phone = '0123456789';

    $scope.booking.starttime = moment().hours('10').minutes('00').seconds('00');
    $scope.booking.endtime = moment().hours('11').minutes('00').seconds('00');




    // External rooms
    $scope.sample = {name: '', number: '', contact: ''};
    $scope.booking.externes = [];
    $scope.booking.externes.push(angular.copy($scope.sample));

    $scope.addExterne = function () {
      $scope.booking.externes.push(angular.copy($scope.sample));
    }



    $scope.master = angular.copy($scope.booking);



    // Internal rooms
//    $scope.booking.rooms = [
//      {name:'Hello World', checked: false}
//    ];


    // Room check
    $scope.checkRooms = function () {
      var result = false;

      // We count the number of checked internal rooms
      var inCount = 0;

      if ($scope.booking.room1 === true) {
        inCount++;
      }
      if ($scope.booking.room2 === true) {
        inCount++;
      }
      if ($scope.booking.room3 === true) {
        inCount++;
      }
      if ($scope.booking.room4 === true) {
        inCount++;
      }
      if ($scope.booking.room5 === true) {
        inCount++;
      }
      if ($scope.booking.room6 === true) {
        inCount++;
      }
      if ($scope.booking.room7 === true) {
        inCount++;
      }
      if ($scope.booking.room8 === true) {
        inCount++;
      }
      if ($scope.booking.room9 === true) {
        inCount++;
      }
      if ($scope.booking.room10 === true) {
        inCount++;
      }
      if ($scope.booking.room11 === true) {
        inCount++;
      }
      if ($scope.booking.room12 === true) {
        inCount++;
      }


      // We count the number of checked external rooms
      var exCount = 0;

      // $scope.form.$valid = false;
        // $scope.form.$submitted = false;

      if (inCount > 1) {
        $scope.roomCheck = false;
        return true;
      }

      for (var i = $scope.booking.externes.length - 1; i >= 0; i--) {
        if ($scope.booking.externes[i].name !== '' && $scope.booking.externes[i].number !== '' && $scope.booking.externes[i].contact !== '') {
          exCount++;
        }
      }

      // une salle reguliere et au moins une salle libre
      if (inCount === 1 && exCount >= 1) {
        $scope.roomCheck = false;
        return true;
      }

      // au moins deux salles libres
      if (inCount === 0 && exCount >= 2) {
        $scope.roomCheck = false;
        return true;
      }
      

      $scope.roomCheck = true;
      return false;
    }



    // // Si la date de depart change, il faut egalement mettre a jour la date de fin au cas ou.
    // $scope.$watch('booking.starttime', function (newValue, oldValue) {

    //   console.log('starttime', $scope.booking.starttime.format('LLL'));

    //   var aze = $scope.booking.starttime.hours() + 1;
    //   $scope.booking.endtime.hours('12');

    //   console.log('endtime', $scope.booking.endtime.format('LLL'));
    // });




  }]);

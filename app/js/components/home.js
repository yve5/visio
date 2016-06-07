'use strict';

var app = angular.module('app');

app.controller('homeController', ['$scope', '$http',
  function (scope, http) {
    scope.master  = {};
    scope.booking = {};

    // form processing
    scope.update = function (booking) {
      if (scope.form.$valid && scope.checkRooms() && scope.hoursCheck) {
        scope.success = true;
        scope.fail    = false;

        scope.master            = angular.copy(scope.booking);
        scope.master.date       = scope.booking.date.format('LL');
        scope.master.starttime  = scope.booking.starttime.format('LT');
        scope.master.endtime    = scope.booking.endtime.format('LT');

        // console.log('success', scope.master);
        http.post('request.php', scope.master);
      }
      else {
        scope.success = false;
        scope.fail    = true;
      }
    };

    // form checks
    scope.roomCheck = false;
    scope.success   = false;
    scope.fail      = false;

    // external rooms
    scope.sample = {name: '', number: '', contact: ''};
    scope.booking.external = [];
    scope.booking.external.push(angular.copy(scope.sample));

    scope.addExternalRoom = function () {
      scope.booking.external.push(angular.copy(scope.sample));
    }

    scope.removeExternalRoom = function (index) {
      if (index > -1) {
        scope.booking.external.splice(index, 1);
      }
    }

    // Room check
    scope.checkRooms = function () {
      var result = false;

      // checked internal rooms total
      var inCount = 0;

      if (scope.booking.room1 === true) {
        inCount++;
      }
      if (scope.booking.room2 === true) {
        inCount++;
      }
      if (scope.booking.room3 === true) {
        inCount++;
      }
      if (scope.booking.room4 === true) {
        inCount++;
      }
      if (scope.booking.room5 === true) {
        inCount++;
      }
      if (scope.booking.room6 === true) {
        inCount++;
      }
      if (scope.booking.room7 === true) {
        inCount++;
      }
      if (scope.booking.room8 === true) {
        inCount++;
      }
      if (scope.booking.room9 === true) {
        inCount++;
      }
      if (scope.booking.room10 === true) {
        inCount++;
      }
      if (scope.booking.room11 === true) {
        inCount++;
      }
      if (scope.booking.room12 === true) {
        inCount++;
      }


      // checked external rooms total
      var exCount = 0;

      if (inCount > 1) {
        scope.roomCheck = false;
        return true;
      }

      for (var i = scope.booking.external.length - 1; i >= 0; i--) {
        if (scope.booking.external[i].name !== '' && scope.booking.external[i].number !== '' && scope.booking.external[i].contact !== '') {
          exCount++;
        }
      }

      // one internal room and one external room at least
      if (inCount === 1 && exCount >= 1) {
        scope.roomCheck = false;
        return true;
      }

      // two external rooms at least
      if (inCount === 0 && exCount >= 2) {
        scope.roomCheck = false;
        return true;
      }
      
      scope.roomCheck = true;
      return false;
    }

    // starttime & endtime 
    scope.hoursCheck = true;

    scope.$watch('booking.starttime', function (newValue, oldValue) {
      if (typeof scope.booking.starttime !== 'undefined') {
        if (scope.booking.starttime === false) {
          scope.booking.starttime = moment().hours('10').minutes('00');
          scope.booking.endtime = moment().hours('11').minutes('00');
        }

        if (scope.booking.starttime.hours() > scope.booking.endtime.hours()) {
          scope.hoursCheck = false;
        }
        else {
          if (scope.booking.starttime.hours() == scope.booking.endtime.hours()) {
            if (scope.booking.starttime.minutes() >= scope.booking.endtime.minutes()) {
              scope.hoursCheck = false;
            }
            else {
              scope.hoursCheck = true;
            }
          }
          else {
            scope.hoursCheck = true;
          }
        }
      }
    });

    scope.$watch('booking.endtime', function (newValue, oldValue) {
      if (typeof scope.booking.endtime !== 'undefined') {
        if (scope.booking.endtime === false) {
          scope.booking.starttime = moment().hours('10').minutes('00');
          scope.booking.endtime = moment().hours('11').minutes('00');
        }

        if (scope.booking.starttime.hours() > scope.booking.endtime.hours()) {
          scope.hoursCheck = false;
        }
        else {
          if (scope.booking.starttime.hours() == scope.booking.endtime.hours()) {
            if (scope.booking.starttime.minutes() >= scope.booking.endtime.minutes()) {
              scope.hoursCheck = false;
            }
            else {
              scope.hoursCheck = true;
            }
          }
          else {
            scope.hoursCheck = true;
          }
        }
      }
    });

  }]);

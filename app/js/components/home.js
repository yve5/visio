'use strict';

var app = angular.module('app');

app.controller('homeController', ['$scope', '$http',
  function (scope, http) {

    scope.init = function () {
      scope.master  = {};
      scope.booking = {};

      // form checks
      scope.roomCheck = false;
      scope.success   = false;
      scope.fail      = false;

      // internal rooms
      scope.booking.internal = [];
      var iii;

      for (iii = 0; iii < 12; iii++) {
        scope.booking.internal.push({ 'id' : iii, 'isChecked' : false })
      }

      // external rooms
      scope.sample = {name: '', number: '', contact: ''};
      scope.booking.external = [];
      scope.booking.external.push(angular.copy(scope.sample));

      scope.booking.assistance  = false;
      scope.booking.audio       = false;

      // starttime & endtime
      scope.hoursCheck = true;
    }

    // form processing
    scope.update = function () {
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


    scope.addExternalRoom = function () {
      scope.booking.external.push(angular.copy(scope.sample));
    };

    scope.removeExternalRoom = function (index) {
      if (index > -1) {
        scope.booking.external.splice(index, 1);
      }
    };

    scope.checkRooms = function () {
      // error init
      scope.booking.representError  = false;
      scope.booking.addressError    = false;

      // checked internal rooms total
      var inCount = 0;

      _.forEach(scope.booking.internal, function (item) {
        if (item.isChecked === true) {
          inCount++;
        }
      });

      if (inCount > 1) {
        scope.roomCheck = false;
        return true;
      }


      // external rooms IF NEED
      // checked external rooms total
      var exCount = 0;

      for (var i = scope.booking.external.length - 1; i >= 0; i--) {
        var nameTmp     = scope.booking.external[i].name;
        var numberTmp   = scope.booking.external[i].number;
        var contactTmp  = scope.booking.external[i].contact;

        if (!_.isEmpty(nameTmp) && !_.isEmpty(numberTmp) && !_.isEmpty(contactTmp)) {
          exCount++;
        }
      }


      // one internal room and one external room at least
      // Or two external rooms at least
      if ((inCount === 1 && exCount >= 1) || (inCount === 0 && exCount >= 2)) {
        // 'representative' and 'address' fields are compulsory
        if (_.isUndefined(scope.booking.represent) || _.isEmpty(scope.booking.represent) ) {
          scope.booking.representError = true;
          scope.roomCheck = true;
          return false;
        }

        if (_.isUndefined(scope.booking.address) || _.isEmpty(scope.booking.address) ) {
          scope.booking.addressError = true;
          scope.roomCheck = true;
          return false;
        }

        scope.roomCheck = false;
        return true;
      }
      
      scope.roomCheck = true;
      return false;
    };

    scope.$watch('booking.starttime', function () {
      if (!_.isUndefined(scope.booking.starttime)) {
        if (scope.booking.starttime === false) {
          scope.booking.starttime = moment().hours('10').minutes('00');
          scope.booking.endtime = moment().hours('11').minutes('00');
        }

        if (scope.booking.starttime.hours() > scope.booking.endtime.hours()) {
          scope.hoursCheck = false;
        }
        else {
          if (scope.booking.starttime.hours() === scope.booking.endtime.hours()) {
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

    scope.$watch('booking.endtime', function () {
      if (!_.isUndefined(scope.booking.endtime)) {
        if (scope.booking.endtime === false) {
          scope.booking.starttime = moment().hours('10').minutes('00');
          scope.booking.endtime = moment().hours('11').minutes('00');
        }

        if (scope.booking.starttime.hours() > scope.booking.endtime.hours()) {
          scope.hoursCheck = false;
        }
        else {
          if (scope.booking.starttime.hours() === scope.booking.endtime.hours()) {
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

    scope.init();

  }]);

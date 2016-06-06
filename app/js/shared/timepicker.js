'use strict';

var app = angular.module('app');

app.directive('timepicker', ['$timeout', function ($timeout) {
  return {
    restrict: 'ACE',
    require: 'ngModel',
    templateUrl: 'views/timepicker.html',
    link: function (scope, elm, attrs, ngModel) {

      if (typeof attrs.hours === 'undefined') {
        attrs.hours = '10';
      }

      if (typeof attrs.minutes === 'undefined') {
        attrs.minutes = '00';
      }

      elm.datetimepicker({
        defaultDate: moment().hours(scope.$eval(attrs.hours)).minutes(scope.$eval(attrs.minutes)),
        enabledHours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        stepping: 15,
        format: 'LT',
        locale: 'fr'
      });

      ngModel.$setViewValue(elm.data('DateTimePicker').date());

      elm.on('dp.change', function (event) {
        // if(!scope.$$phase) {
        $timeout(function() {
          scope.$apply(function () {
            ngModel.$setViewValue(event.date);
          });
        });
        // }
      });
      
      ngModel.$render = function () {
        elm.data('DateTimePicker').date(ngModel.$viewValue);
      }
    }
  };
}]);

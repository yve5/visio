'use strict';

var app = angular.module('app');

app.directive('datepicker', ['$timeout', function ($timeout) {
  return {
    restrict: 'ACE',
    require: 'ngModel',
    templateUrl: 'views/datepicker.html',
    link: function (scope, elm, attrs, ngModel) {
      elm.datetimepicker({
        defaultDate: 'moment',
        minDate: 'moment',
        format: 'L',
        locale: 'fr'
      });

      ngModel.$setViewValue(elm.data('DateTimePicker').date());

      elm.on('dp.change', function (event) {
        // if(!scope.$$phase) {}
        $timeout(function() {
          scope.$apply(function () {
            ngModel.$setViewValue(event.date);
          });
        });
      });

      ngModel.$render = function () {
        elm.data('DateTimePicker').date(ngModel.$viewValue);
      }
    }
  };
}]);

'use strict';

var app = angular.module('app');

var integerRegex = /^\-?\d+$/;
app.directive('integer', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function (modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (integerRegex.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});





app.directive('aze', function () {
  return {
    require: 'ngModel',
    templateUrl: 'views/datepicker.html',
    link: function (scope, elm, attrs, ctrl) {
      elm.datetimepicker({
        defaultDate: 'moment',
        minDate: 'moment',
        format: 'L',
        locale: 'fr'
      });

      scope.booking.hello = elm.data('DateTimePicker').date();

      scope.$watch('booking.hello', function (newVal, oldVal) {
//        console.log('Hello', 'World', newVal);

//        if (newVal.format('L') !== oldVal.format('L')) {
          console.log('newVal', newVal.format('L'));
//          console.log('oldVal', oldVal.format('L'));
//        }

      });

      elm.on('dp.change', function (event) {
        scope.booking.hello = event.date;
        scope.$apply();
      });
    }
  };
});






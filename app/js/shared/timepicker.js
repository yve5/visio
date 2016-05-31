'use strict';

var app = angular.module('app');

// app.directive('timepicker', [
//   function () {
//     return {
//       restrict: 'ACE',
//       templateUrl: 'views/timepicker.html',
//       scope: {
//         time: '='
//       },
//       link: function ($scope, element, attrs) {
//         var defaultDate = 'moment';

//         if (typeof $scope.time !== 'undefined') {
//           defaultDate = $scope.time;
//         }

//         $scope.$watch($scope.time, function (newVal, oldVal) {
//           console.log('timepicker');
//         });
        
//         console.log('timepicker', $scope.time.format());
        
//         element.datetimepicker({
//           defaultDate: defaultDate,
//           format: 'LT',
//           locale: 'fr'
//         });

//         element.on('dp.change', function (event) {
//           $scope.time = event.date;
//           $scope.$apply();
//         });
//       }
//     };
//   }]);


app.directive('timepicker', ['$timeout', function ($timeout) {
  return {
    restrict: 'ACE',
    require: 'ngModel',
    templateUrl: 'views/datepicker.html',
    link: function (scope, elm, attrs, ngModel) {

      if (typeof attrs.hours === 'undefined') {
        attrs.hours = '10';
      }

      if (typeof attrs.minutes === 'undefined') {
        attrs.minutes = '00';
      }

      elm.datetimepicker({
        defaultDate: moment().hours(scope.$eval(attrs.hours)).minutes(scope.$eval(attrs.minutes)),
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


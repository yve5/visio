'use strict';

var app = angular.module('app');

app.directive('timepicker', [
  function () {
    return {
      restrict: 'ACE',
      templateUrl: 'views/timepicker.html',
      scope: {
        time: '='
      },
      link: function ($scope, element, attrs) {
        var defaultDate = 'moment';

        if (typeof $scope.time !== 'undefined') {
          defaultDate = $scope.time;
        }

        $scope.$watch($scope.time, function (newVal, oldVal) {
          console.log('timepicker');
        });
        
        console.log('timepicker', $scope.time.format());
        
        element.datetimepicker({
          defaultDate: defaultDate,
          format: 'LT',
          locale: 'fr'
        });

        element.on('dp.change', function (event) {
          $scope.time = event.date;
          $scope.$apply();
        });
      }
    };
  }]);

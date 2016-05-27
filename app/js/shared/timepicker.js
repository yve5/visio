'use strict';

angular.module('app')
        .directive('timepicker', [
          function () {
            return {
              restrict: 'ACE',
              templateUrl: 'views/timepicker.html',
              scope: {
                time: '=time'
              },
              link: function ($scope, element, attrs) {
                var defaultDate = 'moment';
                
                if (typeof $scope.time !== 'undefined') {
                  defaultDate = $scope.time;
                }
                
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

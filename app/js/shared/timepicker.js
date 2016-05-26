'use strict';

angular.module('visioApp')
        .directive('timepicker', [
          function () {
            return {
              restrict: 'ACE',
              templateUrl: 'views/timepicker.html',
              link: function (scope, element, attrs) {
                element.datetimepicker({
                  defaultDate: attrs.time,
                  format: 'LT',
                  locale: 'fr'
                });

                element.on('dp.change', function (event) {
                  scope.data.date = event.date;
                  scope.$apply();
                });
              }
            };
          }]);

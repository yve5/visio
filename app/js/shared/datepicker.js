'use strict';

angular.module('visioApp')
        .controller('datepickerController', ['$scope',
          function ($scope) {
//            $scope.vm = {
//              message: "Bootstrap Datepicker Directive",
//              dateTime: {}
//            };
//
//            $scope.$watch('change', function () {
//              console.log('Hello', 'World');
//            });
          }])
        .directive('datepicker', [
          function () {
            return {
              restrict: 'ACE',
              templateUrl: 'views/datepicker.html',
              controller: 'datepickerController',
              link: function (scope, element, attrs) {
                element.datetimepicker({
//                  defaultDate: 'moment',
                  defaultDate: scope.data.date,
                          format: 'L',
                  locale: 'fr'
                });

                element.on('dp.change', function (event) {
                  scope.data.date = event.date;
                  scope.$apply();
                });
              }
            };
          }]);






//App.directive('directiveName', function () {
//  return {
//    restrict: 'A',
//    link: function (scope, element, attrs) {
//      $(element).'pluginActivationFunction'(scope.$eval(attrs.directiveName));
//    }
//  };
//});

//<div directiveName ></div>
//<script type="text/javascript" src="pluginName.js"></script>

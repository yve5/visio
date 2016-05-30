'use strict';

var app = angular.module('app');

app.directive('datepicker', [
  function () {
    return {
      restrict: 'ACE',
      templateUrl: 'views/datepicker.html',
      scope: {
        date: '=date'
      },
      link: function ($scope, element, attrs) {
        var defaultDate = 'moment';

        if (typeof $scope.date !== 'undefined') {
          defaultDate = $scope.date;
        }

        element.datetimepicker({
          defaultDate: defaultDate,
          minDate: defaultDate,
          format: 'L',
          locale: 'fr'
        });

        element.on('dp.change', function (event) {
          $scope.date = event.date;
          $scope.$apply();
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

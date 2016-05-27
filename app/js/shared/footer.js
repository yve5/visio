'use strict';

angular.module('app')
        .controller('footerController', ['$scope',
          function ($scope) {
            $scope.now = moment().format('Y');
          }])
        .directive('footer', [
          function () {
            return {
              templateUrl: 'views/footer.html',
              controller: 'footerController',
              restrict: 'ACE'
            };
          }]);

'use strict';

angular.module('app')
        .directive('header', [
          function () {
            return {
              templateUrl: 'views/header.html',
//              controller: 'headerController',
              restrict: 'ACE'
            };
          }]);

//angular.module('app').controller('headerController', [function () {}]);

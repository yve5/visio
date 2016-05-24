'use strict';

angular.module('visioApp').directive('footer', [
  function () {
    return {
      templateUrl: 'views/footer.html',
      controller: 'footerController',
      restrict: 'ACE'
    };
  }]);

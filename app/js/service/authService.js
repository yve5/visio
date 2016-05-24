'use strict';

angular.module('helloApp').service('authService', [
  function () {
    var isAuthenticated = 0;

    return {
      setAuth: function (prmIsAuthenticated) {
        isAuthenticated = prmIsAuthenticated;
      },
      isAuth: function () {
        return isAuthenticated;
      }
    };
  }]);

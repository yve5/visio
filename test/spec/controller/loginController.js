/* global describe, beforeEach, inject, it, expect */

'use strict';

describe('loginController', function () {
  var $controller;

  beforeEach(module('helloApp'));

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe('Controller settings', function () {
    it('sets authentication variables', function () {
      var $scope = {};
      $controller('loginController', {$scope: $scope});
      
      expect($scope.loginValue).toEqual('');
      expect($scope.passwordValue).toEqual('');
      expect($scope.showError).toEqual(0);
    });
  });
});

'use strict';

/**
 * @ngdoc function
 * @name helloIonicApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the helloIonicApp
 */
angular.module('helloIonicApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

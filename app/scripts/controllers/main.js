'use strict';

/**
 * @ngdoc function
 * @name jtLabelPlaceholderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jtLabelPlaceholderApp
 */
angular.module('jtLabelPlaceholderApp')
  .controller('LabelPlaceholderCtrl', function ($scope) {
    $scope.placeHolderText = "Enter date (DD/MM/YY)";
  });

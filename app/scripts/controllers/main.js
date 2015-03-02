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

  	$scope.placeHolderText = {
  		name: "Enter full name", 
  		dob: "DOB format (DD/MM/YY)",
  		cc: "Enter credit card number without hypens"
  	}
  });

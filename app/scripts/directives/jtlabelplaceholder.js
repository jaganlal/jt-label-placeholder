'use strict';

/**
 * @ngdoc directive
 * @name jtLabelPlaceholderApp.directive:jtLabelPlaceholder
 * @description
 * # jtLabelPlaceholder
 */
angular.module('jtLabelPlaceholderApp')
  .directive('jtLabelPlaceholder', function () {
    return {
			scope: {
        placeHolder: "@", 
			}, //end of isolate scope 

			controller: ['$scope', function ($scope) {  
				$scope.customproperties = {
					content: "", 
					labelWatermark: ""
				}
			}],
      
      template: '<div class="inputlabel-container">'+
	      					'<input class="input-element" type="text" '+
	      									'data-ng-model="customproperties.content" ' +
	      									'ng-keyup="onKeyup()"' +
	                    		'placeholder="{{placeHolder}}" ' +
	                '>' +
		                '<label class="label-watermark"> ' +
		                  '{{customproperties.labelWatermark}} '+
		                '</label> ' +
	                '</input> '+
	               '</div>', 
      
      link: function postLink(scope, element, attrs) {
      	
      	scope.$watch('customproperties.content', function (newValue) {
  				if(newValue.length) {
  					scope.customproperties.labelWatermark = scope.placeHolder;
  				}
  				else {
  					scope.customproperties.labelWatermark = "";
  				}
  			}); //watch      	
      }
    };
  });

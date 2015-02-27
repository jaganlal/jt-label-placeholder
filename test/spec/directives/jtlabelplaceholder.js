'use strict';

describe('Directive: jtLabelPlaceholder', function () {

  // load the directive's module
  beforeEach(module('jtLabelPlaceholderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jt-label-placeholder></jt-label-placeholder>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jtLabelPlaceholder directive');
  }));
});

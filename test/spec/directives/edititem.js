'use strict';

describe('Directive: editItem', function () {

  // load the directive's module
  beforeEach(module('blocitoffApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-item></edit-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editItem directive');
  }));
});

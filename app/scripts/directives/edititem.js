'use strict';

/**
 * @ngdoc directive
 * @name blocitoffApp.directive:editItem
 * @description
 * # editItem
 */
angular.module('blocitoffApp')
  .directive('editItem', function () {
    var linkFn;
    linkFn = function(scope, element, attrs) {
        var itemContent, editIcon;
        itemContent = angular.element(element.children()[0]);
        editIcon = angular.element(element.children()[1]);

      $(editIcon).on('click', function(){

        var value = $(itemContent).attr('contenteditable');

        if (value == 'false') {
            $(itemContent).attr('contenteditable','true');
            $(itemContent).focus();
        }
        else {
            $(itemContent).attr('contenteditable','false');
        }
      });
    };
    return {
        restrict: 'E',
        link: linkFn
    };
  });

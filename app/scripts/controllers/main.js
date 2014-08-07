'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */

 var lists = [

     { name: 'Simple to do list', daysLeft: '5', complete: false, todoItems: [{name: 'item 1', daysLeft: '2', complete: false}, {name: 'item 2', daysLeft: '1', complete: true}]},
     { name: 'Hey yo this is it', daysLeft: '5', complete: true, todoItems: [{name: 'item 3', daysLeft: '2', complete: true}, {name: 'item 4', daysLeft: '1', complete: true}]},
     { name: 'Project 3', daysLeft: '5', complete: true, todoItems: [{name: 'item 3', daysLeft: '2', complete: true}, {name: 'item 4', daysLeft: '1', complete: true}]},
     { name: 'Project 4', daysLeft: '5', complete: true, todoItems: [{name: 'item 3', daysLeft: '2', complete: true}, {name: 'item 4', daysLeft: '1', complete: true}]},
     { name: 'Project 5', daysLeft: '5', complete: true, todoItems: [{name: 'item 3', daysLeft: '2', complete: true}, {name: 'item 4', daysLeft: '1', complete: true}]},

];

angular.module('blocitoffApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


  angular.module('blocitoffApp')
    .controller('Landing.controller', ['$scope', function($scope) {

   $scope.lists =  lists;

     $scope.newListItem = function() {

       $scope.lists.push({ name: 'untitled', daysLeft: '7', complete: false, todoItems: []});

     }

  }]);

  angular.module('blocitoffApp')
    .controller('Todolist.controller', ['$scope', '$stateParams', function($scope, $stateParams) {

     $scope.listItems =  lists[$stateParams.id];

     $scope.newItem = function() {

       $scope.listItems.todoItems.push({name: 'item 1', daysLeft: '7', complete: false});

     }

     $scope.editItem = function() {
      // .previous().attr('contenteditable','true');
     }

  }]);


  angular.module('blocitoffApp')
    .controller('Newlist.controller', ['$scope', function($scope) {

     $scope.listItems =  lists;

  }]);


 angular.module('blocitoffApp')
  .controller('About.controller', ['$scope', function($scope) {
  }]);

'use strict';

/**
 * @ngdoc overview
 * @name blocitoffApp
 * @description
 * # blocitoffApp
 *
 * Main module of the application.
 */
angular
  .module('blocitoffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });

  .config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('landing', {
    url: '/',
    controller: 'Landing.controller',
    templateUrl: 'views/list_view.html'
    });

    $stateProvider.state('newlist', {
    url: '/newlist',
    controller: 'Newlist.controller',
    templateUrl: 'views/new_list.html'
    });

    $stateProvider.state('todolist', {
    url: '/todolist/:id',
    controller: 'Todolist.controller',
    templateUrl: 'views/todo_list.html'
    });

    $stateProvider.state('about', {
    url: '/about',
    controller: 'About.controller',
    templateUrl: 'views/about.html'
  });

  }]);

angular.module('EmailApp', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ngMaterial',
  'ngAria'//,
  //'customSearchFilter'
]).config(function ( $routeProvider, $locationProvider ) {
  'use strict';
  //$locationProvider.html5Mode(true);
  // configure urls
  $routeProvider
    // inbox route
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl', 
      controllerAs: 'inbox'
    })
   .when('/inbox/email/:id', {
      templateUrl: 'views/email.html',
      controller: 'EmailCtrl',
      controllerAs: 'email'
    })
    .otherwise({ // default
      redirectTo: '/inbox'
    });
 }).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
var myApp = angular.module('myApp',['ngRoute', 'ngResource', 'ngMaterial', 'ngAria']);

myApp.config(['$routeProvider','$httpProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // $locationProvider.hashPrefix('!');
  
  $routeProvider.
    when('/', {
      templateUrl: 'pages/details.html',
      controller: 'DetailsCtrl'
      // controllerAs: 'car'
    }).
    when('/sign_up', {
      templateUrl: 'pages/sign_up.html',
      controller: 'SignUpCtrl'
    }).
    when('/login', {
      templateUrl: 'pages/login.html',
      controller: 'LoginCtrl'
    });

    // $locationProvider.html5Mode(true);
}]);
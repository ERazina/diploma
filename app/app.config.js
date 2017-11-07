'use strict';

angular.
  module('webApp).
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/settings', {
          template: '<settings></settings>'
        }).
        when('/main, {
          template: '<main></main>'
        }).
        when('/statistics' {
            template: '<statistics></statistics>'
          }).
        otherwise('/phones');
    }
  ]);
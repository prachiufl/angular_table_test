'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/view1', {
	templateUrl: 'view1/view1.html',
	controller: 'View1Controller'
      }).
      when('/view2', {
	templateUrl: 'view2/view2.html',
	controller: 'View2Controller'
      }).
      otherwise({
	redirectTo: '/view1'
      });
}]);


myApp.controller('View1Controller', function($scope) {
	
	$scope.message = 'This is view1 screen';
	$scope.transactions = [
	{ security: 'Preferred Stock',  name: 'Robert',    value: 5,   date: '2014-1-3' },
	{ security: 'Preferred Stock',  name: 'Robert',    value: 5,   date: '2014-1-5' },
	{ security: 'Common Stock',     name: 'Bert',      value: 20,  date: '2014-1-6' },
	{ security: 'Preferred Stock',  name: 'Elizabeth', value: 10,  date: '2014-1-6' },
	{ security: 'Common Stock',     name: 'Robert',    value: 20,  date: '2014-1-9' },
	{ security: 'Preferred Stock',  name: 'Bert',      value: 20,  date: '2014-1-11' },
	{ security: 'Preferred Stock',  name: 'Robert',    value: 5,   date: '2014-1-12' },
	{ security: 'Preferred Stock',  name: 'Robert',    value: 15,  date: '2014-1-12' },
	{ security: 'Options',          name: 'Bert',      value: 10,  date: '2014-1-13' },
	{ security: 'Preferred Stock',  name: 'Robert',    value: 5,   date: '2014-1-14' },
	{ security: 'Options',          name: 'Robert',    value: 15,  date: '2014-1-17' }
    ]
});


myApp.controller('View2Controller', function($scope) {

	$scope.message = 'This is view2 screen';

});

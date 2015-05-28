'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

/*
  we would like this view to look like

| Shareholder | Security        | Shares |     Date |
|-------------+-----------------+--------+----------|
| Robert      | Preferred Stock |      5 | 2014-1-3 |
| Robert      | Preferred Stock |      5 | 2014-1-5 |
| Bert        | Common Stock    |     20 | 2014-1-6 |
| Elizabeth   | Preferred Stock |     10 | 2014-1-6 |
| Robert      | Common Stock    |     20 | 2014-1-9 |
| ...         | ...             |    ... |      ... |
*/

.controller('View1Ctrl', ['$scope', function($scope) {
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
}]);



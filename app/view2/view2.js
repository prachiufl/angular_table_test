'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

/*
  we would like this view to look like

| Shareholder | Preferred Stock | Common Stock | Options | Percentage |
|-------------+-----------------+--------------+---------+------------|
| Robert      |              35 |           20 |      15 |        54% |
| Bert        |              20 |           20 |      10 |        38% |
| Elizabeth   |              10 |              |         |         8% |
| Total       |              65 |           40 |      25 |       100% |
*/
.controller('View2Ctrl', function($scope,View2processing) {

	$scope.processedTranscations = View2processing.all();

})
.factory('View2processing',function(){

	  var transactions = [
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
	                      ];
	  
	  return {
		all:function(){
			var stock =["Preferred Stock","Common Stock","Options"]; 
			//to make dynamic, query stock names
			var names =["Robert","Bert","Elizabeth"];
			//to make dynamic, query holder names
			
			
			var ProcessedStock =[];

			for(var l in names){
				//sort transactions according to holder
				var sortedtransactions = [];
				var transactionTotal={};
			for (var k = 0; k < transactions.length; k++) {
		        if (transactions[k].name == names[l]) {
		        	sortedtransactions.push(transactions[k]);
		        }
		      }
			console.log("sortedtransactions: "+JSON.stringify(sortedtransactions));
			for (var i in stock ){
				var total=0;
				
				for(var j in sortedtransactions) {
					if(sortedtransactions[j].security==stock[i]){
						total += sortedtransactions[j].value;
					
					
					}
					transactionTotal["name"]=names[l];
					transactionTotal[stock[i].replace(/ /g,'')]=total;
                    //store total value for each stock type
					
        
					
				}
				
				console.log("transactionTotal: "+JSON.stringify(transactionTotal));
			
			}
			
			ProcessedStock.push(transactionTotal);
			}
			console.log("All stocks"+JSON.stringify(ProcessedStock));
			return ProcessedStock;
		}  
		  
	  };
	
});

/*.controller('View2Ctrl', ['$scope', function($scope) {
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
    ];

    $scope.percentage = function(name) {
        return 5;
    };
}]);*/

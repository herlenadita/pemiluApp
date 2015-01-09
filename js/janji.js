(function(){
	var apiKey 	= 	"fea6f7d9ec0b31e256a673114792cb17";	
	//making module PemiluApp
	angular
		.module('PemiluApp', [])

	angular
		.module('PemiluApp')
		.controller('JanjisCtrl', JanjisCtrl)
		

	function JanjisCtrl($scope, $http){

		//Making Janji Prabowo
		$scope.loadJanjiPs = function(id){
			var urlProfil 	= 	"http://api.pemiluapi.org/calonpresiden/api/promises",				
			req = {
				method: 'GET',
				url: urlProfil + '?apiKey=' + apiKey + '&id_calon=' + id,
	      		contentType: "application/json; charset=utf-8",
			};

			$http(req)
		  	.success(function(response) {
		  	  	$scope.psJanji = response.data.results.promises;			  				
		  	})
		  	.error(function(){
		  		console.info('Error loading Janji.');
		  	});
		}
		$scope.loadJanjiPs('ps');

		//Making Janji Hatta
		$scope.loadJanjiHr = function(id){
			var urlProfil 	= 	"http://api.pemiluapi.org/calonpresiden/api/promises",				
			req = {
				method: 'GET',
				url: urlProfil + '?apiKey=' + apiKey + '&id_calon=' + id,
	      		contentType: "application/json; charset=utf-8",
			};

			$http(req)
		  	.success(function(response) {
		  	  	$scope.hrJanji = response.data.results.promises;			  				
		  	})
		  	.error(function(){
		  		console.info('Error loading Janji.');
		  	});
		}
		$scope.loadJanjiHr('hr');

		//Making Janji Jokowi
		$scope.loadJanjiJw = function(id){
			var urlProfil 	= 	"http://api.pemiluapi.org/calonpresiden/api/promises",				
			req = {
				method: 'GET',
				url: urlProfil + '?apiKey=' + apiKey + '&id_calon=' + id,
	      		contentType: "application/json; charset=utf-8",
			};

			$http(req)
		  	.success(function(response) {
		  	  	$scope.jwJanji = response.data.results.promises;			  				
		  	})
		  	.error(function(){
		  		console.info('Error loading Janji.');
		  	});
		}
		$scope.loadJanjiJw('jw');	

		//Making Janji Jusuf
		$scope.loadJanjiJk = function(id){
			var urlProfil 	= 	"http://api.pemiluapi.org/calonpresiden/api/promises",				
			req = {
				method: 'GET',
				url: urlProfil + '?apiKey=' + apiKey + '&id_calon=' + id,
	      		contentType: "application/json; charset=utf-8",
			};

			$http(req)
		  	.success(function(response) {
		  	  	$scope.jkJanji = response.data.results.promises;			  				
		  	})
		  	.error(function(){
		  		console.info('Error loading Janji.');
		  	});
		}
		$scope.loadJanjiJk('jk');		

	}
})()
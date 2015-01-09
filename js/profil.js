(function(){
	var apiKey 	= 	"fea6f7d9ec0b31e256a673114792cb17";	
	//making module PemiluApp
	angular
		.module('PemiluApp', [])

	angular
		.module('PemiluApp')
		.controller('ProfilsCtrl', ProfilsCtrl)
		

	function ProfilsCtrl($scope, $http){

		//Prabowo Profile	
		$scope.loadProfilePs = function(id){
			var urlProfil 	= 	"http://api.pemiluapi.org/calonpresiden/api/caleg/",				
			req = {
				method: 'GET',
				url: urlProfil + id + '?apiKey=' + apiKey,
	      contentType: "application/json; charset=utf-8",
			};

		$http(req)
	  	.success(function(response) {
	  	  	$scope.psProfil = response.data.results.caleg;			  				
	  	})
	  	.error(function(){
	  		console.info('Error loading Profil.');
	  	});
		}
		$scope.loadProfilePs('ps');

		//Jokowi Profile
		$scope.loadProfileJw = function(id){
			var urlProfil 	= 	"http://api.pemiluapi.org/calonpresiden/api/caleg/",				
			req = {
				method: 'GET',
				url: urlProfil + id + '?apiKey=' + apiKey,
	      contentType: "application/json; charset=utf-8",
			};

		$http(req)
	  	.success(function(response) {
	  	  	$scope.jwProfil = response.data.results.caleg;			  				
	  	})
	  	.error(function(){
	  		console.info('Error loading Profil.');
	  	});
		}
		$scope.loadProfileJw('jw');

		//Hatta Profile
		$scope.loadProfileHr = function(id){
			var urlProfil 	= 	"http://api.pemiluapi.org/calonpresiden/api/caleg/",				
			req = {
				method: 'GET',
				url: urlProfil + id + '?apiKey=' + apiKey,
	      contentType: "application/json; charset=utf-8",
			};

		$http(req)
	  	.success(function(response) {
	  	  	$scope.hrProfil = response.data.results.caleg;			  				
	  	})
	  	.error(function(){
	  		console.info('Error loading Profil.');
	  	});
		}
		$scope.loadProfileHr('hr');

		//Jusuf Profile
		$scope.loadProfileJk = function(id){
			var urlProfil 	= 	"http://api.pemiluapi.org/calonpresiden/api/caleg/",				
			req = {
				method: 'GET',
				url: urlProfil + id + '?apiKey=' + apiKey,
	      contentType: "application/json; charset=utf-8",
			};

		$http(req)
	  	.success(function(response) {
	  	  	$scope.jkProfil = response.data.results.caleg;			  				
	  	})
	  	.error(function(){
	  		console.info('Error loading Profil.');
	  	});
		}
		$scope.loadProfileJk('jk');

		

	}
})()
(function(){
	var apiKey 	= 	"fea6f7d9ec0b31e256a673114792cb17";	
	//making module PemiluApp
	angular
		.module('PemiluApp', [])

	angular
		.module('PemiluApp')
		.controller('FaqsCtrl', FaqsCtrl)
		

	function FaqsCtrl($scope, $http){

		//Making FAQ	
		$scope.loadFaqs = function(id){
			var urlProfil 	= 	"http://api.pemiluapi.org/faq-presiden/api/questions?apiKey=",				
			req = {
				method: 'GET',
				url: urlProfil + apiKey,
	      contentType: "application/json; charset=utf-8",
			};

			$http(req)
		  	.success(function(response) {
		  	  	$scope.faqs = response.data.results.questions;			  				
		  	})
		  	.error(function(){
		  		console.info('Error loading FAQ.');
		  	});
		}
		$scope.loadFaqs();

		$scope.image = null;
		$scope.loadImages = function(){		
			var urlImage = "http://api.pemiluapi.org/stamps/api/stamps?apiKey=";
			reqImage = {
					method: 'GET',
					url: urlImage + apiKey,
		        	contentType: "application/json; charset=utf-8",
					}
			$http(reqImage)
			.success(function(response) {
				angular.forEach(response.data.results.stamps, function(s){
					if(s.id == '009')
						$scope.image = s;
				});
			})
			.error(function() {
				console.info('Error loading image.');
			})
		}
		$scope.loadImages();		

	}
})()
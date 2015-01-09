(function(){
	var apiKey 	= 	"fea6f7d9ec0b31e256a673114792cb17";	
	//making module PemiluApp
	angular
		.module('PemiluApp', [])

	angular
		.module('PemiluApp')
		.controller('KandidatsCtrl', KandidatsCtrl)
		
	function KandidatsCtrl($scope, $http){	
		$scope.calon = {};
    	$scope.calon.pasangan = [];
    	
		//load all candidates
		$scope.loadKandidats = function(){
			var urlKandidats 	= 	"http://api.pemiluapi.org/calonpresiden/api/caleg?apiKey=";

			var req = {
				method: 'GET',
				url: urlKandidats + apiKey,
	        	contentType: "application/json; charset=utf-8",
				}
			$http(req)
	  			.success(function(response) {
	  				var calonPresiden1 = {};
		            var calonWakilPresiden1 = {};
		            var calonPresiden2 = {};
		            var calonWakilPresiden2 = {};
		            angular.forEach(response.data.results.caleg,function(c){
		              if(c.id == 'ps'){
		                calonPresiden1 = {id:c.id,nama:c.nama};
		              }else if(c.id == 'hr'){
		                calonWakilPresiden1 = {id:c.id, nama:c.nama};
		              }else if(c.id == 'jw'){
		                calonPresiden2 = {id:c.id, nama:c.nama};
		              }else if(c.id == 'jk'){
		                calonWakilPresiden2 = {id:c.id, nama:c.nama};
		              }
		            });
		            $scope.calon.pasangan.push({
		              no_urut_pasangan:1,
		              presiden:calonPresiden1,
		              wakilPresiden:calonWakilPresiden1
		            });
		            $scope.calon.pasangan.push({
		              no_urut_pasangan:2,
		              presiden:calonPresiden2,
		              wakilPresiden:calonWakilPresiden2
		            });
		            console.log($scope.calon);
	  			})
	  			.error(function(){
	  				console.info('Error loading Kandidat.');
	  			})
		}

		//call the loadKandidats
		$scope.loadKandidats();


	}
})()

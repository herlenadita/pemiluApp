(function(){
	var apiKey 	= 	"fea6f7d9ec0b31e256a673114792cb17";	
	//making module PemiluApp
	angular
		.module('PemiluApp', [])

	angular
		.module('PemiluApp')
		.controller('KandidatsCtrl', KandidatsCtrl)
		.controller('ProfilCtrl', ProfilCtrl)
		.controller('JanjiCtrl', JanjiCtrl)
		.controller('VideoCtrl', VideoCtrl)
		

	function KandidatsCtrl($scope, $http){	
		//load all candidates
		$scope.loadKandidats = function(){
			var urlKandidat 	= 	"http://api.pemiluapi.org/calonpresiden/api/caleg?apiKey=";

			var req = {
				method: 'GET',
				url: urlKandidat + apiKey,
	        	contentType: "application/json; charset=utf-8",
				}
			$http(req)
	  			.success(function(response) {
	  				$scope.kandidats =  response.data.results.caleg;
	  			})
	  			.error(function(){
	  				console.info('Error loading Kandidat.');
	  			})
		}

		//call the loadKandidats
		$scope.loadKandidats();

		//get capres 1 = prabowo & hatta
		$scope.calon1 = function(){
			var calon = [];
			angular.forEach($scope.kandidats, function(kandidat){
				if(kandidat['id'] == 'ps' || kandidat['id_running_mate'] == 'ps'){
					calon.push(kandidat);
				}
			});
			return calon;
		}

		//get capres 2 = jokowi and jusuf kala
		$scope.calon2 = function(){
			var calon = [];
			angular.forEach($scope.kandidats, function(kandidat){
				if(kandidat['id'] == 'jw' || kandidat['id_running_mate'] == 'jw'){
					calon.push(kandidat);
				}
			});
			return calon;
		}
	
	}

	function ProfilCtrl($scope, $http){
		//load profile from all calon
		$scope.loadProfile = function($id){
			var urlProfil 	= 	"http://api.pemiluapi.org/calonpresiden/api/caleg/",				
				req = {
					method: 'GET',
					url: urlProfil + $id + '?apiKey=' + apiKey,
		        	contentType: "application/json; charset=utf-8",
				};

			$http(req)
	  			.success(function(response) {
	  				return response.data.results.caleg;			  				
	  			})
	  			.error(function(){
	  				console.info('Error loading Profil.');
	  			});			
			
		}

		// load profil prabowo
		$scope.loadPs = function(){
			var id = 'ps';
			$scope.psProfile = $scope.loadProfile(id)
		}

		$scope.loadPs();

		
	}

	function JanjiCtrl($scope, $http){	
		$scope.janji = 'Janji Joni';
	}

	function VideoCtrl($scope, $http){
		//load video debat capres
		
		$scope.loadVideos = function(){
			var urlVideo 	= 	"http://api.pemiluapi.org/calonpresiden/api/videos",				
				id_calon 	= 	"&id_calon=jw%2Cps%2Cjk%2Chr",
				tags 		= 	"&debat%2Ccapres%2Ccawapres",				
				req = {
					method: 'GET',
					url: urlVideo + '?apiKey=' + apiKey + id_calon + tags,
		        	contentType: "application/json; charset=utf-8",
				};
		
			$http(req)
	  			.success(function(response) {
	  				$scope.videos = response.data.results.videos;			  				
	  			})
	  			.error(function(){
	  				console.info('Error loading Videos.');
	  			});		

		}

		//call video
		$scope.loadVideos();
	}

	

})()
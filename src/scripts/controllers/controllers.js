myApp.controller('albumsListCtrl', function($scope, $location, $http, dataServices) {
	$scope.playingSongs = {song:'no music is playing'};
	var songsDisplay = dataServices.getAllItems().then(function sucessCallback (response){
		$scope.songs = response.data;
	});
    
	//var data = {name: $scope.name}
    $scope.show = function (id) {
    	$location.url('/album/' + id);
    };

    $scope.play = function(songname){
    	$scope.playingSongs = {song: songname};
    	//return $scope.playingSongs;
    };

});

myApp.controller('albumCtrl', function(){});
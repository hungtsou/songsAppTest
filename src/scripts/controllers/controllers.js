myApp.controller('ContactsCtrl', function($scope, $location, $http, dataServices) {
	var songsDisplay = dataServices.getAllItems().then(function sucessCallback (response){
		$scope.songs = response.data;
	});
    
	//var data = {name: $scope.name}
	$scope.save = function (newContact){
			$http.post('http://localhost:3000/contacts', {name:newContact.name, email:newContact.email, phone:newContact.phone}).then(function sucessCallback (response) {
                $scope.newContact = {};
				$scope.contacts = response.data;
				//window.location.reload()
			});
	};
	$scope.moreInfo = function (id) {
			$location.url('/contact/' + id);
	};

	$scope.delete = function (id) {
        $http.delete('http://localhost:3000/contacts/'+ id).then(function sucessCallback (response) {
				$scope.contacts = response.data;
			});
    };

    $scope.show = function (id) {
    	$location.url('/' + id);
    };

});
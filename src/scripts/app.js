var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			controller:'albumsListCtrl',
			templateUrl:'views/albums.html'
		})
		.when('/album/:id', {
                controller: 'albumCtrl',
                templateUrl: 'views/album.html'
         });
		$locationProvider.html5Mode(true);
});

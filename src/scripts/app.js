var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			controller:'ContactsCtrl',
			templateUrl:'views/albums.html'
		});
		$locationProvider.html5Mode(true);
});

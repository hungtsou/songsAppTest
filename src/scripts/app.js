var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/contacts', {
			controller:'ContactsCtrl',
			templateUrl:'views/contacts.html'
		});
		$locationProvider.html5Mode(true);
});

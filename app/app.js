'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'app/home/home.html',
		controller: 'homeController'
	})
	.when('/services',{template:'This is services   <a class="btn btn-lg btn-primary" role="button" href="#home"> Go back to Home</a>'})
	.when('/contact',{template:'This is contact   <a class="btn btn-lg btn-primary" role="button" href="#home"> Go back to Home</a>'})
	.otherwise('/home')
}]);
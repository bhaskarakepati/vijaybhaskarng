'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'app/home/home.html',
		controller: 'homeController'
	})
	.when('/services',{template:'THis is services'})
	.when('/contact',{template:'This is template'})
	.otherwise('/home')
}]);
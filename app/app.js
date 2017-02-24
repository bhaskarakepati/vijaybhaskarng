'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'app/home/home.html',
		controller: 'homeController'
	})
	.when('/services',{templateUrl:'app/services/Services.html'})
	.when('/contact',{template:'This is contact   <a class="btn btn-lg btn-primary" role="button" href="#home"> Go back to Home</a>'})
	.when('/java',{
			templateUrl:'app/java/javaHome.html',
			controller: 'javaController'
		})
	.when('/java8',{template:'This is java8   <a class="btn btn-lg btn-primary" role="button" href="#home"> Go back to Home</a>'})
	.when('/assertj',{
		templateUrl: 'app/assertj/assertjHome.html',
		controller: 'assertjController'
	})
	.when('/bower',{
		templateUrl: 'app/bower/bowerHome.html',
		controller: 'bowerController'
	})
	.when('/books',{
		templateUrl: 'app/books/booksHome.html',
		controller: 'booksController'
	})
	.otherwise('/home')
}]);
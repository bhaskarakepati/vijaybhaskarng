'use strict';

myApp.controller('homeController',['$log','$scope',function($log,$scope){

	$log.log("welome to homeController");
	
	$scope.languagesList = [{name:'AngularJs related questions',cssValue:'angularjs'},
	 						{name:'JavaScript related questions',cssValue:'javascript'}];

}])
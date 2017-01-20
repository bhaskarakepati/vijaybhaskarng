'use strict';

myApp.controller('homeController',['$log','$scope',function($log,$scope){

	$log.log("welome to homeController");
	
	$scope.languagesList = [{name:'AngularJs related questions',cssValue:'angularjs'},
	 						{name:'JavaScript related questions',cssValue:'javascript'},
	 						{name:'Java related questions',cssValue:'java'},
	 						{name:'Bootstrap related questions',cssValue:'bootstrap'},
	 						{name:'Grunt related questions',cssValue:'grunt'},
	 						{name:'Bower related questions',cssValue:'bower'},
	 						{name:'AssertJ related questions',cssValue:'assertj'}];

}])
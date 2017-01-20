'use strict';

myApp.controller('assertjController',['$log','$scope',function($log,$scope){

	$scope.assertJQuestionsList = [{id:'0',name:'compareLists',display:'How to compare two lists using assertJ'},
								   {id:'1',name:'compareListsSize',display:'How to compare two lists size using assertJ'},
								   {id:'2',name:'assertJHome',display:'assertJHome'}];
	$scope.selected = 0;

	$scope.changeView = function(viewName){
		for(var i in $scope.assertJQuestionsList){
			var question = $scope.assertJQuestionsList[i];
			if(question.name === viewName){
				$scope.selected = question.id;
			}
		}
	}

}]);
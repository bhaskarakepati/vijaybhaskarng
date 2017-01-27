'use strict';

myApp.controller('bowerController',['$log','$scope',function($log,$scope){

	$scope.bowerQuestionsList = [{id:'0',name:'introduction',display:'Introduction to Bower'},
								 {id:'1',name:'install',display:'How to install and use Bower'},
								 {id:'2',name:'configure',display:'Configure Bower for new project'}];
	$scope.selected = {value:0};
	$scope.selected.value = 0;

	$scope.changeView = function(viewName){
		for(var i in $scope.bowerQuestionsList){
			var question = $scope.bowerQuestionsList[i];
			if(question.name === viewName){
				$scope.selected.value = question.id;
			}
		}
	}

}]);
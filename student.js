var phonecatApp = angular.module('studentApp', []);

var StudentCtrl = function ($scope, $http) {
	$http.get('students.json').success(function(data) {
    	$scope.students = data;
  	}); 
	
	$scope.predicate = '';
	$scope.anketStudent;
	$scope.showTable = true;
	
	$scope.checkVisible = function() {
		return showTable;
	}
	
	$scope.openAnket = function(anket) {
		showTable = false;
		anketStudent = anket;
		$scope.$apply();
	};
	
	$scope.getAnketStudent = function() {
		return anketStudent;
	}
	
	$scope.recordWordForms = {
			one: '{} запись',
			few: '{} записи',
			many: '{} записей',
			other: '{} записей'
 	};			
}
StudentCtrl.$inject = ['$scope', '$http'];

var StudentApp = angular.module('studentApp', []);

var StudentCtrl = function ($scope, $http) {
	$http.get('students.json').success(function(data) {
    	$scope.students = data;
  	}); 
	
	$scope.predicate = '';

	$scope.showTable = true;
	$scope.anketStudent;
	$scope.checkVisible = function() {
		return showTable;
	}
	
	$scope.openAnket = function(anket) {
		$scope.showTable = false;
		$scope.anketStudent = anket;
	};
	
	$scope.backToTable = function() {
		$scope.showTable = true;
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
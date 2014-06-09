var phonecatApp = angular.module('studentApp', []);

var StudentCtrl = function ($scope, $http,  $locale) {
	$http.get('students.json').success(function(data) {
    	$scope.students = data;
  	}); 
	$scope.predicate = '';

	$scope.remaining = function() {
		return $index;
	};
	
	$scope.openAnket = function(anket) {
		alert(anket.fio.firstName);
	};
	
	$scope.recordWordForms = {
			0: '{} записей',
			one: '{} запись',
			few: '{} записи',
			many: '{} записи',
			other: '{} записей'
 	};

}
StudentCtrl.$inject = ['$scope', '$http', '$locale'];

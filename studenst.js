function StudentCtrl($scope, $http) {
	$http.get('students.json').success(function(data) {
    	$scope.students = data;
  	}); 
}

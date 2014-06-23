var app = angular.module('SSMS', ['ui.bootstrap', 'ngCookies']);

app.controller('MasterCtrl', function($scope, $cookies) {

	var mobileView = 992;

	// Get current window size
	$scope.getWidth = function() { return window.innerWidth; };

	if(angular.isDefined($cookies.toggle)) {

		$scope.toggle = $cookies.toggle;

	} else {

		$scope.$watch($scope.getWidth, function(newValue, oldValue) {


			if(newValue < mobileView) {

				$scope.toggle = false;

			}
			else {

				$scope.toggle = true;

			}

		});
	}

	$scope.toggleSidebar = function() {

		$scope.toggle = ! $scope.toggle;

		$cookies.toggle = $scope.toggle;


	};

     window.onresize = function() { $scope.$apply(); };
  

});
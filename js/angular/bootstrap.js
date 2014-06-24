var app = angular.module('SSMS', ['ui.bootstrap', 'ngCookies']);

app.controller('MasterCtrl', function($scope, $rootScope, $cookieStore) {
 
        var mobileView = 992;
 
        // Get current window size
        $scope.getWidth = function() { return window.innerWidth; };
 
        if(angular.isDefined($cookieStore.get('toggle'))) {
 
                $rootScope.toggle = $cookieStore.get('toggle');
 
 
        } else {
 
                $scope.$watch($scope.getWidth, function(newValue, oldValue) {
 
 
                        if(newValue < mobileView) {
 
                                $rootScope.toggle = false;
 
 
                        }
                        else {
 
                                $rootScope.toggle = true;
 
 
                        }
 
                });
        }
 
        $scope.toggleSidebar = function() {
 
                $rootScope.toggle = ! $scope.toggle;
 
                $cookieStore.put('toggle', $rootScope.toggle);
 
 
        };
 
     window.onresize = function() { $scope.$apply(); };
 
 
});
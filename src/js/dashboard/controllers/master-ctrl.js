'use strict';

/**
 * Master Controller
 */
angular.module('Dashboard')
  .controller('MasterCtrl', ['$scope', '$cookieStore', function($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     *
     */
    var mobileView = 992;

    $scope.getWidth = function() {
      return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      if(newValue >= mobileView) {
        $scope.toggle = $cookieStore.get('toggle') ? true : false;
      } else {
        $scope.toggle = false;
      }
    });

    $scope.toggleSidebar = function() {
      $scope.toggle = !$scope.toggle;
      $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
      $scope.$apply();
    };
  }]);

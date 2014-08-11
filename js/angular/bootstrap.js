var app = angular.module('Dashboard', ['ui.bootstrap', 'ngCookies']);

/**
 * Loading Directive
 * @see http://tobiasahlin.com/spinkit/
 */
app.directive('loading', function () {
    return {
        restrict: 'AE',
        replace: 'false',
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    }
});

/**
 * Sidebar Toggle & Cookie Control
 */
app.controller('MasterCtrl', function($scope, $cookieStore) {
    $scope.expandableSideBar = true;

    if(angular.isDefined($cookieStore.get('expandableSideBar'))) {
        $scope.expandableSideBar = $cookieStore.get('expandableSideBar');
    }

    $scope.toggleExpandableSideBar = function() {
        $scope.expandableSideBar = ! $scope.expandableSideBar;
        $cookieStore.put('expandableSideBar', $scope.expandableSideBar);
    };
});
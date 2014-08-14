'use strict';

/**
 * Route configuration for the Dashboard module.
 */
angular.module('Dashboard').config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
        .state('index', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'dashboard.html'
                }
            },
            data: { displayName: 'Dashboard' }
        })
        .state('index.tables', {
            url: 'tables/', 
            views: {
                'content@': {
                    templateUrl: 'tables.html'
                }
            },
            data: { displayName: 'Tables' }
        });
}]);

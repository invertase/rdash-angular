(function () {
    /**
     * Loading Directive
     * @see http://tobiasahlin.com/spinkit/
     */
    angular.module('Dashboard').directive('loading', function () {
        return {
            restrict: 'AE',
            replace: 'false',
            template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
        }
    });
    
})();

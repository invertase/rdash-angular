(function () {  
    angular.module('Dashboard', ['ui.bootstrap', 'ngCookies']);
})();
(function (){
    /**
     * Master Controller
     */
    angular.module('Dashboard')
        .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

    function MasterCtrl($scope, $cookieStore) {
        /**
         * Sidebar Toggle & Cookie Control
         *
         */
        var mobileView = 992;

        $scope.getWidth = function() { return window.innerWidth; };

        $scope.$watch($scope.getWidth, function(newValue, oldValue)
        {
            if(newValue >= mobileView)
            {
                if(angular.isDefined($cookieStore.get('toggle')))
                {
                    if($cookieStore.get('toggle') == false)
                    {
                        $scope.toggle = false;
                    }            
                    else
                    {
                        $scope.toggle = true;
                    }
                }
                else 
                {
                    $scope.toggle = true;
                }
            }
            else
            {
                $scope.toggle = false;
            }

        });

        $scope.toggleSidebar = function() 
        {
            $scope.toggle = ! $scope.toggle;

            $cookieStore.put('toggle', $scope.toggle);
        };

        window.onresize = function() { $scope.$apply(); };
    }
})();
(function () {
	/**
	 * Alerts Controller
	 */
	angular.module('Dashboard').controller('AlertsCtrl', ['$scope', AlertsCtrl]);

	function AlertsCtrl($scope) {
	    $scope.alerts = [
	        { type: 'success', msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!' },
	        { type: 'danger', msg: 'Found a bug? Create an issue with as many details as you can.' }
	    ];

	    $scope.addAlert = function() {
	        $scope.alerts.push({msg: 'Another alert!'});
	    };

	    $scope.closeAlert = function(index) {
	        $scope.alerts.splice(index, 1);
	    };
	}
	
})();
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

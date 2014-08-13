angular
	.module('Dashboard')
	.directive('rdWidgetTitle', rdWidgetTitle);

function rdWidgetTitle () {
	var directive = {
        requires: '^rdWidget',
        scope: {
            title: '@',
            icon: '@'
        },
		transclude: true,
        template: '<div class="widget-title"> <i class="fa" ng-class="icon"></i> {{title}} <div class="pull-right" ng-transclude></div></div>',
        restrict: 'E'
    };
    return directive;
};
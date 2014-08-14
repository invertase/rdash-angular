angular
	.module('Dashboard')
	.directive('rdWidgetBody', rdWidgetBody);

function rdWidgetBody () {
	var directive = {
        requires: '^rdWidget',
        scope: {
            loading: '@?'
        },
		transclude: true,
        template: '<div class="widget-body"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: 'E'
    };
    return directive;
};
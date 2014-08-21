'use strict';

angular
  .module('Dashboard')
  .directive('rdWidget', function() {
    return {
      transclude: true,
      template: '<div class="widget" ng-transclude></div>',
      restrict: 'EA'
    };
  });

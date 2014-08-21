'use strict';

/**
* Loading Directive
* @see http://tobiasahlin.com/spinkit/
*/
angular.module('Dashboard')
  .directive('rdLoading', function() {
    return {
      restrict: 'AE',
      template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
  });

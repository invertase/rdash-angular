/**
 * Alerts Controller
 */

angular
    .module('RDash')
    .controller('AlertsCtrl', ['$translate', '$scope', '$rootScope', AlertsCtrl]);

function AlertsCtrl($translate, $scope, $rootScope) {
    $rootScope.$on('$translateChangeSuccess', function () {
        $scope.alerts = [{
            type: 'success',
            msg: $translate.instant('ALERT_MSG_1') // Doesnt work
        }, {
            type: 'danger',
            msg: $translate.instant('ALERT_MSG_2') // Doesnt work
        }];
    });

    $translate(['ALERT_MSG_1', 'ALERT_MSG_2']).then(function (line) {
        $scope.alerts = [{
            type: 'success',
            msg: line['ALERT_MSG_1'] // Doesnt work
        }, {
            type: 'danger',
            msg: line['ALERT_MSG_2'] // Doesnt work
        }];
    });

    $scope.addAlert = function () {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
}
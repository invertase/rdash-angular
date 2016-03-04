angular.module('RDash').controller('TranslateCtrl', ['$translate', '$scope', function ($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}]);

angular.module('RDash').config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
            DASHBOARD: 'Dashboard',
            BUTTON_TEXT_EN: 'English',
            BUTTON_TEXT_HU: 'Hungarian',
            NAVIGATION: 'NAVIGATION',
            TABLES: 'Tables',
            GITHUB: 'Github',
            ABOUT: 'About',
            SUPPORT: 'Support',
            HOME: 'Home',
            ALERT_MSG_1: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!',
            ALERT_MSG_2: 'Found a bug? Create an issue with as many details as you can.'
        })
        .translations('hu', {
            DASHBOARD: 'Admin panel',
            BUTTON_TEXT_EN: 'Angol',
            BUTTON_TEXT_HU: 'Magyar',
            NAVIGATION: 'NAVIGÁCIÓ',
            TABLES: 'Táblák',
            GITHUB: 'Github',
            ABOUT: 'About',
            SUPPORT: 'Support',
            HOME: 'Főoldal',
            ALERT_MSG_1: 'Köszönöm a látogatást. Ha szeretnéd fejlesztést kérni, használd nyugodtan a pull request -et a githubon!',
            ALERT_MSG_2: 'Találtál egy bugot? Jelezd nálunk a githubon egy részletes leírással.'
        });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
}]);
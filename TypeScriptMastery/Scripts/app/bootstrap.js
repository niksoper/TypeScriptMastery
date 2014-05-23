var Mastery;
(function (Mastery) {
    'use strict';

    require.config({
        paths: {
            // set paths to requirejs modules so they can be loaded by requirejs
            'angular': '../angular',
            'angular-route': '../angular-route',
            'jquery': '../jquery-2.1.1'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-route': ['angular'],
            'controllers/MembersCtrl': {
                deps: ['app']
            }
        }
    });

    // define a requirejs module called 'bootstrap' (from the name of this file)
    require(['angular', 'jquery', 'app', 'controllers/MembersCtrl', 'angular-route'], function (angular, $) {
        // this bootstraps the angular 'app' module
        $(function () {
            angular.bootstrap(document, ['app']);
        });
    });
})(Mastery || (Mastery = {}));
//# sourceMappingURL=bootstrap.js.map

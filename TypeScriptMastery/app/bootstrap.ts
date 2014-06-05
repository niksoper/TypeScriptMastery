module Mastery {
    'use strict';

    require.config({

        paths: {
            // set paths to requirejs modules so they can be loaded by requirejs
            'angular': '../Scripts/angular',
            'angular-route': '../Scripts/angular-route',
            'jquery': '../Scripts/jquery-2.1.1'
        },

        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-route': ['angular']
        }
    });

    // run a function once the dependencies have been loaded by requirejs
    require(
        ['angular', 'jquery', 'angular-route',
         'routes'],
        function (angular: ng.IAngularStatic, $: JQueryStatic) {

            /* The above routes dependency is the routes.ts file which itself has a dependency on the 
             * app.ts file. It is the app.ts file that creates the 'app' angular module that is 
             * bootstrapped below. */
            $(function () {
                angular.bootstrap(document, ['app']);
            });
        }
    );
}
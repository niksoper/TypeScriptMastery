import angular = require('angular');

'use strict;'

module app {

    // create and register custom angular modules
    var modules = ['app.controllers'];
    modules.forEach((m) => angular.module(m, []));

    // add any externally registered modules to the array
    modules.push('ngRoute');

    // create and configure the main app module
    angular
        .module('app', modules)
        .config(['$routeProvider',
            function ($routeProvider: ng.route.IRouteProvider) {

                // configure the routing for the module called 'app'
                $routeProvider
                    .when('/', {
                        templateUrl: 'Scripts/app/views/listmembers.html',
                        controller: 'MembersCtrl'
                    })
                    .when('/other', {
                        templateUrl: 'Scripts/app/views/listothers.html',
                        controller: 'OtherCtrl'
                    })
                    .otherwise({ redirectTo: '/' });
            }]);
}
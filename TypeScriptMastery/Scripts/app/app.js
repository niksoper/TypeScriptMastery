define(["require", "exports", 'angular'], function(require, exports, angular) {
    'use strict;';

    var app;
    (function (app) {
        // create and register custom angular modules
        var modules = ['app.controllers'];
        modules.forEach(function (m) {
            return angular.module(m, []);
        });

        // add any externally registered modules to the array
        modules.push('ngRoute');

        // create and configure the main app module
        angular.module('app', modules).config([
            '$routeProvider',
            function ($routeProvider) {
                // configure the routing for the module called 'app'
                $routeProvider.when('/', {
                    templateUrl: 'Scripts/app/views/listmembers.html',
                    controller: 'MembersCtrl'
                }).when('/other', {
                    templateUrl: 'Scripts/app/views/listothers.html',
                    controller: 'OtherCtrl'
                }).otherwise({ redirectTo: '/' });
            }]);
    })(app || (app = {}));
});
//# sourceMappingURL=app.js.map

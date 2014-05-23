define(["require", "exports", 'angular'], function(require, exports, angular) {
    'use strict;';

    // create and register custom angular modules
    var modules = ['app.controllers'];
    modules.forEach(function (m) {
        return angular.module(m, []);
    });

    // add any externally registered modules to the array
    modules.push('ngRoute');

    // create and configure the main app module
    var app = angular.module('app', modules);

    
    return app;
});
//# sourceMappingURL=app.js.map

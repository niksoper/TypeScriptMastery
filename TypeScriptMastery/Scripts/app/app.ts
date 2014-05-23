import angular = require('angular');
import angularRoute = require('angular-route');

'use strict;'

// create and register custom angular modules
var modules = ['app.controllers'];
modules.forEach((m) => angular.module(m, []));

// add any externally registered modules to the array
modules.push('ngRoute');

// create and configure the main app module
var app = angular.module('app', modules);

// this line allows access to the 'app' module using TypeScript's 'import x = require('blah');' syntax
export = app;
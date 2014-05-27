import angular = require('angular');
import angularRoute = require('angular-route');

'use strict;'

// create and configure the main app module with a dependency on ngRoute
var app = angular.module('app', ['ngRoute']);

// this line allows access to the 'app' module using TypeScript's 'import x = require('blah');' syntax
export = app;
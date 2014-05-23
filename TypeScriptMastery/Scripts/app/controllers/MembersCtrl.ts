import angular = require('angular');

export interface IMembersScope extends ng.IScope {
    members: string[];
}

export class Controller {

    static $inject = ['$scope'];

    constructor(private $scope: IMembersScope) {
        $scope.members = ['MembersCtrl', 'Chris'];
    }
}

// register the MembersCtrl class as a controller on the app.controllers angular module
angular
    .module('app.controllers')
    .controller(Controller);
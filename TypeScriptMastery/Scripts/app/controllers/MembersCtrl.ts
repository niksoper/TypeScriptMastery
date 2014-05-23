import angular = require('angular');

module app.controllers {

    interface IMembersScope extends ng.IScope {
        members: string[];
    }

    export class MembersCtrl {

        static $inject = ['$scope'];

        constructor(private $scope: IMembersScope) {
            $scope.members = ['MembersCtrl', 'Chris'];
        }
    }

    // register an angular module named 'homepage.controllers' and add the membersCtrl to the module
    angular
        .module('app.controllers')
        .controller('MembersCtrl', MembersCtrl);

} 
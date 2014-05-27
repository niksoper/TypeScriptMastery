export interface IMembersScope extends ng.IScope {
    members: string[];
}

export class Controller implements app.controllers.IController {

    static $inject = ['$scope'];

    constructor(private $scope: IMembersScope) {
        $scope.members = ['MembersCtrl', 'Chris'];
    }
}
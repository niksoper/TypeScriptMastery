import register = require('register');

export interface IOtherScope extends ng.IScope {
    names: string[];
}

export class Controller implements app.controllers.IController {

    static $inject = ['$scope'];

    constructor(private $scope: IOtherScope) {
        $scope.names = ['OthersCtrl', 'Some', 'Others'];
    }
}

register.controller(Controller);
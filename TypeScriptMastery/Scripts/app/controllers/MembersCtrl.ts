import scope = require('controllers/IControllerScope');

export class Controller {

    members = ['Ringo', 'Paul'];

    static $inject = ['$scope'];
    constructor(private $scope: scope.IControllerScope<Controller>) {
        $scope.vm = this;
    }
}